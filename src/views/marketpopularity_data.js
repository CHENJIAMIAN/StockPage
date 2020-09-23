export const table_columns = [
    {
        title: "排名",
        dataIndex: "排名",
        key: "排名",
        customRender: (value, row, index, column) => {
            // text, record, index, column
            if (index < 10) return '0' + (index + 1);
            else return index + 1;
        },
        // 在有customRender时失效
        // scopedSlots: { customRender: 'status' },
    },
    {
        title: "较昨日",
        dataIndex: "较昨日",
        key: "较昨日",
        scopedSlots: { customRender: '较昨日' },
        align: 'right',
    },
    {
        title: "代码名称",
        dataIndex: "代码名称",
        key: "代码名称",
        scopedSlots: { customRender: '代码名称' },
        align: 'right'
    },
    {
        title: "现价",
        dataIndex: "现价",
        key: "现价",
        scopedSlots: { customRender: '现价' },
        align: 'right'
    },
    {
        title: "涨跌幅",
        dataIndex: "涨跌幅",
        key: "涨跌幅",
        scopedSlots: { customRender: '涨跌幅' },
        align: 'right'
    },
];

export const table_data = [
    {
        id: 0,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "-8.80",
        现价: 6,
        较昨日: {
            value: "3",
            isUp: false
        }
    },
    {
        id: 1,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        较昨日: {
            value: "3",
            isUp: true
        }
    },
    {
        id: 2,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        较昨日: {
            value: "3",
            isUp: true
        }
    },
    {
        id: 3,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        较昨日: {
            value: "3",
            isUp: true
        }
    },
    {
        id: 4,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        较昨日: {
            value: "3",
            isUp: true
        }
    },
    {
        id: 5,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        较昨日: {
            value: "3",
            isUp: true
        }
    }
];