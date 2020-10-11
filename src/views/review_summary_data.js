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
        title: "标题",
        dataIndex: "reviewTitle",
        key: "reviewTitle",
        scopedSlots: { customRender: 'reviewTitle' },
        align: 'center',
    },
    {
        title: "复盘总结",
        dataIndex: "content",
        key: "content",
        scopedSlots: { customRender: 'content' },
        align: 'center'
    },

];

export const table_data = [
    {
        id:0,
        title: "2020-10-11",
        content: "复盘总结"
    },
    {
        id:1,
        title: "2020-10-10",
        content: "复盘总结"
    },
    {
        id:2,
        title: "2020-10-09",
        content: "复盘总结"
    },
    {
        id:3,
        title: "2020-10-08",
        content: "复盘总结"
    },
    {
        id:4,
        title: "2020-10-07",
        content: "复盘总结"
    },
    {
        id:5,
        title: "2020-10-06",
        content: "复盘总结"
    }
];