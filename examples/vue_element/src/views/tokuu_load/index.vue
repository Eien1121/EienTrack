<script setup lang="ts">
import { ref } from "vue";

const imagesInfo = ref(<any[]>[]);
const imageURLs = [
    "https://cdn.britannica.com/82/152982-050-11159CF4/Daniel-Radcliffe-Rupert-Grint-Emma-Watson-Harry.jpg",
    "https://kenh14cdn.com/zoom/840_526/203336854389633024/2024/10/28/avatar1730091750642-1730091753471192201361.jpg",
];
const handleLoadImages = async () => {
    imagesInfo.value.length = 0;
    for (const url of imageURLs) {
        const singleImage = await tokuu_load.loadImages(url);

        imagesInfo.value.push(singleImage);
    }
    console.log("圖片已全部加載成功");
};
const handleLoadScript = async () => {
    await tokuu_load.loadScript("https://connect.facebook.net/en_US/sdk.js");
    console.log("文檔已全部加載成功");
};
</script>
<template>
    <div style="max-width: 100%">
        <h2>加载</h2>
        <el-divider />
        <div class="content" style="display: flex; justify-content: space-around">
            <button @click="handleLoadImages()">測試加载圖片</button>
            <button @click="handleLoadScript()">測試加载文檔</button>
        </div>
        <el-divider />
        測試靜態已加载圖片：
        <!--        <img-->
        <!--            src="https://cdn.britannica.com/82/152982-050-11159CF4/Daniel-Radcliffe-Rupert-Grint-Emma-Watson-Harry.jpg"-->
        <!--        />-->
        <el-divider />
        透過tokuu加载圖片展示：
        <div style="margin-top: 40px">
            <img :src="item.src" :width="item.width" :height="item.height" v-for="item in imagesInfo" />
        </div>
    </div>
</template>

<style scoped></style>
