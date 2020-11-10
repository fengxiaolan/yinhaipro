// const Mock = require('mockjs');
//
// // 设置拦截ajax请求的相应时间
// Mock.setup({
//   timeout: '200-600'
// });
//
// let configArray = [];
//
// // 使用webpack的require.context()遍历所有mock文件
// const files = require.context('.', true, /\.js$/);
// files.keys().forEach((key) => {
//   if (key === './index.js') return;
//   configArray = configArray.concat(files(key).default);
// });
//
// // 注册所有的mock服务
// configArray.forEach((item) => {
//   for (let [path, target] of Object.entries(item)) {
//     let protocol = path.split('|');
//     Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
//   }
// });

// import data from './index.json'

import Mock from "mockjs";

const Random = Mock.Random;

// 用户信息
Mock.mock("/api/userinfo", "post", () => {
  let userinfo = {
    id: Random.natural(),
    city: Random.city(),
    username: Random.string(),
    createtime: Random.datetime("yyyy年MM月dd日"),
    headImg: "../../assets/logo.png"
  };
  return userinfo;
});

// 用户菜单
Mock.mock("/api/menu", "get", () => {
  let menusList = [];
  for (let i = 0; i < 8; i++) {
    let obj = {
      id: i + Random.guid(),
      label: Random.string(),
      url: Random.url(),
      imgUrl: "../../assets/image/ask.png"
    };
    console.debug(obj);
    menusList.push(obj);
  }
  return menusList;
});

// 通知信息
Mock.mock("/api/notice", "get", () => {
  let noticeinfos = {
    id: Random.natural(),
    info: Random.string(),
    createtime: Random.datetime("yy-MM-dd")
  };
  return noticeinfos;
});

// 待审核
Mock.mock("/api/verify", "get", () => {
  let verifyList = [];
  for (let i = 0; i < 7; i++) {
    let obj = {
      id: i + Random.guid(),
      label: Random.string(),
      url: Random.url(),
      imgUrl: "../../assets/image/ask.png",
      num: i / 2 == 0 ? Random.integer(1, 20) : ""
    };
    verifyList.push(obj);
  }
  return verifyList;
});

// 统计分析
Mock.mock("/api/statistic", "get", () => {
  let statisticList = [];
  for (let i = 0; i < 3; i++) {
    let obj = {
      id: i + Random.guid(),
      name: Random.title(),
      url: Random.url(),
      detail: Random.paragraph()
    };
    statisticList.push(obj);
  }
  return statisticList;
});
