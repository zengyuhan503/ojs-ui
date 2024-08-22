<script setup>
import { ref } from "vue";
let emits = defineEmits(["cookieRes"]);
const fulfilledAction = (status) => {
    emits("cookieRes", status)
}
</script>
<template>
    <div class="cookie-banner">
        <p class="title">
            This website is using Cookies!
        </p>
        <p class="desc">
            This web uses 3rd party cookies for statistical purposes that help us to improve the user experience.
        </p>

        <div class="btns">
            <span @click="fulfilledAction(true)">
                Accept all Cookies
            </span>

            <span @click="fulfilledAction(false)">
                Reject all Cookies
            </span>
        </div>
    </div>
</template>
<style lang="less">
.cookie-banner {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 500px;
    padding: 40px;
    border-radius: 15px;
    border: 1px solid #E8705A;
    background: rgba(255, 250, 249, 1);
    z-index: 1001;

    .title {
        color: #E8705A;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
    }

    .desc {
        font-size: 14px;
        line-height: 27px;
    }

    .btns {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;

        span {
            display: inline-block;
            text-align: center;
            line-height: 20px;
            padding: 10px 20px;
            background-color: #E8705A;
            margin-left: 15px;
            color: #fff;
            border-radius: 8px;
            cursor: pointer;

            &:last-child {
                background: #d32f2f;
            }
        }
    }
}
</style>