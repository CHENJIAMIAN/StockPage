export const zhangtingfenxi_columns = [
    {
        title: "代码名称",
        dataIndex: "nameCode",
        key: "nameCode",
        scopedSlots: { customRender: 'nameCode' },
        width: 110
    },
    {
        title: "涨跌幅",
        dataIndex: "zhangdiefu",
        key: "zhangdiefu",
        scopedSlots: { customRender: 'zhangdiefu' },
    },
    {
        title: "连扳天数",
        dataIndex: "lianbantianshu",
        key: "lianbantianshu",
        scopedSlots: { customRender: 'lianbantianshu' },
    },
    {
        title: "概念",
        dataIndex: "subject",
        key: "subject",
        scopedSlots: { customRender: 'subject' },
        width: 80
    },
];

export const zhangtingfenxi_data = [
    {
        id: 0,
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        lianbantianshu: 6,
        subject: "食品饮料"
    },
    {
        id: 1,
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        lianbantianshu: 6,
        subject: "食品饮料"
    },
    {
        id: 2,
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        lianbantianshu: 6,
        subject: "食品饮料"
    },
    {
        id: 3,
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        lianbantianshu: 6,
        subject: "食品饮料"
    },
    {
        id: 4,
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        lianbantianshu: 6,
        subject: "食品饮料"
    },
    {
        id: 5,
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        lianbantianshu: 6,
        subject: "食品饮料"
    }
];


export const solution_columns = [
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
        width: 10
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
        title: "行业",
        dataIndex: "行业",
        key: "行业",
        scopedSlots: { customRender: '行业' },
        width: 80
    }
];

export const solution_data = [
    {
        id: 0,
        status: "当日选出",
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
        status: "当日选出",
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
        status: "在池",
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
        status: "在池",
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
        status: "不在池",
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
        status: "不在池",
        代码名称: {
            名称: "阿里巴巴",
            代码: '6003001'
        },
        涨跌幅: "+8.80",
        现价: 6,
        行业: "食品饮料"
    }
];

export const zhishu = [
    {
        id: 1,
        name: "上证指数",
        value: '3380.18',
        zhangdie: '-16.71',
        zhangdiefu: '-0.50%'
    }, {
        id: 2,
        name: "深证指数",
        value: '3380.28',
        zhangdie: '+16.72',
        zhangdiefu: '+0.51%'
    }, {
        id: 3,
        name: "中小板",
        value: '3380.38',
        zhangdie: '+12',
        zhangdiefu: '+0.52%'
    }, {
        id: 4,
        name: "创业指数",
        value: '3380.48',
        zhangdie: '+16.74',
        zhangdiefu: '+0.53%'
    }, {
        id: 6,
        name: "科创50",
        value: '3380.58',
        zhangdie: '+16.58',
        zhangdiefu: '+0.54%'
    }, {
        id: 7,
        name: "上证50",
        value: '3380.68',
        zhangdie: '+16.76',
        zhangdiefu: '+0.55%'
    },
]

export const shichangwendu = {
    wendu: 10,
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
            value: 131,
            type: 1
        }, {
            id: 6,
            value: 234,
            type: 1
        }, {
            id: 7,
            value: 11,
            type: 2
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
            value: 11,
            type: 3
        }, {
            id: 12,
            value: 123,
            type: 3
        },
    ],
    hugutongzijin: -15.98,
    shengutongzijin: 28.68,
    die: 1555,
    zhang: 123,
    ping: 345,
};
export const bankuaihangye = [
    {
        id: 1,
        hangye: '食品加工制造',
        zhangdie: '-3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 2,
        hangye: '食品加工制造',
        zhangdie: '-3.4',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 3,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 4,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 6,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 7,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    },
]

export const gainianbankuai = [
    {
        id: 1,
        hangye: '食品加工制造',
        zhangdie: '-3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 2,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 3,
        hangye: '食品加工制造',
        zhangdie: '-4.0',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 4,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 6,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 7,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    },
];


