<template>
  <div class="pagebox">

    <div class="pagebox-search">
      <el-form :inline="true" size="mini">
        <el-form-item label="标题">
          <el-input placeholder="" clearable v-model.trim="searchData.keyword"
            style="width:200px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSearch">搜索
          </el-button>
        </el-form-item>
        <el-form-item style="float: right;margin-right:0">
          <el-button type="primary" @click="openAdd">
            新建
          </el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="pagebox-content">

      <el-table :data="tableData" border size="mini" v-loading="!ableToLoad"
        stripe>
        <el-table-column type="index" width="60" fixed></el-table-column>
        <el-table-column label="操作" width="300" fixed>
          <template slot-scope="scope">
            <el-button @click.native.prevent="openUpdate(scope.row)"
              type="primary" size="mini">编辑</el-button>
            <el-button @click.native.prevent="del(scope.row)" type="danger"
              size="mini">删除</el-button>
            <el-button v-if="scope.row.is_del"
              @click.native.prevent="isDel(false, scope.row)" type="primary"
              size="mini">上架</el-button>
            <el-button v-if="!scope.row.is_del"
              @click.native.prevent="isDel(true, scope.row)" type="danger"
              size="mini">下架</el-button>
            <el-button @click.native.prevent="comment(scope.row)" type="info"
              size="mini">评论</el-button>
          </template>
        </el-table-column>

        <!-- <el-table-column label="封面" width="150" show-overflow-tooltip>
            <template slot-scope="scope">
              <img :src="scope.row.cover" width="30" height="30">
            </template>
          </el-table-column> -->
        <el-table-column prop="author" label="作者" width="100"
          show-overflow-tooltip></el-table-column>
        <el-table-column prop="browser" label="浏览量" width="100"
          show-overflow-tooltip></el-table-column>
        <el-table-column prop="title" label="标题" width="150"
          show-overflow-tooltip></el-table-column>
        <el-table-column prop="content" label="内容" width="300"
          show-overflow-tooltip></el-table-column>
        <el-table-column label="创建时间" width="150">
          <template slot-scope="scope">
            {{scope.row.createdAt}}
          </template>
        </el-table-column>
        <el-table-column label="更新时间" min-width="150">
          <template slot-scope="scope">
            {{scope.row.updatedAt}}
          </template>
        </el-table-column>
      </el-table>

    </div>
    <!-- 表格分页 -->
    <div class="pagebox-pagination">
      <el-pagination @size-change="handleSizeChange"
        @current-change="handleCurrentChange" :current-page="pageIndex"
        :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
      </el-pagination>
    </div>

    <mycontent v-if="isRouterView"></mycontent>

  </div>
</template>

<script>
import mycontent from "../../components/Layout/Content";

export default {
  name: "Article",
  components: {
    mycontent
  },
  data() {
    return {
      isRouterView: false,
      activeRouteName: "",
      tableData: [],
      ableToLoad: true,
      pageIndex: 1,
      pageSize: 10,
      totalCount: 0,

      searchData: {
        keyword: ""
      }
    };
  },
  watch: {
    $route: {
      handler(route) {
        this.getList();
        if (
          route.name == "articleAdd" ||
          route.name == "articleUpdate" ||
          route.name == "articleComment"
        ) {
          this.isRouterView = true;
        } else {
          this.isRouterView = false;
        }
      },
      immediate: true
    }
  },
  mounted() {},
  methods: {
    onSearch() {
      this.pageIndex = 1;
      this.getList();
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getList();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.getList();
    },
    indexMethod(index) {
      return index + this.pageSize * (this.pageIndex - 1) + 1;
    },

    openAdd() {
      this.$router.push("/article/add");
    },

    comment(row) {
      this.$router.push(`/article/${row.id}/comment`);
    },

    openUpdate(row) {
      this.$router.push(`/article/update/${row.id}`);
    },

    isDel(is_del, item) {
      let that = this;
      let url = `${that.API}/api/article/hidden/${item.id}`;
      let params = {
        is_del
      };
      that.Http.$post(url, "put", params, {}).then(
        res => {
          if (res.code == 200) {
            this.$message({
              type: "success",
              message: `${!is_del ? "下架" : "上架"}成功!`
            });
            this.getList();
          } else {
            that.$message.error(res.message);
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    delHandler(item) {
      let that = this;
      let url = `${that.API}/api/article/delete/${item.id}`;
      let params = {
        id: item.id
      };
      that.Http.$post(url, "delete", params, {}).then(
        res => {
          if (res.code == 200) {
            this.$message({
              type: "success",
              message: res.message
            });
            this.getList();
          } else {
            that.$message.error(res.message);
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    del(item) {
      this.$confirm("确定删除吗？, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.delHandler(item);
        })
        .catch(() => {});
    },

    getList() {
      let that = this;

      if (!that.ableToLoad) return;
      that.ableToLoad = false;
      let params = {
        ...that.searchData,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      };

      let url = `${that.API}/api/article/list`;
      that.Http.$get(url, "get", params, {}).then(
        res => {
          if (res.code == 200) {
            that.tableData = res.data.data;
            that.totalCount = res.data.totalCount;
          } else {
            that.$message.error(res.message);
          }
          that.ableToLoad = true;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

