import { BoxProps, SkeletonPropsVariantOverrides } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { FC } from 'react';
interface ItemWrapProps extends BoxProps {
    IsLoading: boolean;
    variant?: OverridableStringUnion<'text' | 'rectangular' | 'circular', SkeletonPropsVariantOverrides>;
}
export declare const SkeletonLazyWrap: FC<ItemWrapProps>;
export {};
