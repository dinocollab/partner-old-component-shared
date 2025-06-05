import { Component } from 'react';
export type IPanelActionProps = {
    onCreate: () => void;
    ButtonText: string;
};
export default class PanelAction extends Component<IPanelActionProps> {
    static defaultProps: {
        ButtonText: string;
    };
    render(): JSX.Element;
}
