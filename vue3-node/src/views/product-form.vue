<template>
  <el-button type="primary" class="add-button" @click="openDialog(null, null)"
    >add</el-button
  >

  <el-dialog v-model:visible="dialogFormVisible">
    <template v-slot:default>
      <el-form :model="form">
        <el-form-item label="Name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Stock">
          <el-input v-model="form.stock" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
    </template>
    <template v-slot:footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">cancel</el-button>
        <el-button type="primary" @click="handleData(form)">confirm</el-button>
      </div>
    </template>
  </el-dialog>
  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column label="Name" prop="name"> </el-table-column>
    <el-table-column label="Stock" prop="stock"> </el-table-column>
    <el-table-column align="center">
      <template v-slot:header="scope">
        <el-input
          style="width: 150px"
          v-model="searchValue"
          size="mini"
          placeholder="search name"
        />
        <el-button
          size="small"
          style="margin-left: 10px"
          @click="searchData(searchValue)"
          >search</el-button
        >
      </template>
      <template v-slot="scope">
        <el-button size="mini" @click="openDialog(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getDatas, handleData, searchData, deleteData } from "../api/api.js";
export default {
  created() {
    getDatas()
      .then((res) => {
        Object.assign(this.tableData, res.data.data);
      })
      .catch((err) => {});
  },
  data() {
    return {
      searchValue: "",
      dialogFormVisible: false,
      form: [],
      tableData: [{}],
    };
  },
  methods: {
    search(name) {
      console.log(name);
    },
    openDialog(index, row) {
      if (index == null) {
        this.form = [{}];
      }
      Object.assign(this.form, row);
      this.dialogFormVisible = true;
    },

    handleData(data) {
      handleData(data)
        .then((res) => {
          getDatas();
          this.dialogFormVisible = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchData(data) {
      searchData(data)
        .then((res) => {
          Object.assign(this.tableData, res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDelete(index, row) {
      deleteData(row.id)
        .then((res) => {
          getDatas();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.add-button {
  float: right;
  margin-bottom: 10px;
}
.table {
  width: 400px;
  margin-bottom: 250px;
}
</style>
