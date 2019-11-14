import React, { FC } from 'react';

export interface IPropsWithClassName {
    className?: string;
}

/// KinoFunctionComponent
export type KFC<P = {}> = FC<P & IPropsWithClassName>;
