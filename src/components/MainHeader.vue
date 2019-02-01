<template>
    <div class="dr-main-header">
        <h3 class="dr-title">{{$store.state.globalSettings.appName}}管理后台</h3>
        <div class="dr-right">
            当前用户：{{$store.state.adminName}}
            <el-button @click="quit">退出</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods:{
            quit(){
                //清除当前用户的登录信息
                this.$store.commit('setAdminName',"");
                //跳转回登录页
                this.$router.push('/login');
            }
        }
    }
</script>

<style lang="scss">
    $header-height:60px;

    .dr-main-header{
        background: #DCDFE6;
        border-radius: 4px;
        line-height: $header-height;
        height: $header-height;
        padding: 0 6px;
        .dr-title{
            color:#303133;
            float: left;
            margin:0;
        }
        .dr-right{
            float: right;
        }
    }
</style>