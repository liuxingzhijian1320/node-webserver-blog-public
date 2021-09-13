<template>
  <div class="pagebox">
    <div class="pagebox-content">

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" width="100%"
        label-width="100px" class="demo-ruleForm">

        <el-form-item label="标题" prop="title" style="width:500px">
          <el-input v-model.trim="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="简介" prop="introduction">
          <el-input v-model.trim="ruleForm.introduction" style="width:500px"
            type="textarea">
          </el-input>
        </el-form-item>

        <el-form-item label="标签" prop="tag">
          <el-select style="width: 400px" v-model="ruleForm.tag" multiple
            value-key="id" placeholder="请选择">
            <el-option v-for="item in categoryList" :key="item.name"
              :label="item.name" :value="item">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="封面" prop="cover">
          <el-upload :action="uploadUrl" list-type="picture-card" name="file"
            :data="{bucket}" :on-preview="handlePictureCardPreview" :limit="1"
            :on-remove="handleRemove" :on-success="successPic"
            :file-list="fileList">
            <i class="el-icon-plus"></i>
          </el-upload>
          <img width="100%" :src="ruleForm.cover" alt="" style="display:none">
          <el-dialog :visible.sync="dialogVisible"
            :modal-append-to-body="false">
            <img width="100%" :src="ruleForm.cover" alt="">
          </el-dialog>
        </el-form-item>

        <el-form-item label="内容" prop="content">
          <mavon-editor ref="editor" @imgAdd="imgAdd" :ishljs="true"
            v-model="ruleForm.content" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即保存
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "../../assets/styles/_highlight.scss";
import { mapGetters } from "vuex";
export default {
  name: "ArticleUpdate",
  components: {
    mavonEditor
  },
  computed: {
    ...mapGetters({
      tabs: "login/tabs"
    })
  },
  data() {
    return {
      categoryList: [],
      dialogVisible: false,
      uploadUrl: `${this.API}/api/upload`,
      fileList: [],
      ruleForm: {
        title: "",
        content: "",
        introduction: "",
        cover: "",
        tag: null
      },
      bucket: "article",
      tagSelect: [],
      rules: {
        title: [{ required: true, message: "请输入文章标题", trigger: "blur" }],
        introduction: [
          { required: true, message: "请输入文章简介", trigger: "blur" }
        ],
        // cover: [{ required: true, message: "请上传封面图", trigger: "blur" }],
        // tag: [{ required: true, message: "请选择标签", trigger: "change" }],
        content: [{ required: true, message: "请填写文章", trigger: "blur" }]
      }
    };
  },

  methods: {
    // markdown 上传图片
    async imgAdd(pos, $file) {
      // console.info(555, $file);
      await this.Http.$upload($file, this.bucket).then(res => {
        // console.info(44, res.data.url);
        this.$refs.editor.$img2Url(pos, res.data.url);
      });
    },
    changeData() {
      this.html = this.$refs.md.d_render; //html
      // let textcontent = this.$refs.md.d_value; //普通文本
      // console.info("content", html);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.ruleForm.cover = "";
    },
    successPic(file) {
      this.ruleForm.cover = file.data.url;
    },
    handlePictureCardPreview(file) {
      this.ruleForm.cover = file.url;
      this.dialogVisible = true;
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
      let tag = this.ruleForm.tag.map(item => item.id).join(",");
      let url = `${this.API}/api/article/update/${this.ruleForm.id}`;
      let pramas = {
        ...this.ruleForm,
        tag
      };
      this.Http.$post(url, "put", pramas, {}).then(
        res => {
          if (res.code != 200) {
            this.$message.error(res.message);
          }

          this.$router.push("/article");
          this.$message.success(res.message);
        },
        err => {
          console.log(err);
        }
      );
    },
    getCategory() {
      let url = `${this.API}/api/category/list`;
      this.Http.$get(url, "get", {}, {}).then(
        res => {
          if (res.code == 200) {
            this.categoryList = res.data;
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    getDetail() {
      let url = `${this.API}/api/article/detail/${this.$route.params.id}`;
      this.Http.$get(url, "get", {}, {}).then(
        res => {
          if (res.code == 200) {
            res.data.tag = res.data.categories;
            this.fileList = [{ url: res.data.cover }];
            this.ruleForm = res.data;
            this.getCategory();
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  mounted() {
    this.getDetail();
  }
};
</script>
