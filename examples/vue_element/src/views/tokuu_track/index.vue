<script setup lang="ts">
tokuu_track.init("test", "skin001", 0, 0);
function onScriptLoadFailed() {
    const scriptElement = document.createElement("script");
    scriptElement.src = "./../bin/track.xxx.js";
    document.body.appendChild(scriptElement);
}

function onScriptError() {
    const badCode = "const s;";
    eval(badCode);
}
</script>

<template>
    <div style="max-width: 100%">
        <h2>页面错误跟踪/打点</h2>
        <el-divider />
        <div class="content">
            <button @click="onScriptLoadFailed()">script加载失败</button>
            <button @click="onScriptError()">script运行错误</button>
        </div>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    justify-content: space-around;
}
</style>
