<template>
				<div>
								<input type="file" @change="handleChange">
				</div>
				<div id="chart" style="height: 400px;width: 400px"></div>
				<div>state.res:{{state.res}}</div>
				<section style="position: absolute;right: 40px;top: 124px;display: flex;flex-direction: column">
								<div>操作数据为：state.res结构在页面下方所示 例：state.res.shift()</div>
								<textarea type="text" v-model="state.filter"  style="width: 400px;height: 300px"/>
								<button @click="handleFilter(state.res)">确定</button>
				</section>
</template>

<script setup>
import * as echarts from "echarts";

import {onMounted, reactive, ref} from "vue";

onMounted(() => {
				initChart()
});
let chart = ref(null)
let state = reactive({
				res: [],
				chartData: {},
				filter: ''
})

function initChart() {
				chart = echarts.init(document.getElementById('chart'));
				chart.setOption({

								tooltip: {
												trigger: 'axis',
								},
								xAxis: {
												type: 'category',
												data: []
								},
								yAxis: {
												type: 'value'
								},
								series: []
				});
}

async function handleChange(event) {
				try {
								// 获取选定的文件
								const file = event.target.files[0];


								// 创建 FileReader 对象
								const reader = new FileReader();

								// 等待文件内容加载完成
								await new Promise((resolve, reject) => {
												reader.onload = () => resolve();
												reader.onerror = reject;
												reader.readAsText(file);
								});

								// 解析文件内容并保存数据
								const content = reader.result;
								const rows = content.split('\n');
								state.res = rows.map((row, index) => {
												const columns = row.split(',');
												return rows[0].split(',').reduce((obj, key, index) => {
																obj[key] = columns[index];
																return obj;
												}, {});
								});
								initChartData(state.res);

				} catch (error) {
								console.error(error);
				}
}
async function initChartData(_res){
				// 渲染图表
				chart.setOption({
								legend: {
												data: Object.keys(state.res[0]).filter((key) => key !== 'ct'),
								},
								toolbox: {
												show: true,
												feature: {
																saveAsImage: {}
												}
								},
								xAxis: {
												type: 'time',
												splitLine: {
																show: false
												},
												axisLine: {
																show: false
												},
												axisTick: {
																show: false
												},
												axisLabel: {
																show: false
												},
								},
								yAxis: {
												type: 'value',
												max: 60,
												splitLine: {
																show: false
												},
												axisLine: {
																show: false
												},
												axisTick: {
																show: false
												},
												axisLabel: {
																show: false
												},
								},
								series: Object.keys(state.res[0])
												.filter((key) => key !== 'ct')
												.map((key) => ({
																type: 'line',
																name: key,
																smooth: true,
																showSymbol: false,
																//data结构为[[时间戳，值]]
																data:	_res.map((item) => [Date.parse(item.ct), item[key]]),
																// data: [_res.reduce((accumulator, item) => {
																// 				accumulator.push(item[key]);
																// 				return accumulator;
																// }, [])],
																// data:[[1669417200000,12],[1669418200000,12]]
												})),
				});
				state.res.shift();
}

async function handleFilter(){
				if (!state.filter) return initChartData(state.res);
				eval(state.filter)
				await initChartData(state.res);
}
</script>
