<template>
    <div class='login'>
        <el-card class="dr-login-card">
            <div slot="header">
                管理员登录
            </div>
            <div>
                <el-form label-width="120px">
                    <el-form-item label="管理员名：">
                        <el-input placeholder="请输入管理员名" v-model="formData.aname"></el-input>
                    </el-form-item>

                    <el-form-item label="登录密码：">
                        <el-input v-model="formData.apwd" placeholder="请输入管理员密码" type="password"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="doLogin">登录</el-button>
                        <el-button @click="doCancel">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData:{//普通中用户输入的两个数据
                    aname:'admin',
                    apwd:'666666'
                }
            }
        },
        methods:{
            doLogin(){//执行登录
                var url=this.$store.state.globalSettings.apiUrl+`/admin/login/${this.formData.aname}/${this.formData.apwd}`;
                this.$axios.get(url).then((res)=>{
                    if(res.data.code==200){ //登录成功
                    //把用户名存入Vuexz储存仓库
                        this.$store.commit('setAdminName',this.formData.aname);
                        //执行试图跳转
                        this.$router.push('/main');
                    }else{//登录失败
                        this.$alert('用户名或密码有误!','登录失败',{type:'warning'}).then(()=>{}).catch(()=>{});
                    }
                }).catch((err)=>{ 
                    console.log(err);
                })
            },
            doCancel(){//清除用户的输入
                this.formData.aname="",
                this.formData.apwd=""
            }

        }
    }
</script>

<style lang="scss">
    .dr-login-card{
        width:450px;
        margin: 150px auto;
        .el-card__header{
            text-align: center;
            font-size:1.2em;
        }
    }
</style>