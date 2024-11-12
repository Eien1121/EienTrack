<script setup lang="ts">
const { facebook, google, telegram, line, linkedin, ok, vk, skype, twitter, whatsapp } = tokuu_third;

facebook.init("1786051422167747");
function onFacebookLogin() {
    facebook.login().then((response) => {
        console.log("登录成功：", response);
    });
}

google.init("605667378554-v78246odt63e0tni0gjpk8pavtcpm6v0.apps.googleusercontent.com");
function onGoogleLogin() {
    google.login().then((response) => {
        console.log("登录成功：", response);
    });
}

telegram.init({ bot_id: "7716747902", request_access: "write", embed: 1 });
function onTelegramLogin() {
    telegram.login().then((response) => {
        console.log("登录成功：", response);
    });
}
</script>

<template>
    <div style="max-width: 100%">
        <h2>三方登录</h2>
        <el-divider />
        <div class="content">
            <el-button @click="onFacebookLogin">facebook登录</el-button>
            <el-button @click="facebook.share('https://www.google.com/', '测试分享')">facebook分享</el-button>
        </div>
        <el-divider />
        <div class="content">
            <el-button @click="onGoogleLogin">google登录</el-button>
        </div>
        <el-divider />
        <div class="content">
            <el-button @click="onTelegramLogin">telegram登录</el-button>
            <el-button @click="telegram.share('https://www.google.com/', '测试分享')">telegram分享</el-button>
        </div>
        <el-divider />
        <div class="content">
            <el-button disabled>line登录</el-button>
            <el-button @click="line.share('https://www.google.com/', '测试分享')">line分享</el-button>
        </div>
        <el-divider />
        <div class="content">
            <el-button disabled>linkedin登录</el-button>
            <el-button @click="linkedin.share('https://www.google.com/', '测试分享')">linkedin分享</el-button>
        </div>
        <el-divider />
        <div class="content">
            <el-button disabled>ok登录</el-button>
            <el-button @click="ok.share('https://www.google.com/', '测试分享')">ok分享</el-button>
        </div>
        <el-divider />
        <div class="content">
            <el-button disabled>vk登录</el-button>
            <el-button @click="vk.share('https://www.google.com/', '测试分享')">vk分享</el-button>
        </div>
        <el-divider />
        <div class="content">
            <el-button disabled>skype登录</el-button>
            <el-button @click="skype.share('https://www.google.com/', '测试分享')">skype分享</el-button>
        </div>
        <el-divider />
        <div class="content">
            <el-button disabled>twitter登录</el-button>
            <el-button @click="twitter.share('https://www.google.com/', '测试分享')">twitter分享</el-button>
        </div>
        <el-divider />
        <div class="content">
            <el-button disabled>whatsapp登录</el-button>
            <el-button @click="whatsapp.share('https://www.google.com/', '测试分享')">whatsapp分享</el-button>
        </div>
    </div>
</template>

<style scoped>
.content {
    text-align: left;
}
button {
    min-width: 130px;
}
</style>
