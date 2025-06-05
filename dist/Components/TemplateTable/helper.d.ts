import { ConfigTable } from 'partner-local-lib/GridTable';
export declare const CreateConfigTable: <TModel>(Config: ConfigTable<TModel>) => ConfigTable<TModel>;
export declare const CreateConfigTableFromModel: <TModel>(data: TModel, SelectId: (data: TModel) => any) => ConfigTable<TModel>;
