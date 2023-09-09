<template>
  <span style="margin: auto;margin-top: 200px;font-size: 40px;font-weight: 600;">登录页面</span>
  <div class="form">
    <el-form :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.userId" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="cancel">返回</el-button>


      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/utils/axios'

const router = useRouter()

const form = reactive({
  userId: '',
  password: ''
})

const onSubmit = async () => {
  await login(form.userId, form.password).then(function (response:any) {
    alert("hello " + response.alias)
    console.log(response)
    if(response.role=="administrator"){
      router.push('manage')
    }else{
      router.push('main')
    }
  })
    .catch(function (error) {
      alert(error.response.data.error)
    });

}

const cancel = () => {
  router.push('/')
}
</script>

<style>
.form {
  width: 300px;
  margin: auto;
  margin-top: 130px;
}

.el-form-item__label {
  font-size: 20px;
}
</style>