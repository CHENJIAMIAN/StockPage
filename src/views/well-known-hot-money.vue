<template>
  <div class="wkhm">
    <div class="wkhm-row1">
      <div class="name">上龙虎榜的知名游资</div>
      <a-icon type="table" />
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
                  red: Number(item.sale) > 0,
                  green: Number(item.sale) < 0,
                  gray: Number(item.sale) === 0,
                }"
              >
                {{ item.zhangdiefu }}
              </span>
            </div>
            <div class="block-row-square-amount">
              <span
                :class="{
                  red: Number(item.sale) > 0,
                  green: Number(item.sale) < 0,
                  gray: Number(item.sale) === 0,
                  tag: true,
                }"
                >{{ item.sale > 0 ? "买入" : "卖出" }}</span
              >
              <span
                :class="{
                  red: Number(item.sale) > 0,
                  green: Number(item.sale) < 0,
                  gray: Number(item.sale) === 0,
                }"
                style="background:unset;"
              >
                {{ item.sale }}{{ item.unit }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wkhm-row3">
      <div class="name">知名游资列表</div>
      <div class="namelist">
        <div v-for="item in data.personNamelist" :key="item.id">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { data } from "@/views/wellknownhotmoney_data.js";
export default {
  data() {
    return {
      data,
    };
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
    .anticon {
      justify-self: end;
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
            font-size: 1.5rem;
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
      grid-template-columns: 1fr 1fr 1fr;
      font-size: 1.3rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 4rem;
    }
  }
}
</style>
