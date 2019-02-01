<template>
    <div>
       <h1>添加菜品</h1>
       <el-form label-width="100px">
           <el-form-item label="菜品类别">
               <el-upload class="dr-uploader" :action="uploadAction" :on-success="doUploadSucc" name="dishImg" :show-file-list="false">
                   <img v-if="imageUrl" :src="imageUrl">
               </el-upload>
           </el-form-item>
       </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imageUrl:'',//要显示的预览地址
                uploadAction:this.$store.state.globalSettings.apiUrl+'/admin/dish/image',//可处理
                formData:{
                    title:'',
                    imgUrl:'',
                    price:'',
                    detail:'',
                    categoryId:''
                }
            }
        },
        methods: {
            doUploadSucc(res,file){
                //文件上传成功后，客户端得到响应消息之后的处理函数
                //res:服务器端返回的响应消息
                //file:从INPUT[type=file]中读取的第一个上传的文件对象
                console.log(res);
                this.formData.imgUrl=res.fileName;
                this.imageUrl = URL.createObjectURL(file.raw);
                //把上传的文件编码为DataURL字符串
            }
        },
    }
</script>

<style lang="scss">
    .dr-uploader{
        .el-upload{
            border:1px dotted #aaa;
            border-radius: 5px;
            cursor: pointer;
            width:250px;
            height: 177px;
            overflow: hidden;
            &:hover{
             border-color:#409EFF;
            }
        }
        img{
            max-width: 100%;
        }
    }
</style>