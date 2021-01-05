<template>
  <div class="wkhm">
    <div class="row2">
      <div class="row2-row1">
        <span>历史数据查询</span>
        <!-- 手机获取的日期是9/23/2020 电脑是2020/9/23 -->
        <a-date-picker
          style="float: right"
          size="large"
          @change="onDateChange"
        />
      </div>
      <div class="row2-row2">
        <span class="name">上龙虎榜的知名游资</span>
        <span
          >{{
            today.charAt(0) === "2"
              ? moment(today, "YYYY-MM-DD").format("YYYY-MM-DD")
              : moment(today, "MM-DD-YYYY").format("YYYY-MM-DD")
          }}
        </span>
        <span>
          <!--          {{ "星期" + "日一二三四五六".charAt(new Date().getDay()) }}</span-->
          {{
            "星期" +
            "日一二三四五六".charAt(
              new Date(
                today.charAt(0) === "2"
                  ? moment(today, "YYYY-MM-DD").format("YYYY-MM-DD")
                  : moment(today, "MM-DD-YYYY").format("YYYY-MM-DD")
              ).getDay()
            )
          }}</span
        >
      </div>
    </div>

    <!--    <div class="wkhm-row1">-->
    <!--      <div class="name">上龙虎榜的知名游资</div>-->
    <!--      <span-->
    <!--      >{{-->
    <!--          today.charAt(0) === "2"-->
    <!--              ? moment(today, "YYYY-MM-DD").format("YYYY-MM-DD")-->
    <!--              : moment(today, "MM-DD-YYYY").format("YYYY-MM-DD")-->
    <!--        }}-->
    <!--        </span>-->
    <!--    </div>-->

    <div class="wkhm-row2">
      <div
        class="block"
        v-for="personObj in data.personObjlist"
        :key="personObj.id"
      >
        <div
          class="block-user"
          @click="viewDetail(personObj.idleFundId, today)"
        >
          {{ personObj.name }}
        </div>
        <div class="block-row">
          <div
            class="block-row-square"
            v-for="item in personObj.stocks"
            :key="item.id"
          >
            <div class="block-row-square-name">
              <a @click="viewLonghuDetail(item.code, today)">{{ item.name }}</a>
            </div>

            <div class="block-row-square-type">
              <span
                :class="{
                  red: Number(item.zhangdiefu) > 0,
                  green: Number(item.zhangdiefu) < 0,
                  gray: Number(item.zhangdiefu) === 0,
                }"
              >
                {{ item.zhangdiefu }}%
              </span>
            </div>
            <div class="block-row-square-amount">
              <span
                :class="{
                  red: Number(item.buyamt) > 0,
                  green: Number(item.buyamt) < 0,
                  gray: Number(item.buyamt) === 0,
                  tag: true,
                }"
                class="class1"
                >{{ "买" }}</span
              >
              <span
                :class="{
                  red: Number(item.buyamt) > 0,
                  gray: Number(item.buyamt) === 0,
                }"
                class="class2"
              >
                {{ item.buyamt }}<span class="class3">{{ item.unit }}</span>
              </span>
              <br />
              <span
                :class="{
                  green: Number(item.saleamt) > 0,
                  gray: Number(item.saleamt) === 0,
                  tag: true,
                }"
                class="class1"
                >{{ "卖" }}</span
              >
              <span
                :class="{
                  green: Number(item.saleamt) > 0,
                  gray: Number(item.saleamt) === 0,
                }"
                class="class2"
              >
                {{ item.saleamt }}<span class="class3">{{ item.unit }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wkhm-row3">
      <div class="name">知名游资列表</div>
      <div class="namelist">
        <div
          v-for="item in data.personNamelist"
          :key="item.id"
          @click="viewDetail(item.idleFundId, null)"
        >
          <!--          @click="$router.push('/wkhmd/' + item.idleFundId)"-->

          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import { data } from "@/views/wellknownhotmoney_data.js";
import global_url from "../App.vue";
export default {
  data() {
    return {
      data,
      today: new Date().toLocaleDateString().replace(/\//g, "-"),
    };
  },

  activated() {
    document.getElementsByClassName("body")[0].scrollTop =
      localStorage["wkhm"] || 0;
    var baseUrl = global_url.baseUrl;
    fetch(baseUrl + "/api/idle/idleList.do")
      .then((r) => r.json())
      .then((r) => {
        this.data = r.obj;
        this.today = r.obj.today;
      });
  },
  methods: {
    viewLonghuDetail(code, createDate) {
      this.$router.push({
        path: "/longhu_detail/",
        query: { code: code, createDate: createDate },
      });
    },

    viewDetail(idleFundId, createDate) {
      this.$router.push({
        path: "/wkhmd/",
        query: { idleFundId: idleFundId, createDate: createDate },
      });
    },

    onDateChange(date, dateString) {
      console.log(date, dateString);
      var baseUrl = global_url.baseUrl;
      fetch(baseUrl + "/api/idle/idleList.do?createDate=" + dateString)
        .then((r) => r.json())
        .then((r) => {
          this.data = r.obj;
          this.today = dateString;
        });
    },

    moment,
  },
};
</script>
<style lang="scss" scoped>
.class1 {
  font-size: 6.4px;
}
.class2 {
  background: unset;
  font-size: 16px;
}
.class3 {
  font-size: 8px;
}
.wkhm {
  display: grid;
  grid-template-rows: auto auto auto;
  .name {
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #333333;
    line-height: 34px;
    border-bottom: 0.5px solid #80808014;
  }

  .row2 {
    display: grid;
    grid-template-rows: 64px 56px;
    padding: 16px;

    &-row1 {
      display: grid;
      align-items: center;
      grid-template-columns: auto 1fr;
      grid-gap: 16px;
      border-bottom: 0.5px solid #80808014;
    }
    &-row2 {
      align-self: end;
      font-size: 19.2px;
      font-weight: 400;
      color: #666666;

      .name {
        font-size: 22.4px;
        font-weight: 800;
        color: #333333;
        margin-right: 16px;
      }
    }
  }

  &-row1 {
    display: grid;
    grid-auto-flow: column;
    padding: 20px;
    align-items: center;
    border-bottom: 1px solid #f4f8fb;

    img,
    .anticon {
      justify-self: end;
      width: 25px;
    }
  }
  &-row2 {
    display: grid;
    grid-gap: 20px;
    padding: 20px;
    border-bottom: 10px #f4f8f9 solid;
    .block {
      display: grid;
      grid-gap: 10px;
      &-user {
        font-size: 19.2px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #3984f7;
        line-height: 34px;
      }
      &-row {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 1fr 1fr 1fr;

        &-square {
          display: grid;
          justify-items: center;
          align-items: center;
          border-radius: 5px;
          padding: 10px 1px 10px 1px;
          box-shadow: 0px 2px 9px 6px rgba(0, 0, 0, 0.05);
          &-name {
            font-size: 19.2px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #333333;
            line-height: 34px;
          }
          &-type {
            font-size: 17.6px;
            font-family: DIN Medium;
            font-weight: 400;
            color: #ea3031;
            line-height: 34px;
          }
          &-amount {
            font-size: 19.2px;
            font-family: DIN Medium;
            font-weight: 400;
            color: #ea3031;
            line-height: 34px;
            .tag {
              border-radius: 2px;
              font-size: 11.2px;
              font-family: PingFang SC;
              font-weight: 500;
              line-height: 34px;
            }
            .red {
              background: #e6001238;
            }
            .green {
              background: #00800024;
            }
          }
        }
      }
    }
  }
  &-row3 {
    display: grid;
    padding: 20px;
    .namelist {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      font-size: 20.8px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 64px;
    }
  }
}
</style>
