import Mock from "mockjs";
const Random = Mock.Random;

const url = "http://localhost:3001";
const { dataList } = Mock.mock({
  dataList: [
    {
      id: 1,
      name: "@word(3, 5)",
      stock: "@integer(10, 400)",
    },
    {
      id: 2,
      name: "@word(3, 5)",
      stock: "@integer(10, 400)",
    },
    {
      id: 3,
      name: "@word(3, 5)",
      stock: "@integer(10, 400)",
    },
  ],
});


//todo
Mock.mock(url + "/api/products", "get", (req, res) => {
  const body = JSON.parse(req.body);
  Object.assign(tableList,newList)
  return {
    status: 200,
    message: "get list success",
    data: dataList,
  };
});

Mock.mock(url + "/api/products", "get", (req, res) => {
  return {
    status: 200,
    message: "get list success",
    data: dataList,
  };
});

//todo
Mock.mock(url + "/api/products", "put", (req, res) => {
  return {
    status: 200,
    message: "update success",
    data: dataList,
  };
});

Mock.mock(url + "/api/products", "post", (req, res) => {
  const body = JSON.parse(req.body);

  dataList.push(
    Mock.mock({
      id: "@increment()",
      name: body.name,
      stock: parseInt(body.stock),
    })
  );
  return {
    status: 200,
    message: "add success",
    data: dataList,
  };
});

//todo
Mock.mock(RegExp(url + "/api/products" + ".*"), "delete", (req, res) => {
  const id = req.url.split("/")[req.url.split("/").length - 1];
  console.log(id)
  const index = dataList.findIndex(item=>item.id ==id) ;
 let obj =  dataList.splice(index, 1);
 console.log(index,obj)
  return {
    status: 200,
    message: "delete success",
    data: obj,
  };
});
