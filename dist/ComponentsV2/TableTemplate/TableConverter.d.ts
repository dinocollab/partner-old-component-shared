import { Dictionary } from '@reduxjs/toolkit';
import { IConverterConfig, IFetchModel } from './type';
interface IResultFilterGraphql {
    take?: number;
    skip?: number;
    filter?: string;
    sort?: Dictionary<string>[];
}
type TPaginationToFilter = (params: {
    pageSize: number;
    page: number;
}) => {
    filter: {
        take?: number;
        skip?: number;
    };
    key: string;
};
declare class TableConverterBase {
    graphql: (model: Partial<IFetchModel>, config: IConverterConfig) => {
        filter: IResultFilterGraphql;
        key: string;
    };
    private graphqlKey;
    paginationToFilter: TPaginationToFilter;
    private mapOperator;
    private convertSortModel;
    private convertFilterModel;
    private convertFilterOperator;
    private converSearchFilterModel;
}
export declare const TableConverter: TableConverterBase;
export default TableConverter;
