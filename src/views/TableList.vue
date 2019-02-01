<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item to="/admin"> 首页</el-breadcrumb-item>
            <el-breadcrumb-item>桌台管理</el-breadcrumb-item>
            <el-breadcrumb-item>桌台列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-col v-for="(n,index) in TableList" :key="index" :xs="12" :sm="8" :md="6" :lg="4" :xl="2">
               <dr-table :data="t"></dr-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Table from '../components/table'
    export default {
        data() {
            return {
                TableList:[]
            }
        },
        components:{
            "dr-table":Table
        }
    }
</script>

<style scoped>

</style>