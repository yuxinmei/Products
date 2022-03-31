<template>
  <el-button type="primary" class="add-button" @click="openDialog(null, null)"
    >Add</el-button
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
          @click="search(searchValue)"
          >search</el-button
        >
      </template>
      <template v-slot="scope">
        <el-button size="mini" @click="openDialog(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
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
        this.tableData = res.data;
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
    getList() {
      getDatas()
        .then((res) => {
          this.tableData = res.data;
        })
        .catch((err) => {});
    },
    search(name) {
      if (!name) {
        this.getList();
      } else {
        searchData(name)
          .then((res) => {
            this.tableData = res.data;
          })
          .catch((err) => {});
      }
    },
    openDialog(index, row) {
      if (index == null) {
        this.form = [{}];
      }
      Object.assign(this.form, row);
      this.dialogFormVisible = true;
    },

    handleData(data) {
      if (!data.name || !data.stock) {
        alert("please input name or stock!");
        return;
      } else if ( !(/^[0-9]{1,20}$/.exec(data.stock))) {
        alert("stock must be number!");
        return;
      }

      handleData(data)
        .then((res) => {
          this.getList();
          this.dialogFormVisible = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleDelete(row) {
      deleteData(row.id)
        .then((res) => {
          this.getList();
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
