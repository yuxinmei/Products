# Products

 > a simple table with crud and search function based on vue3 
 
  # a very simple demo for crud
  ![ezgif-2-6b9eba3211](https://user-images.githubusercontent.com/44768546/160653202-073b5ef6-03ca-411a-9c26-8c3a9934f935.gif)

 
## Install

 `git clone git@github.com:yuxinmei/Products.git`
 
`npm install` or `yarn`
 
 ### database mysql
 
 at the root project dir you can try
 `docker-compose up `
 ### if failed you can try 1 if you have docker or you can use your local mysql
 
 1. first create mysql image if you have docker
  - (this command for mac m1 which i use to create mysql image )


` docker run --name=mysql -d  -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 mysql/mysql-server `
 
  - (this command for normal use to create mysql image )


`docker run -itd --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql `
 
 
 then 
 ```
 docker exec -it mysql /bin/bash
 mysql -uroot -p123456
 use mysql
 ```
 [PROJECT DDL(create database,table and sample data)](https://github.com/yuxinmei/Products/blob/main/vue3-node/server/sql/products.sql)
 

 After that, create a `.env` file and set the database username & password:

```env

APP_PORT=3001
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=Products
MYSQL_USER=root
MYSQL_PASSWORD=123456


```
 
### Run

> Node.js & Docker support. **You need to create a `.env` file as above**.

### Node.js

Beacuse of using Koa2, `Node.js >= v7.6.0` is needed.

#### Development: 

`npm run dev / yarn dev ` && `node app.js`

open browser: `localhost:3000`


## Test:

### for test unit 
`yarn run test:unit`

<img width="1440" alt="Screen Shot 2022-03-29 at 7 07 59 PM" src="https://user-images.githubusercontent.com/44768546/160653963-65908d43-2d10-4cd8-b56b-3094e1e169b2.png">


### for test e2e 
`yarn run test:e2e`

<img width="1440" alt="Screen Shot 2022-03-29 at 8 17 00 PM" src="https://user-images.githubusercontent.com/44768546/160654028-6e0abad6-84e9-451d-9fef-17bda2d76690.png">

 
 ### use mock.js
 in main.js uncomment the line8
 
 
 <img width="655" alt="image" src="https://user-images.githubusercontent.com/44768546/160653021-5453f1bf-01f1-4156-9612-990196d50dab.png">


 
 

 
 
 
