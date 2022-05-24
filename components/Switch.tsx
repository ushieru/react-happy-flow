import React, { Children } from 'react';

export function Switch({ condition, children }: Props): JSX.Element {
    const child = Children.toArray(children)
        .filter((child: any) => child.type.name === 'Case' && child.props.condition === condition)[0] as JSX.Element
    if (child) return child
    const default_ = Children.toArray(children)
        .filter((child: any) => child.type.name === 'Default')[0] as JSX.Element
    if (default_) return default_
    return <></>
}

interface Props {
    condition: string | number | boolean;
    children: JSX.Element[] | JSX.Element;
}