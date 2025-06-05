import { SxProps, Theme } from '@mui/material';
import { Component } from 'react';
import './index.css';
import { CSSProperties } from '@mui/styles';
interface EditAvatarProps {
    sx?: SxProps<Theme>;
    onSave?: (image: string) => void;
    extra?: any;
}
interface EditAvatarState {
    preview?: string;
    src?: string;
    labelStyle: CSSProperties;
}
export default class EditAvatar extends Component<EditAvatarProps, EditAvatarState> {
    constructor(props: EditAvatarProps);
    onClose(): void;
    onCrop(preview: any): void;
    renderEditAvatar: () => JSX.Element;
    onEditClick: () => void;
    onChange: () => void;
    refInput: HTMLInputElement | null;
    onSave: () => void;
    render(): JSX.Element;
}
export {};
