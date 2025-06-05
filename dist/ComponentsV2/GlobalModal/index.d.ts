import React, { Component } from 'react';
import { SxProps, ModalProps } from '@mui/material';
export interface OptionModal {
    sx?: SxProps;
    modalProps?: ModalProps;
    ContenModal?: () => JSX.Element;
}
interface GlobalModalState {
    isOpen: boolean;
    sx?: SxProps;
    modalProps?: ModalProps;
    ContentModal?: React.JSXElementConstructor<any>;
}
interface GlobalModalProps {
}
export interface IGlobalModalContext {
    ShowModal: (option: OptionModal) => void;
    CloseModal: () => void;
}
export declare const GlobalModalContext: React.Context<IGlobalModalContext>;
export declare enum ContentPosition {
    Center = 0
}
export interface IMapGlobalModal {
    context: IGlobalModalContext;
}
export declare const MapGlobalModalContext: (ElementSub: React.ComponentType<IMapGlobalModal>) => JSX.Element;
type TGMProps = React.PropsWithChildren<GlobalModalProps>;
export declare class GlobalModal extends Component<TGMProps, GlobalModalState> implements IGlobalModalContext {
    constructor(props: any);
    ShowModal: (option: OptionModal) => void;
    clearContentModal: () => void;
    CloseModal: () => void;
    GenerateContent: () => JSX.Element;
    render(): JSX.Element;
}
export default GlobalModal;
