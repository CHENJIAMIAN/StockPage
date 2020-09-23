export const table_columns = [
    {
        title: "代码名称",
        dataIndex: "代码名称",
        key: "代码名称",
        scopedSlots: { customRender: '代码名称' },
    },
    {
        title: "涨幅",
        dataIndex: "涨幅",
        key: "涨幅",
        scopedSlots: { customRender: '涨幅' },
        align: 'right'
    },
    {
        title: "几天几板",
        dataIndex: "几天几板",
        key: "几天几板",
        scopedSlots: { customRender: '几天几板' },
        align: 'right'
    },
    {
        title: "连板天",
        dataIndex: "连板天",
        key: "连板天",
        scopedSlots: { customRender: '连板天' },
        align: 'right'
    },
    {
        title: "短线主题",
        dataIndex: "短线主题",
        key: "短线主题",
        customRender: (value, row, index, column) => {
            // text, record, index, column
            column.class = 'bigtxt'
            const obj = {
                children: value,
                attrs: {}
            };
            if (index === 0) {
                obj.attrs.rowSpan = 2;
            }
            if (index === 1) {
                obj.attrs.rowSpan = 0;
            }
            //
            if (index === 2) {
                obj.attrs.rowSpan = 2;
            }
            if (index === 3) {
                obj.attrs.rowSpan = 0;
            }
            //
            if (index === 4) {
                obj.attrs.rowSpan = 2;
            }
            if (index === 5) {
                obj.attrs.rowSpan = 0;
            }
            return obj;
        },
        // scopedSlots: { customRender: '短线主题' },
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
        涨幅: "+8.80",
        几天几板: "4天4板",
        连板天: "4",
        短线主题: "国防军工",
    },
    {
        id: 1,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨幅: "+8.80",
        几天几板: "4天4板",
        连板天: "4",
        短线主题: "国防军工",
    },
    {
        id: 2,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨幅: "+8.80",
        几天几板: "4天4板",
        连板天: "4",
        短线主题: "国防军工",
    },
    {
        id: 3,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨幅: "+8.80",
        几天几板: "4天4板",
        连板天: "4",
        短线主题: "国防军工",
    },
    {
        id: 4,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨幅: "+8.80",
        几天几板: "4天4板",
        连板天: "4",
        短线主题: "国防军工",
    },
    {
        id: 5,
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨幅: "+8.80",
        几天几板: "4天4板",
        连板天: "4",
        短线主题: "国防军工",
    }
];

export const date = '2020-09-20';