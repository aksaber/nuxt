<template>
    <div class="footer" name="footer" id="footer">
        <div class="container" style="padding: 0 100px">
            <div class="home-footer-title">联系我：</div>
            <div class="flex" style="justify-content: space-between">
                <div class="home-footer-flex home-footer-left">
                    <div ref="nofollow">
                        <img src="~assets/tel-icon.png" width="31" height="31">
                        Telegram: @caramel0808
                    </div>
                    <div class="code-modal-hover" @click="showPic(1)" ref="nofollow">
                        <img src="~assets/douyin-icon.png">
                        抖音：hibifsqm
                        <div class="code-modal">
                            <img src="~assets/douyin-code.jpg" width="244">
                        </div>
                    </div>
                    <div ref="nofollow">
                        <img src="~assets/sina-icon.png">
                        微博：Hibi风水奇门工作坊
                    </div>
                    <div ref="nofollow">
                        <img src="../assets/youtube-icon.png">
                        YouTube：Hibi风水奇门工作坊
                    </div>
                </div>
                <div class="home-footer-flex home-footer-center">
                    <div class="code-modal-hover" @click="showPic(4)" ref="nofollow">
                        <img src="../assets/whatsapp-icon.png" width="31" height="31">
                        Whatsapp
                        <div class="code-modal">
                            <img src="../assets/whatsapp-code.png" width="227">
                        </div>
                    </div>
                    <div class="code-modal-hover" @click="showPic(2)" ref="nofollow">
                        <img src="../assets/wechat-icon.png">
                        微信号：caramel0808
                        <div class="code-modal">
                            <img src="../assets/wechat-code.jpg" width="227">
                        </div>
                    </div>
                    <div class="code-modal-hover" @click="showPic(3)" ref="nofollow">
                        <img src="../assets/xcx-icon.png">
                        小程序：Hibi风水奇门工作坊
                        <div class="code-modal">
                            <img src="../assets/xcx-code.jpg" width="227">
                        </div>
                    </div>
                    <div ref="nofollow">
                        <img src="../assets/email-icon.png">
                        邮箱：hibifsqm@gmail.com
                    </div>
                </div>
                <!-- <div class="home-footer-right">
                    <img src="../../assets/wechat-code.png" style="margin-bottom: 5px">
                    <img src="../../assets/xcx-code.png" alt="">
                </div> -->
            </div>
        </div>
        <!-- 手机显示二维码的模态框 -->
        <div class="mobile-modal" v-show="modalShow">
            <div class="modal-content">
                <img
                    src="../assets/close.svg"
                    @click="modalShow = false"
                    style="position: absolute; top: 0; right: -20px; width: 32px; height: 32px"
                >
                <img src="../assets/douyin-code.jpg" v-if="showPicIndex == 1">
                <img src="../assets/wechat-code.jpg" v-if="showPicIndex == 2">
                <img src="../assets/xcx-code.jpg" v-if="showPicIndex == 3">
                <img src="../assets/whatsapp-code.png" v-if="showPicIndex == 4">
            </div>
        </div>
        
        <div class="center" style="padding: 20px 0!important">
            <a href="http://beian.miit.gov.cn" target="_blank" style="color: rgb(43, 43, 43)">粤ICP备20044595</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            modalShow: false,
            showPicIndex: 1,
        }
    },
    methods: {
        showPic(index) {
            this.modalShow = true;
            this.showPicIndex = index;
        },
    }
}
</script>

<style lang="scss">
.footer {
    background: rgb(188, 215, 196);
    padding-top: 80px;
    >div {
        @media (max-width: 1100px) {
            padding: 0!important
        }
    }
    .home-footer-title {
        font-size: 24px;
        margin-bottom: 30px;
        text-indent: 41px;
        @media (max-width: 1100px) {
            font-size: 30px;
        }
    }
    .home-footer-flex {
        >div {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            img {
                margin-right: 10px;
            }
            @media (max-width: 1100px) {
                font-size: 25px;
                line-height: 50px;
            }
        }
        .code-modal-hover {
            position: relative;
            cursor: pointer;
            &:hover {
                @media (min-width: 1000px) {
                    .code-modal {
                        display: block;
                    }
                }
            }
        }
        .code-modal {
            position: absolute;
            bottom: 30px;
            left: 20px;
            text-align: right;
            display: none;
            img {
                box-shadow: 0px 0px 12px #7d7d7d;
            }
        }
    }
    .home-footer-right {
        display: flex;
        flex-direction: column;
    }
    .mobile-modal {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999999;
        background: rgba(0, 0, 0, .4);
        overflow: hidden;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .modal-content {
            text-align: center;
            position: relative;
        }
        img {
            width: 80%;
        }
    }
}
</style>