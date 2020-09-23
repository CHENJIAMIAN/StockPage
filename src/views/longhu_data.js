export const data = {
    msg: "买不到牛股? 立即查看哪些板块正在被机构顶上"
}


export const table_columns = [
    {
        title: "代码名称",
        dataIndex: "代码名称",
        key: "代码名称",
        scopedSlots: { customRender: '代码名称' },
        width: 110
    },
    {
        title: "涨幅",
        dataIndex: "涨幅",
        key: "涨幅",
        scopedSlots: { customRender: '涨幅' },
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
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨幅: "-8.80",
    },
    {
        id: 1,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨幅: "+8.80",
    },
    {
        id: 2,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨幅: "+8.80",
    },
    {
        id: 3,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨幅: "+8.80",
    },
    {
        id: 4,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨幅: "+8.80",
    },
    {
        id: 5,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨幅: "+8.80",
    }
];