<template>
  <div class="login">
    <div class="form">
      <div class="title">hi, bro!</div>
      <a-form class="login-form" :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            v-decorator="['name', { rules: [{ required: true, message: '请输入用户名' }] }]"
            placeholder="用户名"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input-password
            v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }] }]"
            placeholder="密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true
              }
            ]"
            >记住密码</a-checkbox
          >
          <a class="login-form-forgot" href>忘记密码</a>
          <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button
          >没有账号？
          <router-link :to="{ name: 'register' }">马上注册！</router-link>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$http.post("/login", values).then(res => {
            if (res) {
              this.$message.success("登录成功");
              this.$router.push({ name: "square" });
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  overflow: hidden;
}
.form {
  width: 300px;
  height: 400px;
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

.login-form {
  max-width: 300px;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>
