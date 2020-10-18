export const table_columns = [
    // {
    //     title: "序号",
    //     dataIndex: "rank",
    //     key: "rank",
    //     // customRender: (value, row, index, column) => {
    //     //     // text, record, index, column
    //     //     if (index < 10) return '0' + (index + 1);
    //     //     else return index + 1;
    //     // },
    //     // 在有customRender时失效
    //     scopedSlots: { customRender: 'rank' },
    // },
    {
        title: "行业名称",
        dataIndex: "hangye",
        key: "hangye",
        scopedSlots: { customRender: 'hangye' },
        align: 'center',
    },
    {
        title: "流入资金",
        dataIndex: "fundFlow",
        key: "fundFlow",
        scopedSlots: { customRender: 'fundFlow' },
        align: 'center',
    },
    {
        title: "主力公司",
        dataIndex: "codeName",
        key: "codeName",
        scopedSlots: { customRender: 'codeName' },
        align: 'center'
    },
    {
        title: "涨跌幅",
        dataIndex: "zhangdie",
        key: "zhangdie",
        scopedSlots: { customRender: 'zhangdie' },
        align: 'center'
    },

];

export const table_data = [
    {
        id: 1,
        hangye: '食品加工制造',
        fundFlow:'0.00',
        zhangdie: '-3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 2,
        hangye: '食品加工制造',
        fundFlow:'0.00',
        zhangdie: '-3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 3,
        hangye: '食品加工制造',
        fundFlow:'0.00',
        zhangdie: '-3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 4,
        hangye: '食品加工制造',
        fundFlow:'0.00',
        zhangdie: '-3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 6,
        hangye: '食品加工制造',
        fundFlow:'0.00',
        zhangdie: '-3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    }, {
        id: 7,
        hangye: '食品加工制造',
        fundFlow:'0.00',
        zhangdie: '-3.70',
        codeName: {
            name: "天润乳业",
            code: '6003001'
        },
    },
];