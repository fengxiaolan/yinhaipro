<!--
 * @Description: 发布群聊
 * @Author: fengxl
 * @Date: 2020-11-10
-->
<template>
  <div>
    <van-nav-bar title="发起群聊" left-arrow />
    <van-search
      v-model="searchValue"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />

    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <van-index-bar>
        <van-index-anchor index="A">A</van-index-anchor>
        <van-cell class="listcoll">
          <van-checkbox name="a">
            <img src="../assets/image/addruser.png" class="listimg" />
            <span class="treetext">用户</span>
          </van-checkbox>
        </van-cell>
        <van-cell class="listcoll">
          <van-checkbox name="b">
            <img src="../assets/image/addruser.png" class="listimg" />
            <span class="treetext">用户</span>
          </van-checkbox>
        </van-cell>
        <van-index-anchor index="B">B</van-index-anchor>
        <van-cell class="listcoll">
          <van-checkbox name="c">
            <img src="../assets/image/addruser.png" class="listimg" />
            <span class="treetext">用户</span>
          </van-checkbox>
        </van-cell>
        <van-cell class="listcoll">
          <van-checkbox name="d">
            <img src="../assets/image/addruser.png" class="listimg" />
            <span class="treetext">用户</span>
          </van-checkbox>
        </van-cell>
      </van-index-bar>
    </van-checkbox-group>

    <div class="bottom-bar">
      <div class="selectbox">
        <van-tabs color="#fff">
          <van-tab v-for="index in 8" :key="index">
            <img slot="title" src="../assets/image/addruser.png" class="slectimg">
          </van-tab>
        </van-tabs>
      </div>
      <van-button type="info" class="btn-finish">完成(3)</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupChart",
  data() {
    return {
      searchValue: "",
      result: []
    };
  },
  methods: {
    onSearch() {},
    onCancel() {}
  }
};
</script>

<style scoped lang="less">
/deep/ .listcoll {
  .van-cell__value {
    display: flex;
  }
}
// 列索引
/deep/ .van-index-anchor {
  font-size: 12px;
  color: #97979f;
}
/deep/ .van-cell__title,
.van-cell__value {
  line-height: 100px;
  margin-left: 24px;
}
/deep/ .van-index-bar__sidebar {
  background: #e7eaf0;
  border-radius: 10px;
}
/deep/ .van-index-bar__index {
  line-height: 40px;
  color: #97979f;
  padding: 0 10px;
  font-size: 12px;
}
.van-cell__value {
  margin-left: 0;
}

/deep/ .van-checkbox__label {
  display: flex;
}
// 列
.listimg {
  width: 76px;
  height: 76px;
}
.treetext {
  color: #141418;
  font-size: 15px;
  line-height: 76px;
  margin-left: 24px;
  font-family: PingFang-SC-Medium;
  display: block;
}

// 底部
.bottom-bar {
  position: fixed;
  bottom: 98px;
  left: 0;
  box-sizing: border-box;
  padding: 0 30px;
  height: 98px;
  width: 100%;
  box-shadow: 0px -1px 1px rgba(158, 182, 196, 0.2);
  display: flex;
  justify-content: space-between;
  .selectbox {
    width: calc(100% - 185px);
    margin-top: 10px;
    .slectimg{
      width: 76px;
      height: 76px;
    }
  }
  .btn-finish {
    width: 148px;
    height: 60px;
    padding: 0;
    margin-top: 18px;
  }
}
</style>
