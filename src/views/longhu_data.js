export const data = {
    msg: "买不到牛股? 立即查看哪些板块正在被机构顶上"
}


export const table_columns = [
    {
        title: "代码名称",
        dataIndex: "codeName",
        key: "codeName",
        scopedSlots: { customRender: 'codeName' },
        width: 110
    },
    {
        title: "涨幅",
        dataIndex: "zhangfu",
        key: "zhangfu",
        scopedSlots: { customRender: 'zhangfu' },
        align: 'right'
    },
    {
        title: "详情",
        dataIndex: "详情",
        key: "详情",
        scopedSlots: { customRender: '详情' },
        align: 'right'
    },
    {
        title: "连板天",
        dataIndex: "连板天",
        key: "连板天",
        // customRender: (value, row, index, column) => {
        //     return '行情'
        // }
        scopedSlots: { customRender: '连板天' },
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
        zhangfu: "+8.80",
    },
    {
        id: 1,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangfu: "+8.80",
    },
    {
        id: 2,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangfu: "+8.80",
    },
    {
        id: 3,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangfu: "+8.80",
    },
    {
        id: 4,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangfu: "+8.80",
    },
    {
        id: 5,
        codeName: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangfu: "+8.80",
    }
];