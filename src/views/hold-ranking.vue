<template>
  <!-- 最新持股排名 -->
  <div id="hold-ranking">
    <!--    <div class="search-box">-->
    <!--      <div class="search-input-box">-->
    <!--        <div class="search-input-icon"></div>-->
    <!--        <input class="search-input" placeholder="输入牛散名称" />-->
    <!--      </div>-->
    <!--      <div class="search-btn">搜索</div>-->
    <!--    </div>-->

    <div class="search">
      <a-input-search
        size="large"
        placeholder=" 牛散、基金、机构名称"
        v-model="searchKey"
        ref="searchInput"
        v-on:keyup="whenInput($event)"
        v-on:blur="closeHintsBox()"
        @search="handleZhenguClick"
      >
        <a-icon slot="prefix" type="search" class="class1" />

        <a-button type="primary" slot="enterButton"> 搜索 </a-button>
      </a-input-search>
      <span v-bind:searchkeyCode="searchkeyCode" v-show="false" />
      <span v-bind:searchkeyCode="sharehdtype" v-show="false" />
      <div v-show="searchCauseError" class="searchCauseError">
        <span class="red class2">{{ errorMessage }}</span>
      </div>
      <div
        class="hintsbox ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft"
        v-show="showHintsBox"
      >
        <div
          tabindex="-1"
          style="overflow: auto; transform: translateZ(0px)"
          class="ant-select-dropdown-content"
        >
          <ul
            class="hintslist ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root"
          >
            <li
              :key="item.code + item.name"
              v-for="(item, index) in hints"
              ref="hint"
              class="hint ant-select-dropdown-menu-item"
              v-on:click="fillInput(index)"
              v-cloak
            >
              <span>{{ item.name }}</span>
              <span style="display: none">{{ item.code }}</span>
              <span style="display: none">{{ item.sharehdtype }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

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
        :customRow="ReviewClick"
        rowKey="id"
      >
        <div slot="rank" slot-scope="rank">
          <div class="content-sort">{{ rank }}</div>
        </div>
        <div slot="name" slot-scope="name">
          <div class="bigtxt">{{ name }}</div>
        </div>

        <div slot="total" slot-scope="total">
          <div class="bigtxt">{{ total }}</div>
        </div>

        <div slot="code" slot-scope="code">
          <div class="content-btn2-text">查看</div>
        </div>
      </a-table>

      <!--      <div class="list-box">-->
      <!--        <div class="list" v-for="(list,index) in table_data" :key="index">-->
      <!--          <div class="list-sort">{{list.id}}</div>-->
      <!--          <div class="list-name">{{list.name}} ({{list.total}}只)</div>-->
      <!--&lt;!&ndash;          <div class="list-btn">{{list.btn}}</div>&ndash;&gt;-->
      <!--          <div class="list-btn" @click="holderReview(list.code)">查看</div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <a-table-->
      <!--          :pagination="false"-->
      <!--          :columns="table_columns"-->
      <!--          :data-source="table_data"-->
      <!--          rowKey="id"-->
      <!--      >-->
      <!--        <div slot="reviewTitle" slot-scope="name">-->
      <!--          <div class="red">{{ name }}</div>-->
      <!--        </div>-->
      <!--        <div slot="content" slot-scope="total">-->
      <!--          <div class="bignum">{{ total }}</div>-->
      <!--        </div>-->
      <!--      </a-table>-->

      <div v-if="loading && !busy" class="demo-loading-container">
        <a-spin />
      </div>
      <div v-show="alreadyBottom" style="text-align: center">到底啦</div>
    </div>

    <!--    <div class="search-box">-->
    <!--      <div class="search-input-box">-->
    <!--        <div class="search-input-icon"></div>-->
    <!--        <input class="search-input" placeholder="输入牛散名称" />-->
    <!--      </div>-->
    <!--      <div class="search-btn">搜索</div>-->
    <!--    </div>-->
    <!--		<div class="list-box">-->
    <!--			<div class="list" v-for="(list,index) in listData" :key="index">-->
    <!--				<div class="list-sort">{{index + 1}}</div>-->
    <!--				<div class="list-name">{{list.name}}</div>-->
    <!--				<div class="list-btn">{{list.btn}}</div>-->
    <!--			</div>-->
    <!--		</div>-->
  </div>
</template>

<script>
import { table_columns,table_data } from "@/views/hold_ranking_data";

import global_url from "@/App";

export default {
  data() {
    return {
      searchKey: "",
      searchkeyCode: "",
      sharehdtype: "",
      hints: [],
      searchCauseError: false,
      errorMessage: "请输入牛散、基金、机构名称",
      searchSelect: false,
      showHintsBox: false,
      activeNo: -1,

      alreadyBottom: false,
      loading: false,
      busy: false,
      table_data,
      current_page: 0,
      totalPage: 1,
      table_columns: [
        {
          title: "排名",
          dataIndex: "rank",
          key: "rank",
          scopedSlots: { customRender: "rank" },
          width: 110,
          align: "center",
        },
        {
          title: "代码名称",
          dataIndex: "name",
          key: "name",
          scopedSlots: { customRender: "name" },
          width: 110,
          align: "center",
        },
        {
          title: "数量",
          dataIndex: "total",
          key: "total",
          scopedSlots: { customRender: "total" },
          align: "center",
        },
        {
          title: "操作",
          dataIndex: "code",
          key: "code",
          scopedSlots: { customRender: "code" },
          align: "center",
        },
      ],
      listData: [
        {
          name: "吕强(100只)吕强(100只)吕强(100只)吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)",
          btn: "查看",
        },
        {
          name: "吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)吕强(100只)吕强(100只)吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)",
          btn: "查看",
        },
        {
          name: "吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)吕强(100只)吕强(100只)吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)",
          btn: "查看",
        },
        {
          name: "吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)吕强(100只)吕强(100只)吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)",
          btn: "查看",
        },
        {
          name: "吕强(100只)",
          btn: "解锁",
        },
        {
          name: "吕强(100只)",
          btn: "解锁",
        },
      ],
    };
  },

  activated() {
    var query = this.$route.query;
    if (
      query != null &&
      query.sharehdtype != null &&
      query.sharehdtype != "undefined"
    ) {
      if (query.sharehdtype == "1") {
        document.title = "牛散最新持股排名";
        this.$emit("title", document.title);
        console.log("1");
      } else if (query.sharehdtype == "2") {
        document.title = "基金最新持股排名";
        this.$emit("title", document.title);
        console.log("2");
      }
    }

    this.current_page = 0;
    this.table_data = [];
    console.log(
      "hold-ranking activated",
      "busy",
      this.busy,
      "current_page",
      this.current_page
    );

    this.handleInfiniteOnLoad();
  },

  // deactivated () {  // keep-alive 组件停用时使用
  //   this.busy = true
  //   console.log("hold-ranking deactivated", this.busy)
  //
  // },

  methods: {
    handleInfiniteOnLoad() {
      console.log("hold-ranking handleInfiniteOnLoad", this.busy);
      var query = this.$route.query;

      var url =
        global_url.baseUrl +
        "/api/holder/countHolder.do?pageSize=50&groupKey=sharehdname";
      if (
        query != null &&
        query.sharehdtype != null &&
        query.sharehdtype != "undefined"
      ) {
        url += "&sharehdtype=" + query.sharehdtype;
      } else {
        url += "&sharehdtype=1";
      }

      const data = this.table_data;
      this.loading = true;
      const next_page = this.current_page + 1;
      console.log((url += "&pageNo=" + next_page));

      fetch((url += "&pageNo=" + next_page))
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

    ReviewClick(record, index) {
      return {
        on: {
          click: () => {
            var query = this.$route.query;
            console.log(this.$route.query);
            if (
              query != null &&
              query.sharehdtype != null &&
              query.sharehdtype != "undefined"
            ) {
              this.$router.push({
                path: "new_stakes",
                query: {
                  sharehdcode: record.code,
                  sharehdtype: query.sharehdtype,
                },
              });
            } else {
              this.$router.push({
                path: "new_stakes",
                query: { sharehdcode: record.code },
              });
            }
            // this.$router.push({ path: "new_stakes", query: { sharehdcode: record.code, sharehdtype:"2" } });
          },
        },
      };
    },

    holderReview(sharehdcode) {
      var query = this.$route.query;
      if (
        query != null &&
        query.sharehdtype != null &&
        query.sharehdtype != "undefined"
      ) {
        this.$router.push({
          path: "new_stakes",
          query: { sharehdcode: sharehdcode, sharehdtype: query.sharehdtype },
        });
      } else {
        this.$router.push({
          path: "new_stakes",
          query: { sharehdcode: sharehdcode },
        });
      }
    },

    handleZhenguClick() {
      let code = this.searchkeyCode;
      let sharehdtype = this.sharehdtype;
      console.log("code===", code, "sharehdtype=", sharehdtype);
      if (code == "" || typeof code == "undefined") {
        this.$refs.searchInput.focus();
        this.errorMessage = "请输入牛散、基金、机构名称";
        this.searchCauseError = true;
        return;
      }

      if (this.searchCauseError) {
        this.$refs.searchInput.focus();
        this.searchCauseError = false;
        return;
      }
      if (!this.searchSelect) {
        this.searchCauseError = true;
        this.$refs.searchInput.focus();
        this.errorMessage = "请选择搜索结果中匹配中的牛散/基金/机构名称";
        return;
      }

      console.log(code);
      this.$router.push({
        path: "new_stakes",
        query: { sharehdcode: code, sharehdtype: sharehdtype },
      });
    },

    //用户输入的时候
    whenInput: function ($event) {
      var len = this.hints.length;

      //Down键事件
      if ($event.keyCode == 40) {
        //划到最后一项的时候
        if (this.activeNo >= len - 1) {
          console.log("到底了");
          return;
        }
        this.activeNo++;
        return;
      }

      //Up键事件
      if ($event.keyCode == 38) {
        if (this.activeNo <= 0) {
          console.log("到顶了");
          return;
        }

        this.activeNo--;
        return;
      }

      //按Enter键
      if ($event.keyCode == 13) {
        this.fillInput(this.activeNo);
      }

      if (!this.searchKey) {
        this.closeHintsBox();
        return;
      }

      if (
        $event.keyCode !== 38 &&
        $event.keyCode !== 40 &&
        $event.keyCode !== 13
      ) {
        this.getHintsList();
      }
    },

    //获取候选列表
    getHintsList: function () {
      var baseUrl = global_url.baseUrl;
      fetch(
        baseUrl + "/api/holder/stockCodeFuzzy.do?sharehdname=" + this.searchKey
      )
        .then((r) => r.json())
        .then((r) => {
          if (r.obj == null) {
            this.searchCauseError = true;
            this.$refs.searchInput.focus();
            this.errorMessage = "请输入正确的牛散/基金/机构名称";
          } else if (
            r.obj.length == 1 &&
            (this.searchKey == r.obj[0].code || this.searchKey == r.obj[0].name)
          ) {
            this.searchCauseError = false;
            this.searchSelect = true;
          } else {
            this.searchCauseError = false;
            this.searchSelect = false;
          }
          this.hints = r.obj || [];
          console.log("hints=", this.hints);
        });
      this.showHintsBox = true;
      this.hotSearchShow = false;
    },

    //依据hints数组下标值填充输入框
    fillInput: function (index) {
      console.log("fillInput=", index, ",", this.hints[index]);
      this.searchKey = this.hints[index].name;
      this.searchkeyCode = this.hints[index].code;
      this.sharehdtype = this.hints[index].sharehdtype;
      this.showHintsBox = false;
      this.searchSelect = true;
      this.closeHintsBox();
    },

    //关闭候选框
    closeHintsBox: function () {
      setTimeout(() => {
        // this.hints = [];
        this.showHintsBox = false;
        this.activeNo = -1;
      }, 280);
    },
  },
};
</script>
<style lang="scss" scoped>
.class1 {
  font-size: 20.8px;
  color: "#c6c4c7";
}
.class2 {
  font-size: 8px;
}
#hold-ranking {
  width: 100%;
  //padding: 0 16px 16px 16px;

  .search {
    padding: 16px 16px 6px 16px;
    background-color: #ffffff;

    .hintsbox {
      opacity: 0.8;
      width: 75%;
      border-radius: 15px;
      background-color: #91d5ff;
    }
  }

  .search-box {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f4f8fb;

    .search-input-box {
      width: 80%;
      height: 46px;
      background: #f5f5f5;
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
        background: #f5f5f5;
        padding: 0;
        font-size: 16px;
      }
    }

    .search-btn {
      width: calc(20% - 10px);
      height: 46px;
      background: #3984f7;
      border-radius: 6px;
      line-height: 46px;
      text-align: center;
      color: #ffffff;
      font-size: 16px;
    }
  }

  .list-box {
    display: flex;
    flex-wrap: wrap;

    .list {
      flex: 1;
      min-width: 50%;
      max-width: 50%;
      height: 60px;
      display: inline-flex;
      align-items: center;
      border-bottom: 1px solid #f4f8fb;
      font-size: 16px;

      &-sort {
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        color: #ea3031;
        margin-right: 5px;
        // background: #CDCDCD;
      }

      &-name {
        width: calc(90% - 67px);
        color: #333333;
        margin-right: 5%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &-btn {
        width: 44px;
        height: 26px;
        border: 1px solid #3984f7;
        border-radius: 12px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #3984f7;
      }
    }

    .list:nth-of-type(1) .list-sort {
      background-color: #ea3031;
      color: #ffffff;
    }

    .list:nth-of-type(2) .list-sort {
      background-color: #fe6c2c;
      color: #ffffff;
    }

    .list:nth-of-type(3) .list-sort {
      background-color: #feb826;
      color: #ffffff;
    }
  }
}
</style>
