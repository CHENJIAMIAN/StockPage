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
        dataIndex: "date",
        key: "date",
        customRender: (value, row, index, column) => {
            // text, record, index, column
            column.class = 'bigtxt'
            const obj = {
                children: value,
                attrs: {}
            };
            // if (index === 0) {
            //     obj.attrs.rowSpan = 2;
            // }
            // if (index === 1) {
            //     obj.attrs.rowSpan = 0;
            // }
            // //
            // if (index === 2) {
            //     obj.attrs.rowSpan = 2;
            // }
            // if (index === 3) {
            //     obj.attrs.rowSpan = 0;
            // }
            // //
            // if (index === 4) {
            //     obj.attrs.rowSpan = 2;
            // }
            // if (index === 5) {
            //     obj.attrs.rowSpan = 0;
            // }
            return obj;
        },
        // 在有customRender时失效
        // scopedSlots: { customRender: '时间' },
    },
    {
        title: "上榜股票",
        dataIndex: "nameCode",
        key: "nameCode",
        scopedSlots: { customRender: 'nameCode' },
        align: 'right'
    },
    {
        title: "买入",
        dataIndex: "buyAmt",
        key: "buyAmt",
        scopedSlots: { customRender: 'buyAmt' },
        align: 'right'
    },
    {
        title: "卖出",
        dataIndex: "sellAmt",
        key: "sellAmt",
        scopedSlots: { customRender: 'sellAmt' },
        align: 'right'
    },
];

export const listedHistory_data = [
    {
        id: 0,
        date: "2020-9-21",
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        buyAmt: "+1000",
        sellAmt: "+1000",
        units: '万'

    },
    {
        id: 1,
        date: "2020-9-21",
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        buyAmt: "+1000",
        sellAmt: "+1000",
        units: '万'

    },
    {
        id: 2,
        date: "2020-9-21",
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        buyAmt: "+1000",
        sellAmt: "+1000",
        units: '万'

    },
    {
        id: 3,
        date: "2020-9-21",
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        buyAmt: "+1000",
        sellAmt: "+1000",
        units: '万'

    },
    {
        id: 4,
        date: "2020-9-21",
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        buyAmt: "+1000",
        sellAmt: "+1000",
        units: '万'

    },
    {
        id: 5,
        date: "2020-9-21",
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        buyAmt: "+1000",
        sellAmt: "+1000",
        units: '万'

    }
];