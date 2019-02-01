<template>
    <div class="settings">
        <el-breadcrumb>
            <el-breadcrumb-item to='/main'>首页 </el-breadcrumb-item>
            <el-breadcrumb-item >全局设置 </el-breadcrumb-item>
        </el-breadcrumb> 

        <br>
        <el-card shadow="never">
            <el-form label-width="140px" :model="formData">
                <el-form-item label="应用名称：">
                    <el-input v-model="formData.appName"></el-input>
                </el-form-item>
                
                <el-form-item label="数据API地址：">
                    <el-input v-model="formData.apiUrl"></el-input>
                </el-form-item>

                <el-form-item label="管理后台地址：">
                    <el-input v-model="formData.adminUrl"></el-input>
                </el-form-item>

                <el-form-item label="客户APP地址：">
                    <el-input v-model="formData.appUrl"></el-input>
                </el-form-item>

                <el-form-item label="ICP备案号：">
                    <el-input v-model="formData.icp"></el-input>
                </el-form-item>

                <el-form-item label="版权声明：">
                    <el-input v-model="formData.copyright"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="odSubmit">提交</el-button>
                    <el-button @click="odCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData:{
                    // appName:'',
                    // apiUrl:'',
                    // adminUrl:'',
                    // appUrl:'',
                    // icp:'',
                    // copyright:'',
                }
            }
        },
        mounted(){
            //将$store存储中的全局配置数据赋值给中间变量 -formData方便元素执行双向绑定
            //引用复制，两个变量指向对一个对象
            // this.formData = this.$store.state.globalSettings;
            //简单克隆
            this.formData = JSON.parse(JSON.stringify(this.$store.state.globalSettings))
        },
        methods:{
            odSubmit(){
                console.log(1111)
                var url = this.$store.state.globalSettings.apiUrl+"/admin/setting";
                var data = this.formData
                this.$axios.put(url,data).then((res)=>{
                    console.log(res);
                    if(res.data.code==200){
                        this.$message.success("全局设置修改成功！")
                        ///TODO:修改$store中的全局设置！！！
                    }else{
                        this.$message.error("全局设置修改失败！")
                    }
                }).catch((err)=>{
                    console.log(err)
                })
            },
            odCancel(){
                this.formData = JSON.parse(JSON.stringify(this.$store.state.globalSettings))
                // this.formData = this.$store.state.globalSettings;
            },
        }
    }
</script>

<style scoped>

</style>