<template>
    <div class="dr-table-info">
        <!-- <h1>1号卓</h1> -->
        <el-card shadow="hover">
            <div class="dr-table"></div>
            <el-button type="success" plain>详情</el-button>
            <el-button type="danger" plain>修改</el-button>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props:["data"]
    }
</script>

<style lang="scss">

</style>