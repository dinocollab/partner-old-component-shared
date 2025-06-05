export default DropzoneDialogBase;
/**
 * This component provides the DropzoneArea inside of a Material-UI Dialog.
 *
 * It supports all the Props and Methods from `DropzoneAreaBase`.
 */
declare class DropzoneDialogBase extends React.PureComponent<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
declare namespace DropzoneDialogBase {
    namespace defaultProps {
        const open: boolean;
        const dialogTitle: string;
        const dialogProps: {};
        const fullWidth: boolean;
        const maxWidth: string;
        const cancelButtonText: string;
        const submitButtonText: string;
        const showPreviews: boolean;
        const showPreviewsInDropzone: boolean;
        const showFileNamesInPreview: boolean;
    }
    const propTypes: any;
}
import * as React from "react";
