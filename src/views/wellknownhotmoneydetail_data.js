export const data = {
    name: "赵老哥",
    desc: "赵老哥很牛逼的赵老哥很牛逼的赵老哥很牛逼的赵老哥很牛逼的赵老哥很牛逼的赵老哥很牛逼的赵老哥很牛逼的赵老哥很牛逼的",
    commonInstitutions:
        [{
            id: 1,
            name: "中国银河邵迎路营业部1"
        }, {
            id: 2,
            name: "中国银河邵迎路营业部2"
        }, {
            id: 3,
            name: "中国银河邵迎路营业部3"
        }],
}

export const listedHistory_columns = [
    {
        title: "时间",
        dataIndex: "时间",
        key: "时间",
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
        // 在有customRender时失效
        // scopedSlots: { customRender: '时间' },
    },
    {
        title: "上榜股票",
        dataIndex: "上榜股票",
        key: "上榜股票",
        scopedSlots: { customRender: '上榜股票' },
        align: 'right'
    },
    {
        title: "买入",
        dataIndex: "买入",
        key: "买入",
        scopedSlots: { customRender: '买入' },
        align: 'right'
    },
    {
        title: "卖出",
        dataIndex: "卖出",
        key: "卖出",
        scopedSlots: { customRender: '卖出' },
        align: 'right'
    },
];

export const listedHistory_data = [
    {
        id: 0,
        时间: "2020-9-21",
        上榜股票: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        买入: {
            value: "+1000",
            unit: '万'
        },
        卖出: {
            value: "+1000",
            unit: '万'
        },

    },
    {
        id: 1,
        时间: "2020-9-21",
        上榜股票: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        买入: {
            value: "-1000",
            unit: '万'
        },
        卖出: {
            value: "+1000",
            unit: '万'
        },

    },
    {
        id: 2,
        时间: "2020-9-20",
        上榜股票: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        买入: {
            value: "-1000",
            unit: '万'
        },
        卖出: {
            value: "+1000",
            unit: '万'
        },

    },
    {
        id: 3,
        时间: "2020-9-20",
        上榜股票: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        买入: {
            value: "-1000",
            unit: '万'
        },
        卖出: {
            value: "+1000",
            unit: '万'
        },

    },
    {
        id: 4,
        时间: "2020-9-18",
        上榜股票: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        买入: {
            value: "-1000",
            unit: '万'
        },
        卖出: {
            value: "+1000",
            unit: '万'
        },

    },
    {
        id: 5,
        时间: "2020-9-18",
        上榜股票: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        买入: {
            value: "-1000",
            unit: '万'
        },
        卖出: {
            value: "+1000",
            unit: '万'
        },

    }
];