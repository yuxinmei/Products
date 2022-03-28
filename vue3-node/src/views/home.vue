<template>
  <div class="common-layout">
    <el-container>
      <el-header></el-header>
      <el-main> <product-form /></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import ProductForm from "./product-form.vue";

export default {
  components: {
    ProductForm,
  },
  //   created() {
  //     const userInfo = this.getUserInfo();
  //     if (userInfo !== null) {
  //       this.id = userInfo.id;
  //       this.name = userInfo.name;
  //     } else {
  //       this.id = "";
  //       this.name = "";
  //     }
  //     this.getTodolist();
  //   },
  //   data() {
  //     return {
  //       name: "",
  //       todos: "",
  //       activeName: "first",
  //       list: [],
  //       count: 0,
  //       id: "",
  //     };
  //   },
  //   computed: {
  //     Done() {
  //       let count = 0;
  //       let length = this.list.length;
  //       for (let i in this.list) {
  //         this.list[i].status === 1 ? (count += 1) : (count += 0);
  //       }
  //       this.count = count;
  //       if (count === length || length === 0) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     },
  //   },

  //   methods: {
  //     addTodos() {
  //       if (this.todos === "") {
  //         return false;
  //       }
  //       let obj = {
  //         status: false,
  //         content: this.todos,
  //         id: this.id,
  //       };
  //       this.$http.post("/api/todolist", obj).then(
  //         (res) => {
  //           if (res.status === 200) {
  //             this.$message({
  //               type: "success",
  //               message: "创建成功！",
  //             });
  //             this.getTodolist();
  //           } else {
  //             this.$message.error("创建失败！");
  //           }
  //         },
  //         (err) => {
  //           this.$message.error("创建失败！");
  //           console.log(err);
  //         }
  //       );
  //       this.todos = "";
  //     },
  //     update(index) {
  //       this.$http
  //         .put(
  //           "/api/todolist/" +
  //             this.id +
  //             "/" +
  //             this.list[index].id +
  //             "/" +
  //             this.list[index].status
  //         )
  //         .then(
  //           (res) => {
  //             if (res.status === 200) {
  //               this.$message({
  //                 type: "success",
  //                 message: "任务状态更新成功！",
  //               });
  //               this.getTodolist();
  //             } else {
  //               this.$message.error("任务状态更新失败！");
  //             }
  //           },
  //           (err) => {
  //             this.$message.error("任务状态更新失败！");
  //             console.log(err);
  //           }
  //         );
  //     },
  //     remove(index) {
  //       this.$http
  //         .delete("/api/todolist/" + this.id + "/" + this.list[index].id)
  //         .then(
  //           (res) => {
  //             if (res.status === 200) {
  //               this.$message({
  //                 type: "success",
  //                 message: "任务删除成功！",
  //               });
  //               this.getTodolist();
  //             } else {
  //               this.$message.error("任务删除失败！");
  //             }
  //           },
  //           (err) => {
  //             this.$message.error("任务删除失败！");
  //             console.log(err);
  //           }
  //         );
  //     },
  //     getUserInfo() {
  //       const token = sessionStorage.getItem("demo-token");
  //       if (token !== null && token !== "null") {
  //         let decode = jwt.decode(token);
  //         return decode;
  //       } else {
  //         return null;
  //       }
  //     },
  //     getTodolist() {
  //       const getTodolist = this.$http.get("/api/todolist/" + this.id);
  //       getTodolist.then(
  //         (res) => {
  //           if (res.status === 200) {
  //             this.list = res.data.result;
  //           } else {
  //             this.$message.error("获取列表失败！");
  //           }
  //         },
  //         (err) => {
  //           this.$message.error("获取列表失败！");
  //           console.log(err);
  //         }
  //       );
  //       return getTodolist;
  //     },
  //   },
  // };

  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      getData()
        .then((res) => {
          Object.assign(this.tableData, res.data.data);
          console.log(this.tableData);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
<style scoped>
a {
  color: #42b983;
}
</style>
