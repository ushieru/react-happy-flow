import React, { Children } from 'react';

export function If({ condition, children }: Props): JSX.Element {
    const childrenArray = Children.toArray(children);
    if (condition) return <>{childrenArray.filter((child: any) => child.type.name !== 'Else')}</>
    return <>{childrenArray.filter((child: any) => child.type.name === 'Else')[0]}</>
}

interface Props {
    condition: boolean;
    children: JSX.Element[] | JSX.Element;
}