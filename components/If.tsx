import React, { Children } from 'react';

export function If({ condition, children }: Props): JSX.Element {
    const childrenArray = Children.toArray(children);
    if (condition) return <>{childrenArray.filter((child: any) => child.type.name !== 'Else')}</>
    return <>{childrenArray.find((child: any) => child.type.name === 'Else')}</>
}

interface Props {
    condition: boolean;
    children: JSX.Element[] | JSX.Element;
}