<template>
    <div class="dr-table-info">
        <el-card shadow="hover">
            <div class="dr-table" :style="{background:getTableColor(data.status)}">{{data.tid}}号卓:{{data.status | tableStatus}}</div>
            <el-button type="success" plain size="mini" @click="showTableDetail">详情</el-button>
            <el-button type="danger" plain size="mini">修改</el-button>
        </el-card>
        <!-- 桌台详情对话框 -->
        <el-dialog :title="data.tid+'号桌台详情'" :visible="dialogTableDetailVisible" :before-close="closeDialogTableDetail" >
            <!-- 对话框主体 -->
            <el-tabs type="border-card" @tab-click="makeQRcode">
                <el-tab-pane label="桌台状态">状态加载中...</el-tab-pane>
                <el-tab-pane label="桌台二维码">
                    <!-- <canvas ref="qrcanvas"></canvas> -->
                    <img :src="qrcodeData" >
                </el-tab-pane>
            </el-tabs>
            <!-- 对话框尾部 -->
                <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogTableDetailVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialogTableDetailVisible:false,
                qrcodeData:''
            }
        },
        props:["data"],
        methods: {
            getTableColor(status){
                if(status==1)return "#67C23A";
                else if(status==2) return "#E6A23C"
                else if(status==3) return "#F56C6C";
                else return "#909399";
            },
            showTableDetail(){
                // console.log(this.data);当前桌子的数据
                this.dialogTableDetailVisible =true;
            },
            closeDialogTableDetail(){
                this.dialogTableDetailVisible =false;
            },
            makeQRcode(){
                //创建二维码-注意此方法不能在当前组件的mounted中调用，因为绘图必须的canvas在el-dialog中，对话框组件加载时并不在DOM树上
                var qrcode = require('qrcode');
                // var canvas = this.$refs.qrcanvas 第①种
                //每个桌子对应的URL应该形如：
                //http:127.0.0.1:8092/#/3
                var tableUrl = this.$store.state.globalSettings.appUrl + '/#/'+this.data.tid;
                console.log(tableUrl)
                // 第①种方法
                // qrcode.toCanvas(canvas,tableUrl,{width:300,errorCorrectionLevel:'H'})
                // 第②种方法
                //把绘制得到的图片二进制数据转换为Base64编码的字符串
                qrcode.toDataURL(tableUrl,{width:300,errorCorrectionLevel:'H'},(err,url)=>{
                    this.qrcodeData = url;
                })
            }
        },
    }
</script>

<style lang="scss">
    .dr-table-info{
        padding:3px;
        text-align: center;
        .dr-table{
            width:90%;
            height: 120px;
            line-height: 120px;
            border:1px solid #aaa;
            box-shadow: 3px 4px 5px #666;
            margin:5px auto;
            border-radius: 50%;
        }
    }
</style>