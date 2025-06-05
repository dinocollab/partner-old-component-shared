import { GridColDef } from '@mui/x-data-grid'
import { ConfigTable, GridColDefCustom, ModelBase } from 'partner-local-lib/GridTable'
export const CreateConfigTable = <TModel>(Config: ConfigTable<TModel>): ConfigTable<TModel> => {
  return Config
}
export const CreateConfigTableFromModel = <TModel>(data: TModel, SelectId: (data: TModel) => any): ConfigTable<TModel> => {
  const keys = Object.keys(data)
  const Options = keys.reduce<GridColDefCustom<TModel>>((config, key: keyof Extract<TModel, ModelBase>) => {
    config[key] = {
      flex: 1,
      minWidth: 100
    } as Omit<GridColDef, 'field'>
    return config
  }, {})
  return {
    SelectId,
    Options
  }
}
