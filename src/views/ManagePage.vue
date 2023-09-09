<template>
    <AddMusic @cancel="editUIToggle" @submit="editMusic" v-show="isShowAdd"></AddMusic>
    <span style="font-size:50px;font-weight: 600;">音乐管理页</span>
    <div class="main">
        <el-table :data="tableData" style="width: 100%;">
            <el-table-column prop="musicName" label="歌名" min-width="200px" />
            <el-table-column prop="artistName" label="歌手" min-width="200px" />
            <el-table-column prop="albumName" label="专辑" min-width="200px" />
            <el-table-column fixed="right" label="操作" min-width="250px">
                <template v-slot="scope">
                    <el-button link type="primary" size="small">播放</el-button>
                    <el-button link type="primary" size="small" @click="deleteItem(scope.row)">删除</el-button>
                    <el-button link type="primary" size="small" @click="editItem(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-button style="width: 100%;margin-top: 20px;" @click="addItem">新增音乐</el-button>
    </div>
</template>
  
<script lang="ts" setup>
import Music from "@/models/music";
import { getMusicList, deleteMusic, uploadMusic, updateMusic } from "@/utils/axios";
import AddMusic from '@/components/AddMusic.vue'
import { useMusicStore } from '@/stores/music'
import { ref } from "vue"

const isShowAdd = ref(false)
const store = useMusicStore()
const tableData = ref()
const editUIToggle = () => isShowAdd.value = !isShowAdd.value
const getTableData = async () => {
    await getMusicList().then(res => {
        tableData.value = res as Music
    }).catch(function (error) {
        console.log(error)
    });
}
const deleteItem = (row: Music) => {
    deleteMusic(row).then(() => {
        getTableData()
    })
}
const editMusic = () => {
    if ((store.editMusicDetail as any).status == "add") {
        uploadMusic(store.editMusicDetail).then(() => {
            editUIToggle()
            getTableData()
        })
    } else {
        updateMusic(store.editMusicDetail).then(() => {
            editUIToggle()
            getTableData()
        })
    }

}

const editItem = (row: Music) => {
    store.editMusicDetail = { status: "edit", ...row }
    editUIToggle()
}


const addItem = () => {
    store.editMusicDetail = { status: "add" }
    editUIToggle()
}

getTableData()
</script>



<style>
.main {
    margin: auto;
    width: 90%;
}
</style>








  