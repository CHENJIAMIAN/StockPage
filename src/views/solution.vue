// 策略池
<template>
    <div class="solution">
        <div v-if="loading" class="demo-loading-container">
            <a-spin />
        </div>
        <div class="block" v-for="item in data" :key="item.id">
            <div class="row1">
                <div class="row1-name">{{ item.name }}</div>
                <div class="row1-desc">{{ item.desc }}</div>
            </div>
            <div class="row2">
                <div class="row2-name">
                    {{ item.codeName.name }}({{ item.codeName.code }})
                </div>
                <div
                    class="row2-quote"
                    :class="{
                        red: Number(item.zhangdiefu) > 0,
                        green: Number(item.zhangdiefu) < 0,
                        gray: Number(item.zhangdiefu) === 0,
                    }"
                >
                    {{ item.zhangdiefu }}%
                </div>
                <div
                    class="row2-more"
                    @click="$router.push(`/bbgs_solution/` + item.strategyId)"
                >
                    查看更多
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { data } from '@/views/solution_data.js';
    import global_url from '../App.vue';
    export default {
        name: 'solution',
        data() {
            return {
                data,
                loading: true,
            };
        },
        mounted() {
            var baseUrl = global_url.baseUrl;

            var t = Math.random();

            fetch(baseUrl + '/api/strategy/strategies.do?t' + t)
                .then((r) => r.json())
                .then((r) => {
                    if (!r.rows) {
                        this.data = [];
                    } else {
                        this.data = r.rows;
                        this.loading = false;
                    }
                });
        },
        activated() {
            document.getElementsByClassName('body')[0].scrollTop =
                localStorage['solution'] || 0;
        },
    };
</script>
<style lang="scss" scoped>
    .solution {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        margin-bottom: 16px;
        gap: 30px 0;
        padding: 15px 0;

        .block {
            display: grid;
            grid-template-rows: auto 120px;
            justify-items: center;
            align-items: start;
            gap: 10px 0;
            .row1 {
                display: grid;
                justify-items: center;
                align-items: center;
                grid-template-rows: auto 1fr;
                height: 100%;
                padding: 0 20px;
                &-name {
                    font-size: 19.2px;
                    font-family: PingFang SC;
                    font-weight: 800;
                    color: #333333;
                    line-height: 34px;
                }
                &-desc {
                    padding: 0px 5px 0 15px;
                    font-size: 16px;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: #333333;
                    line-height: 30px;
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
                    font-size: 16px;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: #333333;
                    line-height: 34px;
                }
                &-quote {
                    font-size: 24px;
                    font-family: DIN Medium;
                    font-weight: 400;
                    //color: #ea3031;
                    line-height: 34px;
                }
                &-more {
                    width: 80px;
                    background: #3984f7;
                    border-radius: 3px;
                    text-align: center;
                    font-size: 12.8px;
                    color: #ffffff;
                    line-height: 34px;
                }
            }
        }
        .demo-loading-container {
            position: absolute;
            bottom: 40px;
            width: calc(100% - 16px);
            text-align: center;
        }
    }
</style>
