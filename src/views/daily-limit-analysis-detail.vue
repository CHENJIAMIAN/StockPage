// 涨停分析详情
<template>
  <div class="daily-limit-analysis-detail">
    <div class="row1">{{ date }}</div>
    <div
      v-infinite-scroll="handleInfiniteOnLoad"
      class="demo-infinite-container"
      :infinite-scroll-disabled="busy"
      :infinite-scroll-distance="10"
    >
      <a-table
        :pagination="false"
        :columns="table_columns"
        :data-source="table_data"
        :customRow="click"
        rowKey="id"
      >
        <div slot="nameCode" slot-scope="nameCode">
          <a @click="$router.push(`/stock_detail/` + nameCode.code)">
            <div class="bigtxt">{{ nameCode.name }}</div>
            <div>{{ nameCode.code }}</div>
          </a>
        </div>
        <div slot="zhangdiefu" slot-scope="zhangdiefu">
          <div class="bignum red">{{ zhangdiefu }}%</div>
        </div>
        <div slot="jitianjiban" slot-scope="jitianjiban">
          <div class="bigtxt">{{ jitianjiban }}</div>
        </div>
        <div slot="lianbantianshu" slot-scope="lianbantianshu">
          <div class="bigtxt">{{ lianbantianshu }}</div>
        </div>
        <div slot="subject" slot-scope="subject">
          <div class="bigtxt">{{ subject }}</div>
        </div>
      </a-table>
      <div v-if="loading && !busy" class="demo-loading-container">
        <a-spin />
      </div>
      <div v-show="alreadyBottom" style="text-align: center;">到底啦</div>
    </div>
  </div>
</template>
<script>
import {
  table_columns,
  table_data,
} from "@/views/dailylimitanalysisdetail_data.js";
import global_url from "../App.vue";
export default {
  data() {
    return {
      loading: false,
      busy: false,
      table_columns,
      table_data: [],
      current_page: 0,
      totalPage: 1,
      alreadyBottom: false,
      date: "",
    };
  },
  created() {
    // 根据 date 去获取数据
    // var baseUrl = global_url.baseUrl;
    // fetch(baseUrl + "/api/replay/replayList.do?")
    //   .then((r) => r.json())
    //   .then((r) => {
    //     console.log(r.obj);
    //     this.table_data = r.obj;
    //   });
    // this.date = this.$route.params.date;
  },
  activated(){
    document.getElementsByClassName('demo-infinite-container')[0].scrollTop =localStorage['daily_limit_analysis_detail'] || 0;
  },
  methods: {
    // table 每一行点击事件
    click(record, index){
      return {
        on: {
          click: () => {
            this.$router.push(`/stock_detail/` + record.nameCode.code).catch(err => {err});
          }
        }
      }
    },

    handleInfiniteOnLoad() {
      this.date = this.$route.query.createDate;
      var countValue = this.$route.query.countValue;
      var beginValue = this.$route.query.beginValue;
      var endValue = this.$route.query.endValue;
      var  subject = this.$route.query.subject;
      var url = global_url.baseUrl +"/api/replay/replayList.do"
      if (this.date == null || this.date == 'undefined'){
        this.date = ""
      }
      url +="?createDate="+this.date;

      if(countValue !=null && countValue !="" && countValue !="undefined"){
        url +="&countValue="+countValue
      }
      if(beginValue !=null && beginValue !="" && beginValue !="undefined"){
        url +="&beginValue="+beginValue
      }
      if(endValue !=null && endValue !="" && endValue !="undefined"){
        url +="&endValue="+endValue
      }
      if(subject !=null && subject !="" && subject !="undefined"){
        url +="&subject="+subject
      }
      const data = this.table_data;
      this.loading = true;
      const next_page = this.current_page + 1;
      fetch(url+"&pageNo=" +next_page + "&pageSize=10")
          .then((r) => r.json())
          .then((r) => {
            if (next_page <= r.totalPage) {
              this.table_data = data.concat(r.rows);
              this.loading = false;
              this.current_page = r.pageNo;
              this.totalPage = r.totalPage;
            } else {
              console.log(r.pageNo + "--" + r.totalPage);
              this.loading = false;
              this.alreadyBottom = true;
            }
          });




    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 16px 0;
  }
}
.daily-limit-analysis-detail {
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  padding: 1rem;

  .row1 {
    border-bottom: 1px solid #f4f8fb;
    font-size: 1.5rem;
    font-family: DIN Medium;
    font-weight: 400;
    color: #333333;
    line-height: 4rem;
  }
}

.demo-infinite-container {
  overflow: auto;
  height: calc(100vh - 163px);
}
.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: calc(100% - 1rem);
  text-align: center;
}
</style>
