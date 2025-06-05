/// <reference types="react" />
declare class TableFormatterBase {
    _parseArray: (args: string) => any[];
    date: (params?: any) => string;
    tooltip: (args: string) => JSX.Element;
    arrayChip: (args: string, name: string) => JSX.Element;
    chips: (args: string[], name: string) => JSX.Element;
}
export declare const TableFormatter: TableFormatterBase;
export default TableFormatter;
