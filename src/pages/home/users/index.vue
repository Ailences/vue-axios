<template>
  <div class="users-container">
    <el-table :data="users" stripe border>
      <el-table-column align="center" prop="id" label="编号" width="180"></el-table-column>
      <el-table-column align="center" prop="username" label="用户名" width="180"></el-table-column>
      <el-table-column align="center" prop="role_name" label="角色"></el-table-column>
      <el-table-column align="center" prop label="状态">
        <template slot-scope="scope">
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
          <el-button
            size="mini"
            :type="scope.row.mg_state ? 'success' : 'danger' "
          >{{scope.row.mg_state ? '已启用' : '已禁用'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { users } from "@/api";
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      // let token = localStorage.getItem("token");

      users(1, 10).then(res => {
        console.log(res);
        if (res.data.meta.status === 200) {
          this.users = res.data.data.users;
        }
      });
    }
    // handleEdit(index, row) {
    //   console.log(index, row);
    // }
  }
};
</script>

<style lang="less">
.users-container {
  .el-table {
    width: 1000px;
    margin: 50px auto;
  }
}
</style>
