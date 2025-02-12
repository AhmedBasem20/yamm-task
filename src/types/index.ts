export type TableHeader<T> = {
    id: string;
    label: string;
    render?: (row: T) => React.ReactNode;
}

export type Order = {
    id: string;
    reason: string;
    store_name: string;
    store_logo: string;
    store_url: string;
    amount: number;
    active: boolean;
    decision: string | null;
    items: object[];
}
