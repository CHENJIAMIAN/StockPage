export const zhangtingfenxi_columns = [
    {
        title: "代码名称",
        dataIndex: "代码名称",
        key: "代码名称",
        scopedSlots: { customRender: '代码名称' },
    },
    {
        title: "涨跌幅",
        dataIndex: "涨跌幅",
        key: "涨跌幅",
        scopedSlots: { customRender: '涨跌幅' },
    },
    {
        title: "连扳天数",
        dataIndex: "连扳天数",
        key: "连扳天数",
        scopedSlots: { customRender: '连扳天数' },
    },
    {
        title: "概念",
        dataIndex: "概念",
        key: "概念",
        scopedSlots: { customRender: '概念' },
    },

];

export const zhangtingfenxi_data = [
    {
        代码名称: {
            名称: "阿里巴巴1",
            代码: '6003001'
        },
        涨跌幅: "+8.79%",
        连扳天数: 5,
        概念: "食品饮料"
    },
    {
        代码名称: {
            名称: "阿里巴巴1",
            代码: '6003001'
        },
        涨跌幅: "+8.79%",
        连扳天数: 5,
        概念: "食品饮料"
    },
    {
        代码名称: {
            名称: "阿里巴巴1",
            代码: '6003001'
        },
        涨跌幅: "+8.79%",
        连扳天数: 5,
        概念: "食品饮料"
    },
    {
        代码名称: {
            名称: "阿里巴巴1",
            代码: '6003001'
        },
        涨跌幅: "+8.79%",
        连扳天数: 5,
        概念: "食品饮料"
    },
    {
        代码名称: {
            名称: "阿里巴巴1",
            代码: '6003001'
        },
        涨跌幅: "+8.79%",
        连扳天数: 5,
        概念: "食品饮料"
    },
    {
        代码名称: {
            名称: "阿里巴巴1",
            代码: '6003001'
        },
        涨跌幅: "+8.79%",
        连扳天数: 5,
        概念: "食品饮料"
    }
];


export const celuechi_columns = [
    {
        title: "",
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
        title: "代码名称",
        dataIndex: "代码名称",
        key: "代码名称",
        scopedSlots: { customRender: '代码名称' },
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
        title: "行业",
        dataIndex: "行业",
        key: "行业",
        scopedSlots: { customRender: '行业' },
    }
];

export const celuechi_data = [
    {
        status: "当日选出",
        代码名称: {
            名称: "阿里巴巴1",
            代码: '6003001'
        },
        涨跌幅: "+8.79%",
        现价: 5,
        行业: "食品饮料"
    },
    {
        status: "当日选出",
        代码名称: {
            名称: "阿里巴巴1",
            代码: '6003001'
        },
        涨跌幅: "+8.79%",
        现价: 5,
        行业: "食品饮料"
    },
    {
        status: "在池",
        代码名称: {
            名称: "阿里巴巴1",
            代码: '6003001'
        },
        涨跌幅: "+8.79%",
        现价: 5,
        行业: "食品饮料"
    },
    {
        status: "在池",
        代码名称: {
            名称: "阿里巴巴1",
            代码: '6003001'
        },
        涨跌幅: "+8.79%",
        现价: 5,
        行业: "食品饮料"
    },
    {
        status: "不在池",
        代码名称: {
            名称: "阿里巴巴1",
            代码: '6003001'
        },
        涨跌幅: "+8.79%",
        现价: 5,
        行业: "食品饮料"
    },
    {
        status: "不在池",
        代码名称: {
            名称: "阿里巴巴1",
            代码: '6003001'
        },
        涨跌幅: "+8.79%",
        现价: 5,
        行业: "食品饮料"
    }
];

export const zhishu = [
    {
        id: 1,
        name: "上证指数",
        value: '3380.18',
        zhangdie: '+16.78',
        zhangfu: '+0.50%'
    }, {
        id: 2,
        name: "深证指数",
        value: '3380.28',
        zhangdie: '+16.78',
        zhangfu: '+0.50%'
    }, {
        id: 3,
        name: "中小板",
        value: '3380.38',
        zhangdie: '+16.78',
        zhangfu: '+0.50%'
    }, {
        id: 4,
        name: "创业指数",
        value: '3380.48',
        zhangdie: '+16.78',
        zhangfu: '+0.50%'
    }, {
        id: 5,
        name: "科创50",
        value: '3380.58',
        zhangdie: '+16.78',
        zhangfu: '+0.50%'
    }, {
        id: 6,
        name: "上证50",
        value: '3380.68',
        zhangdie: '+16.78',
        zhangfu: '+0.50%'
    },
]

export const shichangwendu = {
    wendu: 70,
    chart: [
        {
            id: 1,
            value: 11,
            type: 1,//1跌2平3涨
        }, {
            id: 2,
            value: 21,
            type: 1
        }, {
            id: 3,
            value: 11,
            type: 1
        }, {
            id: 4,
            value: 11,
            type: 1
        }, {
            id: 5,
            value: 11,
            type: 1
        }, {
            id: 6,
            value: 11,
            type: 2
        }, {
            id: 7,
            value: 11,
            type: 3
        }, {
            id: 8,
            value: 11,
            type: 3
        }, {
            id: 9,
            value: 11,
            type: 3
        }, {
            id: 10,
            value: 11,
            type: 3
        }, {
            id: 11,
            value: 111,
            type: 3
        },
    ],
    hugutongzijin: '-14.98亿',
    shengutongzijin: '18.68亿',
};
export const bankuaihangye = [
    {
        id: 1,
        hangye: '食品加工制造',
        zhangdie: '+3.70%',
        gongsi: '天润乳业'
    }, {
        id: 2,
        hangye: '食品加工制造',
        zhangdie: '+3.70%',
        gongsi: '天润乳业'
    }, {
        id: 3,
        hangye: '食品加工制造',
        zhangdie: '+3.70%',
        gongsi: '天润乳业'
    }, {
        id: 4,
        hangye: '食品加工制造',
        zhangdie: '+3.70%',
        gongsi: '天润乳业'
    }, {
        id: 5,
        hangye: '食品加工制造',
        zhangdie: '+3.70%',
        gongsi: '天润乳业'
    }, {
        id: 6,
        hangye: '食品加工制造',
        zhangdie: '+3.70%',
        gongsi: '天润乳业'
    },
]

export const gainianbankuai = [
    {
        id: 1,
        hangye: '食品加工制造',
        zhangdie: '+3.70%',
        gongsi: '天润乳业'
    }, {
        id: 2,
        hangye: '食品加工制造',
        zhangdie: '+3.70%',
        gongsi: '天润乳业'
    }, {
        id: 3,
        hangye: '食品加工制造',
        zhangdie: '+3.70%',
        gongsi: '天润乳业'
    }, {
        id: 4,
        hangye: '食品加工制造',
        zhangdie: '+3.70%',
        gongsi: '天润乳业'
    }, {
        id: 5,
        hangye: '食品加工制造',
        zhangdie: '+3.70%',
        gongsi: '天润乳业'
    }, {
        id: 6,
        hangye: '食品加工制造',
        zhangdie: '+3.70%',
        gongsi: '天润乳业'
    },
];
export const zhangtingfenxi = {};
export const celuechi = {};