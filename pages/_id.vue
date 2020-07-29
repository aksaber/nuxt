<template>
    <div id="blogInfo">
        <Header />
        <audio
            :src="data.audio"
            v-if="data.audio"
            id="player"
            autoplay
            loop
        ></audio>
        <img
            :src="isPlaying ? require('../assets/audioPlay.png') : require('../assets/audioPause.png')"
            class="audioImg"
            v-if="data.audio"
            @click="playPause"
        >
        <div class="share-first">
            <div class="share-first-content flex">
                <img :src="data.coverImage" class="share-first-coverImage">
                <div class="share-first-title_1">
                    <div>{{ data.title }}</div>
                </div>
                <div class="share-first-title_2 flex">
                    <div style="margin-top: 15px">
                        <div style="margin-bottom: 10px; font-size: 20px">{{ data.date }}</div>
                        <div style="font-size: 18px; margin-bottom: 10px">{{ data.author }}</div>
                        <div class="share-item-tag">
                            <span v-for="item in data.tag" v-if="item != ''">{{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog-content">
            <div class="container">
                <div v-html="data.content" id="infocontent" style="padding: 20px 0"></div>
            </div>
        </div>
        <div class="container" style="margin-top: 20px; font-weight: bold; font-size: 20px">博文分类</div>
        <div class="share-category">
          <li v-for="item in blogType" @click="getData(item.id)">{{ item.name }}</li>
        </div>
        <Footer />  
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'BlogInfo',
    head() {
        return {
            title: this.data.title,
            meta: [
                { property: 'og:title', content: this.data.title },
                { property: 'og:description', content: this.data.intro },
                { property: 'og:image', content: this.data.coverImage },
                { name: 'description', content: this.data.intro },
                { name: 'title', content: this.data.title },
                { name: 'keywords', content: this.data.title },
                { vmid: 'description', name: 'description', content: this.data.intro },
                { vmid: 'title', name: 'title', content: this.data.title },
                // { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        }
    },
    data() {
        return {
            data: {},
            title: '',
            isPlaying: true,
            blogType: []
        }
    },
    async asyncData ({ params, error }) {
        let [res1, res2] = await Promise.all([
            axios.get('https://www.hibifsqm.com/blog/getBlogType'),
            axios.get(`https://www.hibifsqm.com/blog/detail?id=${params.id}`)
        ])
        return {
            blogType: res1.data.data,
            data: res2.data.data[0]
        }
    },
    mounted() {
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?64670f29e428c15de0a83182a6d1ed03";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
        })();

        // 手指事件
        // document.addEventListener('touchstart', () => {
        //     this.touch(event)
        // }, false);  

        // 页面缩放事件
        window.onresize = function() {
            console.log(111)
        }
    },
    methods: {
        touch(event) {
            console.log(event)
            document.getElementById('infocontent').style.maxWidth = `${event.touches[0].clientX}px`;
        },
        getInfo(id) {
            const url = `https://www.hibifsqm.com/blog/detail?id=${id}`;
            fetch(url).then(response => response.json())
                .then(res => {
                    this.data = res.data[0];
                })
        },
        getData(type) {
            this.$router.push({
                path: '/share/' + type
            })
        },
        playPause() {
            if (this.isPlaying) {
                // 当前正在播放，需暂停
                this.isPlaying = false;
                document.getElementById('player').pause();
            } else {
                this.isPlaying = true;
                document.getElementById('player').play();
            }
        }
    }
}
</script>

<style lang="scss">
#blogInfo {
    .share-category {
        padding: 40px 15px;
        border-radius: 3px;
        text-align: center;
        font-weight: bold;
        li {
            cursor: pointer;
            padding: 8px 15px;
            transition: all .2s;
            border-radius: 3px;
            display: inline-block;
            &:hover {
                background: #008734;
                color: #fff;
            }
        }
    }
    .share-first {
        margin: 0 auto;
        padding: 64px 0;
        @media (max-width: 980px) {
            padding-top: 110px;
        }
        @media only screen and (min-width: 768px) {
            width: 800px;
        }
        @media only screen and (min-width: 1200px) {
            width: 1140px;
        }
        >.flex {
            @media (max-width: 992px) {
                text-align: center;
                display: block!important;
            }
        }
        .share-first-content {
            position: relative;
            align-items: flex-end;
            flex-direction: column;
            min-height: 430px;
            .share-first-coverImage {
                position: absolute;
                top: 0;
                left: 40px;
                width: 350px;
                height: 350px;
                border-radius: 50%;
                @media (max-width: 992px) {
                    position: unset!important;
                }
                @media (max-width: 600px) {
                    width: 400px;
                }
                @media (max-width: 500px) {
                    width: 300px;
                }
            }
            .share-first-title_1 {
                margin-top: 95px;
                background: #FCFAFA;
                padding: 25px 60px;
                border-radius: 150px;
                font-size: 0.25rem;
                z-index: 1;
                flex: 0 0 75%;
                max-width: 75%;
                box-sizing: border-box;
                width: 100%;
                @media (max-width: 992px) {
                    margin-top: 0!important;
                    max-width: 100%;
                }
                div {
                    cursor: pointer;
                    transition: transform 0.5s;
                    font-size: 45px;
                    font-weight: bold;
                    &:hover {
                        transform: scale(1.01);
                    }
                }
            }
            .share-first-title_2 {
                z-index: 1;
                flex: 0 0 60%;
                max-width: 60%;
                box-sizing: border-box;
                width: 100%;
                font-size: 18px;
                @media (max-width: 992px) {
                    max-width: 100%;
                    display: block!important;
                }
            }
        }
    }
    .blog-content {
        font-size: 16px;
        word-break: break-all;
        background: #fbfbfb;
        padding-bottom: 50px;
        .container {
            >div, img {
                max-width: 95%;
                margin: 0 auto;
            }
        }
    }
    .audioImg {
        position: fixed;
        top: 96px;
        right: 10px;
        z-index: 9999999;
        width: 48px;
        animation: turn 8s linear infinite;
        cursor: pointer;
    }
    @keyframes turn{
        0%{-webkit-transform:rotate(0deg);}
        25%{-webkit-transform:rotate(90deg);}
        50%{-webkit-transform:rotate(180deg);}
        75%{-webkit-transform:rotate(270deg);}
        100%{-webkit-transform:rotate(360deg);}
    }
    .share-item-tag span {
        display: inline-block;
        background: #19be6b;
        height: 28px;
        line-height: 28px;
        color: #fff;
        padding: 0 12px;
        border-radius: 3px;
        font-size: 12px;
        margin: 2px 4px 2px 0;
    }
}
</style>