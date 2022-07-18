import React, { Children } from 'react';

export function Switch({ condition, children }: Props): JSX.Element {
    return <>{
        Children.toArray(children)
            .find((child: any) => child.type.name === 'Case' && child.props.condition === condition)
        ?? Children.toArray(children).find((child: any) => child.type.name === 'Default')
    }    </>
}

interface Props {
    condition: string | number | boolean;
    children: JSX.Element[] | JSX.Element;
}