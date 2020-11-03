<template>
  <div class="review-summary">
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
          rowKey="id"
      >
        <div slot="reviewTitle" slot-scope="reviewTitle">
          <div class="red">{{ reviewTitle }}</div>
        </div>
        <div slot="content" slot-scope="content">
          <div class="bignum">{{ content }}</div>
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
import {table_columns, table_data} from "@/views/review_summary_data";
import global_url from "@/App";
export default {
  data() {

    return {
      alreadyBottom: false,
      loading: false,
      busy: true,
      table_columns,
      table_data:[],
      current_page: 0,
      totalPage: 1,
    };
  },
  created() {
    // var code = this.$route.params.code;
    // fetch(global_baseUrl.baseUrl + "/api/popular/popularList.do?pageSize=10")
    //   .then((r) => r.json())
    //   .then((r) => {
    //     console.log(r.rows)
    //     this.table_data = r.rows;
    //     this.current_page = r.pageNo;
    //     this.totalPage = r.totalPage
    //   });

  },
  activated(){
    document.getElementsByClassName('demo-infinite-container')[0].scrollTop =localStorage['review_summary'] || 0;
  },
  methods:{

    handleInfiniteOnLoad() {
      var query = this.$route.query
      console.log(this.$route.query)
      var url = global_url.baseUrl +
          "/api/marketReview/reviews.do?pageSize=10"
      if (query != null && query.createDate != null && query.createDate !="undefined" ){
        url +="&createDate="+query.createDate
      }

      const data = this.table_data;
      this.loading = true;
      const next_page = this.current_page + 1;

      fetch(
          url+="&pageNo=" +
          next_page
      )
          .then((r) => r.json())
          .then((r) => {
            console.log(r.rows)
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
  }

};
</script>
<style lang="scss" scoped>
.demo-infinite-container {
  overflow: auto;
  height: calc(100vh - 126px);
}
.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>

<!--// 市场人气-->
<!--<template>-->
<!--  <div class="market-popularity">-->
<!--    <div-->
<!--        v-infinite-scroll="handleInfiniteOnLoad"-->
<!--        class="demo-infinite-container"-->
<!--        :infinite-scroll-disabled="busy"-->
<!--        :infinite-scroll-distance="10"-->
<!--    >-->
<!--      <a-table-->
<!--          :pagination="false"-->
<!--          :columns="table_columns"-->
<!--          :data-source="table_data"-->
<!--          rowKey="id"-->
<!--      >-->
<!--        <div slot="reviewTitle" slot-scope="reviewTitle">-->
<!--          <div class="bigtxt">{{ reviewTitle}}</div>-->
<!--          <div>{{ reviewTitle}}</div>-->
<!--        </div>-->
<!--        <div slot="content" slot-scope="content">-->
<!--          <div class="bignum red">{{ content }}</div>-->
<!--        </div>-->
<!--      </a-table>-->
<!--      <div v-if="loading && !busy" class="demo-loading-container">-->
<!--        <a-spin />-->
<!--      </div>-->
<!--      <div v-show="alreadyBottom" style="text-align: center;">到底啦</div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--import { table_columns, table_data } from "@/views/marketpopularity_data.js";-->

<!--import global_url from "../App.vue";-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      alreadyBottom: false,-->
<!--      loading: false,-->
<!--      busy: false,-->
<!--      table_columns,-->
<!--      table_data: [],-->
<!--      searchOptions: [],-->
<!--      searchValue: undefined, //undefined才会显示placeholder-->
<!--      current_page: 0,-->
<!--      totalPage: 1,-->
<!--    };-->
<!--  },-->
<!--  created() {-->

<!--  },-->
<!--  methods: {-->
<!--    handleInfiniteOnLoad() {-->
<!--      const data = this.table_data;-->
<!--      this.loading = true;-->
<!--      const next_page = this.current_page + 1;-->
<!--      fetch(-->
<!--          global_url.baseUrl +-->
<!--          "/api/popular/popularList.do?pageNo=" +-->
<!--          next_page +-->
<!--          "&pageSize=10"-->
<!--      )-->
<!--          .then((r) => r.json())-->
<!--          .then((r) => {-->
<!--            console.log(r.pageNo + "&#45;&#45;" + r.totalPage);-->
<!--            if (next_page <= r.totalPage) {-->
<!--              this.table_data = data.concat(r.rows);-->
<!--              this.loading = false;-->
<!--              this.current_page = r.pageNo;-->
<!--              this.totalPage = r.totalPage;-->
<!--            } else {-->
<!--              console.log(r.pageNo + "&#45;&#45;" + r.totalPage);-->
<!--              this.loading = false;-->
<!--              this.alreadyBottom = true;-->
<!--            }-->
<!--          });-->
<!--    },-->

<!--  },-->
<!--};-->
<!--</script>-->
<!--<style lang="scss" scoped>-->
<!--.demo-infinite-container {-->
<!--  overflow: auto;-->
<!--  height: calc(100vh - 126px);-->
<!--}-->
<!--.demo-loading-container {-->
<!--  position: absolute;-->
<!--  bottom: 40px;-->
<!--  width: 100%;-->
<!--  text-align: center;-->
<!--}-->
<!--</style>-->
