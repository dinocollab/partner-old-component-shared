import { FC } from 'react';
import { SxProps, Theme } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { PartialError } from 'partner-local-lib/helper';
interface ErrorAllProps {
    MessageError?: PartialError<any>;
}
export declare const ErrorAll: FC<ErrorAllProps>;
interface BoxInfoProps {
    title: string;
    mb?: boolean;
    icon?: JSX.Element;
    MessageError?: PartialError<any> | any;
    TitleExtends?: JSX.Element;
    sx?: SxProps<Theme>;
    variant?: Variant;
    IsBorder?: boolean;
}
export declare const BoxInfo: FC<BoxInfoProps>;
export {};
