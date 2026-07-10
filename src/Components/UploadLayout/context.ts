import { createContext } from 'react'
import { IProcessItem } from './types'

export interface IUploadLayoutState {
  open: boolean
  showComfirm: boolean
}

export interface IUploadLayoutContext {
  state: IUploadLayoutState
  getErrors: () => IProcessItem[]
  getComplete: () => IProcessItem[]
  onItemClose: (item: IProcessItem) => void
  onItemRetry: (item: IProcessItem) => void
  onRetryAll: () => void
  addItems: (items: Omit<IProcessItem, 'Value' | 'Signal'>[]) => void
  Show: () => void
  Close: () => void
  items: IProcessItem[]
  renderUploadContent: () => JSX.Element
}

export const UploadLayoutContext = createContext<IUploadLayoutContext>({} as any)
