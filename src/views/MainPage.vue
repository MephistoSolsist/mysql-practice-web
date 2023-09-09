<template>
    <span style="font-size:50px;font-weight: 600;">音乐播放页</span>
    <div class="main">
        <el-table :data="tableData" style="width: 100%;">
            <el-table-column prop="musicName" label="歌名" min-width="200px" />
            <el-table-column prop="artistName" label="歌手" min-width="200px" />
            <el-table-column prop="albumName" label="专辑" min-width="200px" />
            <el-table-column fixed="right" label="操作" min-width="250px">
                <template #default>
                    <el-button link type="primary" size="small">播放</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
  
<script lang="ts" setup>
import Music from "@/models/music";
import { getMusicList } from "@/utils/axios";
import { ref } from "vue"

const tableData = ref()
const getTableData = async () => {
    await getMusicList().then(res => {
        tableData.value = res as Music
    }).catch(function (error) {
        console.log(error)
    });
}
getTableData()
</script>



<style>
.main {
    margin: auto;
    width: 90%;
}
</style>








  