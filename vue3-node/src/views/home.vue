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
