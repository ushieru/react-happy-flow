import React from 'react';

export function Else({ children }: Props): JSX.Element {
    return <>{children}</>;
}

interface Props {
    children: JSX.Element[] | JSX.Element;
}
