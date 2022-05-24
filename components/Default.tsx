import React from 'react';

export function Default({ children }: Props): JSX.Element {
    return <>{children}</>
}

interface Props {
    children: JSX.Element[] | JSX.Element;
}