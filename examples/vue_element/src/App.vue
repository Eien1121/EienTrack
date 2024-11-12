<script setup lang="ts">
import LeftMenu from "@/components/LeftMenu.vue";
</script>

<template>
    <el-container>
        <el-aside>
            <LeftMenu />
        </el-aside>
        <el-main width="100%">
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<style scoped>
.el-container {
    min-height: 100vh;
}
</style>
