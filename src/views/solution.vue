<template>
  <div class="solution">
    <div class="block" v-for="item in data" :key="item.id">
      <div class="row1">
        <div class="row1-name">{{ item.name }}</div>
        <div class="row1-desc">{{ item.desc }}</div>
      </div>
      <div class="row2">
        <div class="row2-name">
          {{ item.代码名称.名称 }}({{ item.代码名称.代码 }})
        </div>
        <div class="row2-quote">{{ item.涨跌幅 }}</div>
        <div class="row2-more">查看更多</div>
      </div>
    </div>
  </div>
</template>
<script>
import { data } from "@/views/solution_data.js";
export default {
  data() {
    return {
      data,
    };
  },
};
</script>
<style lang="scss" scoped>
.solution {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  .block {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;
    .row1 {
      display: grid;
      justify-items: center;
      align-items: center;
      &-name {
        font-size: 1.5rem;
        font-family: PingFang SC;
        font-weight: 800;
        color: #333333;
        line-height: 34px;
      }
      &-desc {
        font-size: 1.2rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 34px;
      }
    }
    .row2 {
      display: grid;
      justify-items: center;
      align-items: center;
      background: #ffffff;
      border-radius: 5px;
      box-shadow: 0px 2px 9px 6px rgba(0, 0, 0, 0.05);
      padding: 10px;

      &-name {
        font-size: 1.2rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 34px;
      }
      &-quote {
        font-size: 1.5rem;
        font-family: DIN Medium;
        font-weight: 400;
        color: #ea3031;
        line-height: 34px;
      }
      &-more {
        width: 7rem;
        background: #3984f7;
        border-radius: 3px;
        text-align: center;
        font-size: 1.2rem;
        color: #ffffff;
        line-height: 34px;
      }
    }
  }
}
</style>
