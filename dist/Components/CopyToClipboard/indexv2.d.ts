import { TooltipProps } from '@mui/material';
import * as React from 'react';
interface ChildProps {
    copy: (content: any) => void;
}
interface Props {
    TooltipProps?: Partial<TooltipProps>;
    children: (props: ChildProps) => React.ReactElement<any>;
}
declare enum EText {
    Copy = "Copy",
    Copied = "Copied to clipboard!"
}
interface IState {
    text: EText;
}
/**
 * Render prop component that wraps element in a Tooltip that shows "Copied to clipboard!" when the
 * copy function is invoked
 */
export default class CopyToClipboard extends React.Component<Props, IState> {
    timer: any;
    leaveDelay: number;
    constructor(props: Props);
    componentWillUnmount(): void;
    render(): JSX.Element;
    onCopy: (content: any) => void;
    handleOnTooltipClose: () => void;
}
export {};
