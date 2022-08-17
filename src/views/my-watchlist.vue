// 我的自选股
<template>
    <div class="daily-limit-analysis-detail">
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
                <div slot="codeName" slot-scope="codeName">
                    <div class="bigtxt">{{ codeName.name }}</div>
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
                <div slot="selectDate" slot-scope="selectDate">
                    <div class="bigtxt gray">{{ selectDate }}</div>
                </div>
                <div slot="selectPrice" slot-scope="selectPrice, record">
                    <div
                        :class="{
                            red: Number(record.selectPrice) > 0,
                            green: Number(record.selectPrice) < 0,
                            gray: Number(record.selectPrice) === 0,
                            bignum: true,
                        }"
                    >
                        {{ selectPrice }}
                    </div>
                </div>
                <div slot="现价" slot-scope="nowPrice, record">
                    <div
                        :class="{
                            red: Number(record.nowPrice) > 0,
                            green: Number(record.nowPrice) < 0,
                            gray: Number(record.nowPrice) === 0,
                            bignum: true,
                        }"
                    >
                        {{ nowPrice }}
                    </div>
                </div>
                <div slot="operation" slot-scope="operation, record">
                    <a-switch
                        checked-children="取消自选"
                        un-checked-children="添加自选"
                        :default-checked="operation"
                        @change="onChange(record, $event)"
                    />
                </div>
            </a-table>
            <div v-if="loading && !busy" class="demo-loading-container">
                <a-spin />
            </div>
        </div>
    </div>
</template>
<script>
    import {
        table_columns,
        date,
        table_data,
    } from '@/views/mywatchlist_data.js';
    import global_url from '../App.vue';
    import global_user from '@/App';

    let userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
    export default {
        data() {
            this.cacheData = table_data.map((item) => ({ ...item }));
            return {
                loading: false,
                busy: false,
                table_columns,
                table_data,
                date,
                current_page: 0,
                totalPage: 1,
            };
        },
        created() {},

        activated() {
            if (
                userInfo == null ||
                userInfo == '' ||
                userInfo == 'default' ||
                userInfo.token === '' ||
                userInfo.userId === ''
            ) {
                // this.$router.push(`/login`);
            }
            document.getElementsByClassName(
                'demo-infinite-container'
            )[0].scrollTop = localStorage['my_watchlist'] || 0;
            // this.handleInfiniteOnLoad()
        },
        methods: {
            handleInfiniteOnLoad() {
                console.log('handleInfiniteOnLoad');
                if (userInfo.token == '' || userInfo.userId == '') {
                    // this.$router.push(`/login`);
                }
                const data = this.table_data;
                this.loading = true;
                const next_page = this.current_page + 1;
                var url =
                    global_url.baseUrl +
                    '/api/userSelect/select.do?pageNo=' +
                    next_page +
                    '&pageSize=10';
                if (userInfo.userId != '') {
                    url += '&userId=' + userInfo.userId;
                } else {
                    return;
                }
                fetch(url)
                    .then((r) => r.json())
                    .then((r) => {
                        // console.log(r.rows)
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

            onChange(record, checked) {
                const newData = [...this.table_data];
                const newCacheData = [...this.cacheData];
                const target = newData.filter(
                    (item) => record.id === item.id
                )[0];
                const targetCache = newCacheData.filter(
                    (item) => record.id === item.id
                )[0];
                console.log('target:', target, 'targetCache:', targetCache);
                target.operation = true;
                console.log('target:', target, 'targetCache:', targetCache);
                if (target) {
                    Object.assign(newData, target);
                    this.table_data = newData;
                    console.log('newData:', newData);
                }
                console.log(`a-switch to ${checked}`, record.id);
                console.log('newData:', newData, 'target', target);
                // 此处请求自选或取消自选的接口

                fetch(global_url.baseUrl + '/api/userSelect/cancel.do', {
                    method: 'post',
                    headers: {
                        'Content-type':
                            'application/x-www-form-urlencoded;charset=UTF-8',
                    },
                    body:
                        'userId=' +
                        userInfo.userId +
                        '&stockCode=' +
                        record.codeName.code +
                        '&status=' +
                        (checked ? 1 : 0),
                })
                    .then((r) => r.json())
                    .then((r) => {
                        console.log('cancel ', r.obj, r.errCode, r);
                        if (r.errCode == '200') {
                            this.$notification['success']({
                                message: '修改成功',
                                duration: 2,
                            });
                        } else {
                            this.$notification['error']({
                                message: '修改失败',
                                duration: 2,
                            });
                        }
                    });
            },
        },
    };
</script>
<style lang="scss" scoped>
    ::v-deep {
        // ant switch样式修改
        .ant-switch {
            height: 40px;
            width: 44px;
            border: 1px solid #3984f7;
            border-radius: 4px;
            background: transparent;
        }
        .ant-switch-checked .ant-switch-inner {
            color: white;
        }
        .ant-switch-checked {
            background-color: #1890ff;
        }
        .ant-switch:after,
        .ant-switch-checked:after {
            display: none;
        }
        .ant-switch-inner {
            margin-right: 5px;
            margin-left: 5px;
            color: #3984f7;
            font-size: 12.8px;
        }
    }
    .daily-limit-analysis-detail {
        display: grid;
        align-items: center;
    }

    .demo-infinite-container {
        overflow: auto;
        height: calc(100vh - 65px);
    }
    .demo-loading-container {
        position: absolute;
        bottom: 105px;
        width: calc(100% - 16px);
        text-align: center;
    }
</style>
