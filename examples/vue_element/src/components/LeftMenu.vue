<script setup lang="ts">
import { ref } from "vue";
import { routes } from "@/router/index.ts";

const activePath = ref(location.hash);
</script>

<template>
    <el-menu router :default-active="activePath" class="pt-5" style="height: 100%">
        <el-menu-item v-for="item in routes" :key="item.path" :index="item.path">
            <template #title>
                <span class="text-18">{{ item.name }}</span>
            </template>
        </el-menu-item>
    </el-menu>
</template>

<style scoped></style>
