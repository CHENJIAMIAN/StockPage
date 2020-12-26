<template>
	<!-- 最新持股排名 -->
	<div id="hold-ranking">
    <div class="search-box">
      <div class="search-input-box">
        <div class="search-input-icon"></div>
        <input class="search-input" placeholder="输入牛散名称" />
      </div>
      <div class="search-btn">搜索</div>
    </div>

    <div
        v-infinite-scroll="handleInfiniteOnLoad"
        class="demo-infinite-container"
        :infinite-scroll-disabled="busy"
        :infinite-scroll-distance="10"
    >

      <div class="list-box">
        <div class="list" v-for="(list,index) in table_data" :key="index">
          <div class="list-sort">{{list.id}}</div>
          <div class="list-name">{{list.name}} ({{list.total}}只)</div>
<!--          <div class="list-btn">{{list.btn}}</div>-->
          <div class="list-btn" @click="holderReview(list.code)">查看</div>
        </div>
      </div>
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
      <div v-show="alreadyBottom" style="text-align: center;">到底啦</div>
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
	import {table_columns} from "@/views/hold_ranking_data";

  import global_url from "@/App";

  export default {
		data() {
			return {
        alreadyBottom: false,
        loading: false,
        busy: true,
        table_data:[],
        current_page: 0,
        totalPage: 1,
        table_columns,
				listData: [{
					name: '吕强(100只)吕强(100只)吕强(100只)吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)',
					btn: '查看'
				}, {
					name: '吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)吕强(100只)吕强(100只)吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)',
					btn: '查看'
				}, {
					name: '吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)吕强(100只)吕强(100只)吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)',
					btn: '查看'
				}, {
					name: '吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)吕强(100只)吕强(100只)吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)',
					btn: '查看'
				}, {
					name: '吕强(100只)',
					btn: '解锁'
				}, {
					name: '吕强(100只)',
					btn: '解锁'
				}],
			};
		},
		methods: {

      holderReview(sharehdcode){
        var query = this.$route.query
        console.log(this.$route.query)
        if (query != null && query.sharehdtype != null && query.sharehdtype !="undefined" ){
          this.$router.push({ path: "new_stakes", query: { sharehdcode: sharehdcode,sharehdtype: query.sharehdtype} });
        }else{
          this.$router.push({ path: "new_stakes", query: { sharehdcode: sharehdcode } });
        }

      },

      handleInfiniteOnLoad() {
        var query = this.$route.query

        var url = global_url.baseUrl +
            "/api/holder/countHolder.do?pageSize=50&groupKey=sharehdname"
        if (query != null && query.sharehdtype != null && query.sharehdtype !="undefined" ){
          url +="&sharehdtype="+query.sharehdtype
        }else{
          url +="&sharehdtype=1"
        }

        const data = this.table_data;
        this.loading = true;
        const next_page = this.current_page + 1;
        // console.log(url+="&pageNo=" +next_page)

        fetch(
            url+="&pageNo=" +
                next_page
        )
            .then((r) => r.json())
            .then((r) => {
              console.log('r==', r)
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
	#hold-ranking {
		width: 100%;
		padding: 0 16px 16px 16px;

		.search-box {
			width: 100%;
			height: 80px;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #F4F8FB;

			.search-input-box {
				width: 80%;
				height: 46px;
				background: #F5F5F5;
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
					background: #F5F5F5;
					padding: 0;
					font-size: 16px;
				}
			}

			.search-btn {
				width: calc(20% - 10px);
				height: 46px;
				background: #3984F7;
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
				border-bottom: 1px solid #F4F8FB;
				font-size: 16px;

				&-sort {
					width: 16px;
					height: 16px;
					line-height: 16px;
					text-align: center;
					font-size: 14px;
					color: #EA3031;
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
					border: 1px solid #3984F7;
					border-radius: 12px;
					font-size: 14px;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #3984F7;
				}
			}

			.list:nth-of-type(1) .list-sort {
				background-color: #EA3031;
				color: #ffffff;
			}

			.list:nth-of-type(2) .list-sort {
				background-color: #FE6C2C;
				color: #ffffff;
			}

			.list:nth-of-type(3) .list-sort {
				background-color: #FEB826;
				color: #ffffff;
			}
		}

	}
</style>
