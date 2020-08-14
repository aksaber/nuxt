<template>
    <div class="question">
        <img src="../../assets/nmzb-top.png" width="100%">
        <div class="bgImg">
            <img src="../../assets/nmzb-question.png" width="100%">
            <div></div>
            <textarea class="queText" placeholder="请输入您想要占卜的问题" v-model="form.question"></textarea>
            <img src="../../assets/question-btn.png" class="nmzbBtns" @click="generateOrder">
        </div>

        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>感谢您的信任，已完成占卜，请自行保存订单号<span class="orderStyle" ref="order" @click="copyText">{{order}}</span>于1个工作日内查看，谢谢。</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="confirm">确定</el-button>
            </span>
        </el-dialog>

        <textarea id="inputBox2" style="position: absolute;top: 0;left: 0;opacity: 0;z-index: -10;"></textarea>
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
        margin: 0 5px;
    }
}
</style>