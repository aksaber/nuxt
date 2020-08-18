<template>
    <div class="anonymous">
        <Header />
        <!-- v-show="!payShow && !questionShow" -->
        <div key="divkey1">
            <img src="../../assets/nmzb-top.png" width="100%">
            <div class="bgImg">
                <img src="../../assets/nmzb-bg.jpg" width="100%">
                <div class="nmzbBtn">
                    <img src="../../assets/qrzb-btn.png" @click="jump(1)">
                    <img src="../../assets/zbjg-btn.png" @click="modalShow = true">
                </div>
            </div>

            <div class="modal-bg" v-show="modalShow"></div>
            <div class="modal" v-show="modalShow">
                <div class="modal-content">
                    <div class="modal-title">
                        <div class="modal-title-left">查询占卜结果</div>
                        <img src="../../assets/close.svg" @click="modalShow = false">
                    </div>
                    <el-form :model="form" label-width="85px" class="modal-body">
                        <el-form-item label="订单号">
                            <el-input v-model="form.order"></el-input>
                        </el-form-item>
                        <el-form-item label="占卜结果" v-show="form.result" key="divkey2">
                            <div style="font-size: 20px; color: #bb4d4deb">{{form.result}}</div>
                        </el-form-item>
                        <el-form-item label="九宫八卦图" v-show="form.paipanImage">
                            <img :src="form.paipanImage" width="100%" />
                        </el-form-item>
                        <el-form-item label="补充疑问" v-show="form.result && hasUpdate == '1'" key="divkey3">
                            <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="如有疑问，请再次补充"
                                v-model="question"
                            ></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="center">
                        <el-button type="primary" @click="getAnoResult">查询</el-button>
                        <el-button type="primary" @click="reQuestion" v-show="hasUpdate == '1'">再次提交</el-button>
                    </div>
                </div>
            </div>

            <!-- <el-dialog
                title="查询占卜结果"
                :visible.sync="modalShow"
                width="50%"
                :before-close="hideModal">
                <div class="modal-content">
                    <el-form :model="form" label-width="80px">
                        <el-form-item label="订单号">
                            <el-input v-model="form.order"></el-input>
                        </el-form-item>
                        <el-form-item label="占卜结果" v-show="form.result" key="divkey2">
                            <div style="font-size: 20px; color: #bb4d4deb">{{form.result}}</div>
                        </el-form-item>
                        <el-form-item label="继续提问" v-show="form.result && hasUpdate == '1'" key="divkey3">
                            <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请再次填写您的问题"
                                v-model="question"
                            ></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="center">
                        <el-button type="primary" @click="getAnoResult">查询</el-button>
                        <el-button type="primary" @click="reQuestion" v-show="hasUpdate == '1'">再次提问</el-button>
                    </div>
                </div>
            </el-dialog> -->
        </div>

        <!-- <AnoPay v-show="payShow" @hasUpload="hasUpload" key="divkey4" />
        <Question v-show="questionShow" :image="image" @hasQue="hasQue" key="divkey5" /> -->
        <Footer />
    </div>
</template>

<script>
// import AnoPay from '../../components/anoPay.vue'
// import Question from '../../components/question.vue'
export default {
    name: 'Anonymous',
    // components: { AnoPay, Question },
    data() {
        return {
            http: 'https://www.hibifsqm.com',
            // http: 'http://localhost:3020',
            modalShow: false,
            form: {
                order: '',
                result: '',
                paipanImage: null
            },
            payShow: false,
            questionShow: false,
            image: '',
            question: '', // 再次提问
            hasUpdate: null, // 0未更新（不允许用户再次提问，等待结果），1更新，
        }
    },
    methods: {
        jump(index) {
            if (index == 1) {
                // 支付页
                // this.payShow = true;
                this.$router.push('/anonymous/anoPay')
            }
        },
        hasUpload(image) {
            // 已上传支付凭证，隐藏支付页，显示问题页
            this.payShow = false;
            this.questionShow = true;
            this.image = image;
        },
        hasQue() {
            // 占卜成功
            this.questionShow = false;
        },
        getAnoResult() {
            // 订单号查询占卜结果
            const url = `${this.http}/blog/getAnoResult`;
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({order: this.form.order})
            }).then(response => response.json())
                .then(res => {
                    if (res.code == 200 && res.data.length > 0) {
                        this.hasUpdate = res.data[0].hasUpdate ? res.data[0].hasUpdate : null;
                        if (res.data[0].answer && res.data[0].hasUpdate == '1') {
                            this.form.result = res.data[0].answer;
                            this.form.paipanImage = res.data[0].paipanImage;
                        } else {
                            this.form.result = '';
                            this.form.paipanImage = null;
                            this.$message.warning('请等待占卜结果');
                        }
                    }else if (res.code == 200 && res.data.length == 0) {
                        this.$message.warning('请输入正确的订单号');
                    } else {
                        this.$message.warning('请输入正确的订单号');
                    }
                })
        },
        reQuestion() {
            // 再次提问
            const url = `${this.http}/blog/reQuestAnonymous`;
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({order: this.form.order, question: this.question})
            }).then(response => response.json())
                .then(res => {
                    if (res.code == 200) {
                        this.$message.warning('已成功提问，请等待回复');
                        this.modalShow = false;
                        this.question = '';
                        this.form.order = '';
                        this.form.result = '';
                        this.hasUpdate = null;
                    }
                })
        },
        hideModal() {
            this.modalShow = false
        }
    }
}
</script>

<style lang="scss">
.anonymous {
    .bgImg {
        position: relative;
        .nmzbBtn {
            display: flex;
            justify-content: space-between;
            width: 56%;
            position: absolute;
            top: 26.5%;
            left: 50%;
            margin-left: -28%;
            img {
                width: 35%;
                cursor: pointer;
            }
        }
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
            width: 50%;
            margin-top: 15vh;
            .modal-title {
                padding: 20px 20px 10px;
                .modal-title-left {
                    line-height: 24px;
                    font-size: 18px;
                    color: #303133;
                }
                img {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    padding: 0;
                    background: 0 0;
                    border: none;
                    outline: 0;
                    cursor: pointer;
                    width: 15px;
                }
            }
            .modal-body {
                padding: 30px 20px 0 20px;
                color: #606266;
                font-size: 14px;
                word-break: break-all;
                overflow-y: auto;
                max-height: 60vh;
            }
            .center {
                padding-bottom: 30px;
                padding-top: 10px;
            }
        }
    }
}
</style>