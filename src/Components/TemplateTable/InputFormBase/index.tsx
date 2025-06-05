import { FormValidator, PartialError } from 'partner-local-lib/helper'
import React, { Component, FormEvent, createContext } from 'react'
import { ConvertFormDataToJson, GetErrorFromResponse, SingleValidate } from '../../Helper'
interface InputFormBaseProps<TModel> {
  FormValidate: FormValidator<Partial<TModel>>
  onSubmit: (user: Partial<TModel>) => Promise<void>
}
interface InputFormBaseState<TModel> {
  MessageError: PartialError<TModel>
  modelState?: Partial<TModel>
  onBlur: (keyName: string) => void
}

export const InputFormContext = createContext<InputFormBaseState<any>>({
  onBlur: () => {},
  MessageError: {},
})
export default class InputFormBase<TModel = any> extends Component<InputFormBaseProps<TModel>, InputFormBaseState<TModel>> {
  constructor(props: InputFormBaseProps<TModel>) {
    super(props)
    this._formValidate = props.FormValidate
    this.state = {
      onBlur: this.onBlur,
      MessageError: {},
    }
    this._form = React.createRef<HTMLFormElement>()
  }
  _formValidate: FormValidator<Partial<TModel>>
  onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const { MessageError } = this.state
    const formData = new FormData(e.target as HTMLFormElement)
    const model = ConvertFormDataToJson<TModel>(formData)

    this.setState({ modelState: model })
    const messageErrors = this._formValidate.run(model)
    if (messageErrors) {
      this.setState({ MessageError: messageErrors as PartialError<TModel> })
      if (Object.keys(messageErrors).length > 0) return
    }

    await this.props.onSubmit(model).catch((error) => {
      const messageError = GetErrorFromResponse(error, model)
      this.setState({ MessageError: { ...MessageError, ...(messageError || {}) } })
    })
  }
  onBlur = (keyName: string) => {
    // console.log({ keyName })
    if (!this._form.current) return
    const { MessageError } = this.state
    const formData = new FormData(this._form.current)
    const model = ConvertFormDataToJson(formData)

    this.setState({ modelState: model })
    const error = SingleValidate<TModel, Partial<TModel>>(keyName, model, MessageError, this._formValidate) || {}
    this.setState({ MessageError: error as PartialError<TModel> })
  }
  cleanErrorMessage = () => {
    this.setState({ MessageError: {} })
  }
  cleanErrorMessageByKey = (params: string) => {
    let obj = { ...this.state.MessageError }
    if (params in obj) delete obj[params]
    this.setState({ MessageError: obj })
  }
  _form: React.RefObject<HTMLFormElement>
  render() {
    return (
      <form ref={this._form} onSubmit={this.onSubmit}>
        <InputFormContext.Provider value={this.state}>{this.props.children}</InputFormContext.Provider>
      </form>
    )
  }
}
