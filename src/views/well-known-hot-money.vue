<template>
  <div class="wkhm">
    <div class="wkhm-row1">
      <div class="name">上龙虎榜的知名游资</div>
      <img src="../assets/img/rili.png" />
    </div>

    <div class="wkhm-row2">
      <div
        class="block"
        v-for="personObj in data.personObjlist"
        :key="personObj.id"
      >
        <div class="block-user">{{ personObj.name }}</div>
        <div class="block-row">
          <div
            class="block-row-square"
            v-for="item in personObj.stocks"
            :key="item.id"
          >
            <div class="block-row-square-name">{{ item.name }}</div>
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
                >{{"买入" }}</span
              >
              <span
                :class="{
                  red: Number(item.buyamt) > 0,
                  gray: Number(item.buyamt) === 0,
                }"
                style="background:unset;"
              >
                {{ item.buyamt }}{{ item.unit }}
              </span>
              <span
                  :class="{
                  green: Number(item.saleamt) > 0,
                  gray: Number(item.saleamt) === 0,
                  tag: true,
                }"
              >{{ "卖出" }}</span >
                <span
                    :class="{
                  green: Number(item.saleamt) > 0,
                  gray: Number(item.saleamt) === 0,
                }"
                    style="background:unset;"
                >
                {{ item.saleamt }}{{ item.unit }}
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
          @click="$router.push('/wkhmd/' + item.idleFundId)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { data } from "@/views/wellknownhotmoney_data.js";
import global_url from "../App.vue"
export default {
  data() {
    return {
      data,
    };
  },
  created() {
    var baseUrl = global_url.baseUrl
    fetch(baseUrl+"/api/idle/idleList.do")
        .then((r) => r.json())
        .then((r) => {
          console.log(r.obj)
          this.data = r.obj
        });
  },

};
</script>
<style lang="scss" scoped>
.wkhm {
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
        font-size: 1.2rem;
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
          padding: 10px;
          box-shadow: 0px 2px 9px 6px rgba(0, 0, 0, 0.05);
          &-name {
            font-size: 1.2rem;
            font-family: PingFang SC;
            font-weight: 500;
            color: #333333;
            line-height: 34px;
          }
          &-type {
            font-size: 1.1rem;
            font-family: DIN Medium;
            font-weight: 400;
            color: #ea3031;
            line-height: 34px;
          }
          &-amount {
            font-size: 1.2rem;
            font-family: DIN Medium;
            font-weight: 400;
            color: #ea3031;
            line-height: 34px;
            .tag {
              border-radius: 2px;
              font-size: 0.7rem;
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
      font-size: 1.3rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 4rem;
    }
  }
}
</style>
