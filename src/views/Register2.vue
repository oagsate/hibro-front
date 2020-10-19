<template>
  <div class="register">
    <div class="form">
      <div class="title">hi, bro!</div>
      <a-form class="register-form">
        <a-row>
          <a-col :span="12">
            <a-form-item label="用户名" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-input
                v-decorator="['userName', { rules: [{ required: true, message: '请输入用户名' }] }]"
              ></a-input>
            </a-form-item>
            <a-form-item label="密码" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-input-password
                v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }] }]"
                type="password"
                placeholder="密码"
              ></a-input-password>
            </a-form-item>
            <a-form-item label="性别" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-select>
                <a-select-option value="1">男</a-select-option>
                <a-select-option value="2">女</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="生日" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-date-picker style="width:100%;"></a-date-picker>
            </a-form-item>
            <a-form-item label="情感状况" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-select>
                <a-select-option value="1">单身</a-select-option>
                <a-select-option value="2">恋爱中</a-select-option>
                <a-select-option value="3">已婚</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="教育程度" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-select>
                <a-select-option value="2">初中</a-select-option>
                <a-select-option value="3">高中</a-select-option>
                <a-select-option value="3">大专</a-select-option>
                <a-select-option value="3">本科</a-select-option>
                <a-select-option value="3">硕士</a-select-option>
                <a-select-option value="3">博士</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="居住地" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-select>
                <a-select-option value="2">广州</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="取向" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-select>
                <a-select-option value="1">异性恋</a-select-option>
                <a-select-option value="2">同性恋</a-select-option>
                <a-select-option value="3">双性恋</a-select-option>
                <a-select-option value="4">其他</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="身高" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-input-number
                :formatter="value => `${value}厘米`"
                :parser="value => value.replace('厘米', '')"
                style="width:100%;"
              ></a-input-number>
            </a-form-item>
            <a-form-item label="体重" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-input-number
                :formatter="value => `${value}斤`"
                :parser="value => value.replace('斤', '')"
                style="width:100%;"
              ></a-input-number>
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item label="个人简介" :labelCol="{ span: 3 }" :wrapperCol="{ span: 20 }">
          <a-textarea :rows="6" />
        </a-form-item>
        <a-form-item style="text-align:center;" :wrapperCol="{ span: 20, offset: 3 }">
          <a-button type="primary" html-type="submit" class="register-form-button">注册</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.login {
  overflow: auto;
}
.form {
  width: 800px;
  height: 600px;
  position: absolute;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.title {
  text-align: center;
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 40px;
}

.register-form-button {
  width: 100%;
}
</style>
