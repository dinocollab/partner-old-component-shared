/// <reference types="node" />
import EventEmitter from 'events';
export type EventUpload = 'Completed' | 'Error' | 'Start' | 'Next' | 'Finished';
interface IEventUpload<TModel = any> {
    Completed: TModel;
    Error: TModel;
    Start: TModel;
    Next: TModel;
    Finished: any;
}
export declare class UploadMonitor<TModel extends {
    Signal?: AbortController;
}> {
    constructor(numWorker: number, executor: (item: TModel, signal?: AbortSignal) => Promise<void>, getItem: () => TModel | undefined);
    events: EventEmitter;
    _NumWorker: number;
    _lock: Lock;
    _count: number;
    _getItem: () => TModel | undefined;
    _executor: (item: TModel, signal?: AbortSignal) => Promise<void>;
    addEventListen: <key extends keyof IEventUpload<TModel>>(event: key, callback: (item: IEventUpload<TModel>[key], error?: Error) => void) => EventEmitter<[never]>;
    addEventListenFinished: <key extends EventUpload>(event: key, callback: (error?: Error) => void) => EventEmitter<[never]>;
    _emit: <key extends EventUpload>(event: key, ...item: any[]) => void;
    getItem: () => Promise<TModel | undefined>;
    clearAll: () => void;
    _worker: () => Promise<void>;
    _poolTasks: Promise<any>[];
    _allTask?: {
        resolve: (value: unknown) => void;
        promise: Promise<any>;
    };
    Wait: () => Promise<any>;
    start: () => Promise<void>;
}
export declare class Lock {
    private _listQueue;
    private _lock;
    Sync: <TResult>(action: () => Promise<TResult>) => Promise<TResult>;
    _ProcessQueue: () => Promise<void>;
    Once: <Tmodel>(action: () => Promise<Tmodel>) => Promise<Tmodel>;
}
export {};
