// src/api/api.js
// import axios from "axios";
import request from "./index";

// axios.defaults.baseURL = "http://localhost:3001";
export function getDatas() {
  return request({
    url: "/api/productss",
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

export function searchData(params) {
  return request({
    url: "/api/products",
    method: "get",
    params,
  });
}

export function deleteData(id) {
  return request({
    url: "/api/products/" + id,
    method: "delete",
    id: id,
  });
}
