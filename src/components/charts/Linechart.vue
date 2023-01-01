<template>
    <div class="chart" :id="uid"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts/core'
import { GridComponent, GridComponentOption, TooltipComponent, TooltipComponentOption } from 'echarts/components'
import { LineChart, LineSeriesOption } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { SVGRenderer } from 'echarts/renderers'
import { ref, onMounted } from 'vue'
import { throttle } from '@/utils/DT'
import { nanoid } from 'nanoid'
import { watch } from 'vue'

let uid: any = ref(null)
uid.value = nanoid(8)
echarts.use([GridComponent, LineChart, SVGRenderer, UniversalTransition, TooltipComponent])

const props = defineProps<{
    xData: string[],
    chartValue: number[],
    bgColor: string
}>()


onMounted(() => {
    type EChartsOption = echarts.ComposeOption<
        GridComponentOption | LineSeriesOption | TooltipComponentOption
    >;
    // 挂载完毕之后才可以操作DOM
    const chartDom = document.getElementById(uid.value) as HTMLElement
    const myChart = echarts.init(chartDom, undefined, {
        renderer: 'svg'
    });
    let option: EChartsOption;

    option = {

        xAxis: {
            type: 'category',
            data: props.xData
        },
        yAxis: {
            type: 'value'
        },
        tooltip: {
            trigger: 'axis'
        },
        series: [
            {
                data: props.chartValue,
                type: 'line',
                smooth: true,
                // 渐变背景
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: props.bgColor
                        }, {
                            offset: 1,
                            color: '#ffffff'
                        }
                    ])
                }
            }
        ],
        // 边距
        grid: {
            left: 40,
            right: 0,
            top: 25
        }
    };

    option && myChart.setOption(option)


    // 窗口变化重新调整大小 节流
    const _th_reset = throttle(myChart.resize, 200)
    window.addEventListener('resize', () => {
        _th_reset()
    })

    // 数据改变刷新图表
    watch(props, () => {
        (option.xAxis as any).data = props.xData as any
        (option.series as any)[0].data = props.chartValue
        myChart.setOption(option)
    })
})


</script>

<style lang="less" scoped>
.chart {
    width: 100%;
    height: 300px;
}
</style>