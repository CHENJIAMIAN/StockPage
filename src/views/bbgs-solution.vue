<!--// 步步高升策略-->
<template>
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
            :scroll="{ x: 480 }"
        >
            <div slot="id" slot-scope="id">
                <div class="bigtxt">{{ id }}</div>
                <div>{{ id }}</div>
            </div>
            <div slot="codeName" slot-scope="codeName">
                <a @click="$router.push(`/stock_detail/` + codeName.code)">
                    <div class="bigtxt">{{ codeName.name }}</div>
                    <div>{{ codeName.code }}</div>
                </a>
            </div>
            <div slot="zhangdiefu" slot-scope="zhangdiefu">
                <div
                    :class="{
                        red: Number(zhangdiefu) > 0,
                        green: Number(zhangdiefu) < 0,
                        gray: Number(zhangdiefu) === 0,
                        bignum: true,
                    }"
                >
                    {{ zhangdiefu }}%
                </div>
            </div>
            <div slot="xianjia" slot-scope="xianjia">
                <div class="bignum red">{{ xianjia }}</div>
            </div>
            <div slot="selectDate" slot-scope="selectDate">
                <div class="bigtxt">{{ selectDate }}</div>
            </div>
        </a-table>
        <div v-if="loading && !busy" class="demo-loading-container">
            <a-spin />
        </div>
        <div v-show="alreadyBottom" style="text-align: center">到底啦</div>
    </div>
</template>
<script>
    import { table_columns, table_data } from '@/views/bbgs_solution_data.js';
    import global_url from '../App.vue';
    export default {
        name: 'bbgs-solution',
        data() {
            return {
                alreadyBottom: false,
                loading: false,
                busy: false,
                table_columns,
                table_data,
                current_page: 0,
                totalPage: 1,
            };
        },
        // created() {
        // // 根据id去获取数据
        // this.$route.params.id;
        //
        // var baseUrl = global_url.baseUrl;
        // var strategyId = this.$route.params.id;
        // fetch(baseUrl + "/api/strategy/strategyList.do?strategyId=" + strategyId)
        //   .then((r) => r.json())
        //   .then((r) => {
        //     console.log(r.rows);
        //     this.table_data = r.rows;
        //     // this.table_data = r.rows
        //   });
        // },

        activated() {
            document.getElementsByClassName(
                'demo-infinite-container'
            )[0].scrollTop = localStorage['bbgs_solution'] || 0;
            var solution_id = this.$route.params.id;
            if (solution_id == 1) {
                document.title = '短线收割机';
            } else if (solution_id == 2) {
                document.title = '步步高升';
            } else if (solution_id == 3) {
                document.title = '金牛角';
            } else if (solution_id == 4) {
                document.title = '小刚走好';
            } else {
                document.title = '策略池';
            }
            this.$emit('title', document.title);
        },
        methods: {
            handleInfiniteOnLoad() {
                const data = this.table_data;
                this.loading = true;
                var strategyId = this.$route.params.id;
                const next_page = this.current_page + 1;
                fetch(
                    global_url.baseUrl +
                        '/api/strategy/strategyList.do?strategyId=' +
                        strategyId +
                        '&pageNo=' +
                        next_page +
                        '&pageSize=10'
                )
                    .then((r) => r.json())
                    .then((r) => {
                        if (next_page <= r.totalPage) {
                            this.table_data = data.concat(r.rows);
                            this.loading = false;
                            this.current_page = r.pageNo;
                            this.totalPage = r.totalPage;
                        } else {
                            console.log(r.pageNo + '--' + r.totalPage);
                            this.loading = false;
                            this.alreadyBottom = true;
                        }
                    });
            },
        },
    };
</script>
<style lang="scss" scoped>
    .demo-infinite-container {
        overflow: auto;
        height: calc(100vh - 66px);
    }
    .demo-loading-container {
        position: absolute;
        bottom: 40px;
        width: calc(100% - 16px);
        text-align: center;
    }
</style>
