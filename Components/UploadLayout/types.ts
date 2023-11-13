export type ProcessitemStatus = 'Pending' | 'Completed' | 'Error' | 'Processing'
export interface IProcessItem {
    Id: number,
    File: File
    Name: string
    Status: ProcessitemStatus
    Value?: number
    Signal?: AbortController
    AlbumId: string
}