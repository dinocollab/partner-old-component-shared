import { Component } from 'react';
import { DropzoneAreaProps } from '../DropZone';
interface UploadAreaProps extends DropzoneAreaProps {
    OnDroneChange: (files: File[]) => void;
}
export default class UploadArea extends Component<UploadAreaProps> {
    render(): JSX.Element;
}
export {};
