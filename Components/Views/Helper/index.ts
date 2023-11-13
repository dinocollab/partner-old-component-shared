import { IChannelResourceInfo } from "component-shared/Components/Models";

export const ExtractChannelResourceInfo = (data: string) => {
    try {
        return JSON.parse(data) as IChannelResourceInfo
    } catch {
        return null
    }
}