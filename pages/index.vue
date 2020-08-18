<template>
    <div id="home">
        <Header />
        <!-- 标题 -->
        <section class="flex home-top">
            <div class="swiper-container" v-swiper:mySwiper="swiperOption" ref="swiperOption" v-if="initSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in swiperData" :key="item">
                        <a :href="item.url"><img :src="item.image" style="width: 100%; height: 100%" /></a>
                    </div>
                </div>
                <div class="swiper-button-prev swiper-button-white"></div>
                <div class="swiper-button-next swiper-button-white"></div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
        <!-- 标题 End -->
        <!-- 上贰 -->
        <section class="home-two">
            <div class="container">
                <div class="home-two-line-1 flex" style="align-items: center">
                    <span style="margin-bottom: 5px; line-height: 33px;">风水和奇门, 这两门课都是我从零基础开始深入学习的, 他们逐渐改变了我的生活.想知道更多背后的故事请点击——————<img src="../assets/click-circular.png" style="position: absolute" @click="jumpUrl"></span>
                </div>
                <div class="home-two-line-2">
                    <span style="margin-bottom: 5px; line-height: 33px;">明师难遇, 通过这个平台, 我希望给喜欢易学的朋友提供一个指引, 同时也乐于分享我一路学习的见闻和心得, 共勉, 感恩<img src="../assets/emoji.png"></span>
                </div>
                <div class="home-two-line-3 flex">
                    <img src="../assets/home-leftWing.png" class="leftWing" width="35" height="630" data-aos="fade-up">
                    <div class="home-two-line-3-content" style="position: relative" data-aos="fade-up">
                        <img src="../assets/home-centerWing1.png" alt="风水课程">
                        <img src="../assets/home-centerWing2.png" class="centerWing-flower" width="222" height="230">
                        <span class="centerWing-title">
                            <img src="../assets/fskc-title.png" >
                        </span>
                        <div class="centerWing-element">
                            <img src="../assets/home-centerWing3.png">
                            <img src="../assets/home-centerWing4.png">
                        </div>
                        <img src="../assets/home-centerWing5.png" class="centerWing-footer">
                    </div>
                    <img src="../assets/home-rightWing.png" class="leftWing" width="35" height="630" data-aos="fade-up">
                    <img src="../assets/cloud-left.png" class="cloud-left" data-aos="fade-up" data-aos-duration="2000">
                    <img src="../assets/cloud-right.png" class="cloud-right" data-aos="fade-up" data-aos-duration="2000">
                </div>
                <div class="home-two-line-4">
                    <div class="home-line4-content">
                        <img src="../assets/home-5elements.png" width="660" height="636">
                        <div class="line4-huo">
                            <strong>针对毫无</strong>
                            <strong>基础但是</strong>
                            <strong>有兴趣的</strong>
                            <strong>年轻用户</strong>
                            <div>
                                <div>针对毫无</div>
                                <div>基础但是</div>
                                <div>有兴趣的</div>
                                <div>年轻用户</div>
                            </div>
                        </div>
                        <div class="line4-mu">
                            <strong>化煞为奴</strong>
                            <strong>为贵</strong>
                            <strong>用神有力</strong>
                            <div>
                                <div>化煞为奴</div>
                                <div>为贵</div>
                                <div>用神有力</div>
                            </div>
                        </div>
                        <div class="line4-tu">
                            <strong>避开凶宅</strong>
                            <strong>趋吉避凶</strong>
                            <strong>调整风水</strong>
                            <div>
                                <div>避开凶宅</div>
                                <div>趋吉避凶</div>
                                <div>调整风水</div>
                            </div>
                        </div>
                        <div class="line4-shui">
                            <strong>催财催丁</strong>
                            <strong>催寿催桃</strong>
                            <strong>花自己就</strong>
                            <strong>能搞定</strong>
                            <div>
                                <div>催财催丁</div>
                                <div>催寿催桃</div>
                                <div>花自己就</div>
                                <div>能搞定</div>
                            </div>
                        </div>
                        <div class="line4-jin">
                            <strong>租房买房</strong>
                            <strong>公司商铺</strong>
                            <strong>风水好坏</strong>
                            <strong>不求人</strong>
                            <div>
                                <div>租房买房</div>
                                <div>公司商铺</div>
                                <div>风水好坏</div>
                                <div>不求人</div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="../assets/cloud-right.png" class="home-two-line-5" data-aos="fade-up" data-aos-duration="2000">
            </div>
        </section>  
        <!-- 上贰 End -->
        <!-- 上叁 -->
        <section class="home-three">
            <div class="container">
                <img src="../assets/home-three.png" style="max-width: 100%">
                <img
                    src="../assets/cloud-left.png"
                    class="left"
                    style="margin-left: -95px; display: block"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
            </div>
        </section>
        <!-- 上叁 End -->
        <!-- 上肆 -->
        <section class="home-four">
            <div class="container flex">
                <img src="../assets/home-fourLeft.png" width="189" height="398" style="margin-top: 280px">
                <div class="flex" style="flex-direction: column; align-items: center; flex: 1">
                    <div class="home-four-title">
                        <div class="flex" style="align-items: flex-end; margin-bottom: 30px">
                            <img src="../assets/home-fourTop.png">
                            <img src="../assets/qmzb-title.png" style="margin-bottom: 10px" alt="奇门占卜">
                        </div>
                        <h1 style="font-size: 28px; text-align: center; font-weight: 400; display: block">Hibi风水奇门工作坊--奇门遁甲简介</h1>
                        <div style="width: 470px">
                            <strong>1️.奇门遁甲古时用于布兵打仗称之为帝王之术, 现代生活用于生活百事预测, 趋吉避凶</strong>
                            <strong>2️.奇门遁甲是一个时空模型, 地盘不动, 神盘、天盘、人盘每个时辰（每2小时）转动一次, 得到的结果即发生变化, 发问时间很关键</strong>
                            <strong>3.奇门遁甲市面上五花八门, 真真假假, 本门派为诸葛奇门术, 市面仅有一家, 诸葛亮是本门派的祖师爷, 法不轻传</strong>
                            <strong>4.没有一个门派的占卜术可以做到百分之百准确, 《了凡四训》都告诉我们可以改命的道理, 当下一个善念都会影响结果和走向, 相由心生, 境由心造</strong>
                        </div>
                        <div class="center" style="margin: 50px 0">
                            <img src="../assets/paipan.gif" width="450">
                        </div>
                    </div>
                </div>
                <img src="../assets/home-centerWing2.png" width="222" height="203">
            </div>
            <div class="minmin" style="color: rgb(140, 188, 162); font-size: 23px; width: 595px; margin: 0 auto">
                <strong>抉择、健康、升迁、感情、投资等生活百事, 我都可以</strong>
                <strong>根据您当下的排盘解读冥冥之中的天意, 告诉您最优的选择</strong>
            </div>
            <div class="container">
                <div class="home-four-footer">
                    <img src="../assets/five-select.png" style="width: 100%">
                    <div class="four-1">
                        做抉择的时候, 哪个更好？
                        <strong>做抉择的时候, 哪个更好？</strong>
                    </div>
                    <div class="four-2">
                        这次手术会顺利吗？
                        <strong>这次手术会顺利吗？</strong>
                    </div>
                    <div class="four-3">
                        这段婚姻会离婚收场吗？
                        <strong>这段婚姻会离婚收场吗？</strong>
                    </div>
                    <div class="four-4">
                        公司晋升我有没有希望？
                        <strong>公司晋升我有没有希望？</strong>
                    </div>
                    <div class="four-5">
                        朋友拉我参与一项投资, 能不能做？
                        <strong>朋友拉我参与一项投资, 能不能做？</strong>
                    </div>
                </div>
            </div>
        </section>
        <!-- 上肆 End -->
        <!-- 上伍 -->
        <section class="home-five">
            <div class="container flex">
                <img src="../assets/cloud-left.png" class="home-five-left" data-aos="fade-up" data-aos-duration="2000">
                <div class="home-five-center">
                    <img src="../assets/mmzz-title.png" alt="奇门占卜可以看到冥冥之中的天意，开盘即可知吉凶，做出更利于我们的选择">
                </div>
                <img src="../assets/cloud-right.png" class="home-five-right" data-aos="fade-up" data-aos-duration="2000">
            </div>
        </section>
        <!-- 上伍 End -->
        <!-- 上陆 -->
        <section class="home-six">
            <div class="container center">
                <img src="../assets/home-six.png" alt="">
                <img src="../assets/mountain.png" style="margin-top: 40px" data-aos="fade-up">
            </div>
        </section>
        <!-- 上陆 End -->
        <!-- 底部 -->
        <Footer />
        <!-- 底部 End -->
        <!-- 手机显示二维码的模态框 -->
    </div>
</template>

<script>
import 'aos/dist/aos.css'
import AOS from 'aos/dist/aos.js'
export default {
    name: 'Home',
    head() {
        return {
            title: 'Hibi风水奇门工作坊',
            meta: [
                { hid: 'description', name: 'description', content: 'Hibi风水奇门工作坊,旨在帮助对易学文化有兴趣的朋友,提供一个学习交流的平台,零基础学风水和奇门遁甲百事占卜预测,趋吉避凶。' },
                { hid: 'keywords', name: 'keywords', content: '零基础学风水,奇门遁甲占卜,风水,占卜,风水奇门,居家风水,生活风水,百事占卜,趋吉避凶,百事预测' },
                { property: 'og:description', content: 'Hibi风水奇门工作坊,旨在帮助对易学文化有兴趣的朋友,提供一个学习交流的平台,零基础学风水和奇门遁甲百事占卜预测,趋吉避凶。' },
                { property: 'og:title', content: '零基础学风水,奇门遁甲占卜,风水,占卜,Hibi风水奇门工作坊' },
                { property: 'og:keywords', content: '零基础学风水,奇门遁甲占卜,风水,占卜,风水奇门,居家风水,生活风水,百事占卜,趋吉避凶,百事预测' },
            ]
        }
    },
    data() {
        return {
            http: 'https://www.hibifsqm.com',
            // http: 'http://localhost:3020',
            headerData: [],
            swiperData: [],
            initSwiper: false,
            swiperOption: {},
        }
    },
    watch: {
        $route: {
            handler: function(val, oldVal){
                // 刷新页面
                this.$router.go(0)
            },
            // 深度观察监听
            deep: true
        }
    },
    mounted() {
        // 初始化aos插件
        AOS.init({
            duration: 2000
        });
        // 获取导航栏跳转链接
        this.getHeader();
        this.initSwiperFun();

        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?64670f29e428c15de0a83182a6d1ed03";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
        })();
    },
    methods: {
        initSwiperFun() {
            const url = `${this.http}/blog/getBanner`;
            fetch(url).then(response => response.json())
                .then(res => {
                    if (res.code == 200) {
                        // 按sort从小到大排序
                        this.swiperData = res.data.sort((prev, next) => {
                            return prev.sort - next.sort
                        })
                        // 获取【关于我】轮播图的索引
                        let aboutMe = 0;
                        if (this.$route.hash == '#aboutme') {
                            for (let i = 0; i < res.data.length; i++) {
                                if (res.data[i].url == 'https://hibifsqm.com/share') {
                                    aboutMe = res.data[i].sort - 1;
                                    break;
                                }
                            }
                        }
                        this.$nextTick(() => {
                            this.swiperOption = {
                                notNextTick: true,
                                loop: true,
                                initialSlide: 0,
                                autoplay: {
                                    delay: 5000,
                                    stopOnLastSlide: false,
                                    disableOnInteraction: false                
                                },
                                initialSlide: aboutMe,
                                navigation: {
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev'
                                },
                                pagination: {
                                    el: '.swiper-pagination',
                                    type: ''
                                },   
                                paginationClickable :true,                    
                                speed: 800,                
                                direction: "horizontal",                
                                grabCursor: true,    
                                observer: true,
                                observeParents: true,
                            }
                            this.initSwiper = true;
                        })
                    }
                })
        },
        jumpUrl() {
            window.location.href = 'https://www.hibifsqm.com/44'
        },
        getHeader() {
            const url = `${this.http}/blog/getHeader`;
            fetch(url).then(response => response.json())
            .then(res => {
                if (res.code == 200) {
                    this.headerData = res.data;
                }
            })
        },
    }
}
</script>

<style lang="scss">
#home {
    background: #fff;
    .home-top {
        // background: rgb(188, 215, 196);
        @media (max-width: 980px) {
            padding-top: 90px;
        }
        .container {
            padding-left: 0px;
            padding-right: 0px;
        }
        .flex {
            align-items: center;
            justify-content: space-between;
            padding: 60px 0;
        }
    }
    .home-two {
        padding: 60px 0;
        background: #fff;
        .home-two-line-1 {
            width: 80%;
            margin: 0 auto;
            margin-bottom: 80px;
            img {
                border: 1px solid rgb(185, 189, 190);
                padding: 2px;
                border-radius: 50%;
                margin-left: 5px;
                cursor: pointer;
                animation: scale-up-two 2s 0s infinite;
            }
            div {
                @media (max-width: 1100px) {
                    font-size: 25px;
                    line-height: 50px;
                }
            }
        }
        .home-two-line-2 {
            width: 80%;
            margin: 0 auto;
            img {
                margin-left: 5px;
                @media (max-width: 1100px) {
                    width: 50px;
                }
            }
            div {
                @media (max-width: 1100px) {
                    font-size: 25px;
                    line-height: 50px;
                }
            }
        }
        .home-two-line-3 {
            justify-content: space-between;
            position: relative;
            .leftWing {
                margin-top: 100px;
            }
            .centerWing-flower {
                position: absolute;
                top: 40px;
                right: 40px;
            }
            .centerWing-title {
                position: absolute;
                top: 282px;
                left: 198px;
            }
            .centerWing-element {
                width: 486px;
                position: absolute;
                top: 500px;
                left: 49px;
                display: flex;
                justify-content: space-between;
            }
            .centerWing-footer {
                width: 512px;
                height: 57px;
                position: absolute;
                top: 771px;
                left: 51px;
            }
            .cloud-left {
                position: absolute;
                bottom: 54px;
                left: -95px;
            }
            .cloud-right {
                position: absolute;
                bottom: 185px;
                right: -95px;
            }
        }
        .home-two-line-4 {
            .home-line4-content {
                width: 660px;
                height: 636px;
                position: relative;
                margin: 0 auto;
                >div {
                    position: absolute;
                    cursor: pointer;
                    transition: all .5s;
                    &:hover {
                        transform: scale(1.2);
                        // >div {
                        //     display: block;
                        // }
                    }
                    >div {
                        display: none;
                        position: absolute;
                        top: -30px;
                        left: 116px;
                        background: #f3f2f2;
                        border-radius: 4px;
                        border: 1px solid #cebcbc;
                        padding: 10px 20px;
                        width: 86px;
                        font-size: 21px;
                        color: #000;
                    }
                }
                strong {
                    margin: 0;
                    color: #fff;
                }
                .line4-huo {
                    top: 59px;
                    left: 276px;
                }
                .line4-mu {
                    top: 212px;
                    left: 85px;
                }
                .line4-tu {
                    top: 216px;
                    left: 502px;
                }
                .line4-shui {
                    top: 476px;
                    left: 148px;
                }
                .line4-jin {
                    top: 476px;
                    left: 441px;
                }
            }
        }
        .home-two-line-5 {
            float: right;
            margin-right: -95px;
        }
    }
    .home-three {
        text-align: center;
        background: rgb(188, 215, 196);
        padding-top: 50px;
        margin-top: 20px;
        padding-bottom: 40px;
    }
    .home-four {
        background: #fff;
        margin-top: 100px;
        .container {
            justify-content: space-between;
        }
        .minmin {
            @media (max-width: 1100px) {
                font-size: 25px;
                line-height: 50px;
            }
        }
        .home-four-title {
            margin-top: -50px;
            width: 470px;
            strong {
                text-indent: 24px;
                padding: 10px 0;
                @media (max-width: 1100px) {
                    font-size: 25px;
                    line-height: 50px;
                }
            }
        }
        .home-four-footer {
            margin: 80px auto;
            position: relative;
            width: 792px;
            max-width: 100%;
            >div {
                position: absolute;
                font-weight: bold;
                font-size: 13px;
                line-height: 20px;
                cursor: pointer;
                transition: all .5s;
                &:hover {
                    transform: scale(1.2);
                    >div {
                        display: block;
                    }
                }
                >strong {
                    display: none;
                    position: absolute;
                    top: -87px;
                    left: 70px;
                    width: 100px;
                    border: 1px solid #cebcbc;
                    padding: 10px 20px;
                    border-radius: 4px;
                    font-size: 16px;
                    line-height: 25px;
                    background: #f3f2f2;
                }
            }
            .four-1 {
                left: 40px;
                top: 28px;
                width: 77px;
            }
            .four-2 {
                left: 208px;
                top: 28px;
                width: 66px;
            }
            .four-3 {
                left: 375px;
                top: 28px;
                width: 69px;
            }
            .four-4 {
                left: 547px;
                top: 28px;
                width: 67px;
            }
            .four-5 {
                left: 713px;
                top: 28px;
                width: 67px;
            }
        }
    }
    .home-five {
        background: rgb(188, 215, 196);
        .container {
            text-align: center;
            position: relative;
            padding: 50px 15px;
            .home-five-left {
                position: absolute;
                left: -95px;
                top: -50px;
            }
            .home-five-center {
                width: 100%;
                text-align: center;
                line-height: 48px;
                font-size: 33px;
                color: rgb(94, 94, 94);
            }
            .home-five-right {
                position: absolute;
                right: -95px;
                bottom: -50px;
            }
        }
    }
    .home-six {
        padding: 50px 0;
        img {
            max-width: 100%;
        }
    }
    .swiper-button-prev {
        left: 50px;
    }
    .swiper-button-next {
        right: 50px;
    }
}
</style>
