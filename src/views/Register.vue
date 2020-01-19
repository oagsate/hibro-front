<template>
  <div class="register">
    <div class="form">
      <div class="title">hi, bro!</div>
      <a-form class="register-form" :form="form">
        <a-form-item>
          <a-input
            v-decorator="['name', { rules: [{ required: true, message: '请输入用户名' }] }]"
            placeholder="用户名"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'email',
              {
                rules: [
                  { required: true, message: '请输入邮箱' },
                  { type: 'email', message: '请输入正确的邮箱格式' }
                ]
              }
            ]"
            placeholder="邮箱"
          >
            <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input-password
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: '请输入密码' },
                  { min: 6, message: '密码应不少于6位' }
                ]
              }
            ]"
            type="password"
            placeholder="密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" class="register-form-button" @click="handleSubmit"
            >注册</a-button
          >
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
    handleSubmit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$http.post("/register", values).then(res => {
            if (res.state) {
              this.$message.success("注册成功！");
              this.$router.push({ name: "square" });
            } else {
              this.$message.error(res.errmsg);
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.register {
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

.register-form {
  max-width: 300px;
}
.register-form-forgot {
  float: right;
}
.register-form-button {
  width: 100%;
}
</style>
