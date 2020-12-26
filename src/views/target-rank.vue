<template>
	<!-- 财务指标排名 -->
	<div id="targer-rank">
		<div class="screen">
			<div class="screen-left">
				<div class="screen-box">
					<div class="title" v-text="screenData.title"></div>
					<div class="checkbox">
						<a-checkbox-group @change="onChange">
							<a-row v-for="(list,index) in screenData.checkBoxList" :key="index">
								<a-col>
									<a-checkbox class="checkbox-item" :value="list.value">{{list.text}}</a-checkbox>
								</a-col>
							</a-row>
						</a-checkbox-group>
					</div>
				</div>
				<div class="screen-box">
					<div class="title" v-text="screenDataSecond.title"></div>
					<div class="checkbox">
						<a-checkbox-group @change="onChange">
							<a-row v-for="(list,index) in screenDataSecond.checkBoxList" :key="index">
								<a-col>
									<a-checkbox class="checkbox-item" :value="list.value">{{list.text}}</a-checkbox>
								</a-col>
							</a-row>
						</a-checkbox-group>
					</div>
				</div>
			</div>
			<div class="screen-right">
				<div class="screen-box">
					<div class="title" v-text="screenDataTr.title"></div>
					<div class="checkbox">
						<a-checkbox-group @change="onChange">
							<a-row v-for="(list,index) in screenDataTr.checkBoxList" :key="index">
								<a-col>
									<a-checkbox class="checkbox-item" :value="list.value">{{list.text}}</a-checkbox>
								</a-col>
							</a-row>
						</a-checkbox-group>
					</div>
				</div>
			</div>
		</div>
		<div class="data-table">
			<div class="thead">
				<div class="thead-title">行业名称</div>
				<div class="thead-row">
					<div class="thead-row-title">净利润（亿元）</div>
					<div class="thead-row-content">
						<div class="thead-row-content-text">{{firstDate}}</div>
						<div class="thead-row-content-text">{{secondDate}}</div>
						<div class="thead-row-content-text">{{thirdDate}}</div>
					</div>
				</div>
			</div>
			<div class="tbody">
				<div class="line" v-for="(item,index) in tableData" :key="index">
					<div class="line-tr">
						<div class="line-tr-icon">{{index+1}}</div>
						<div class="line-tr-text" v-text="item.conceptName"></div>
					</div>
					<div class="line-tr">
						<div class="line-tr-text" v-text="item.firstData.value"></div>
						<div class="line-tr-state" v-show="item.firstData.state" :class="item.firstData.state == 'up' ? 'line-tr-up':'line-tr-down'"></div>
					</div>
					<div class="line-tr">
						<div class="line-tr-text" v-text="item.secondData.value"></div>
						<div class="line-tr-state" v-show="item.secondData.state" :class="item.secondData.state == 'up' ? 'line-tr-up':'line-tr-down'"></div>
					</div>
					<div class="line-tr">
						<div class="line-tr-text" v-text="item.thirdData.value"></div>
						<div class="line-tr-state" v-show="item.thirdData.state" :class="item.thirdData.state == 'up' ? 'line-tr-up':'line-tr-down'"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import global_url from "@/App";

  export default {
		data() {
			return {
			  firstDate:"",
			  secondDate:"",
			  thirdDate:"",
				screenData: {
					title: '成长能力指标',
					checkBoxList: [{
						value: '1',
						text: '净利润'
					}, {
						value: '2',
						text: '扣飞净利润'
					}, {
						value: '3',
						text: '扣非净利润同比增长率'
					}]
				},
				screenDataSecond: {
					title: '盈利能力指标',
					checkBoxList: [{
						value: '1',
						text: '净资产收益率'
					}]
				},
				screenDataTr:{
					title: '运营能力指标',
					checkBoxList: [{
						value: '1',
						text: '营业周期(天)'
					},{
						value: '2',
						text: '存货周转天数(天)'
					},{
						value: '3',
						text: '应收帐款周转天数(天)'
					},{
						value: '4',
						text: '存货周转率'
					}]
				},
				tableData:[{
          conceptName:'保险(50只)',
          firstData:{
						value:'500.000',
						state:'up'
					},
          secondData:{
            value:'500.000',
						state:'down'
					},
          thirdData:{
            value:'500.000',
						state:''
					}
				},{
          conceptName:'有色(50只)',
          firstData:{
            value:'500.000',
						state:'down'
					},
          secondData:{
            value:'500.000',
						state:''
					},
          thirdData:{
            value:'500.000',
						state:''
					}
				},{
          conceptName:'电力(50只)',
          firstData:{
            value:'500.000',
						state:'up'
					},
          secondData:{
            value:'500.000',
						state:'up'
					},
          thirdData:{
            value:'500.000',
						state:'down'
					}
				},{
          conceptName:'电力(50只)',
          firstData:{
            value:'500.000',
						state:'up'
					},
          secondData:{
            value:'500.000',
						state:'down'
					},
          thirdData:{
            value:'500.000',
						state:''
					}
				},{
          conceptName:'电力(50只)',
          firstData:{
            value:'500.000',
						state:'up'
					},
          secondData:{
            value:'500.000',
						state:'down'
					},
          thirdData:{
            value:'500.000',
						state:''
					}
				}]
			}
		},
		mounted() {

		},
    created() {
      var query = this.$route.query
      console.log(this.$route.query)
      var url = global_url.baseUrl +
          "/api/conceptFundFinance/financeList.do?statisticName=jinglirun"

      fetch(
          url
      )
          .then((r) => r.json())
          .then((r) => {
            console.log('r==', r)
            if(r.rows){
              this.tableData=r.rows
              this.firstDate=r.rows[0].firstDate
              this.secondDate=r.rows[0].secondDate
              this.thirdDate=r.rows[0].thirdDate
            }
          });
    },

		methods: {
			onChange(checkedValues) {
				console.log('checked = ', checkedValues);
			},
		}

	};
</script>

<style lang="scss" scoped>
	#targer-rank {
		.screen {
			width: 100%;
			display: flex;
			.screen-box{
				margin-bottom: 21px;
			}
			&-left {
				flex: 1;
				padding: 22px 8px 0px 16px;
			}

			&-right {
				flex: 1;
				padding: 22px 16px 0px 8px;
			}

			.title {
				font-size: 18px;
				margin-bottom: 16px;
				font-weight: 800;
				color: #333333;
			}

			.ant-col {
				margin-bottom: 10px;
			}

			.checkbox-item {
				font-size: 14px;
				font-weight: 500;
				color: #666666;
			}

			.ant-checkbox-inner {
				width: 18px;
				height: 18px;
			}
		}
		.data-table{
			width: 100%;
			margin-top: -10px;
			margin-bottom: 20px;
			.thead{
				width: 100%;
				height: 101px;
				display: inline-flex;
				background-color: rgba(57,132,247,0.1);
				border-bottom: 1px solid rgba(57,132,247,0.2);
				&-title{
					width: calc(31% - 1px);
					font-size: 14px;
					font-weight: 500;
					color: #333333;
					display: flex;
					justify-content: center;
					align-items: center;
					border-right: 1px solid rgba(57,132,247,0.2);
				}
				&-row{
					width: 69%;
					&-title{
						height: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 14px;
						font-weight: 500;
						color: #333333;
						border-bottom: 1px solid rgba(57,132,247,0.2);
					}
					&-content{
						width: 100%;
						height: 50%;
						display: inline-flex;
						&-text{
							width: calc(100%/3);
							font-size: 14px;
							font-weight: 400;
							color: #333333;
							border-right: 1px solid rgba(57,132,247,0.2);
							display: flex;
							justify-content: center;
							align-items: center;
						}
						&-text:last-child{
							border: none;
						}
					}
				}
			}
			.tbody{
				width: 100%;
				.line{
					display: flex;
					height: 50px;
					border-bottom: 1px solid rgba(57,132,247,0.1);
					&-tr{
						font-size: 16px;
						font-weight: 400;
						color: #333333;
						display: flex;
						justify-content: center;
						align-items: center;
						border-right: 1px solid rgba(57,132,247,0.1);
						width: calc(69%/3);
						&-icon{
							width: 15px;
							height: 15px;
							line-height: 15px;
							text-align: center;
							font-size: 12px;
							color: #ffffff;
							margin-right: 3px;
							background: #CDCDCD;
						}
						&-text{
							font-size: 16px;
							font-weight: 500;
							color: #333333;
							line-height: 34px;
						}
						&-state{
							
						}
						&-up{
							width: 15px;
							height: 15px;
							background-size: 100% 100%;
							background-repeat: no-repeat;
							margin-left: 4px;
							background-image: url(../assets/img/up.png);
						}
						&-down{
							width: 15px;
							height: 15px;
							background-size: 100% 100%;
							background-repeat: no-repeat;
							margin-left: 4px;
							background-image: url(../assets/img/down.png);
						}
					}
					&-tr:nth-of-type(1){
						width: calc(31% - 1px);
					}
					&-tr:last-child{
						border: none;
						
					}
				}
				.line:nth-of-type(1) .line-tr-icon{
					background-color: #EA3031;
				}
				.line:nth-of-type(2) .line-tr-icon{
					background-color: #FE6C2C;
				}
				.line:nth-of-type(3) .line-tr-icon{
					background-color: #FEB826;
				}
			}
		}
	}
</style>
