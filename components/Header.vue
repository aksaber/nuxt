<template>
    <div>
        <div class="header" :style="{background: isDetailPage ? '#bcd7c4' : null, position: isDetailPage ? null : 'fixed'}">
            <div class="container flex pcHeader">
                <div class="header-logo flex">
                    <a href="/">
                        <img src="../assets/_logo.png" style="margin-right: 15px">
                    </a>
                </div>
                <ul>
                    <li><a href="/#aboutme">关于我</a></li>
                    <!-- <li><nuxt-link :to="headerData.length > 0 ? headerData[0].url : null">风水课程</nuxt-link></li>
                    <li><nuxt-link :to="headerData.length > 1 ? headerData[1].url : null">奇门占卜</nuxt-link></li> -->
                    <li><a :href="headerData.length > 0 ? headerData[0].url : null">风水课程</a></li>
                    <li><a :href="headerData.length > 1 ? headerData[1].url : null">奇门占卜</a></li>
                    <li><nuxtLink to="../anonymous">匿名占卜</nuxtLink></li>
                    <li><nuxtLink to="../share">博文分享</nuxtLink></li>
                    <li><a href="#footer">联系我</a></li>
                </ul>
            </div>
            <div class="mobileHeader" :style="{background: isDetailPage ? '#bcd7c4' : '#fff'}">
                <div class="collapseDiv container">
                    <div class="header-logo flex">
                        <img src="../assets/_logo.png" style="margin-right: 15px" width="244">
                    </div>
                    <img
                        src="../assets/collapse.png"
                        class="collapseImg"
                        @click="showMenu"
                    />
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="mobile-menu" v-if="isMenu">
                <a href="/">关于我</a>
                <a :href="headerData.length > 0 ? headerData[0].url : null">风水课程</a>
                <a :href="headerData.length > 1 ? headerData[1].url : null">奇门占卜</a>
                <a href="../anonymous">匿名占卜</a>
                <a href="../share">博文分享</a>
                <a href="#footer">联系我</a>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isMenu: false,
            http: 'https://www.hibifsqm.com',
            // http: 'http://localhost:3020',
            headerData: [],
            isDetailPage: false,
            scrollTop: 0
        }
    },
    mounted() {
        // 监听滚动条的高度
        window.addEventListener('scroll', this.handleScroll, true)
        // 获取导航栏跳转链接
        this.getHeader();
        // 如果是infoBlog.html博客详情页，header为绿色色调
        const reg = /\/\d/;
        if (reg.test(window.location.pathname)) {
            this.isDetailPage = true;
        }
    },
    methods: {
        toUrl(url) {
            $nuxt.$router.push(url)
        },
        handleScroll() {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (this.scrollTop > 200) {
                // document.getElementsByClassName('pcHeader')[0].style.opacity = 0;
                document.getElementsByClassName('pcHeader')[0].style.display = 'none';
            } else {
                // document.getElementsByClassName('pcHeader')[0].style.opacity = 1;
                document.getElementsByClassName('pcHeader')[0].style.display = 'flex';
            }
        },
        showMenu() {
            this.isMenu = !this.isMenu;
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
.header {
    width: 100%;
    height: 90px;
    // position: fixed;
    top: 0;
    left: 0;
    transition: all .3s;
    z-index: 99;
    background-size: cover;
    background-position: 50% 50%;
    @media only screen and (max-width: 768px) {
        padding: 0 0.5rem;
    }
    .container {
        height: 90px;
        justify-content: space-between;
        align-items: center;
    }
    .pcHeader {
        transition: all .3s;
        @media (max-width: 980px) {
            display: none!important;
        }
    }
    .mobileHeader {
        position: fixed;
        left: 0;
        width: 100%;
        background: #fff;
        box-shadow: 0px -5px 11px #adacac;
        z-index: 999;
        display: none;
        @media (max-width: 980px) {
            display: block;
            background: rgb(188, 215, 196)!important;
        }
    }
    .header-logo {
        align-items: center;
        img {
            width: 340px;
            margin-top: 10px;
        }
    }
    ul {
        @media (max-width: 768px) {
            display: none;
        }
        li {
            float: left;
            // padding: 0 30px;
            padding: 0 15px;
            @media only screen and (max-width: 640px) {
                padding: 0 7px;
            }
            @media only screen and (max-width: 1400px) {
                padding: 0 7px;
            }
        }
        a {
            cursor: pointer;
            // color: #000;
            color: #30323d;
        }
    }
    .collapseDiv {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .collapseImg {
            width: 32px;
            height: 32px;
            transform: scale(1.5);
        }
    }
}
.mobile-menu {
    text-align: center;
    font-size: 16px;
    padding: 10px 0;
    position: fixed;
    right: 0px;
    top: 88px;
    width: 100%;
    box-shadow: 0px 2px 4px #656b795e;
    z-index: 999;
    background: #fff;
    @media (max-width: 980px) {
        display: block;
    }
    a {
        color: #000;
        font-weight: bold;
        padding: 20px 0;
        display: block;
        font-size: 32px;
    }
    &:after {
        content: '';
        clear: both;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>