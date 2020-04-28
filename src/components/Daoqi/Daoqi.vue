<template>
	<div class="cuishoujilu">
		<div class="top">
			<img src="../../../public/image/cuishoujilu/1.png">
			<span>首页/催收管理/<span>即将到期列表</span></span>
			<router-link to="/">Cuishoujilu</router-link>
		</div>
		<div class="sousuo">
			<input type="text" placeholder="姓名/手机号">
			<input type="text" placeholder="借款编号">
			<input type="text" placeholder="合同号">
			<div class="chaxun">
				<el-row>
					<el-button type="info" size="small">查询</el-button>
				</el-row>
			</div>
		</div>
		<div class="biaoge">
			<div>
				<span>数据列表</span>
				<button>导出</button>
			</div>
			<table cellpadding="0" cellspacing="0">
				<tr>
					<td>
						<input type="checkbox" disabled>
					</td>
					<td>借款编号</td>
					<td>姓名</td>
					<td>合同号</td>
					<td>当前期数</td>
					<td>应收本金</td>
					<td>应收利息</td>
					<td>借款管理费</td>
					<td>货款类型</td>
					<td class="xiangdui">
						本期还款日
						<div class="jiedui">
							1
						</div>
					</td>
					<td>提醒次数</td>
					<td>状态</td>
					<td>操作</td>
				</tr>
				<tr v-for="item in kehu" :key="item.id">
					<td><input type="checkbox"></td>
					<td>{{item.jieid}}</td>
					<td>{{item.name}}</td>
					<td>{{item.hetong}}</td>
					<td>{{item.qishu}}</td>
					<td>{{item.yingbenjin}}</td>
					<td>{{item.yinglixi}}</td>
					<td>{{item.guanlifei}}</td>
					<td>{{item.leixing}}</td>
					<td>
						<div>{{item.huankuanri}}</div>
						<div class="chense">{{item.tishi}}</div>
					</td>
					<td>{{item.cishu}}</td>
					<td>{{item.zhuangtai}}</td>
					<td><a href="">查看</a><a @click="daoqitixing">到期提醒</a></td>
				</tr>
			</table>
			<div class="fenye">
				<div>
					<input type="checkbox">全选
				</div>
				<div class="fenyeleixing">
					<span>共10页/100条数据</span>
					<div>
						左
					</div>
					<div class="hei">1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>...</div>
					<div>50</div>
					<div>
						右
					</div>
					<span class="huise">跳至</span>
					<div>1</div>
					<span class="huise">页</span>
				</div>
			</div>
		</div>
		<div class="bottom">
			Copyright &copy;2018深圳市xxxx金融科技有限公司，All Right Reserved.
		</div>
		<div class="daoqitixingdiv" v-show="erjixianshi">
			<div class="daoqitixingdivtop">
				<h2>即将到期提醒(客户 张某某)</h2>
				<h2 @click="guanbi">X</h2>
			</div>
			<div class="daoqitixingdivcontent">
				<table cellpadding="5" cellspacing="5">
					<tr>
						<td>通知方式：</td>
						<td>
							<el-checkbox>系统推送</el-checkbox>
						</td>
						<td>
							<el-checkbox>短信</el-checkbox>
						</td>
						<td>
							<el-checkbox>邮件</el-checkbox>
						</td>
					</tr>
					<tr>
						<td>使用模板：</td>
						<td colspan="3">
							<el-input placeholder="模板:即将到期提醒模板"></el-input>
						</td>
					</tr>
					<tr>
						<td>提醒周期：</td>
						<td><el-radio v-model="radio" label="1">一次</el-radio></td>
						<td colspan="2"><el-radio v-model="radio" label="2">到期前每天一次</el-radio></td>
					</tr>
					<tr>
						<td>发送时间：</td>
						<td><el-radio v-model="fasong" label="1">立即发送</el-radio></td>
					</tr>
					<tr>
						<td></td>
						<td><el-radio v-model="dingshi" label="1">定时发送</el-radio></td>
						<td colspan="2">
							<el-time-select
							  v-model="value"
							  :picker-options="{
							    start: '08:30',
							    step: '00:15',
							    end: '18:30'
							  }"
							  placeholder="选择时间">
							</el-time-select>
						</td>
					</tr>
				</table>
				<ul>
					<li>
						<el-row>
						  <el-button plain>取消</el-button>
						</el-row>
					</li>
					<li>
						<el-row>
						  <el-button type="info">确定</el-button>
						</el-row>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'daoqi',
		data(){
			return{
				radio: 0,
				fasong:0,
				dingshi:0,
				value: '',
				erjixianshi:false,
				kehu:[
					{
						id:1,
						jieid:'100001',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yingbenjin:'0.00',
						yinglixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-12-15',
						tishi:'即将到期',
						cishu:'1',
						zhuangtai:'还款中'
					},
					{
						id:2,
						jieid:'100002',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yingbenjin:'0.00',
						yinglixi:'48000',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-12-15',
						tishi:'即将到期',
						cishu:'1',
						zhuangtai:'还款中'
					},
					{
						id:3,
						jieid:'100003',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yingbenjin:'0.00',
						yinglixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-12-15',
						tishi:'即将到期',
						cishu:'1',
						zhuangtai:'还款中'
					},
					{
						id:4,
						jieid:'100004',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yingbenjin:'0.00',
						yinglixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-12-15',
						tishi:'即将到期',
						cishu:'1',
						zhuangtai:'还款中'
					},
					{
						id:5,
						jieid:'100005',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yingbenjin:'0.00',
						yinglixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-12-15',
						tishi:'即将到期',
						cishu:'1',
						zhuangtai:'还款中'
					},
					{
						id:6,
						jieid:'100006',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yingbenjin:'0.00',
						yinglixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-12-15',
						tishi:'即将到期',
						cishu:'1',
						zhuangtai:'还款中'
					}
				]
			}
		},
		methods:{
			daoqitixing(){
				this.erjixianshi= true
			},
			guanbi(){
				this.erjixianshi= false
			}
		}
	}
</script>

<style scoped>
	ul{
		padding: 0;
		margin: 0;
	}
	li{
		list-style: none;
	}
	.cuishoujilu{
		width: 100%;
		height: 1000px;
		background: #f9f9f9;		
	}
	.top{
		width: 100%;
		height: 50px;
		padding-left: 1%;
		line-height: 50px;
		box-sizing: border-box;
	}
	.top>img{
		vertical-align: middle;
		margin-right: 2px;
	}
	.top>span{
		font-size: 12px;
	}
	.top>span>span{
		color: #666;
	}
	.sousuo{
		width: 95%;
		height: 60px;
		margin: 0 auto;
		padding-left: 1%;
		line-height: 60px;
		background: white;
		box-sizing: border-box;
	}
	.sousuo>span{
		margin-right: 10px;
	}
	.sousuo>select{
		width: 150px;
		height: 34px;
		color: #7f7e7e;
		margin-right: 1%;
		border-radius: 2px;
		border: 1px solid #e4e4e4;
	}
	.sousuo>input{
		margin-right: 1%;
		width: 150px;
		color: #7f7e7e;
		padding-left: 1%;
		box-sizing: border-box;
		border: 1px solid #e4e4e4;
		line-height: 30px;
		border-radius: 2px;
	}
	.chaxun{
		display: inline-block;
	}
	.biaoge{
		width: 95%;
		background: #fff;
		margin: 20px auto;
	}
	.biaoge>div{
		width: 100%;
		height: 50px;
		padding: 0 1%;
		box-sizing: border-box;
		line-height: 50px;
		background: #f3f3f3;
	}
	.biaoge>div>span{
		display: inline-block;
		font-size: 14px;
		float: left;
	}
	.biaoge>div>button{
		float: right;
		color: #666;
		border: 1px solid #cccccc;
		padding-left: 25px;
		box-sizing: border-box;
		margin-top: 1%;
		background: #fff url(../../../public/image/cuishoujilu/2.png) no-repeat 4px 2px;
	}
	.biaoge>table>tr>td:nth-of-type(1){
		width: 0.5%;
	}
	.biaoge>table>tr:nth-of-type(1)>td:nth-of-type(4){
		color: #666;
	}
	.biaoge>table>tr>td:nth-of-type(4){
		color: #008CD5;
	}
	.biaoge>table>tr:nth-of-type(1)>td{
		font-weight: bold;
		background: #f3f3f3;
		height: 40px;
	}
	.biaoge>table>tr>td{
		width: 3%;
		height: 60px;
		color: #666;
		font-size: 13px;
		text-align: center;
		border: 1px solid #e4e4e4;	
		background: #fff;	
	}
	.biaoge>table>tr>td>a{
		color: #000000;
		display: inline-block;
		margin: 0 2%;
		cursor: pointer;
		text-decoration: none;
	}
	.chense{
		color: #ff5500;
		margin-top: 2%;
	}
	.fenye{
		width: 95%;
		height: 50px;
		line-height: 50px;
		margin: 0 auto;
		border: 1px solid #e4e4e4;
		background: #fff;
		margin-top: 20%;
		margin-bottom: 10px;
	}
	.fenye>div:nth-of-type(1){
		float: left;
	}
	.fenyeleixing{
		width: 50%;
		float: right;
	}
	.fenyeleixing>div{
		width: 33px;
		height: 23px;
		float: left;
		cursor: pointer;
		margin-top: 2%;
		margin-right: 1%;
		line-height: 23px;
		text-align: center;
		border: 1px solid #d7d7d7;
		border-radius: 3px;
	}
	.fenyeleixing>span{
		float: left;
		margin-right: 2%;
		display: inline-block;
	}
	.hei{
		color: #fff;
		border: 0;
		background: #333;
	}
	.bottom{
		margin-top: 8%;
		color: #666666;
		text-align: center;
	}
	.huise{
		color: #999;
	}
	.xiangdui{
		position: relative;
	}
	.jiedui{
		position: absolute;
		top: 0;
		right: 5px;
		width: 15px;
		height: 15px;
		font-size: 12px;
		line-height: 15px;
		font-weight: bold;
		background: #ffff00;
	}
	.daoqitixingdiv{
		width: 50%;
		height: 400px;
		background: #fff;
		position: fixed;
		top: 20%;
		left: 20%;
	}
	.daoqitixingdivtop{
		width: 100%;
		height: 50px;
		line-height: 50px;
		padding: 0 10px;
		background: #ECECEC;
		box-sizing: border-box;
	}
	.daoqitixingdivtop>h2:nth-of-type(1){
		float: left;
		color: #666;
	}	
	.daoqitixingdivtop>h2:nth-of-type(2){
		float: right;
		color: #999;
		cursor: pointer;
	}	
	.daoqitixingdivtop>h2{
		padding: 0;
		margin: 0;
	}
	.daoqitixingdivcontent{
		width: 100%;
		height: 250px;
		border-bottom: 1px solid #999;
	}
	.daoqitixingdivcontent>table{
		margin-top: 5%;
		margin-left: 20%;
	}
	.daoqitixingdivcontent>ul{
		margin-top: 5%;
		margin-right: 5%;
		float: right;
	}
	.daoqitixingdivcontent>ul>li{
		float: left;
		margin: 0 5px;
	}
	</style>
