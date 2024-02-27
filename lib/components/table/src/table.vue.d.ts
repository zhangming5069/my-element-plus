import TableLayout from './table-layout';
import type { Table } from './table/defaults';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    size: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: BooleanConstructor;
    border: BooleanConstructor;
    rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: import("vue").PropType<import("./table/defaults").SummaryMethod<any> | undefined>;
    rowClassName: import("vue").PropType<import("./table/defaults").ColumnCls<any> | undefined>;
    rowStyle: import("vue").PropType<import("./table/defaults").ColumnStyle<any> | undefined>;
    cellClassName: import("vue").PropType<(string | ((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string)) | undefined>;
    cellStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => import("vue").CSSProperties)) | undefined>;
    headerRowClassName: import("vue").PropType<import("./table/defaults").ColumnCls<any> | undefined>;
    headerRowStyle: import("vue").PropType<import("./table/defaults").ColumnStyle<any> | undefined>;
    headerCellClassName: import("vue").PropType<(string | ((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string)) | undefined>;
    headerCellStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => import("vue").CSSProperties)) | undefined>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (StringConstructor | NumberConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: import("vue").PropType<any[] | undefined>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: import("vue").PropType<import("./table/defaults").Sort | undefined>;
    tooltipEffect: StringConstructor;
    spanMethod: import("vue").PropType<((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    } | undefined) | undefined>;
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    treeProps: {
        type: import("vue").PropType<{
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined>;
        default: () => {
            hasChildren: string;
            children: string;
        };
    };
    lazy: BooleanConstructor;
    load: import("vue").PropType<((row: any, treeNode: import("./table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableLayout: {
        type: import("vue").PropType<"auto" | "fixed">;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
    flexible: BooleanConstructor;
}, {
    ns: {
        namespace: import("vue").Ref<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    layout: TableLayout<any>;
    store: any;
    handleHeaderFooterMousewheel: (event: any, data: any) => void;
    handleMouseLeave: () => void;
    tableId: string;
    tableSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
    isHidden: import("vue").Ref<boolean>;
    isEmpty: import("vue").ComputedRef<boolean>;
    renderExpanded: import("vue").Ref<null>;
    resizeProxyVisible: import("vue").Ref<boolean>;
    resizeState: import("vue").Ref<{
        width: number | null;
        height: number | null;
        headerHeight: number | null;
    }>;
    isGroup: import("vue").Ref<boolean>;
    bodyWidth: import("vue").ComputedRef<string>;
    tableBodyStyles: import("vue").ComputedRef<{
        width: string;
    }>;
    emptyBlockStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
    } | null>;
    debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
    handleFixedMousewheel: (event: any, data: any) => void;
    setCurrentRow: (row: any) => void;
    getSelectionRows: () => any;
    toggleRowSelection: (row: any, selected: boolean) => void;
    clearSelection: () => void;
    clearFilter: (columnKeys: string[]) => void;
    toggleAllSelection: () => void;
    toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
    clearSort: () => void;
    doLayout: () => void;
    sort: (prop: string, order: string) => void;
    t: import("element-plus/es/hooks").Translator;
    setDragVisible: (visible: boolean) => void;
    context: Table<any>;
    computedSumText: import("vue").ComputedRef<string>;
    computedEmptyText: import("vue").ComputedRef<string>;
    tableLayout: import("vue").ComputedRef<"auto" | "fixed">;
    scrollbarViewStyle: {
        display: string;
        verticalAlign: string;
    };
    tableInnerStyle: import("vue").ComputedRef<{
        height: string | number;
        maxHeight?: undefined;
    } | {
        maxHeight: string | number;
        height?: undefined;
    } | {
        height?: undefined;
        maxHeight?: undefined;
    }>;
    scrollbarStyle: import("vue").ComputedRef<{
        height: string;
        maxHeight?: undefined;
    } | {
        maxHeight: string;
        height?: undefined;
    } | {
        height?: undefined;
        maxHeight?: undefined;
    }>;
    scrollBarRef: import("vue").Ref<any>;
    scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
    setScrollLeft: (left?: number | undefined) => void;
    setScrollTop: (top?: number | undefined) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "expandChange" | "selectAll" | "selectionChange" | "cellMouseEnter" | "cellMouseLeave" | "cellContextmenu" | "cellClick" | "cellDblclick" | "rowClick" | "rowContextmenu" | "rowDblclick" | "headerClick" | "headerContextmenu" | "sortChange" | "filterChange" | "currentChange" | "headerDragend")[], "select" | "expandChange" | "currentChange" | "filterChange" | "selectAll" | "selectionChange" | "cellMouseEnter" | "cellMouseLeave" | "cellContextmenu" | "cellClick" | "cellDblclick" | "rowClick" | "rowContextmenu" | "rowDblclick" | "headerClick" | "headerContextmenu" | "sortChange" | "headerDragend", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    size: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: BooleanConstructor;
    border: BooleanConstructor;
    rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: import("vue").PropType<import("./table/defaults").SummaryMethod<any> | undefined>;
    rowClassName: import("vue").PropType<import("./table/defaults").ColumnCls<any> | undefined>;
    rowStyle: import("vue").PropType<import("./table/defaults").ColumnStyle<any> | undefined>;
    cellClassName: import("vue").PropType<(string | ((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string)) | undefined>;
    cellStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => import("vue").CSSProperties)) | undefined>;
    headerRowClassName: import("vue").PropType<import("./table/defaults").ColumnCls<any> | undefined>;
    headerRowStyle: import("vue").PropType<import("./table/defaults").ColumnStyle<any> | undefined>;
    headerCellClassName: import("vue").PropType<(string | ((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string)) | undefined>;
    headerCellStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => import("vue").CSSProperties)) | undefined>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (StringConstructor | NumberConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: import("vue").PropType<any[] | undefined>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: import("vue").PropType<import("./table/defaults").Sort | undefined>;
    tooltipEffect: StringConstructor;
    spanMethod: import("vue").PropType<((data: {
        row: any;
        rowIndex: number;
        column: import("./table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    } | undefined) | undefined>;
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    treeProps: {
        type: import("vue").PropType<{
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined>;
        default: () => {
            hasChildren: string;
            children: string;
        };
    };
    lazy: BooleanConstructor;
    load: import("vue").PropType<((row: any, treeNode: import("./table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableLayout: {
        type: import("vue").PropType<"auto" | "fixed">;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
    flexible: BooleanConstructor;
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    onExpandChange?: ((...args: any[]) => any) | undefined;
    onCurrentChange?: ((...args: any[]) => any) | undefined;
    onSelectAll?: ((...args: any[]) => any) | undefined;
    onSelectionChange?: ((...args: any[]) => any) | undefined;
    onCellMouseEnter?: ((...args: any[]) => any) | undefined;
    onCellMouseLeave?: ((...args: any[]) => any) | undefined;
    onCellContextmenu?: ((...args: any[]) => any) | undefined;
    onCellClick?: ((...args: any[]) => any) | undefined;
    onCellDblclick?: ((...args: any[]) => any) | undefined;
    onRowClick?: ((...args: any[]) => any) | undefined;
    onRowContextmenu?: ((...args: any[]) => any) | undefined;
    onRowDblclick?: ((...args: any[]) => any) | undefined;
    onHeaderClick?: ((...args: any[]) => any) | undefined;
    onHeaderContextmenu?: ((...args: any[]) => any) | undefined;
    onSortChange?: ((...args: any[]) => any) | undefined;
    onFilterChange?: ((...args: any[]) => any) | undefined;
    onHeaderDragend?: ((...args: any[]) => any) | undefined;
}, {
    lazy: boolean;
    style: import("vue").CSSProperties;
    data: any[];
    tableLayout: "auto" | "fixed";
    border: boolean;
    className: string;
    fit: boolean;
    scrollbarAlwaysOn: boolean;
    stripe: boolean;
    treeProps: {
        hasChildren?: string | undefined;
        children?: string | undefined;
    } | undefined;
    showHeader: boolean;
    showSummary: boolean;
    highlightCurrentRow: boolean;
    defaultExpandAll: boolean;
    selectOnIndeterminate: boolean;
    indent: number;
    flexible: boolean;
}>;
export default _default;
