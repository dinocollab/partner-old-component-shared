export default DropzoneArea;
/**
 * This components creates an uncontrolled Material-UI Dropzone, with previews and snackbar notifications.
 *
 * It supports all props of `DropzoneAreaBase` but keeps the files state internally.
 *
 * **Note** To listen to file changes use `onChange` event handler and notice that `onDelete` returns a `File` instance instead of `FileObject`.
 */
declare class DropzoneArea extends React.PureComponent<any, any, any> {
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
    render(): JSX.Element;
}
declare namespace DropzoneArea {
    namespace defaultProps {
        const clearOnUnmount: boolean;
        const filesLimit: number;
        const initialFiles: never[];
    }
    const propTypes: any;
}
import * as React from "react";
