import { TooltipProps } from "@mui/material";
import * as React from "react";
interface ChildProps {
    copy: (content: any) => void;
}
interface Props {
    TooltipProps?: Partial<TooltipProps>;
    children: (props: ChildProps) => React.ReactElement<any>;
}
interface OwnState {
    showTooltip: boolean;
}
/**
 * Render prop component that wraps element in a Tooltip that shows "Copied to clipboard!" when the
 * copy function is invoked
 */
declare class CopyToClipboard extends React.Component<Props, OwnState> {
    state: OwnState;
    render(): JSX.Element;
    private onCopy;
    private handleOnTooltipClose;
}
export default CopyToClipboard;
