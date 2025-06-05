import { Component, FC } from 'react';
import { ISelectModel, IUser, IContactInfo } from '../Models';
import { RoleKeyExternalSite, RoleKeyInternalSite } from '../Helper/RoleKey';
import * as SubCommon from '../SubComponent';
import './index.css';
interface IAvatarCardProps {
    data?: IUser;
    extract?: any;
}
export declare const AvatarCard: FC<IAvatarCardProps>;
interface UserFormBase extends SubCommon.FormBase<IUser> {
    isAdmin?: Boolean;
}
interface FormPersonalInfoProps extends UserFormBase {
    Actions?: JSX.Element;
    IsEdit?: boolean;
}
export declare const FormPersonalInfo: FC<FormPersonalInfoProps>;
interface FormBusinessInfoProps extends UserFormBase {
    Actions?: JSX.Element;
}
export declare const FormBusinessInfo: FC<FormBusinessInfoProps>;
interface ITagData {
    Title: string;
}
interface FormTagsInfoProps extends UserFormBase {
    Actions?: JSX.Element;
    tags?: ITagData[];
}
export declare const FormTagsInfo: FC<FormTagsInfoProps>;
interface FormPaymentInfoProps extends UserFormBase {
    Actions?: JSX.Element;
}
export declare const FormPaymentInfo: FC<FormPaymentInfoProps>;
interface FormChangePasswordProps extends UserFormBase {
    Actions?: JSX.Element;
    IsPassRequired?: boolean;
}
export declare const FormChangePassword: FC<FormChangePasswordProps>;
interface SocialInfoProps {
    data?: IUser;
    EditService?: (data: Partial<IContactInfo>, signal: AbortSignal) => Promise<IContactInfo>;
    AllowEdit?: boolean;
}
export declare const SocialInfo: FC<SocialInfoProps>;
interface IAccountPermissionProps extends UserFormBase {
    Actions?: JSX.Element;
}
export declare class AccountPermission extends Component<IAccountPermissionProps> {
    get MapCheck(): Set<string>;
    render(): JSX.Element;
    renderContent: (roles: RoleKeyInternalSite[] | RoleKeyExternalSite[]) => JSX.Element[];
}
interface IUserCreatorProps extends UserFormBase {
    Actions?: JSX.Element;
    fetchData: (value?: string, signal?: AbortSignal) => Promise<ISelectModel[]>;
}
export declare const UserCreator: FC<IUserCreatorProps>;
export {};
