<template>
  <div class="wkhmd">
    <div class="wkhmd-row1">
      <div class="name">{{ data.name }}</div>
      <div class="desc">{{ data.desc }}</div>
    </div>
    <div class="wkhmd-row2">
      <div class="name">常用机构</div>
      <div class="list">
        <div
          class="item"
          v-for="item in data.commonInstitutions"
          :key="item.id"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="wkhmd-row3">
      <div v class="name">上榜历史</div>
      <div
          v-infinite-scroll="handleInfiniteOnLoad"
          class="demo-infinite-container"
          :infinite-scroll-disabled="busy"
          :infinite-scroll-distance="10"
      >
        <a-table
          :pagination="false"
          :columns="listedHistory_columns"
          :data-source="listedHistory_data"
          rowKey="id"
        >
          <div slot="nameCode" slot-scope="nameCode">
            <a @click="viewLonghuDetail( nameCode.code, null)">
              <div class="bigtxt">{{ nameCode.name }}</div>
              <div>{{ nameCode.code }}</div>
            </a>
          </div>
          <div slot="buyAmt" slot-scope="buyAmt">
            <div
              :class="{
                red: Number(buyAmt) > 0,
                gray: Number(buyAmt) === 0,
                bignum: true,
              }"
            >
              {{ buyAmt }} 万
            </div>
          </div>
          <div slot="sellAmt" slot-scope="sellAmt, record">
            <div
              :class="{
                green: Number(record.sellAmt) > 0,
                gray: Number(record.sellAmt) === 0,
                bignum: true,
              }"
            >
              {{ sellAmt  }} 万
            </div>
          </div>
        </a-table>
        <div v-if="loading && !busy" class="demo-loading-container">
          <a-spin />
        </div>
        <div v-show="alreadyBottom" style="text-align: center;">到底啦</div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  data,
  listedHistory_columns,
  listedHistory_data,
} from "@/views/wellknownhotmoneydetail_data.js";
import global_url from "../App.vue"
export default {
  data() {
    return {
      alreadyBottom: false,
      loading: false,
      busy: false,
      data,
      listedHistory_columns,
      listedHistory_data:[],
      current_page: 0,
      totalPage: 1,
    };
  },
  activated() {
    document.getElementsByClassName('body')[0].scrollTop =localStorage['wkhmd'] || 0;
    // 根据id去获取数据
    // var idleFundId = this.$route.params.id;
    var idleFundId = this.$route.query.idleFundId;
    var baseUrl = global_url.baseUrl
    fetch(baseUrl+"/api/idle/idleFundOrgList.do?idleFundId="+idleFundId)
        .then((r) => r.json())
        .then((r) => {
          this.data = r.obj
        });

  },
  methods: {
    viewLonghuDetail(code,createDate){
      if (createDate == null || createDate ==""){
        createDate = this.$route.query.createDate;
      }
      this.$router.push({path:"/longhu_detail/",query:{code:code,createDate:createDate}})
    },

    handleInfiniteOnLoad() {
      var createDate = this.$route.query.createDate;
      var idleFundId = this.$route.query.idleFundId;
      var url = global_url.baseUrl +"/api/idle/idleRankHistoryList.do"

      if(idleFundId ==null || createDate == 'undefined'){
        alert("出错啦，游资id有误，请重新操作")
        return;
      }
      url +="?idleFundId="+idleFundId
      if (createDate != null && createDate != '' && createDate != 'undefined'){
        url +="&createDate="+createDate
      }
      const data = this.listedHistory_data;
      this.loading = true;
      const next_page = this.current_page + 1;
      fetch(
          url +
          "&pageNo=" +next_page + "&pageSize=10"
      )
          .then((r) => r.json())
          .then((r) => {
            console.log(r.pageNo + "--" + r.totalPage);
            if (next_page <= r.totalPage) {
              this.listedHistory_data = data.concat(r.rows);
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
.wkhmd {
  display: grid;
  grid-template-rows: auto auto auto;
  .name {
    font-size: 1.5rem;
    font-family: PingFang SC;
    font-weight: 800;
    color: #333333;
    line-height: 34px;
    border-bottom: 0.5px solid #80808014;
  }
  &-row1 {
    display: grid;
    grid-gap: 10px;
    padding: 20px;

    border-bottom: 10px #f4f8f9 solid;

    .desc {
      font-size: 1.2rem;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 34px;
      color: #555555;
    }
  }
  &-row2 {
    display: grid;
    grid-gap: 20px;
    padding: 20px;
    border-bottom: 10px #f4f8f9 solid;
    .list {
      display: grid;
      grid-gap: 20px;
      align-items: center;
      .item {
        font-size: 1.2rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 34px;
        border-bottom: 0.5px solid #80808014;
      }
    }
  }
  &-row3 {
    display: grid;
    .name {
      padding: 20px;
    }
  }
}
</style>
