import * as React from 'react';
export interface Tab {
    label: string;
    content: JSX.Element;
}
interface TabSelectorProps {
    tabs: Tab[];
}
export declare const TabSelector: React.FC<TabSelectorProps>;
export {};
