import React from 'react';

export function Case({ condition, children }: Props): JSX.Element {
    return <>{children}</>
}

interface Props {
    condition: string | number | boolean;
    children: JSX.Element[] | JSX.Element;
}