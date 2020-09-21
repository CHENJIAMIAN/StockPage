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
        dataIndex: "status",
        key: "status",
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
        // scopedSlots: { customRender: 'status' },
    },
    {
        title: "上榜股票",
        dataIndex: "代码名称",
        key: "代码名称",
        scopedSlots: { customRender: '代码名称' },
    },
    {
        title: "买入",
        dataIndex: "涨跌幅",
        key: "涨跌幅",
        scopedSlots: { customRender: '涨跌幅' },
    },
    {
        title: "卖出",
        dataIndex: "现价",
        key: "现价",
        scopedSlots: { customRender: '现价' },
    },
];

export const listedHistory_data = [
    {
        id: 0,
        status: "2020-9-21",
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "-8.80",
        现价: 6,
        行业: "食品饮料"
    },
    {
        id: 1,
        status: "2020-9-21",
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        行业: "食品饮料"
    },
    {
        id: 2,
        status: "2020-9-20",
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        行业: "食品饮料"
    },
    {
        id: 3,
        status: "2020-9-20",
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "-8.80",
        现价: 6,
        行业: "食品饮料"
    },
    {
        id: 4,
        status: "2020-9-18",
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        行业: "食品饮料"
    },
    {
        id: 5,
        status: "2020-9-18",
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        行业: "食品饮料"
    }
];