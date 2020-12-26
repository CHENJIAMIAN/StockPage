<template>
	<div id="search-page">
		<div class="search-box">
			<div class="search-input-box">

				<a-input class="search-input" placeholder="股票、牛散、基金、机构名称"
               v-model="searchKey"
               ref="searchInput"
               v-on:keyup="whenInput($event)"
               v-on:blur="closeHintsBox()"
        />
        <div class="search-input-icon" @click="handleZhenguClick"></div>
        <div v-show="searchCauseError" class="searchCauseError">
          <span class="red" :style="{ fontSize: '0.5rem' }" >{{errorMessage}}</span>
        </div>
        <div
            class="hintsbox ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft"
            v-show="showHintsBox"
        >
          <div
              tabindex="-1"
              style="overflow: auto; transform: translateZ(0px);"
              class="ant-select-dropdown-content"
          >
            <ul
                class="hintslist ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root"
            >
              <li
                  :key="item.code+item.name"
                  v-for="(item, index) in hints"
                  ref="hint"
                  class="hint ant-select-dropdown-menu-item"
                  v-on:click="fillInput(index)"
                  v-cloak
              >
                <span>{{ item.name }}</span>
<!--                <span style="float: right;margin-right: 30vw;">{{-->
<!--                    item.code-->
<!--                  }}</span>-->
              </li>
            </ul>
          </div>
        </div>
			</div>
			<div class="tips">
				<div class="tips-icon"></div>
				<div class="tips-text">大家都在搜</div>
			</div>
			<div class="list-box">
				<div class="list" v-for="(list,index) in listData" :key="index">
					<div class="list-sort"></div>
					<div class="list-name">{{list.name}}</div>
				</div>
			</div>
		</div>
		<div class="top5-box">
			<div class="title">牛散最新持股排名前10名</div>
			<div class="content" v-for="(list,index) in holderData" :key="index">
				<div class="content-sort">{{index + 1}}</div>
				<div class="content-name">{{list.name}} ({{list.total}}只)</div>
				<div v-if="list.btn == 'lock'" class="content-btn">
					<div class="content-btn-text">解锁</div>
					<div class="content-btn-icon"></div>
				</div>
				<div v-else class="content-btn2">
					<div class="content-btn2-text" @click="holderReview('1',list.code)">查看</div>
					<div class="content-btn2-icon"></div>
				</div>
			</div>
			<div class="showAll">
				<div class="showAll-text" @click="handleReview('1')">查看全部</div>
				<div class="showAll-icon"></div>
			</div>
		</div>
		<div class="top5-box">
			<div class="title">基金最新持股排名前10名</div>
			<div class="content" v-for="(list,index) in contentData" :key="index">
				<div class="content-sort">{{index + 1}}</div>
				<div class="content-name" >{{list.name}} </div>
        <div class="content-number">({{list.total}}只)</div>
				<div v-if="list.btn == 'lock'" class="content-btn">
					<div class="content-btn-text">解锁</div>
					<div class="content-btn-icon"></div>
				</div>
				<div v-else class="content-btn2">
					<div class="content-btn2-text" @click="holderReview('2',list.code)">查看</div>
					<div class="content-btn2-icon"></div>
				</div>
			</div>
			<div class="showAll">
				<div class="showAll-text" @click="handleReview('2')">查看全部</div>
				<div class="showAll-icon" ></div>
			</div>
		</div>
	</div>
</template>

<script>
	import global_url from "@/App";

  export default {
		data() {
			return {
        searchKey: "",
        hints: [],
        searchCauseError:false,
        errorMessage:"请输入股票名称或代码",
        searchSelect:false,
        showHintsBox: false,
        activeNo: -1,

				listData: [{
					name: '赵建平',
					btn: '解锁'
				}, {
					name: '吕强',
					btn: '解锁'
				},{
					name: '赵建平',
					btn: '查看'
				}, {
					name: '华安创业板50指数',
					btn: '解锁'
				}],
				holderData: [{
					name: '吕强(100只)',
					btn: 'lock'
				}, {
					name: '徐开东(100只)',
					btn: 'lock'
				}, {
					name: '陈峰(100只)',
					btn: 'detail'
				}, {
					name: '吕强(100只)',
					btn: 'lock'
				}, {
					name: '陈峰(100只)',
					btn: 'detail'
				}],
        contentData: [{
          name: '吕强(100只)',
          btn: 'lock'
        }, {
          name: '徐开东(100只)',
          btn: 'lock'
        }, {
          name: '陈峰(100只)',
          btn: 'detail'
        }, {
          name: '吕强(100只)',
          btn: 'lock'
        }, {
          name: '陈峰(100只)',
          btn: 'detail'
        }]
			};
		},

    created() {
      var query = this.$route.query
      console.log(this.$route.query)
      var url = global_url.baseUrl +
          "/api/holder/countHolder.do?sharehdtype=1&groupKey=sharehdname&pageNo=0&pageSize=10"
      fetch(url).then((r) => r.json()).then((r) => {
            console.log('r==', r)
            if(r.rows){
              this.holderData = r.rows
            }
          });
      var fund_url = global_url.baseUrl +  "/api/holder/countHolder.do?sharehdtype=2&groupKey=sharehdname&pageNo=0&pageSize=10"
      fetch(fund_url).then((r) => r.json()).then((r) => {
        console.log('r==', r)
        if(r.rows){
          this.contentData = r.rows
        }
      });
    },
		methods: {
      holderReview(sharehdtype,sharehdcode){
        this.$router.push({ path: "new_stakes", query: { sharehdcode: sharehdcode, sharehdtype:sharehdtype } });
      },
      handleReview(sharehdtype){
        this.$router.push({ path: "hold_ranking", query: { sharehdtype: sharehdtype} });
      },

      handleZhenguClick() {
        console.log("code===")
        let code = this.searchKey;
        console.log("code===",code)
        if (code == '' || typeof code == "undefined") {
          this.$refs.searchInput.focus();
          this.errorMessage='请输入股票名称或代码'
          this.searchCauseError=true;
          return;
        }

        if(this.searchCauseError ){
          this.$refs.searchInput.focus();
          this.searchCauseError=false;
          return;
        }
        if(!this.searchSelect){
          this.searchCauseError=true;
          this.$refs.searchInput.focus();
          this.errorMessage='请选择搜索结果中匹配中的股票或代码'
          return;
        }

        console.log(code)
        this.$router.push({ path: "new_stakes", query: { sharehdcode: code, sharehdtype:1 } });

        // this.$router.push({ name: "diagnose_report", params: { code: code } });
      },

      //用户输入的时候
      whenInput: function($event) {
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
      getHintsList: function() {
        // var baseUrl = "http://client.lemengsc.com/admin";
        var baseUrl = global_url.baseUrl;
        fetch(baseUrl + "/api/holder/stockCodeFuzzy.do?sharehdname=" + this.searchKey)
            .then((r) => r.json())
            .then((r) => {
              if(r.obj==null){
                this.searchCauseError=true;
                this.$refs.searchInput.focus();
                this.errorMessage="请输入正确的股票名称或代码"
              }else if(r.obj.length==1 && (this.searchKey== r.obj[0].code || this.searchKey==r.obj[0].name)){
                this.searchCauseError=false;
                this.searchSelect=true;
              }
              else{
                this.searchCauseError=false;
                this.searchSelect=false;
              }
              console.log('r=',r)
              this.hints = r.obj || [];
              console.log('hints=',this.hints)
            });
        this.showHintsBox = true;
      },

      //依据hints数组下标值填充输入框
      fillInput: function(index) {
        console.log('fillInput=',index , ',',this.hints[index])
        this.searchKey = this.hints[index].name;
        this.showHintsBox = false;
        this.searchSelect= true;
        this.closeHintsBox();
      },

      //关闭候选框
      closeHintsBox: function() {
        setTimeout(() => {
          // this.hints = [];
          this.showHintsBox = false;
          this.activeNo = -1;
        }, 280);
      },


		}

	};
</script>
<style lang="scss" scoped>
	#search-page {
		width: 100%;
		min-height: 100%;
		background-color:#F4F8FB;
		padding-bottom: 10px;
	
		.search-box {
			padding: 16px 16px 6px 16px;
			background-color: #ffffff;


      .hintsbox{
        opacity:0.8;
        width:75%;
        border-radius:15px;
        background-color: #91d5ff;
      }
	
			.search-input-box {
				width: 100%;
				height: 46px;
				background: #F5F5F5;
				display: inline-flex;
				align-items: center;
				margin-right: 10px;
				border-radius: 4px;
	
				.search-input-icon {
					margin: 0 10px;
					width: 26px;
					height: 26px;
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
			
			.tips{
				width: 100%;
				height: 46px;
				display: inline-flex;
				align-items: center;
				border-bottom: 1px solid #F4F8FB;
				&-icon{
					margin-right: 10px;
					width: 20px;
					height: 20px;
					background-image: url(../assets/img/fire.png);
					background-size: 100% 100%;
					background-repeat: no-repeat;
				}
				&-text{
					font-size: 16px;
					font-weight: 500;
					color: #666666;
				}
			}
			.list-box {
				display: flex;
				flex-wrap: wrap;
				
				.list {
					flex: 1;
					min-width: 50%;
					max-width: 50%;
					height: 45px;
					display: inline-flex;
					align-items: center;
					font-size: 16px;
				
					&-sort {
						width: 20px;
						height: 20px;
						line-height: 16px;
						background-image: url(../assets/img/hot.png);
						background-size: 100% 100%;
						background-repeat: no-repeat;
						margin-right: 15px;
						// background: #CDCDCD;
					}
				
					&-name {
						width: calc(100% - 40px);
						color: #333333;
						margin-right: 5%;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
		.top5-box{
			background-color: #ffffff;
			margin-top: 12px;
			padding: 0px 16px 0px 16px;
			.title{
				height: 60px;
				font-size: 18px;
				font-weight: 800;
				color: #333333;
				line-height: 60px;
				border-bottom: 1px solid #F4F8FB;
			}
			.content {
				flex: 1;
				min-width: 100%;
				max-width: 100%;
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
					color: #ffffff;
					margin-right: 5px;
					background: #CDCDCD;
				}
			
				&-name {
					width: calc(90% - 67px);
					color: #333333;
					margin-right: 1%;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
        &-number{
          width: calc(60% - 157px);;
          color: #333333;
          margin-left: 1px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
			
				&-btn {
					padding: 0 10px;
					height: 30px;
					border: 1px solid #3984F7;
					border-radius: 12px;
					font-size: 14px;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					color: #3984F7;
					&-text{
						width: 40px;
						text-align: center;
					}
					&-icon{
						width: 12px;
						height: 12px;
						background-image: url(../assets/img/lock.png);
						background-size: 100% 100%;
						background-repeat: no-repeat;
					}
				}
				&-btn2 {
					padding: 0 10px;
					height: 30px;
					border: 1px solid #3984F7;
					border-radius: 12px;
					font-size: 14px;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					color: #3984F7;
					&-text{
						width: 44px;
						text-align: center;
					}
					&-icon{
						width: 8px;
						height: 10px;
						background-image: url(../assets/img/next-more.png);
						background-size: 100% 100%;
						background-repeat: no-repeat;
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
					width: 26px;
					height: 26px;
					background-image: url(../assets/img/more.png);
					background-size: 100% 100%;
					background-repeat: no-repeat;
					margin-left: 4px;
				}
			}
			
		}
		.top5-box .content:nth-of-type(2) .content-sort {
			background-color: #EA3031;
			color: #ffffff;
		}
		
		.top5-box .content:nth-of-type(3) .content-sort {
			background-color: #FE6C2C;
			color: #ffffff;
		}
		
		.top5-box .content:nth-of-type(4) .content-sort {
			background-color: #FEB826;
			color: #ffffff;
		}
	}
</style>
