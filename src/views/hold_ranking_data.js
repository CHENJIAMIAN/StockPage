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
        // title: "标题",
        dataIndex: "name",
        key: "name",
        scopedSlots: { customRender: 'name' },
        align: 'center',
    },
    {
        // title: "复盘总结",
        dataIndex: "total",
        key: "total",
        scopedSlots: { customRender: 'total' },
        align: 'center'
    },

];

export const table_data = [
    {
        id:0,
        name: "2020-10-11",
        total: "复盘总结"
    },
    {
        id:1,
        name: "2020-10-11",
        total: "复盘总结"
    },
    {
        id:2,
        name: "2020-10-11",
        total: "复盘总结"
    },
    {
        id:3,
        name: "2020-10-11",
        total: "复盘总结"
    },
    {
        id:4,
        name: "2020-10-11",
        total: "复盘总结"
    },
    {
        id:5,
        name: "2020-10-11",
        total: "复盘总结"
    }
];