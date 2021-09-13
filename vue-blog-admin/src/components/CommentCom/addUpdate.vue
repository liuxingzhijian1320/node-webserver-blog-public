<template>
  <el-dialog :title="selectData.id?'编辑留言':'新增留言'" :visible.sync="status"
    :modal-append-to-body="false" width="700px" @close="$emit('close')">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"
      label-width='120px'>
      <el-form-item label="昵称" prop="username">
        <el-input v-model="ruleForm.username" width="400px" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item label="头像" prop="avatar">
        <!-- <el-button>随机生成头像</el-button> -->
        <el-input v-model="ruleForm.avatar" width="400px" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" width="400px" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" rows='5' v-model="ruleForm.content"
          width="400px" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item label="创建时间" prop="createdAt" v-if="selectData.id">
        <div>{{ruleForm.createdAt}}</div>
      </el-form-item>
      <el-form-item label="更新时间" prop="updatedAt" v-if="selectData.id">
        <div>{{ruleForm.updatedAt}}</div>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close(false)">取 消</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import Utils from "src/assets/scripts";
export default {
  name: "aa2",
  props: {
    showAddUpdate: Boolean,
    selectData: Object
  },
  data() {
    return {
      status: this.showAddUpdate,
      rules: {
        username: [{ required: true, message: "请输入名称", trigger: "blur" }],
        // avatar: [{ required: true, message: "请输入头像", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        content: [{ required: true, message: "请输入内容", trigger: "blur" }]
      },
      ruleForm: {
        username: "",
        avatar: "qweqwe",
        email: "",
        content: ""
      }
    };
  },
  created() {
    this.ruleForm = this.selectData;
    if (this.selectData.pid > 0) {
      this.ruleForm = {
        ...this.selectData,

        username: Utils.gUint().boss,
        avatar: Utils.gUint().avatar,
        email: Utils.gUint().email
      };
    } else {
      this.ruleForm = this.selectData;
    }
  },
  methods: {
    close(val = false) {
      this.$emit("close", val);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.submit();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submit() {
      if (this.ruleForm.id) {
        this.update();
      } else {
        this.add();
      }
    },
    add() {
      let url = `${this.API}/api/comment/create`;
      let params = {
        ...this.ruleForm,
        avatar: ""
      };
      this.Http.$post(url, "post", params, {}).then(
        res => {
          if (res.code != 200) {
            this.$message.error(res.message);
          }
          this.close(true);
          this.$message.success(res.message);
        },
        err => {
          console.log(err);
        }
      );
    },
    update() {
      let url = `${this.API}/api/comment/update/${this.ruleForm.id}`;
      let params = {
        ...this.ruleForm
      };
      this.Http.$post(url, "PUT", params, {}).then(
        res => {
          if (res.code != 200) {
            this.$message.error(res.message);
          }
          this.$message.success(res.message);
          this.close(true);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style>
</style>
