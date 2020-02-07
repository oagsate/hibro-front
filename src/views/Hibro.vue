<template>
  <a-layout class="layout">
    <a-layout-header style="position:fixed;width:100%;z-index:1;">
      <div style="width:100%;max-width:1100px;margin-left:auto;margin-right:auto;">
        <div class="logo">hi, bro!</div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :selectedKeys="current"
          :style="{ lineHeight: '64px', float: 'left' }"
        >
          <a-menu-item key="square">
            <router-link :to="{ name: 'square' }">广场</router-link>
          </a-menu-item>
          <a-menu-item key="home">
            <router-link :to="{ name: 'home', params: { id: -1 } }">我的主页</router-link>
          </a-menu-item>
        </a-menu>
        <div class="head-right" @click="logout">注销</div>
        <div class="head-right" @click="prepareEditProfile">编辑资料</div>
        <div class="head-right" @click="visibleAvatar = true">上传头像</div>
        <div class="head-right" style="margin-right:20px;font-weight:bold;color:#fff;">
          欢迎你，{{ self.name }}
        </div>
      </div>
    </a-layout-header>
    <a-layout-content
      style="margin-top:114px;width:100%;max-width:1100px;margin-left:auto;margin-right:auto;"
    >
      <div :style="{ background: '#fff', padding: '24px' }">
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">Created By oagsate</a-layout-footer>
    <a-modal title="编辑资料" v-model="visibleProfile" :width="700" @ok="handleEditProfileSubmit">
      <a-form :form="form">
        <a-row>
          <a-col :span="12">
            <a-form-item label="性别" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-select
                v-decorator="['gender', { rules: [{ required: true, message: '请完善表单' }] }]"
              >
                <a-select-option :value="1">男</a-select-option>
                <a-select-option :value="0">女</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="生日" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-date-picker
                style="width:100%;"
                v-decorator="['birthday', { rules: [{ required: true, message: '请完善表单' }] }]"
                :allowClear="false"
              ></a-date-picker>
            </a-form-item>
            <a-form-item label="身高" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-input-number
                :formatter="value => `${value}厘米`"
                :parser="value => value.replace('厘米', '')"
                style="width:100%;"
                v-decorator="['height', { rules: [{ required: true, message: '请完善表单' }] }]"
              ></a-input-number>
            </a-form-item>
            <a-form-item label="情感状况" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-select
                v-decorator="['status', { rules: [{ required: true, message: '请完善表单' }] }]"
              >
                <a-select-option :value="0">单身</a-select-option>
                <a-select-option :value="1">恋爱中</a-select-option>
                <a-select-option :value="2">已婚</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="教育程度" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-select
                v-decorator="['education', { rules: [{ required: true, message: '请完善表单' }] }]"
              >
                <a-select-option :value="0">初中</a-select-option>
                <a-select-option :value="1">高中</a-select-option>
                <a-select-option :value="2">大专</a-select-option>
                <a-select-option :value="3">本科</a-select-option>
                <a-select-option :value="4">硕士</a-select-option>
                <a-select-option :value="5">博士</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="居住地" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-cascader
                :options="areaA"
                v-decorator="['location', { rules: [{ required: true, message: '请完善表单' }] }]"
              />
            </a-form-item>
            <!-- <a-form-item label="取向" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-select
                v-decorator="[
                  'orientation',
                  { rules: [{ required: true, message: '请完善表单' }] }
                ]"
              >
                <a-select-option :value="0">异性恋</a-select-option>
                <a-select-option :value="1">同性恋</a-select-option>
                <a-select-option :value="2">双性恋</a-select-option>
                <a-select-option :value="3">其他</a-select-option>
              </a-select>
            </a-form-item> -->
            <a-form-item label="体重" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
              <a-input-number
                :formatter="value => `${value}斤`"
                :parser="value => value.replace('斤', '')"
                style="width:100%;"
                v-decorator="['weight', { rules: [{ required: true, message: '请完善表单' }] }]"
              ></a-input-number>
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item label="个人简介" :labelCol="{ span: 3 }" :wrapperCol="{ span: 20 }">
          <a-textarea v-decorator="['description']" :rows="6" />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal title="上传头像" v-model="visibleAvatar" @ok="handleAvatarSubmit">
      <a-upload :fileList="fileList" :beforeUpload="beforeUpload" :remove="handleRemove">
        <a-button> <a-icon type="upload" />选择图片 </a-button>
      </a-upload>
    </a-modal>
  </a-layout>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      current: undefined,
      visibleProfile: false,
      form: this.$form.createForm(this),
      visibleAvatar: false,
      fileList: []
    };
  },
  computed: {
    ...mapState(["self", "area"]),
    ...mapGetters(["areaA"])
  },
  watch: {
    $route() {
      this.setCurrent();
    }
  },
  mounted() {
    this.setCurrent();
    this.fetchArea();
    this.fetchSelf();
  },
  methods: {
    ...mapActions(["fetchSelf", "fetchArea"]),
    setCurrent() {
      if (this.$route.name === "home" && this.$route.params.id != -1) {
        this.current = [];
      } else {
        this.current = [this.$route.name];
      }
    },
    logout() {
      this.$confirm({
        title: "确认操作",
        content: "确定注销吗？",
        onOk: () => {
          this.$http.post("/logout").then(res => {
            if (res) {
              this.$message.success("注销成功");
              this.$router.push({ name: "login" });
            }
          });
        }
      });
    },
    handleEditProfileSubmit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          values.location = values.location[values.location.length - 1];
          values.birthday = values.birthday.unix();
          this.$http.put("/user", values).then(res => {
            if (res) {
              this.$message.success("编辑成功");
              this.visibleProfile = false;
              this.fetchSelf();
            }
          });
        }
      });
    },
    prepareEditProfile() {
      this.visibleProfile = true;
      this.$nextTick(() => {
        let {
          gender,
          location,
          education,
          height,
          weight,
          birthday,
          status,
          // orientation,
          description
        } = this.self;
        if (location) {
          const temp = this.area.find(v => v.areaid === this.self.location);
          if (temp.parentid) {
            location = [temp.parentid, temp.areaid];
          } else {
            location = [location];
          }
        }
        if (birthday) {
          birthday = moment(birthday * 1000);
        }
        this.form.setFieldsValue({
          gender,
          location,
          education,
          height,
          weight,
          birthday,
          status,
          // orientation,
          description
        });
      });
    },
    beforeUpload(file) {
      this.fileList = [file];
      return false;
    },
    handleRemove() {
      this.fileList = [];
    },
    handleAvatarSubmit() {
      if (!this.fileList.length) return;
      const formData = new FormData();
      formData.set("file", this.fileList[0]);
      this.$http.post("/user/uploadAvatar", formData).then(res => {
        if (res) {
          this.$message.success("上传成功");
          this.visibleAvatar = false;
          this.fileList = [];
          this.fetchSelf();
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.layout {
  min-height: 100%;
}
.logo {
  width: 120px;
  float: left;
  color: #fff;
  line-height: 64px;
  font-size: 32px;
  text-align: center;
  margin-right: 20px;
}

.head-right {
  line-height: 64px;
  float: right;
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  margin-left: 8px;
  &:hover {
    color: #fff;
  }
}
</style>
<style lang="less">
@import url("~@/common.less");
#app {
  .ant-layout-header {
    background-color: @background0;
  }
  .ant-menu-dark.ant-menu-horizontal > .ant-menu-item,
  .ant-menu-dark.ant-menu-horizontal > .ant-menu-submenu {
    background-color: @background0;
  }
  .ant-menu.ant-menu-dark .ant-menu-item-selected,
  .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: @background1;
  }
}
</style>
