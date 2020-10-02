export const zhangtingtongji = {
    zuorizhangtingshu: "100",
    jinrilianban: "25",
    zuigaolianban: "6"
};

export const zhangtingfenxi_columns = [
    {
        title: "代码名称",
        dataIndex: "namecode",
        key: "namecode",
        scopedSlots: { customRender: 'namecode' },
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
        dataIndex: "gainian",
        key: "gainian",
        scopedSlots: { customRender: 'gainian' },
        width: 110
    },

];

export const zhangtingfenxi_data = [
    {
        id: 0,
        namecode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        lianbantianshu: 6,
        gainian: "食品饮料"
    },
    {
        id: 1,
        namecode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        lianbantianshu: 6,
        gainian: "食品饮料"
    },
    {
        id: 2,
        namecode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        lianbantianshu: 6,
        gainian: "食品饮料"
    },
    {
        id: 3,
        namecode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        lianbantianshu: 6,
        gainian: "食品饮料"
    },
    {
        id: 4,
        namecode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        lianbantianshu: 6,
        gainian: "食品饮料"
    },
    {
        id: 5,
        namecode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        lianbantianshu: 6,
        gainian: "食品饮料"
    }
];


export const celue = {
    name: "短线xxx",
    description: "策略描述"
};

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
        width: 10
    },
    {
        title: "代码名称",
        dataIndex: "namecode",
        key: "namecode",
        scopedSlots: { customRender: 'namecode' },
        width: 110
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
        title: "行业",
        dataIndex: "hangye",
        key: "hangye",
        scopedSlots: { customRender: 'hangye' },
        width: 110
    }
];

export const celuechi_data = [
    {
        id: 0,
        status: "当日选出",
        namecode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "-8.80",
        xianjia: 6,
        hangye: "食品饮料"
    },
    {
        id: 1,
        status: "当日选出",
        namecode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        hangye: "食品饮料"
    },
    {
        id: 2,
        status: "在池",
        namecode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        hangye: "食品饮料"
    },
    {
        id: 3,
        status: "在池",
        namecode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "-8.80",
        xianjia: 6,
        hangye: "食品饮料"
    },
    {
        id: 4,
        status: "不在池",
        namecode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        hangye: "食品饮料"
    },
    {
        id: 5,
        status: "不在池",
        namecode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        xianjia: 6,
        hangye: "食品饮料"
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
    suggest:"宜适中仓位",
    chart: [
        {
            id: 1,
            value: 11,
            type: 1,//1跌2平3涨
        }, {
            id: 3,
            value: 11,
            type: 1
        }, {
            id: 4,
            value: 131,
            type: 1
        }, {
            id: 5,
            value: 234,
            type: 1
        },  {
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
            id: 11,
            value: 11,
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
        gongsi: '天润乳业'
    }, {
        id: 2,
        hangye: '食品加工制造',
        zhangdie: '-3.4',
        gongsi: '天润乳业'
    }, {
        id: 3,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        gongsi: '天润乳业'
    }, {
        id: 4,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        gongsi: '天润乳业'
    }, {
        id: 6,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        gongsi: '天润乳业'
    }, {
        id: 7,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        gongsi: '天润乳业'
    },
]

export const gainianbankuai = [
    {
        id: 1,
        hangye: '食品加工制造',
        zhangdie: '-3.70',
        gongsi: '天润乳业'
    }, {
        id: 2,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        gongsi: '天润乳业'
    }, {
        id: 3,
        hangye: '食品加工制造',
        zhangdie: '-4.0',
        gongsi: '天润乳业'
    }, {
        id: 4,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        gongsi: '天润乳业'
    }, {
        id: 6,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        gongsi: '天润乳业'
    }, {
        id: 7,
        hangye: '食品加工制造',
        zhangdie: '+3.70',
        gongsi: '天润乳业'
    },
];


