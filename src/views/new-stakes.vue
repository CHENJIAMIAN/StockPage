<template>
	<div id="stakes-page">
		<div class="check-box">
			<div class="title" > {{ screenData.title}} 最新持股</div>
<!--			<a-checkbox-group>-->
<!--				<a-row>-->
<!--					<a-checkbox style="margin-right: 16px;" v-for="(list,index) in screenData.checkBoxList" :key="index" class="checkbox-item" :value="list.value">{{list.text}}</a-checkbox>-->
<!--				</a-row>-->
<!--			</a-checkbox-group>-->

      <a-select v-model="gdTypeSelected" default-value="股东类型" style="width: 10em" @change="onDateClick">
        <a-select-option  value="NSHDDETAIL">
          十大流通股东
        </a-select-option>
        <a-select-option  value="HDDETAIL">
          十大股东
        </a-select-option>

      </a-select>
      <a-select default-value="报告期" v-model="reportDateSelected" style="width: 10em; margin-left: 10px" @change="onDateClick">

        <a-select-option  v-for=" (checkValue, index) in screenData.checkBoxList"  :key="index" :value="checkValue">
          {{checkValue}}
        </a-select-option>
      </a-select>
		</div>

<!--			<div class="title" v-text="searchData.reportDate"></div>-->
      <div
          v-infinite-scroll="handleInfiniteOnLoad"
          class="demo-infinite-container"
          :infinite-scroll-disabled="busy"
          :infinite-scroll-distance="20"

      >

      <a-table
          :showHeader="true"
          :pagination="false"
          :columns="table_columns"
          :data-source="table_data"
          :customRow="historyReview"
          rowKey="id"
          :scroll="{ x: 480 }"
      >
<!--        <div slot="id" slot-scope="id">-->
<!--          <div class="content-sort">{{ id }}</div>-->
<!--        </div>-->
        <div slot="sname" slot-scope="sname">
          <div class="bigtxt ">{{ sname }}</div>
        </div>

        <div slot="price" slot-scope="price">
          <div class="bigtxt ">{{ price }}</div>
        </div>

        <div slot="ltag" slot-scope="ltag">
          <div class="content-btn2-text" >{{ltag}}</div>
        </div>
        <div slot="sharehdnum" slot-scope="sharehdnum">
          <div class="content-btn2-text" >{{sharehdnum}}</div>
        </div>
        <div slot="bz" slot-scope="bz">
          <div class="content-btn2-text" >{{bz}}</div>
        </div>
      </a-table>
        <div v-if="loading && !busy" class="demo-loading-container">
          <a-spin />
        </div>
        <div v-show="alreadyBottom" style="text-align: center">到底啦</div>
      </div>
		</div>
</template>

<script>
	import global_url from "@/App";

  export default {
		data() {
			return {
        alreadyBottom: false,
        loading: false,
        busy: false,
        current_page: 0,
        totalPage: 1,
        table_columns:
            [
              // {
              //   title: "排名",
              //   dataIndex: "id",
              //   key: "id",
              //   scopedSlots: { customRender: 'id' },
              //   width: 110
              // },
              {
                title: "股票名称",
                dataIndex: "sname",
                key: "sname",
                scopedSlots: { customRender: 'sname' },
                width: 110
              },
              {
                title: "预估成本",
                dataIndex: "price",
                key: "price",
                scopedSlots: { customRender: 'price' },
                align: 'center',
                width:90
              },
              {
                title: "市值",
                dataIndex: "ltag",
                key: "ltag",
                scopedSlots: { customRender: 'ltag' },
                align: 'center',
                width:90
              },
              {
                title: "数量",
                dataIndex: "sharehdnum",
                key: "sharehdnum",
                scopedSlots: { customRender: 'sharehdnum' },
                align: 'center'
              },
              {
                title: "变化",
                dataIndex: "bz",
                key: "bz",
                scopedSlots: { customRender: 'bz' },
                align: 'center'
              },

            ],

        table_data:[],
				screenData: {
					title: '吕强',
					checkBoxList: ["2020-09-30","2020-09-31"]
				},
				searchData:{
          reportDate:'2020-09-30',
          total:'50',
          holderListInfos:[{
            id:"1",
            sname:'拓邦股份',
            scode:'',
            price:'0',
            ltag:'0',// 流通市值
            sharehdnum:'0',//数量
            bz:'不变'//持股变动
					},{
            id:"2",
            sname:'拓邦股份',
            scode:'',
            price:'0',
            ltag:'0',// 流通市值
            sharehdnum:'0',//数量
            bz:'不变'//持股变动
					},{
            id:"3",
            sname:'拓邦股份',
            scode:'',
            price:'0',
            ltag:'0',// 流通市值
            sharehdnum:'0',//数量
            bz:'不变'//持股变动
					}]
				},
        reportDateSelected:"请选择报告日期",
        gdTypeSelected:"请选择股东类型",
			};
		},

    created() {
    },
    activated() {
		  this.busy=false
      // console.log("new stakes activated",this.busy)
      this.current_page=0
      this.handleInfiniteOnLoad()
      // document.getElementsByClassName("demo-infinite-container")[0].scrollTop =
      //     localStorage["new-stakes"] || 0;
    },
    deactivated () {  // keep-alive 组件停用时使用
      this.busy = true
    },
    methods: {

      handleInfiniteOnLoad() {
        // console.log("new stakes handleInfiniteOnLoad",this.busy)
        this.busy = true
        const data = this.table_data;
        this.loading = true;
        const next_page = this.current_page + 1;

        var query = this.$route.query
        var url = global_url.baseUrl +
            "/api/holder/holderList.do?pageSize=10"
        if (query != null && query.sharehdcode != null && query.sharehdcode !="undefined" ){
          url +="&sharehdcode="+query.sharehdcode
        }
        if (query != null && query.sharehdtype != null && query.sharehdtype !="undefined" ){
          url +="&sharehdtype="+query.sharehdtype
        }
        if(this.gdTypeSelected!="请选择股东类型"){
          url +="&gdType="+this.gdTypeSelected
        }
        if(this.reportDateSelected!="请选择报告日期"){
          url +="&reportDate="+this.reportDateSelected
        }
        // console.log("new-stakes", url)
        fetch(
            url +
            "&pageNo="+next_page
        )
            .then((r) => r.json())
            .then((r) => {
              console.log(r)
              if (next_page <= r.totalPage) {
                if(r.rows){
                  this.table_data = data.concat(r.rows[0].holderListInfos);
                  var title=r.rows[0].holderListInfos[0].sharehdname
                  this.$emit("title", title.substring(0,10)+"最新持股");
                  console.log(r.rows[0].reportDates)
                  this.screenData = {
                    title: title,
                    checkBoxList: r.rows[0].reportDates
                  }
                }

                this.loading = false;
                this.current_page = r.pageNo;
                this.totalPage = r.totalPage;
              } else {
                console.log(r.pageNo + "--" + r.totalPage);
                this.loading = false;
                this.alreadyBottom = true;
              }
            });
        this.busy = false
      },


      historyReview(record, index) {
        return {
          on: {
            click: () => {
              var query = this.$route.query
              // console.log("new stake history",record, this.$route.query)
              if (query != null && query.sharehdtype != null && query.sharehdtype !="undefined" ){
                this.$router.push({ path: "hold_history", query: { sharehdcode: record.sharehdcode,scode:record.scode,sharehdtype:query.sharehdtype } });
                // this.$router.push({ path: "new_stakes", query: { sharehdcode: record.code,sharehdtype: query.sharehdtype} });
              }else{
                // this.$router.push({ path: "new_stakes", query: { sharehdcode: record.code } });
                this.$router.push({ path: "hold_history", query: { sharehdcode: record.sharehdcode,scode:record.scode } });
              }
              // this.$router.push({ path: "new_stakes", query: { sharehdcode: record.code, sharehdtype:"2" } });
            },
          },
        };
      },

      // historyReview(sharehdcode,scode){
      //   var query = this.$route.query
      //   console.log(query)
      //   if (query != null && query.sharehdtype != null && query.sharehdtype !="undefined" ){
      //     this.$router.push({ path: "hold_history", query: { sharehdcode: sharehdcode,scode:scode,sharehdtype:query.sharehdtype } });
      //   }else{
      //     this.$router.push({ path: "hold_history", query: { sharehdcode: sharehdcode,scode:scode } });
      //   }
      //
      // },


      onDateClick(date){


        this.busy = true
        const data = [];
        this.loading = true;
        this.current_page = 0
        const next_page = this.current_page + 1;

        var query = this.$route.query
        var url = global_url.baseUrl +
            "/api/holder/holderList.do?pageSize=10"
        if (query != null && query.sharehdcode != null && query.sharehdcode !="undefined" ){
          url +="&sharehdcode="+query.sharehdcode
        }
        if (query != null && query.sharehdtype != null && query.sharehdtype !="undefined" ){
          url +="&sharehdtype="+query.sharehdtype
        }
        if(this.gdTypeSelected!="请选择股东类型"){
          url +="&gdType="+this.gdTypeSelected
        }
        if(this.reportDateSelected!="请选择报告日期"){
          url +="&reportDate="+this.reportDateSelected
        }
        // console.log("new-stakes", url)
        fetch(
            url +
            "&pageNo="+next_page
        )
            .then((r) => r.json())
            .then((r) => {
              console.log(r)
              if (next_page <= r.totalPage) {
                if(r.rows){
                  this.table_data = data.concat(r.rows[0].holderListInfos);
                  var title=r.rows[0].holderListInfos[0].sharehdname
                  this.$emit("title", title.substring(0,10)+"最新持股");
                  console.log(r.rows[0].reportDates)
                  this.screenData = {
                    title: title,
                    checkBoxList: r.rows[0].reportDates
                  }
                }

                this.loading = false;
                this.current_page = r.pageNo;
                this.totalPage = r.totalPage;
              } else {
                console.log(r.pageNo + "--" + r.totalPage);
                this.loading = false;
                this.alreadyBottom = true;
              }
            });
        this.busy = false


      }

		}

	};
</script>
<style lang="scss" scoped>
	#stakes-page{
		//width: 100%;
		//min-height: 90%;
		//background-color:#F4F8FB;
		//padding-bottom: 10px;

		.search-box {
			padding: 16px 16px 6px 16px;
			background-color: #ffffff;
			display: flex;
			align-items: center;

      .hintsbox{
        opacity:0.8;
        width:75%;
        border-radius:15px;
        background-color: #91d5ff;
      }

			.search-input-box {
				width: 80%;
				height: 46px;
				background: #F5F5F5;
				display: inline-flex;
				align-items: center;
				margin-right: 10px;
				border-radius: 4px;

				.search-input-icon {
					margin: 0 10px;
					width: 28px;
					height: 28px;
					background-image: url(../assets/img/search-icon.png);
					background-size: 100% 100%;
					background-repeat: no-repeat;
				}

				.search-input {
					width: calc(100% - 58px);
					height: 28px;
					border: none;
					outline: none;
					background: #F5F5F5;
					padding: 0;
					font-size: 16px;
				}
			}

			.search-btn {
				width: calc(20% - 10px);
				height: 46px;
				background: #3984F7;
				border-radius: 6px;
				line-height: 46px;
				text-align: center;
				color: #ffffff;
				font-size: 16px;
			}
		}
		.check-box{
			padding: 0px 16px 16px 16px;
			background-color: #ffffff;
			.title{
				height: 60px;
				font-size: 18px;
				font-weight: 800;
				color: #333333;
				line-height: 60px;

			}
		}

    .demo-infinite-container {
      overflow: auto;
      height: calc(90vh - 126px);
    }
    .demo-loading-container {
      position: absolute;
      bottom: 40px;
      width: 90%;
      text-align: center;
    }


	}



</style>
