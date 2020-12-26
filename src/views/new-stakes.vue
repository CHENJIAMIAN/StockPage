<template>
	<div id="stakes-page">
		<div class="search-box">
			<div class="search-input-box">
				<div class="search-input-icon"></div>
				<input class="search-input" placeholder="输入牛散、机构、基金名称" />
			</div>
			<div class="search-btn">搜索</div>
		</div>
		<div class="check-box">
			<div class="title" > {{ screenData.title}} 最新持股</div>
			<a-checkbox-group>
				<a-row>
					<a-checkbox style="margin-right: 16px;" v-for="(list,index) in screenData.checkBoxList" :key="index" class="checkbox-item" :value="list.value">{{list.text}}</a-checkbox>
				</a-row>
			</a-checkbox-group>
		</div>
		<div class="content-box">
			<div class="title" v-text="searchData.reportDate"></div>
			<div class="info" v-for="(item,index) in searchData.holderListInfos" :key="index">
				<div class="info-frist info-box">
					<div class="info-frist-name">{{item.sname}}</div>
					<div class="info-frist-btn info-box-btn" @click="historyReview(item.sharehdcode, item.scode)">持仓历史</div>
				</div>
				<div class="info-second info-box">
					<div class="info-second-name">预估成本:{{item.price}}元</div>
					<div class="info-second-btn info-box-btn">市值:{{ item.ltag }}</div>
				</div>
				<div class="info-third info-box">
					<div class="info-third-name">{{item.sharehdnum}}股</div>
					<div class="info-third-btn info-box-btn">{{ item.bz }}</div>
				</div>
			</div>
			<div class="showAll">
				<div class="showAll-text">查看更多</div>
				<div class="showAll-icon"></div>
			</div>
		</div>
<!--		<div class="content-box">-->
<!--			<div class="title" v-text="searchData.title"></div>-->
<!--			<div class="info" v-for="(item,index) in searchData.list" :key="index">-->
<!--				<div class="info-frist info-box">-->
<!--					<div class="info-frist-name">{{item.name}}</div>-->
<!--					<div class="info-frist-btn info-box-btn">持仓历史</div>-->
<!--				</div>-->
<!--				<div class="info-second info-box">-->
<!--					<div class="info-second-name">预估成本:10元</div>-->
<!--					<div class="info-second-btn info-box-btn">市值:0.73亿</div>-->
<!--				</div>-->
<!--				<div class="info-third info-box">-->
<!--					<div class="info-third-name">842.55万股</div>-->
<!--					<div class="info-third-btn info-box-btn">新进</div>-->
<!--				</div>-->
<!--			</div>-->
<!--			<div class="showAll">-->
<!--				<div class="showAll-text">查看更多</div>-->
<!--				<div class="showAll-icon"></div>-->
<!--			</div>-->
<!--		</div>-->
	</div>
</template>

<script>
	import global_url from "@/App";

  export default {
		data() {
			return {
				screenData: {
					title: '吕强',
					checkBoxList: [{
						value: '1',
						text: '不显示ST股'
					},{
						value: '2',
						text: '只显示科创板'
					}]
				},
				searchData:{
          reportDate:'2020-09-30',
          total:'50',
          holderListInfos:[{
            sname:'拓邦股份',
            scode:'',
            price:'0',
            ltag:'0',// 流通市值
            sharehdnum:'0',//数量
            bz:'不变'//持股变动
					},{
            sname:'拓邦股份',
            scode:'',
            price:'0',
            ltag:'0',// 流通市值
            sharehdnum:'0',//数量
            bz:'不变'//持股变动
					},{
            sname:'拓邦股份',
            scode:'',
            price:'0',
            ltag:'0',// 流通市值
            sharehdnum:'0',//数量
            bz:'不变'//持股变动
					}]
				}
			};
		},

    created() {
    },
    activated() {

      var query = this.$route.query
      console.log(this.$route.query)
      var url = global_url.baseUrl +
          "/api/holder/holderList.do?"
      if (query != null && query.sharehdcode != null && query.sharehdcode !="undefined" ){
        url +="&sharehdcode="+query.sharehdcode
      }
      if (query != null && query.sharehdtype != null && query.sharehdtype !="undefined" ){
        url +="&sharehdtype="+query.sharehdtype
      }


      // const data = this.table_data;
      // this.loading = true;
      // const next_page = this.current_page + 1;
      // console.log(url+="&pageNo=" +next_page)

      fetch(
          url
      )
          .then((r) => r.json())
          .then((r) => {
            console.log('r==', r)
            if(r.rows){
              this.searchData = r.rows[0]
              var title=r.rows[0].holderListInfos[0].sharehdname
              this.$emit("title", title.substring(0,10)+"最新持股");
              this.screenData = {
                title: title,
                checkBoxList: [{
                  value: '1',
                  text: '不显示ST股'
                },{
                  value: '2',
                  text: '只显示科创板'
                }]
              }

            }
          });
    },
    methods: {
      historyReview(sharehdcode,scode){
        var query = this.$route.query
        console.log(query)
        if (query != null && query.sharehdtype != null && query.sharehdtype !="undefined" ){
          this.$router.push({ path: "hold_history", query: { sharehdcode: sharehdcode,scode:scode,sharehdtype:query.sharehdtype } });
        }else{
          this.$router.push({ path: "hold_history", query: { sharehdcode: sharehdcode,scode:scode } });
        }

      },

		}

	};
</script>
<style lang="scss" scoped>
	#stakes-page{
		width: 100%;
		min-height: 100%;
		background-color:#F4F8FB;
		padding-bottom: 10px;
		
		.search-box {
			padding: 16px 16px 6px 16px;
			background-color: #ffffff;
			display: flex;
			align-items: center;
		
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
		.check-box{
			padding: 0px 16px 16px 16px;
			background-color: #ffffff;
			.title{
				height: 60px;
				font-size: 18px;
				font-weight: 800;
				color: #333333;
				line-height: 60px;

			}
		}
		.content-box{
			margin-top: 10px;
			padding: 0px 16px 2px 16px;
			background-color: #ffffff;
			.title{
				height: 60px;
				font-size: 18px;
				font-weight: 400;
				color: #333333;
				line-height: 60px;
				border-bottom: 1px solid #F4F8FB;
			}
			.info{
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				font-size: 16px;
				font-weight: 500;
				color: #333333;
				padding: 10px 0px;
				border-bottom: 1px solid #F4F8FB;
				.info-box-btn{
					margin-top: 16px;
				}
				&-frist{
					&-btn{
						color: #3984F7;
					}
				}
				&-third{
					&-name{
						text-align: center;
					}
					&-btn{
						text-align: center;
						color: #EE4445;
					}
				}
			}
			.showAll{
				width: 100%;
				height: 50px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				&-text{
					font-size: 16px;
					font-weight: 500;
					color: #999999;
				}
				&-icon{
					width: 8px;
					height: 12px;
					background-image: url(../assets/img/next-icon.png);
					background-size: 100% 100%;
					background-repeat: no-repeat;
					margin-left: 4px;
				}
			}
		}
	}
</style>
