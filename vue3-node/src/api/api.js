import request from "./index";

export function getDatas() {
  return request({
    url: "/api/products",
    method: "get",
  });
}

export function handleData(params) {
  let data = {
    id: params.id,
    name: params.name,
    stock: params.stock,
  };
  if (params.id == null) {
    return request({
      url: "/api/products",
      method: "post",
      data,
    });
  } else {
    return request({
      url: "/api/products/" + params.id,
      method: "put",
      data,
    });
  }
}

export function searchData(name) {
  return request({
    url: "/api/products/search/"+ name,
    method: "get",
  });
}

export function deleteData(id) {
  return request({
    url: "/api/products/" + id,
    method: "delete",
    id: id,
  });
}
