export const table_columns = [
    {
        title: "序号",
        dataIndex: "序号",
        key: "序号",
        customRender: (value, row, index, column) => {
            // text, record, index, column
            if (index < 10) return '0' + (index + 1);
            else return index + 1;
        },
        // 在有customRender时失效
        // scopedSlots: { customRender: 'status' },
        width: 60
    },
    {
        title: "代码名称",
        dataIndex: "代码名称",
        key: "代码名称",
        scopedSlots: { customRender: '代码名称' },
        width: 110
    },
    {
        title: "涨跌幅",
        dataIndex: "涨跌幅",
        key: "涨跌幅",
        scopedSlots: { customRender: '涨跌幅' },
    },
    {
        title: "现价",
        dataIndex: "现价",
        key: "现价",
        scopedSlots: { customRender: '现价' },
    },
    {
        title: "入选时间",
        dataIndex: "入选时间",
        key: "入选时间",
        scopedSlots: { customRender: '入选时间' },
    },
];

export const table_data = [
    {
        id: 0,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        入选时间: "2020-9-21"
    },
    {
        id: 1,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        入选时间: "2020-9-21"
    },
    {
        id: 2,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        入选时间: "2020-9-21"
    },
    {
        id: 3,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        入选时间: "2020-9-21"
    },
    {
        id: 4,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        入选时间: "2020-9-21"
    },
    {
        id: 5,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        入选时间: "2020-9-21"
    }
];