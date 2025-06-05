import React, { Component, ComponentElement, ComponentType, FC, useCallback, useEffect, useRef, useState } from 'react'
import {
  Autocomplete,
  Box,
  Chip,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  LinearProgress,
  MenuItem,
  Paper,
  Popper,
  Select,
  SelectChangeEvent,
  SxProps,
  TextField,
  TextFieldProps,
  Theme,
  Typography
} from '@mui/material'
import { getErrorMessage } from '../Helper'
import * as SubLocal from 'partner-local-lib/SubComponents/entry'
import axios, { CancelToken, CancelTokenSource } from 'axios'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker, DesktopDatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Variant } from '@mui/material/styles/createTypography'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { CSSProperties } from '@mui/styled-engine'
import { ThemeContextValue } from 'react-bootstrap/esm/ThemeProvider'
import { KeyExtractor } from 'partner-local-lib/helper'
import { PartialError } from 'partner-local-lib/helper/ValidateModel'
export interface FormBase<TModel> {
  MessageError?: PartialError<TModel>
  onBlur?: (keyName: string) => void
  Model?: TModel
  IsForm?: boolean
  IdForm?: string
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}

interface ErrorAllProps {
  MessageError?: PartialError<any>
}
export const ErrorAll: FC<ErrorAllProps> = (props) => {
  return (
    <SubLocal.ErrorBox position={'Top'} {...getErrorMessage(props.MessageError, 'All')}>
      {props.children}
    </SubLocal.ErrorBox>
  )
}

interface BoxInfoProps {
  title: string
  mb?: boolean
  icon?: JSX.Element
  MessageError?: PartialError<any> | any
  TitleExtends?: JSX.Element
  sx?: SxProps<Theme>
  sxTitle?: SxProps<Theme>
  variant?: Variant
  IsBorder?: boolean
}
export const BoxInfo: FC<BoxInfoProps> = (props) => {
  return (
    <Box
      sx={{
        flex: 1,
        padding: '12px',
        marginBottom: props.mb === false ? '0' : '20px',
        border: 'none!important',
        ...(props.sx || {})
      }}
      className={props.IsBorder === false ? '' : 'card'}
    >
      <ErrorAll MessageError={props.MessageError}>
        <Box sx={{ display: 'flex', alignItems: 'center', ...(props.sxTitle || {}) }}>
          <Box sx={{ marginRight: '8px' }}>{props.icon}</Box>
          <Typography variant={props.variant || 'h5'} component='div'>
            {props.title}
          </Typography>
          {props.TitleExtends}
        </Box>
        {props.children}
      </ErrorAll>
    </Box>
  )
}

export const BoxGroup: FC<BoxInfoProps> = (props) => {
  return (
    <Box
      sx={{
        flex: 1,
        padding: '10px',
        marginBottom: props.mb === false ? '0' : '20px',
        ...(props.sx || {})
      }}
      className={props.IsBorder === true ? 'card' : ''}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', ...(props.sxTitle || {}) }}>
        <Box sx={{ margin: 0 }}>{props.icon}</Box>
        <Typography variant={props.variant || 'h6'} component='div'>
          {props.title}
        </Typography>
        {props.TitleExtends}
      </Box>
      {props.children}
    </Box>
  )
}

export const WrapFrom: FC<{ IsForm?: boolean; Id?: string; onSubmit?: React.FormEventHandler<HTMLFormElement> }> = (props) =>
  props.IsForm === false ? (
    <>{props.children}</>
  ) : (
    <form id={props.Id} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
export interface Select2Props<TModel> extends SubLocal.ErrorProps {
  fetchData: (value?: string, signal?: AbortSignal) => Promise<TModel[]>
  SelectValue: (model: TModel) => any
  GenerateLabel: (model: TModel) => any
  Onchange?: (data: TModel | null) => void
  onBlur?: () => void
  title?: string
  defaultValue: any
  onReady?: (option?: TModel) => void
  isOptionEqualToValue?: (option: TModel, value: TModel) => boolean
  searchInitial?: (model: TModel) => boolean
  selectedItem: TModel
  name?: string
  PopperStyle?: React.CSSProperties
  disabled?: boolean
  size?: 'small' | 'medium'
  fullWidth?: boolean
}
export type TypeSelect2<TModel> = React.ComponentType<Select2Props<TModel>>
export const CreateSelect2 = function <TModel>() {
  const Select2: React.FC<Select2Props<TModel>> = (props) => {
    const abortController = React.useRef<{ signalController: AbortController }>({ signalController: new AbortController() })
    const [isInitial, setIsInitial] = React.useState(true)
    const [data, setData] = React.useState<ReadonlyArray<any>>([])
    const [statusText, setStatusText] = React.useState('no items')
    const selectedItem = React.useRef<TModel>(props.selectedItem)
    const refInput = useRef<HTMLInputElement>(null)
    const timer = React.useRef({
      _timer: 0,
      _second: 500,
      // _isMount: true,
      // executed: function (action: any) {
      //     if (this._isMount) {
      //         action()
      //     }
      // },
      callback: async function (value: any) {
        try {
          if (abortController.current) {
            abortController.current.signalController = new AbortController()
          }
          const dataTmp = await props.fetchData(value, abortController.current?.signalController.signal)
          setData(dataTmp)
        } catch (error) {
          console.log(error)
        } finally {
          setStatusText('no items')
        }
      },
      start: function (text: string) {
        this._timer = window.setTimeout(this.callback, this._second, text)
      },
      clear: function () {
        abortController.current?.signalController.abort()
        clearTimeout(this._timer)
      }
    })
    const Onchange = React.useCallback<React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>>((event) => {
      setStatusText('Loading...')
      timer.current?.clear()
      timer.current?.start(event.target.value)
    }, [])
    const OnChangeValue = React.useCallback<(event: React.SyntheticEvent<Element, Event>, value: TModel | null) => void>(
      (event, option) => {
        if (refInput.current) {
          refInput.current.value = option ? props.SelectValue(option) : null
          if (!option) {
            timer.current?.clear()
            timer.current?.start('')
          }
        }
        props.Onchange && props.Onchange(option)
      },
      [props]
    )
    React.useEffect(() => {
      let mounted = true
      const fetchInitial = async () => {
        try {
          const data = await props.fetchData(props.defaultValue, abortController.current?.signalController.signal)
          if (!Array.isArray(data) || !mounted) return
          setData(data)

          const search = props.searchInitial ? props.searchInitial : (x: TModel) => props.SelectValue(x) === props.defaultValue

          const Tmp = data.find(search)
          if (Tmp) {
            Object.assign(selectedItem.current as any, Tmp)
          }

          props.onReady && props.onReady(Tmp)
        } catch (error) {
          console.log(error)
        } finally {
          if (!mounted) return
          setStatusText('no items')
          setIsInitial(false)
        }
      }
      if (isInitial) {
        fetchInitial()
      }
      return () => {
        mounted = false
      }
    }, [isInitial, props])
    return (
      <>
        <Autocomplete
          fullWidth={props.fullWidth}
          options={data}
          autoHighlight
          disabled={isInitial || props.disabled}
          getOptionLabel={props.GenerateLabel}
          isOptionEqualToValue={props.isOptionEqualToValue}
          defaultValue={selectedItem.current}
          onChange={OnChangeValue}
          noOptionsText={statusText}
          PopperComponent={(p) => <Popper {...p} style={{ ...(p.style || {}), ...(props.PopperStyle || {}) }} />}
          renderInput={(params) => (
            <TextField
              {...params}
              label={props.title || 'title'}
              onChange={Onchange}
              onBlur={props.onBlur}
              error={props.error}
              helperText={props.message}
              autoComplete='off'
              size={props.size}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'off' // disable autocomplete and autofill,
              }}
            />
          )}
        />
        <input ref={refInput} defaultValue={props.defaultValue} hidden name={props.name} />
      </>
    )
  }
  return Select2
}
export interface MultipleSelect<TModel> extends SubLocal.ErrorProps {
  fetchData: (value?: string, CancelToken?: AbortSignal) => Promise<TModel[]>
  SelectValue: (model: TModel) => any
  GenerateLabel: (model: TModel) => any
  Onchange?: (data: TModel[]) => void
  onBlur?: () => void
  title?: string
  defaultValue: any[]
  onReady?: (option?: TModel[]) => void
  isOptionEqualToValue?: (option: TModel, value: TModel) => boolean
  searchInitial?: (model: TModel) => boolean
  selectedItem: TModel[]
  name?: string
  PopperStyle?: React.CSSProperties
  limitTags?: number
}

export type TypeMultipleSelect<TModel> = React.ComponentType<MultipleSelect<TModel>>
export const CreateMultipleSelect = function <TModel>() {
  const Select2: React.FC<MultipleSelect<TModel>> = (props) => {
    const cancelToken = React.useRef<{ Token: AbortController }>({ Token: new AbortController() })
    const [isInitial, setIsInitial] = React.useState(true)
    const [data, setData] = React.useState<ReadonlyArray<any>>([])
    const [statusText, setStatusText] = React.useState('no items')
    const selectedItem = React.useRef<TModel[]>(props.selectedItem)
    const refInput = useRef<HTMLInputElement>(null)
    const timer = React.useRef({
      _timer: 0,
      _second: 500,
      // _isMount: true,
      // executed: function (action: any) {
      //     if (this._isMount) {
      //         action()
      //     }
      // },
      callback: async function (value: any) {
        try {
          if (cancelToken.current) {
            cancelToken.current.Token = new AbortController()
          }
          const dataTmp = await props.fetchData(value, cancelToken.current?.Token?.signal)
          setData(dataTmp)
        } catch (error) {
          console.log(error)
        } finally {
          setStatusText('no items')
        }
      },
      start: function (text: string) {
        this._timer = window.setTimeout(this.callback, this._second, text)
      },
      clear: function () {
        cancelToken.current?.Token.abort()
        clearTimeout(this._timer)
      }
    })
    const Onchange = React.useCallback<React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>>((event) => {
      setStatusText('Loading...')
      timer.current?.clear()
      timer.current?.start(event.target.value)
    }, [])
    const OnChangeValue = React.useCallback<(event: React.SyntheticEvent<Element, Event>, value: TModel[]) => void>(
      (event, option) => {
        if (refInput.current) {
          refInput.current.value = option?.length ? JSON.stringify(option.map(props.SelectValue)) : ''
          if (!option) {
            timer.current?.clear()
            timer.current?.start('')
          }
        }
        props.Onchange && props.Onchange(option)
      },
      [props]
    )
    React.useEffect(() => {
      let mounted = true
      const fetchInitial = async () => {
        try {
          const data = await props.fetchData('', cancelToken.current?.Token?.signal)
          if (!Array.isArray(data) || !mounted) return
          setData(data)

          const search = props.searchInitial
            ? props.searchInitial
            : (x: TModel) => props.defaultValue?.some((y) => y === props.SelectValue(x))

          const Tmp = data.filter(search)
          if (Tmp) {
            selectedItem.current.push(...Tmp)
            // Object.assign(selectedItem.current, Tmp)
          }

          props.onReady && props.onReady(Tmp)
        } catch (error) {
          console.log(error)
        } finally {
          if (!mounted) return
          setStatusText('no items')
          setIsInitial(false)
        }
      }
      if (isInitial) {
        fetchInitial()
      }
      return () => {
        mounted = false
      }
    }, [isInitial, props])
    return (
      <>
        <Autocomplete
          options={data}
          autoHighlight
          disabled={isInitial}
          multiple
          limitTags={props.limitTags}
          getOptionLabel={props.GenerateLabel}
          isOptionEqualToValue={props.isOptionEqualToValue}
          defaultValue={selectedItem.current}
          onChange={OnChangeValue}
          noOptionsText={statusText}
          PopperComponent={(p) => <Popper {...p} style={{ ...(p.style || {}), ...(props.PopperStyle || {}) }} />}
          renderInput={(params) => (
            <TextField
              {...params}
              label={props.title || 'title'}
              onChange={Onchange}
              onBlur={props.onBlur}
              error={props.error}
              helperText={props.message}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'off' // disable autocomplete and autofill,
              }}
            />
          )}
        />
        <input ref={refInput} defaultValue={JSON.stringify(props.defaultValue)} hidden name={props.name} />
      </>
    )
  }
  return Select2
}
export interface MultipleTags extends SubLocal.ErrorProps {
  Onchange?: (data: any[]) => void
  onBlur?: () => void
  title?: string
  defaultValue?: any[]
  data?: string[]
  name?: string
  PopperStyle?: React.CSSProperties
}

export type TypeMultipleTags = React.ComponentType<MultipleTags>
const colors = ['#880e4f', '#b388ff', '#800000', '#3f51b5', '#006064', '#5d4037', '#4a148c', '#ff5722']
// const colors = [
//     'linear-gradient(to right,#880e4f,#cb76a3)',
//     'linear-gradient(to right,#b388ff,#ab9dc3)',
//     'linear-gradient(to right,#800000,#b15e5e)',
//     'linear-gradient(to right,#3f51b5,#777fad)',
//     'linear-gradient(to right,#006064,#72d3d7)',
//     'linear-gradient(to right,#5d4037,#cd927f)',
//     'linear-gradient(to right,#4a148c,#ad92cf)',
//     'linear-gradient(to right,#ff5722,#ebae9b)',
// ]

const hashCode = (s: string) => {
  return s.split('').reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0)
    return a & a
  }, 0)
}
const getColor = (index: number) => {
  return colors[Math.abs(index) % colors.length]
}
interface ChipProps {
  data?: string[]
}
export const Chips: FC<ChipProps> = ({ data }) => {
  return (
    <Box
      sx={{
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'center',
        flex: 1
      }}
    >
      {data?.map((option: string, index: number) => (
        <Chip
          key={KeyExtractor(option, index)}
          size='small'
          sx={{
            background: getColor(hashCode(option)),
            color: 'white',
            // borderColor: colors[index % colors.length],
            // color: colors[index % colors.length],
            fontWeight: 'bold',
            fontSize: 10,
            height: '18px',
            marginRight: '2px',
            boxSizing: 'border-box'
          }}
          variant='filled'
          label={option}
        />
      )) ?? ''}
    </Box>
  )
}
export const CreateMultipleTags = function () {
  const Select2: React.FC<MultipleTags> = (props) => {
    const refInput = useRef<HTMLInputElement>(null)

    const OnChangeValue = React.useCallback<(event: React.SyntheticEvent<Element, Event>, value: any[]) => void>(
      (event, option) => {
        if (refInput.current) {
          refInput.current.value = option?.length ? JSON.stringify(option) : ''
        }
        props.Onchange && props.Onchange(option)
      },
      [props]
    )
    return (
      <>
        <Autocomplete
          options={props.data ?? []}
          multiple
          onChange={OnChangeValue}
          PopperComponent={(p) => <Popper {...p} style={{ ...(p.style || {}), ...(props.PopperStyle || {}) }} />}
          freeSolo
          defaultValue={props.defaultValue}
          renderTags={(value: readonly string[], getTagProps) =>
            value.map((option: string, index: number) => {
              const color = getColor(hashCode(option))
              return (
                <Chip
                  sx={{
                    borderColor: color,
                    color: color,
                    fontWeight: 'bold'
                  }}
                  variant='outlined'
                  label={option}
                  {...getTagProps({ index })}
                />
              )
            })
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label={props.title || 'title'}
              onBlur={props.onBlur}
              error={props.error}
              placeholder={'Enter tags'}
              helperText={props.message}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'off' // disable autocomplete and autofill,
              }}
            />
          )}
        />
        <input
          ref={refInput}
          defaultValue={props.defaultValue ? JSON.stringify(props.defaultValue) : ''}
          hidden
          name={props.name}
        />
      </>
    )
  }
  return Select2
}

interface DatePickersProps extends SubLocal.ErrorProps {
  name?: string
  Title?: string
  inputFormat?: string
  defaultValue?: Date
  Onchange?: (data: Date | null) => void
  onBlur?: () => void
  disable?: boolean
}
export const DatePickers: FC<DatePickersProps> = (props) => {
  const [value, setValue] = React.useState<Date | null>(props.defaultValue || new Date())

  const handleChange = useCallback(
    (newValue: Date | null) => {
      setValue(newValue)
      if (refInput.current) {
        refInput.current.value = newValue && !isNaN(newValue.getTime()) ? newValue.toISOString() : ''
      }
      props.Onchange && props.Onchange(newValue)
    },
    [props]
  )

  const refInput = useRef<HTMLInputElement>(null)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={props.Title || 'Title'}
        inputFormat={props.inputFormat || 'MM/dd/yyyy'}
        views={['day', 'month', 'year']}
        value={value}
        onChange={handleChange}
        disabled={props.disable}
        renderInput={(params) => (
          <TextField onBlur={props.onBlur} fullWidth {...params} error={props.error} helperText={props.message} />
        )}
      />
      <input ref={refInput} defaultValue={(props.defaultValue || new Date()).toISOString()} hidden name={props.name} />
    </LocalizationProvider>
  )
}

interface LazyViewProps {
  sx?: SxProps<Theme>
  IsLazy?: boolean
  showProgress?: boolean
}
export const LazyView: FC<LazyViewProps> = (props) => {
  return (
    <Box
      sx={{
        position: 'relative',
        ...(props.sx || {})
      }}
    >
      {props.children}
      {props.IsLazy ? (
        <Box
          sx={{
            flex: 1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            opacity: 0.8,
            background: 'rgb(0 0 0 / 0.3)'
          }}
        >
          {props.IsLazy && props.showProgress !== false ? <LinearProgress /> : ''}
        </Box>
      ) : (
        ''
      )}
    </Box>
  )
}

interface OverlayViewProps {
  open?: boolean
}
export const OverlayView: FC<OverlayViewProps> = (props) => {
  const [IsOpen, setIsOpen] = useState(props.open || false)
  const configShow = { top: 0, left: 0, right: 0, bottom: 0 }
  const getConfig = useCallback(() => (IsOpen ? configShow : { display: 'none' }), [IsOpen, configShow])
  useEffect(() => {
    setIsOpen(props.open || false)
  }, [props.open])
  return (
    <Box
      sx={{
        position: 'absolute',
        flex: 1,
        ...getConfig(),
        background: 'white'
      }}
    >
      {props.children}
    </Box>
  )
}
interface IInputSearchProps {
  onSearch?: (text: string, signal: AbortController) => void
  placeholder?: string
  onStart?: () => void
  onEnd?: () => void
  PaperSx?: SxProps<Theme>
}
export const InputSearch: FC<IInputSearchProps> = (props) => {
  const [TextSearch, setTextSearch] = useState('')
  const _onSearch = useCallback(
    (text: string, signal: AbortController) => {
      props.onSearch && props.onSearch(text, signal)
    },
    [props]
  )
  const timer = React.useRef({
    _timer: 0,
    _second: 500,
    _controller: new AbortController(),
    callback: function (value: string) {
      try {
        this._controller = new AbortController()
        _onSearch(value, this._controller)
      } catch (error) {
        console.log(error)
      } finally {
        props.onEnd && props.onEnd()
      }
    },
    start: function (text: string) {
      props.onStart && props.onStart()
      this._timer = window.setTimeout(this.callback, this._second, text)
    },
    clear: function () {
      this._controller.abort()
      clearTimeout(this._timer)
    }
  })
  useEffect(() => {
    const _timer = timer.current
    return () => {
      _timer.clear()
    }
  }, [])
  const _onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    setTextSearch(event.target.value)
    timer.current?.clear()
    timer.current?.start(event.target.value)
  }, [])
  const _onAction = useCallback(() => {
    timer.current?.clear()
    if (TextSearch) {
      setTextSearch('')
      timer.current.callback('')
    } else {
      timer.current.callback(TextSearch)
    }
  }, [TextSearch])
  return (
    <Box sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, ...(props.PaperSx || {}) }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={props.placeholder ?? 'Search...'}
        inputProps={{ 'aria-label': props.placeholder ?? 'Search...' }}
        value={TextSearch}
        onChange={_onChange}
      />
      <IconButton onClick={_onAction} type='submit' sx={{ p: '10px' }} aria-label='search'>
        {TextSearch ? <CloseIcon /> : <SearchIcon />}
      </IconButton>
    </Box>
  )
}
interface PageRouteProps {
  title?: string
  prefix?: string
}
export const PageRoute: FC<PageRouteProps> = (props) => {
  useEffect(() => {
    document.title = (props.prefix || '') + (props.title || '')
  }, [props.prefix, props.title])
  return <>{props.children}</>
}

interface OptionPage {
  title?: string
  prefix?: string
}
export const WrapPageRoute = (WrapComponent: ComponentType<any>, option: OptionPage = {}) => {
  return (props: any) => {
    const { title, ...other } = props
    return (
      <PageRoute title={option.title ?? title} prefix={option.prefix}>
        <WrapComponent {...other} />
      </PageRoute>
    )
  }
}

interface PageContentProps {
  PanelAction: JSX.Element
  Title: string
}
export const PageContent: FC<PageContentProps> = (props) => {
  const { PanelAction } = props
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Box sx={{ minHeight: 50, display: 'flex', justifyContent: 'flex-end', margin: '5px' }}>
        <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
          <Typography variant='h5'>{props.Title}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>{PanelAction}</Box>
      </Box>
      {props.children}
    </Box>
  )
}

export interface IOptionSelect {
  name: string
  value: any
}
interface SmallSelectProps {
  id: string
  title: string
  data: IOptionSelect[] | (() => Promise<IOptionSelect[]>)
  sx?: SxProps
  defaultValue?: any
  onChange?: (value: any) => void
  value?: any
  disabled?: boolean
}
export const SmallSelect: FC<SmallSelectProps> = (props) => {
  const [data, setData] = useState<IOptionSelect[] | undefined>(Array.isArray(props.data) ? props.data : undefined)
  const [value, setValue] = useState(props.value || props.defaultValue || (data && data[0].value) || '-1')
  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setValue(event.target.value)
      props.onChange && props.onChange(event.target.value)
    },
    [props]
  )
  const renderItems = () => {
    return data?.map((item, index) => {
      return (
        <MenuItem key={item.value} value={item.value}>
          {item.name}
        </MenuItem>
      )
    })
  }
  useEffect(() => {
    if (typeof props.data === 'function' && data === undefined) {
      props
        .data()
        .then((d) => {
          setValue(props.value || props.defaultValue || (d && d[0].value))
          setData(d)
        })
        .catch((er) => setData([]))
    }
  }, [data, props])
  return (
    <FormControl disabled={props.disabled} sx={{ minWidth: 120, ...(props.sx || {}) }} size='small'>
      <InputLabel id={props.id}>{props.title}</InputLabel>
      <Select
        labelId={props.id}
        id={props.id}
        value={props.value || value}
        label={props.title}
        defaultValue={props.defaultValue}
        onChange={handleChange}
        disabled={data === undefined || props.disabled}
      >
        {renderItems()}
      </Select>
    </FormControl>
  )
}

interface ICenterBoxProps {
  sx?: SxProps
}
export const CenterBox: FC<ICenterBoxProps> = (props) => {
  return (
    <Box sx={{ height: 0, margin: '0 auto' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '1200px',
          flexDirection: 'column'
        }}
      >
        <Box sx={props.sx}>{props.children}</Box>
      </Box>
    </Box>
  )
}
