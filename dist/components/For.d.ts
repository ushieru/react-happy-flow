export declare function For<T>({ collection, map, filter }: Props<T>): JSX.Element[];
interface Props<T> {
    collection: T[];
    filter?: (item: T, index: number, array: T[]) => JSX.Element;
    map: (item: T, index: number, array: T[]) => JSX.Element;
}
export {};
