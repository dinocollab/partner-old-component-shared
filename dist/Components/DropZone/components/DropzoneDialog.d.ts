export default DropzoneDialog;
/**
 * This component provides an uncontrolled version of the DropzoneDialogBase component.
 *
 * It supports all the Props and Methods from `DropzoneDialogBase` but keeps the files state internally.
 *
 * **Note** The `onSave` handler also returns `File[]` with all the accepted files.
 */
declare class DropzoneDialog extends React.PureComponent<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    state: {
        fileObjects: never[];
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    notifyFileChange: () => void;
    loadInitialFiles: () => Promise<void>;
    addFiles: (newFileObjects: any) => Promise<void>;
    deleteFile: (removedFileObj: any, removedFileObjIdx: any) => void;
    handleClose: (evt: any) => void;
    handleSave: (evt: any) => void;
    render(): JSX.Element;
}
declare namespace DropzoneDialog {
    namespace defaultProps {
        const clearOnUnmount: boolean;
        const filesLimit: number;
        const initialFiles: never[];
    }
    const propTypes: any;
}
import * as React from "react";
