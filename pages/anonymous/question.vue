<template>
    <div class="question">
        <Header />
        <img src="../../assets/nmzb-top.png" width="100%">
        <div class="bgImg">
            <img src="../../assets/nmzb-question.png" width="100%">
            <div></div>
            <textarea class="queText" placeholder="请输入您想要占卜的问题" v-model="form.question"></textarea>
            <img src="../../assets/question-btn.png" class="nmzbBtns" @click="generateOrder">
        </div>

        <div class="modal-bg" v-show="dialogVisible"></div>
        <div class="modal" v-show="dialogVisible">
            <div class="modal-content">
                <div class="modal-header"><div>提示</div></div> 
                <div class="modal-body">
                    <div>感谢您的信任，已完成占卜，请自行保存订单号</div>
                    <div><span class="orderStyle" ref="order" @click="copyText">{{order}}</span>(鼠标单击即可复制) 于1个工作日内查看，谢谢。</div>
                </div>
                <div class="modal-footer">
                    <el-button type="primary" @click="confirm">确定</el-button>
                </div>
            </div>
        </div>

        <!-- <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div>感谢您的信任，已完成占卜，请自行保存订单号</div>
            <div><span class="orderStyle" ref="order" @click="copyText">{{order}}</span>(鼠标单击即可复制) 于1个工作日内查看，谢谢。</div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="confirm">确定</el-button>
            </span>
        </el-dialog> -->

        <textarea id="inputBox2" style="position: absolute;top: 0;left: 0;opacity: 0;z-index: -10;"></textarea>
        <Footer />
    </div>
</template>

<script>
export default {
    name: 'Question',
    // props: ['image'],
    data() {
        return {
            http: 'https://www.hibifsqm.com',
            // http: 'http://localhost:3020',
            form: {
                question: '',
                time: '',
                payOrder: this.$route.query.image,
            },
            order: '',
            dialogVisible: false
        }
    },
    methods: {
        generateOrder() {
            this.form.time = new Date();
            const url = `${this.http}/blog/addAnonymous`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.form)
            }).then(response => response.json())
                .then(res => {
                    if (res.code == 200) {
                        this.order = res.data;
                        this.dialogVisible = true;
                    } else {
                        this.$message.error(res.data);
                    }
                })
        },
        confirm() {
            this.dialogVisible = false;
            // this.$emit('hasQue');
            this.$router.push('/anonymous')
        },
        handleClose() {},
        copyText() {
            let copyBox = document.getElementById('inputBox2');
            let copyTarget = '';
            copyTarget = this.$refs.order.innerText;
            copyBox.value = copyTarget;
            copyBox.select();
            document.execCommand('copy');
            this.$message.success('复制成功');
        }
    }
}
</script>

<style lang="scss">
.question {
    .bgImg {
        position: relative;
        .queText {
            position: absolute;
            top: 38%;
            left: 50%;
            width: 50%;
            height: 100px;
            margin-left: -25%;
            padding: 10px;
            font-size: 16px;
            color: #30323d;
            border: 1px solid #eaeaea;
            border-radius: 7px;
            outline: none;
            resize: none;
        }
        .nmzbBtns {
            position: absolute;
            bottom: 23.5%;
            left: 50%;
            width: 28%;
            margin-left: -11%;
            cursor: pointer;
        }
        textarea::placeholder {
            font-size: 16px;
            color: #30323d;
            opacity: .5;
        }
    }
    .orderStyle {
        cursor: pointer;
        color: #fd4444;
        margin-right: 5px;
    }
    .modal-bg {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
        background: #000;
        z-index: 0;
    }
    .modal {
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .modal-content {
            position: relative;
            margin: 0 auto 50px;
            background: #FFF;
            border-radius: 2px;
            box-shadow: 0 1px 3px rgba(0,0,0,.3);
            box-sizing: border-box;
            width: 30%;
            margin-top: 15vh;
            .modal-header {
                padding: 20px 20px 10px;
                div {
                    line-height: 24px;
                    font-size: 18px;
                    color: #303133;
                }
            }
            .modal-body {
                padding: 30px 20px;
                color: #606266;
                font-size: 14px;
                word-break: break-all;
            }
            .modal-footer {
                padding: 10px 20px 20px;
                text-align: right;
                box-sizing: border-box;
            }
        }
    }
}
</style>