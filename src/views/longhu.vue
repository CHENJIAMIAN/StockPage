// 龙虎榜全览
<template>
  <div class="longhu">
    <div class="row1">
      <div class="row1-row1">龙虎榜数据全览</div>
      <div class="row1-row2">个股龙虎榜数据</div>
      <div class="row1-row3">
        <a-select
          show-search
          :value="searchValue1"
          size="large"
          placeholder="输入代码、名称或简拼"
          style="width: 100%;"
          :default-active-first-option="false"
          :show-arrow="!false"
          :filter-option="false"
          :not-found-content="null"
          @search="handleSearch1"
          @change="handleChange1"
        >
          <a-icon slot="suffixIcon" type="search" />
          <a-select-option v-for="d in searchOptions1" :key="d.key">
            {{ d.value }}
          </a-select-option>
        </a-select>
      </div>
      <div class="row1-row4">营业部查询</div>
      <div class="row1-row5">
        <a-select
          show-search
          :value="searchValue2"
          size="large"
          placeholder="输入营业部名称"
          style="width: 100%;"
          :default-active-first-option="false"
          :show-arrow="!false"
          :filter-option="false"
          :not-found-content="null"
          @search="handleSearch2"
          @change="handleChange2"
        >
          <a-icon slot="suffixIcon" type="search" />
          <a-select-option v-for="d in searchOptions2" :key="d.key">
            {{ d.value }}
          </a-select-option>
        </a-select>
      </div>
    </div>
    <div class="row2">
      <div class="row2-row1">
        <span>历史数据查询</span>
        <!-- 手机获取的日期是9/23/2020 电脑是2020/9/23 -->
        <a-date-picker
          style="float:right;"
          size="large"
          :default-value="
            today.charAt(0) === '2'
              ? moment(today, 'YYYY-MM-DD')
              : moment(today, 'MM-DD-YYYY')
          "
          @change="onDateChange"
        />
      </div>
      <div class="row2-row2">
        <span class="name">上榜个股</span>
        <span
          >{{
            today.charAt(0) === "2"
              ? moment(today, "YYYY-MM-DD").format("YYYY-MM-DD")
              : moment(today, "MM-DD-YYYY").format("YYYY-MM-DD")
          }}
        </span>
        <span>
          {{ "星期" + "日一二三四五六".charAt(new Date().getDay()) }}</span
        >
      </div>
    </div>
    <div class="row3">
      <span>{{ data.msg }}</span>
      <span class="more">更多 ></span>
    </div>
    <div class="row4">
      <a-table
        :showHeader="false"
        :pagination="false"
        :columns="table_columns"
        :data-source="table_data"
        rowKey="id"
      >
        <div slot="codeName" slot-scope="codeName">
          <div class="bigtxt black">{{ codeName.name }}</div>
          <div>{{ codeName.code }}</div>
        </div>
        <div slot="zhangfu" slot-scope="zhangfu">
          <div
            :class="{
              red: Number(zhangfu) > 0,
              green: Number(zhangfu) < 0,
              gray: Number(zhangfu) === 0,
              bignum: true,
            }"
          >
            {{ zhangfu }}%
          </div>
        </div>
        <div slot="详情" slot-scope="详情, record">
          <a
            class="bigtxt red"
            @click="$router.push(`/longhu_detail/` + record.codeName.code)"
            >详情</a
          >
        </div>
        <div slot="连板天" slot-scope="连板天">
          <a class="bigtxt blue">行情</a>
        </div>
      </a-table>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { data, table_columns, table_data } from "@/views/longhu_data.js";
import global_url from "../App.vue"
export default {
  data() {
    return {
      today: new Date().toLocaleDateString().replace(/\//g, "-"),
      data,
      table_columns,
      table_data,
      searchOptions1: [],
      searchOptions2: [],
      searchValue1: undefined, //undefined才会显示placeholder
      searchValue2: undefined, //undefined才会显示placeholder
    };
  },
  created() {
    var baseUrl = global_url.baseUrl
    fetch(baseUrl+"/api/rank/rankList.do")
        .then((r) => r.json())
        .then((r) => {
          this.table_data = r.rows
        });
  },
  methods: {
    moment,
    onDateChange(date, dateString) {
      console.log(date, dateString);
      // 根据选择date的值去获取 table_data 表数据
      this.table_data = [];
    },
    // 获取数据
    fetchSearchOptions1() {
      this.searchOptions1 = new Array(10).fill().map((i) => {
        return { key: Math.random(), value: Math.random() };
      });
    },
    handleSearch1(value) {
      this.fetchSearchOptions1();
    },
    handleChange1(value) {
      this.searchValue1 = value;
      // 根据选择的值去获取 table_data 表数据
      this.table_data = [];
    },
    // 获取数据
    fetchSearchOptions2() {
      this.searchOptions2 = new Array(10).fill().map((i) => {
        return { key: Math.random(), value: Math.random() };
      });
    },
    handleSearch2(value) {
      this.fetchSearchOptions2();
    },
    handleChange2(value) {
      this.searchValue2 = value;
      // 根据选择的值去获取 table_data 表数据
      this.table_data = [];
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .ant-select-selection {
    background: #f5f5f5;
  }
}
.longhu {
  display: grid;
  font-size: 1.2rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;

  .row1 {
    display: grid;
    align-items: end;
    grid-template-rows: 3rem 3rem 3.5rem 3rem 3.5rem;
    border-bottom: 10px #f4f8f9 solid;
    padding: 1rem;

    &-row1 {
      align-self: center;
      font-size: 1.4rem;
      font-weight: 800;
      border-bottom: 0.5px solid #80808014;
    }
  }
  .row2 {
    display: grid;
    grid-template-rows: 4rem 3.5rem;
    padding: 1rem;

    &-row1 {
      display: grid;
      align-items: center;
      grid-template-columns: auto 1fr;
      grid-gap: 1rem;
      border-bottom: 0.5px solid #80808014;
    }
    &-row2 {
      align-self: end;
      font-size: 1.2rem;
      font-weight: 400;
      color: #666666;

      .name {
        font-size: 1.4rem;
        font-weight: 800;
        color: #333333;
        margin-right: 1rem;
      }
    }
  }
  .row3 {
    height: 3rem;
    line-height: 3rem;
    padding-left: 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: #2874e8;
    background: #d4e5ff;
    .more {
      float: right;
      padding-right: 1rem;
    }
  }
  .row4 {
    display: grid;
  }
}
</style>
