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
        title: "涨跌幅",
        dataIndex: "zhangdie",
        key: "zhangdie",
        scopedSlots: { customRender: 'zhangdie' },
        align: 'center'
    },
    {
        title: "公司",
        dataIndex: "gongsi",
        key: "gongsi",
        scopedSlots: { customRender: 'gongsi' },
        align: 'center'
    },

];

export const table_data = [
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
];