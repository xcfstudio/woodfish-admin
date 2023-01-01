<template>
    <div class="container">
        <div class="card-group">
            <div class="card dau">
                <div class="icon">
                    <img src="@/assets/dashboard/dau.svg" alt="">
                </div>
                <div class="detail">
                    <div class="title">日活跃用户数</div>
                    <div class="value">3456</div>
                </div>
            </div>
            <div class="card score">
                <div class="icon">
                    <img src="@/assets/dashboard/score.svg" alt="">
                </div>
                <div class="detail">
                    <div class="title">今日功德总数</div>
                    <div class="value">756232</div>
                </div>
            </div>
        </div>

        <div class="charts-group">
            <div class="dau7 chart-item">
                <div class="title">
                    近7日DAU
                </div>
                <Linechart :x-data="['a', 'b', 'c', 'd']" :chart-value="chartValue" bg-color="#00CCFF" />
            </div>
            <div class="score7 chart-item">
                <div class="title">
                    近7日功德总数
                </div>
                <Linechart :x-data="['a', 'b', 'c', 'd']" :chart-value="[12, 44, 2, 56]" bg-color="#EF98CC" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Linechart from '@/components/charts/Linechart.vue'
import {reactive} from 'vue'

const chartValue = reactive([34, 546, 343, 65])
</script>

<style lang="less" scoped>
.container {
    min-width: 800px;
    .card-group {
        display: flex;
        justify-content: space-between;
        .card {
            width: 400px;
            // min-width: 400px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            box-sizing: border-box;
            padding: 20px;
            height: 200px;
            background-color: rgb(103, 142, 200);
            flex: 1;
            border-radius: 15px;
            .icon {
                img {
                    height: 150px;
                }
            }
            .detail {
                .title {
                    color: rgb(255, 255, 255);
                    font-size: 16px;
                    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
                }
                .value {
                    color: #fff;
                    font-size: 55px;
                    font-weight: bolder;
                    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
                }
            }
        }
        .dau {
            // color: #122dda;
            margin-right: 10px;
            background-image: linear-gradient( 135deg, #1875e1 10%, #00EAFF 100%);

        }
        .score {
            margin-left: 10px;
            background-image: linear-gradient( to left, #fae8f3 10%, #fb67af 100%);

        }
    }

    .charts-group {
        .chart-item {
            .title {
                font-weight: bolder;
                font-size: 18px;
                margin: 20px 0 0;
            }
        }
    }
}
</style>