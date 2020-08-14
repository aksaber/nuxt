<template>
    <div class="anoPay">
        <img src="../assets/nmzb-top.png" width="100%">
        <div class="bgImg">
            <img src="../assets/anopay.jpg" width="100%">
            <div class="nmpay-content">
                <div class="nmpay-pay">
                    <div class="nmpay-image">
                        <div>微信支付</div>
                    <img src="../assets/wechat-pay.png" > 
                    </div>
                    <div class="nmpay-image">
                        <div>支付宝支付</div>
                        <img src="../assets/ali-pay.png" >
                    </div>
                </div>
                <div class="container" style="text-align: center">
                    <div class="payAmount">168￥(加密数字货币根据实时汇率自行换算)</div>
                    <div class="payMark">（图片长按保存）</div>
                    <div class="payAdress">加密数字货币地址（BTC）：<span @click="copyText(0)" ref="text0">1Dg57h2bkDaeKjAzDzkkR6TiTtzLmh6nhP</span></div>
                    <div class="payAdress">加密数字货币地址(USDT  ERC20)：<span @click="copyText(1)" ref="text1">0x9ff99ebdf354d7bff526ad36f73bb84c8ba3113e</span></div>
                    <div class="payAdress">加密数字货币地址(ETH)：<span @click="copyText(2)" ref="text2">0xd87692127Ef6238A58C973AFA1508dC1232F39E3</span></div>
                    <div class="payAdress">加密数字货币地址(USDT  OMNI)：<span @click="copyText(3)" ref="text3">1CCubyREcJFUZDwGTLkXpiPRneusjnNQJA</span></div>
                    <div class="payAdress">加密数字货币地址(USDT  TRC20)：<span @click="copyText(4)" ref="text4">TXjkQsXC3t5Jqi7AvKhDnqqQmxbDQg4FUo</span></div>
                    <div class="payMark">（鼠标单点地址即可复制）</div>              
                    <textarea id="inputBox" style="position: absolute;top: 0;left: 0;opacity: 0;z-index: -10;"></textarea>
                    <div class="payMark" style="margin-top: 60px">完成支付后点击确定上传支付信息</div>
                    <el-upload
                        class="upload-demo"
                        :action="action"
                        :on-success="uploadSuccess"
                        accept=".jpg,.png,.jpeg"
                    >
                        <img class="nmpay-bottom" src="../assets/pay-confirm.png" alt="">
                    </el-upload>
                </div>
            </div>
        </div>

        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>支付凭证上传成功，点击下一步进入占卜页</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="confirm">下一步</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'AnoPay',
    data() {
        return {
            http: 'https://www.hibifsqm.com',
            // http: 'http://localhost:3020',
            action: '',
            dialogVisible: false,
            image: ''
        }
    },
    mounted() {
        this.action = `${this.http}/blog/upload`
    },
    methods: {
        uploadSuccess(res, file, fileList) {
            if (res.data.path) {
                this.image = 'https://www.hibifsqm.com/' + res.data.path.replace('/var/www/fsnode/static/', '')
            }
            this.dialogVisible = true;
        },
        confirm() {
            this.dialogVisible = false;
            this.$emit('hasUpload', this.image);
        },
        copyText(index) {
            let copyBox = document.getElementById('inputBox');
            let copyTarget = '';
            copyTarget = this.$refs[`text${index}`].innerText;
            // switch (index) {
            //     case 0:
            //         copyTarget = this.$refs.text1.innerText;
            //         break
            // }
            copyBox.value = copyTarget;
            copyBox.select();
            document.execCommand('copy');
            this.$message.success('复制成功');
        },
        handleClose(done) {
            
        }
    }
}
</script>

<style lang="scss">
.anoPay {
    .nmpay-content {
        width: 100%;
        position: absolute;
        top: 22%;
    }
    .nmpay-pay {
        display: flex;
        justify-content: space-between;
        width: 540px;
        margin-left: calc(50% - 270px);
        .nmpay-image {
            cursor: pointer;
            div {
                text-align: center;
                margin-bottom: 20px;
                font-size: 30px;
            }
        }
    }
    .payAdress {
        margin: 63px 0;
        color: #6d6556;
        font-size: 20px;
        text-align: left;
        span {
            cursor: pointer;
        }
    }
    .payMark {
        color: #6d6556;
        font-size: 25px;
    }
    .payAmount {
        color: rgb(163, 156, 148);
        font-size: 25px;
        text-align: center;
        margin: 35px 0;
    }
    .nmpay-bottom {
        margin-top: 35px;
        cursor: pointer;
    }
}
</style>