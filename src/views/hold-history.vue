<template>
	<!-- 持仓历史 -->
	<div id="history">
		<div class="content" v-for="(list,indexs) in listData" :key="indexs">
			<div class="title" v-text="list.title"></div>
			<a-table :scroll="{ x: 480 }" :pagination="false" :columns="list.table_columns" :data-source="list.table_data" rowKey="id">
				<div slot="id" slot-scope="id">
					<div class="bigtxt">{{ id }}</div>
					<div>{{ id }}</div>
				</div>
				<div slot="sname" slot-scope="sname">
					<div class="bigtxt">{{ sname }}</div>
				</div>
				<div slot="sharehdnum" slot-scope="sharehdnum">
					<div style="color: #3984F7;">{{ sharehdnum }}</div>
				</div>
				<div slot="holdChange" slot-scope="holdChange">
					<div class="bignum">{{ holdChange }}</div>
				</div>
				<div slot="reportDate" slot-scope="reportDate">
					<div class="bigtxt" v-text="">{{list.reportDate}}</div>
				</div>
			</a-table>
		</div>
	</div>
</template>

<script>
	import global_url from "@/App";

  var table_columns = [{
			title: "序号",
			dataIndex: "id",
			key: "id",
			width: 50,
			align: 'center',
      customRender: (value, row, index, column) => {
        // text, record, index, column
        if (index < 10)
          return '0' + (index + 1);
        else
          return index + 1;
      },
		},
		{
			title: "股票",
			dataIndex: "sname",
			key: "sname",
			scopedSlots: {
				customRender: 'sname'
			},
			align: 'center'
		},
		{
			title: "持股数量",
			dataIndex: "sharehdnum",
			key: "sharehdnum",
			scopedSlots: {
				customRender: 'sharehdnum'
			},
			width: 150,
			align: 'center'
		},
		{
			title: "持股变动",
			dataIndex: "bz",
			key: "bz",
			scopedSlots: {
				customRender: 'bz'
			},
			align: 'center'
		},
		{
			title: "报告期",
			dataIndex: "reportDate",
			key: "reportDate",
			scopedSlots: {
				customRender: 'reportDate'
			},
			align: 'center'
		}
	];
	var table_data = [{
		id: '01',
    sname: "通俗重卡",
    sharehdnum: "845.22",
    bz: "新进"
	},{
		id: '02',
    scode: "通俗重卡",
    sharehdnum: "845.22",
    bz: "新进"
	},{
		id: '03',
    scode: "通俗重卡",
		holdNum: "845.22",
    bz: "增持"
	},{
		id: '04',
    scode: "通俗重卡",
		holdNum: "845.22",
    bz: "增持"
	},{
		id: '05',
    scode: "通俗重卡",
		holdNum: "845.22",
    bz: "新进"
	},{
		id: '06',
    scode: "通俗重卡",
		holdNum: "845.22",
    bz: "新进"
	}];
	export default {
		data() {
			return {
				listData: [{
					title: '吕强-拓邦股份十大股东持仓记录',
          reportDate:'',
					table_columns: table_columns,
					table_data: table_data,
				}, {
					title: '吕强-拓邦股份十大股东持仓记录',
          reportDate:'',
					table_columns: table_columns,
					table_data: table_data,
				}],

			};
		},
    activated() {
      var query = this.$route.query
      var url = global_url.baseUrl +
          "/api/holder/holderHistory.do?pageSize=10"
      if (query != null && query.sharehdcode != null && query.sharehdcode !="undefined" ){
        url +="&sharehdcode="+query.sharehdcode
      }
      if (query != null && query.sharehdtype != null && query.sharehdtype !="undefined" ){
        url +="&sharehdtype="+query.sharehdtype
      }
      if(query != null && query.scode != null && query.scode !="undefined"){
        url +="&scode="+query.scode
      }

      // const data = this.table_data;
      // this.loading = true;
      // const next_page = this.current_page + 1;
      // console.log(url+="&pageNo=" +next_page)

      fetch(
          url
      )
          .then((r) => r.json())
          .then((r) => {
            console.log('r==', r)
            if(r.rows){
              this.listData=[{
                // title: '吕强-拓邦股份十大股东持仓记录',
                title: r.rows[0].holderType,
                reportDate:r.rows[0].reportDate,
                table_columns: table_columns,
                table_data: r.rows[0].stockHolderInfos,
              }, {
                title: r.rows[1].holderType,
                reportDate:r.rows[1].reportDate,
                table_columns: table_columns,
                table_data: r.rows[1].stockHolderInfos,
              }]
            }
          });
    },
		mounted() {

		},
		methods: {

		}

	};
</script>

<style lang="scss" scoped>
	#history {
		background-color: #F4F8FB;
		min-height: 100%;

		.content {
			margin-bottom: 10px;
			background-color: #ffffff;
			padding: 0 16px;

			.title {
				width: 100%;
				height: 53px;
				line-height: 53px;
				font-size: 18px;
				font-weight: 800;
				color: #333333;
			}
		}
		.ant-table-thead>tr>th{
			text-align: center !important;
		}

	}
</style>
