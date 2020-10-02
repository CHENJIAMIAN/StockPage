export const table_columns = [
    {
        title: "排名",
        dataIndex: "id",
        key: "id",
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
        dataIndex: "jiaozuori",
        key: "jiaozuori",
        scopedSlots: { customRender: 'jiaozuori' },
        align: 'right',
    },
    {
        title: "代码名称",
        dataIndex: "codeName",
        key: "codeName",
        scopedSlots: { customRender: 'codeName' },
        align: 'right'
    },
    {
        title: "现价",
        dataIndex: "xianjia",
        key: "xianjia",
        scopedSlots: { customRender: 'xianjia' },
        align: 'right'
    },
    {
        title: "涨跌幅",
        dataIndex: "zhangdiefu",
        key: "zhangdiefu",
        scopedSlots: { customRender: 'zhangdiefu' },
        align: 'right'
    },
];

export const table_data = [
    {
        id: 0,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "-8.80",
        xianjia: 6,
        jiaozuori: {
            value: "3",
            isUp: false
        }
    },
    {
        id: 1,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        jiaozuori: {
            value: "3",
            isUp: true
        }
    },
    {
        id: 2,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        jiaozuori: {
            value: "3",
            isUp: true
        }
    },
    {
        id: 3,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        jiaozuori: {
            value: "3",
            isUp: true
        }
    },
    {
        id: 4,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        jiaozuori: {
            value: "3",
            isUp: true
        }
    },
    {
        id: 5,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        jiaozuori: {
            value: "3",
            isUp: true
        }
    }
];