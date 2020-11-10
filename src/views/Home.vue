<template>
  <div class="container">
    <div class="top-box">
      <div class="user-box">
        <div class="user-info">
          <div class="usericon">
            <img :src="userinfo.headImg" alt="" />
          </div>
          <div class="userdetail">
            <div class="username">{{ userinfo.username }}，你好</div>
            <span class="time">{{ userinfo.createtime }}</span>
          </div>
        </div>
        <div class="scan">
          <img src="../assets/image/scan.png" />
        </div>
      </div>

      <div class="usemenu">
        <div class="menu-group">
          <div
            class="menu-item"
            v-for="item in menusList"
            :key="item.id"
            @click="fnClickMenu(item.id, item.url)"
          >
            <!--            <img :src="item.imgUrl">-->
            <img src="../assets/image/img.png" />
            <div class="menu-text">{{ item.label }}</div>
          </div>
        </div>

        <div class="notice">
          <div class="notice-icon"></div>
          <div class="notice-con">{{ noticeinfos.info }}</div>
          <div class="notice-more"></div>
        </div>
      </div>
    </div>

    <div class="verify-box">
      <div class="title">
        待审核（<span class="verify-num">{{ verifyList.length }}</span
        >）
      </div>
      <div class="verify-group">
        <div
          class="verify-item"
          v-for="item in verifyList"
          :key="item.id"
          @click="fnClickVerify(item.id, item.url)"
        >
          <van-icon name="../assets/image/ask.png" :badge="item.num" />
          <!--          <van-badge :content="item.num">-->
          <!--            &lt;!&ndash;            <img :src="item.imgUrl">&ndash;&gt;-->
          <!--            <img src="../assets/image/ask.png" />-->
          <!--          </van-badge>-->
          <div class="verify-text">{{ item.label }}</div>
        </div>
        <div class="verify-more"></div>
      </div>
    </div>

    <div class="statistic">
      <div class="title">统计分析</div>
      <div class="statis-list">
        <div
          class="statis-item"
          v-for="item in statisticList"
          :key="item.id"
          @click="fnClickStatistic(item.id, item.url)"
        >
          <div class="imgicon">
            <img src="../assets/image/detail.png" />
          </div>
          <div class="statis-con">
            <div class="statis-title">{{ item.name }}</div>
            <div class="statis-detail">{{ item.detail }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      userinfo: {},
      menusList: [],
      noticeinfos: {},
      verifyList: [],
      statisticList: [],
      name: "123"
    };
  },
  mounted() {
    // 用户信息
    this.$axios.post("/api/userinfo", { username: "1" }).then(res => {
      this.userinfo = res.data;
    });

    // 用户菜单
    this.$axios.get("/api/menu").then(res => {
      console.log(res.data);
      this.menusList = res.data;
    });

    // 通知信息
    this.$axios.get("/api/notice").then(res => {
      this.noticeinfos = res.data;
    });

    // 待审核
    this.$axios.get("/api/verify").then(res => {
      this.verifyList = res.data;
    });

    // 统计分析
    this.$axios.get("/api/statistic").then(res => {
      this.statisticList = res.data;
    });
  },
  methods: {
    fnClickMenu(id, url) {
      console.log(id, url);
    },
    fnClickVerify(id, url) {
      console.log(id, url);
    },
    fnClickStatistic(id, url) {
      console.log(id, url);
    }
  }
};
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}
.container {
  padding: 30px;
  background: #f5f9fc url("../assets/image/top.png") no-repeat;
  background-size: 100% 225px;
}
.top-box {
  margin-bottom: 16px;
  .user-box {
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .user-info {
      display: flex;
      .usericon {
        img {
          width: 98px;
          height: 98px;
          border: 6px solid #6ab4fe;
          border-radius: 50%;
        }
      }
      .userdetail {
        margin-left: 15px;
        padding-top: 12px;
        .username {
          font-size: 18px;
          color: #ffffff;
        }
        .time {
          font-size: 12px;
          line-height: 14px;
          color: #ffffff;
        }
      }
    }
    .scan {
      padding-top: 32px;
      img {
        width: 44px;
        height: 44px;
      }
    }
  }

  .menu-group {
    display: flex;
    flex-wrap: wrap;
    padding-top: 65px;
    .menu-item {
      width: 25%;
      display: flex;
      flex-direction: column; /**主轴切换为侧轴，图片和文字上下排列；上面的4个菜单汉字在下面是通过设置宽度，让行级元素自动换行**/
      justify-content: space-between;
      align-items: center; /**轴切换了，此时左右为侧轴，居中**/
      margin-bottom: 40px;
      img {
        width: 50px;
        height: 46px;
        margin-bottom: 22px;
      }
      .menu-text {
        font-size: 14px;
        line-height: 14px;
        color: #141418;
      }
    }
  }

  .notice {
    display: flex;
    background: #fff;
    height: 96px;
    line-height: 96px;
    padding: 13px 0 13px 30px;
    border-radius: 10px;
    .notice-icon {
      width: 36px;
      height: 36px;
      margin: 20px 15px 0 0;
      background: url("../assets/image/notice.png") no-repeat;
      background-size: 100% 100%;
    }
    .notice-con {
      padding-left: 5px;
      font-size: 12px;
      color: #5f5f6b;
      width: 75%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      white-space: nowrap;
      line-height: 2.5;
    }
    .notice-more {
      width: 120px;
      float: right;
      background: url("../assets/image/searchmore.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}

.verify-box {
  margin-bottom: 16px;
  padding-bottom: 32px;
  background: #ffffff;
  border-radius: 10px;
  .title {
    font-size: 18px;
    font-weight: bold;
    color: #141418;
    padding: 32px;
    text-align: left;
    .verify-num {
      color: #ff2e2e;
      font-size: 14px;
    }
  }
  .verify-group {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    .verify-item {
      width: 25%;
      display: flex;
      flex-direction: column; /**主轴切换为侧轴，图片和文字上下排列；上面的4个菜单汉字在下面是通过设置宽度，让行级元素自动换行**/
      justify-content: space-between;
      align-items: center; /**轴切换了，此时左右为侧轴，居中**/
      margin-bottom: 40px;
      img {
        width: 45px;
        height: 40px;
        margin-bottom: 15px;
      }
      .verify-text {
        font-size: 14px;
        color: #141418;
      }
    }
  }
  .verify-more {
    width: 100%;
    height: 24px;
    background: url("../assets/image/downmore.png") no-repeat center center;
    background-size: 24px;
  }
}

.statistic {
  background: #fff;
  margin-bottom: 16px;
  border-radius: 10px;
  .title {
    font-size: 18px;
    font-weight: bold;
    color: #141418;
    padding: 32px;
  }
  .statis-list {
    padding: 32px;
    .statis-item {
      display: flex;
      background: #e7f1ff;
      border-radius: 10px;
      margin-bottom: 16px;
      padding: 32px 24px;
      .imgicon {
        width: 100px;
        height: 98px;
        margin-right: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .statis-con {
        width: calc(100% - 140px);
        .statis-title {
          font-size: 14px;
          margin-bottom: 10px;
          color: #141418;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .statis-detail {
          font-size: 14px;
          line-height: 35px;
          color: #5f5f6b;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          overflow-wrap: break-word;
          line-clamp: 2;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>
