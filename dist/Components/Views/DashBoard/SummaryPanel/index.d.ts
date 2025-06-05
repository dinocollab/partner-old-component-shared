import { Component } from 'react';
import { IItemSummary } from '../../../Models';
interface SummaryPanelProps {
    GetSummary: (signal?: AbortSignal | undefined) => Promise<IItemSummary | null>;
}
interface SummaryPanelState {
    ItemSummary: IItemSummary | null;
}
export default class SummaryPanel extends Component<SummaryPanelProps, SummaryPanelState> {
    /**
     *
     */
    constructor(props: SummaryPanelProps);
    _isMounted: boolean;
    GenerateItems: () => JSX.Element[];
    componentWillUnmount(): void;
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
