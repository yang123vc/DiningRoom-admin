<template>
    <div class="dr-category-list">
       <el-breadcrumb>
           <el-breadcrumb-item to="/main">消息</el-breadcrumb-item>
           <el-breadcrumb-item to="/main">菜品类别管理</el-breadcrumb-item>
           <el-breadcrumb-item to="/main">类别列表</el-breadcrumb-item>
       </el-breadcrumb>
       <br>
       <el-button type="primary" @click="addCategory">添加新的菜品类别</el-button>
       <br><br>
       <el-table :data='categoryList' stripe border>
           <el-table-column label='编号' prop="cid"></el-table-column>
           <el-table-column label='名称' prop="cname"></el-table-column>

           <el-table-column label='操作'>
               <template slot-scope='{row,$index}'>
                    <el-button @click="upadateCategory(row,$index)" type="success" size='mini'>修改</el-button>
                    <el-button @click="deleteCategory(row,$index)" type="error" size='mini'>删除</el-button>
               </template>
           </el-table-column>
       </el-table>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                categoryList:[]        
            }
        },
        methods:{
            deleteCategory(c,i){
                this.$confirm('删除操作不可撤销！您确定吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(()=>{
                    var url =this.$store.state.globalSettings.apiUrl + `/admin/category/${c.cid}`
                    this.$axios.delete(url).then((res)=>{
                        if(res.data.code==200){//数据库中已经删除成功
                            this.categoryList.splice(i,1);
                            this.$message.success('菜品类别删除成功')
                        }else{
                            this.$message.error('类别删除出差错：'+res.data.msg)
                        }
                    }).catch((err)=>{
                        console.log(err)
                    })
                }).catch(()=>{
                    
                })
            },
            upadateCategory(c,i){
                this.$prompt('请输入修改的内容', '提示', {
                  inputValue:c.cname
                }).then(({value})=>{
                    var url =this.$store.state.globalSettings.apiUrl + "/admin/category"
                     this.$axios.put(url,{cid:c.cid,cname:value}).then((res)=>{
                         if(res.data.code==200){
                            //数据中添加成功
                            this.$message.success('修改类别成功！')
                            //模型数据中添加新的类别
                            this.categoryList[i].cname=value;
                        }else{
                            this.$message.error('修改出差'+res.data.msg);
                        }
                    }).catch((err)=>{
                        console.log(err)
                    })
                }).catch((err)=>{
                    console.log(5555)
                })
            },
            addCategory(){
                this.$prompt("请输入新的菜品名：","提示",
                    {type:'info'}
                ).then(({value})=>{
                    //获取用户的输入，调用数据API添加到数据库
                    var url=this.$store.state.globalSettings.apiUrl+'/admin/category';
                    this.$axios.post(url,{cname:value}).then((res)=>{
                        if(res.data.code==200){
                            //数据中添加成功
                            this.$message.success('新的类别添加成功！')
                            //模型数据中添加新的类别
                            this.categoryList.push({cid:res.data.cid,cname:value})
                        }else{
                            this.$message.error('新的类别添加出差'+res.data.msg);
                        }
                    }).catch((err)=>{
                        console.log(err);
                    })
                    conosle.log(result);
                }).catch(()=>{
                    console.log(111)
                })
            }
        },
        mounted() {
            var url = this.$store.state.globalSettings.apiUrl + '/admin/category';
            this.$axios.get(url).then((res)=>{
                this.categoryList = res.data;
            }).catch((err)=>{
                console.log(err);
            })
        },
    }
</script>

<style scoped>

</style>