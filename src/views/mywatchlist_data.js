export const table_columns = [
    {
        title: "代码名称",
        dataIndex: "codeName",
        key: "codeName",
        scopedSlots: { customRender: 'codeName' },
    },
    {
        title: "选入时间",
        dataIndex: "selectDate",
        key: "selectDate",
        scopedSlots: { customRender: 'selectDate' },
        align: 'right'
    },
    {
        title: "进入价格",
        dataIndex: "selectPrice",
        key: "selectPrice",
        scopedSlots: { customRender: 'selectPrice' },
        align: 'right'
    },
    {
        title: "涨幅",
        dataIndex: "zhangfu",
        key: "zhangfu",
        scopedSlots: { customRender: 'zhangfu' },
        align: 'right'
    },
    {
        title: "现价",
        dataIndex: "nowPrice",
        key: "nowPrice",
        scopedSlots: { customRender: 'nowPrice' },

        align: 'right'
    },
    {
        title: "操作",
        dataIndex: "operation",
        key: "operation",
        scopedSlots: { customRender: 'operation' },
        align: 'center'
    },
];

export const table_data = [
    {
        id: 0,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangfu: "-8.80",
        selectDate: "2020-09-20",
        selectPrice: "4.32",
        nowPrice: "4.32",
        operation: false
    },
    {
        id: 1,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangfu: "-8.80",
        selectDate: "2020-09-20",
        selectPrice: "4.32",
        nowPrice: "4.32",
        operation: true
    },
    {
        id: 2,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangfu: "-8.80",
        selectDate: "2020-09-20",
        selectPrice: "4.32",
        nowPrice: "4.32",
        operation: false
    },
    {
        id: 3,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangfu: "-8.80",
        selectDate: "2020-09-20",
        selectPrice: "4.32",
        nowPrice: "4.32",
        operation: false
    },
    {
        id: 4,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangfu: "-8.80",
        selectDate: "2020-09-20",
        selectPrice: "4.32",
        nowPrice: "4.32",
        operation: false
    },
    {
        id: 5,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangfu: "-8.80",
        selectDate: "2020-09-20",
        selectPrice: "4.32",
        nowPrice: "4.32",
        operation: true
    }
];

export const date = '2020-09-20';