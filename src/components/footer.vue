<script setup></script>
<template>
    <div class="footer">
        <div class="item item1">
            <img class="logo" src="../assets/image/logo.png" alt="">
            <div class="descs" style="margin-bottom: 24px;">
                <p class="title">HongKong</p>
                <p class="desc">Rm.1801, Easey Comm. Bldg., 253-261 Hennessy Road, Wanchai, Hong Kong, China. 999077
                    <br> STM
                    <br>
                    Phone: +85259821017
                </p>
            </div>
            <div class="descs">
                <p class="title">Netherlands</p>
                <p class="desc">
                    Jordaniestraat 2, <br>
                    2622HT Delft<br>
                    Netherlands<br>
                    Phone: +31687855321<br>
                    Email: info@eaapublishing.org
                </p>
            </div>
        </div>
        <div class="item item2">
            <div class="descs">
                <p class="title">Licensing & Technical Support</p>
                <p class="desc">licensing@eaapublishing.org</p>
            </div>
            <div class="descs" style="margin-top: 24px;">
                <p class="title">Editorial Inquiries</p>
                <p class="desc">
                    editorial@eaapublishing.org <br>
                    ISNI:  0000 0005 0723 3170
                </p>
            </div>
        </div>
        <div class="company links">
            <p class="title">Company</p>
            <p class="link">
                <a href="">Home</a> <br>
            </p>
            <p class="link"><a href="">Featured Products</a><br></p>
            <p class="link"><a href="">Categories</a></p>
        </div>
        <div class="links">
            <p class="title">Support</p>
            <p class="link">
                <a href="">Contact Us</a> <br>
            </p>
            <p class="link"><a href="">Terms of service</a><br></p>
            <p class="link"><a href="">Privacy policy</a></p>
        </div>
        <div class="news">
            <p class="title">News & Updates</p>
            <p class="desc">
                Sign up for the latest news updates
            </p>
            <div class="emails">
                <input type="email" placeholder="Your email address" name="" id="">
                <span><img src="../assets/image/send.png" alt=""></span>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
.footer {
    width: 1241px;
    padding-top: 64px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 64px;

    .item {
        .logo {
            width: 96px;
            margin-bottom: 24px;
        }

        .descs {
            .title {
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 12px;
                line-height: 30px;
            }

            .desc {
                word-break: break-all;
                font-size: 14px;
                color: #061124;
                line-height: 21px;
                margin-top: 12px;
            }
        }
    }

    .item1 {
        width: 332px;
    }

    .item2 {
        width: 232.8px;
    }

    .links {
        .title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 24px;
            line-height: 30px;
        }

        p.link {
            font-size: 14px;
            color: #061124;
            line-height: 21px;
            margin-bottom: 12px;
        }
    }

    .news {
        .title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
        }

        p.desc {
            font-size: 14px;
            color: #061124;
            line-height: 21px;
            margin-bottom: 12px;
        }

        .emails {
            position: relative;

            input {
                border: 1px solid rgb(0 0 0 / 42%);
                background: #fff;
                width: 255px;
                height: 40px;
                box-sizing: border-box;
                border-radius: 8px;
                padding-left: 12px;
                padding-right: 40px;

                &::placeholder {
                    color: #061124;
                    /* 可以设置为你想要的颜色 */
                }
            }

            span {
                position: absolute;
                top: 0;
                right: 0;
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 25px;
                }
            }
        }
    }
}
</style>