import React from 'react';

export function For<T>({ collection, map, filter }: Props<T>) {
    if (filter) collection = collection.filter(filter);
    return collection.map(map)
}

interface Props<T> {
    collection: T[]
    filter?: (item: T, index: number, array: T[]) => JSX.Element
    map: (item: T, index: number, array: T[]) => JSX.Element
}