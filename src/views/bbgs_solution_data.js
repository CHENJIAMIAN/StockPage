export const table_columns = [
    {
        title: "序号",
        dataIndex: "id",
        key: "id",
        customRender: (value, row, index, column) => {
            // text, record, index, column
            if (index < 10) return '0' + (index + 1);
            else return index + 1;
        },
        // 在有customRender时失效
        // scopedSlots: { customRender: 'status' },
        width: 50
    },
    {
        title: "代码名称",
        dataIndex: "codeName",
        key: "codeName",
        scopedSlots: { customRender: 'codeName' },
    },
    {
        title: "涨跌幅",
        dataIndex: "zhangdiefu",
        key: "zhangdiefu",
        scopedSlots: { customRender: 'zhangdiefu' },
    },
    {
        title: "现价",
        dataIndex: "xianjia",
        key: "xianjia",
        scopedSlots: { customRender: 'xianjia' },
    },
    {
        title: "入选时间",
        dataIndex: "selectDate",
        key: "selectDate",
        scopedSlots: { customRender: 'selectDate' },
    },
];

export const table_data = [
    {
        id: 0,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        selectDate: "2020-9-21"
    },
    {
        id: 1,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        selectDate: "2020-9-21"
    },
    {
        id: 2,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        selectDate: "2020-9-21"
    },
    {
        id: 3,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        selectDate: "2020-9-21"
    },
    {
        id: 4,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        selectDate: "2020-9-21"
    },
    {
        id: 5,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        selectDate: "2020-9-21"
    }
];