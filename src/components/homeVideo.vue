<template>
    <div>
        <div class="home-video">
            <video ref="videoElement" autoplay loop muted preload="auto" src="../assets/media/home_video.mp4"></video>
        </div>
    </div>
</template>
<style scoped lang="less">
.home-video {
    border-radius: 20px;
    width: 1241px;
    overflow: hidden;
    margin: auto;

    video {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
}
</style>
