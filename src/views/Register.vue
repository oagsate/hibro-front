<template>
  <div class="register">
    <div class="form">
      <div class="title">hi, bro!</div>
      <a-form class="register-form">
        <a-form-item label="用户名" :labelCol="{span:6}" :wrapperCol="{span:18}">
          <a-input
            v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
          >
          </a-input>
        </a-form-item>
        <a-form-item label="密码" :labelCol="{span:6}" :wrapperCol="{span:18}">
          <a-input-password
            v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
            type="password"
            placeholder="密码"
          >
          </a-input-password>
        </a-form-item>
        <a-form-item label="性别" :labelCol="{span:6}" :wrapperCol="{span:18}">
          <a-radio-group>
            <a-radio value="a">男</a-radio>
            <a-radio value="b">女</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item>
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
  overflow: hidden;
}
.form {
  width: 400px;
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
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}

.register-form-button {
  width: 100%;
}
</style>
