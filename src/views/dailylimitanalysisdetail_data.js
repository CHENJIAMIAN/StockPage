export const table_columns = [
    {
        title: "代码名称",
        dataIndex: "nameCode",
        key: "nameCode",
        scopedSlots: { customRender: 'nameCode' },
    },
    {
        title: "涨幅",
        dataIndex: "zhangdiefu",
        key: "zhangdiefu",
        scopedSlots: { customRender: 'zhangdiefu' },
        align: 'right'
    },
    {
        title: "几天几板",
        dataIndex: "jitianjiban",
        key: "jitianjiban",
        scopedSlots: { customRender: 'jitianjiban' },
        align: 'right'
    },
    {
        title: "连板天",
        dataIndex: "lianbantianshu",
        key: "lianbantianshu",
        scopedSlots: { customRender: 'lianbantianshu' },
        align: 'right'
    },
    {
        title: "短线主题",
        dataIndex: "subject",
        key: "subject",
        customRender: (value, row, index, column) => {
            // text, record, index, column
            column.class = 'bigtxt'
            const obj = {
                children: value,
                attrs: {}
            };
            if (index === 0) {
                obj.attrs.rowSpan = 1;
            }
            if (index === 1) {
                obj.attrs.rowSpan = 1;
            }
            //
            if (index === 2) {
                obj.attrs.rowSpan = 1;
            }
            if (index === 3) {
                obj.attrs.rowSpan = 1;
            }
            //
            if (index === 4) {
                obj.attrs.rowSpan = 1;
            }
            if (index === 5) {
                obj.attrs.rowSpan = 1;
            }
            return obj;
        },
        // scopedSlots: { customRender: '短线主题' },
        align: 'right'
    },
];

export const table_data = [
    {
        id: 0,
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        jitianjiban: "4天4板",
        lianbantianshu: "4",
        subject: "国防军工",
    },
    {
        id: 1,
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        jitianjiban: "4天4板",
        lianbantianshu: "4",
        subject: "国防军工",
    },
    {
        id: 2,
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        jitianjiban: "4天4板",
        lianbantianshu: "4",
        subject: "国防军工",
    },
    {
        id: 3,
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        jitianjiban: "4天4板",
        lianbantianshu: "4",
        subject: "国防军工",
    },
    {
        id: 4,
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        jitianjiban: "4天4板",
        lianbantianshu: "4",
        subject: "国防军工",
    },
    {
        id: 5,
        nameCode: {
            name: "阿里巴巴",
            code: '6003001'
        },
        zhangdiefu: "+8.80",
        jitianjiban: "4天4板",
        lianbantianshu: "4",
        subject: "国防军工",
    }
];

export const date = '2020-09-20';