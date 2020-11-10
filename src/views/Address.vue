<template>
  <div>
    <div class="navbar">
      <div class="left">通讯录</div>
      <div class="center"></div>
      <div class="action">
        <van-icon name="plus" color="#fff" @click="fnAdd" />
      </div>
    </div>
    <van-search
      v-model="searchValue"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item
        title="常用联系人"
        name="1"
        :icon="addruser"
        :is-link="false"
        class="listcoll"
      >
        常用联系人
      </van-collapse-item>
    </van-collapse>
    <van-index-bar>
      <van-index-anchor index="A">A</van-index-anchor>
      <van-cell>
        <vs-tree
          :data="data"
          default-expand-all
          ref="tree"
          highlight-current
          :expand-on-click-node="true"
          icon-class="iconimg"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <img
              v-if="node.expanded == false"
              src="../assets/image/filecollapse.png"
              class="treeimg"
            />
            <img
              v-if="
                node.expanded == true &&
                  (node.isLeaf != true || node.level == 1)
              "
              src="../assets/image/fileopen.png"
              class="treeimg"
            />
            <img
              v-if="
                node.expanded == true && node.level != 1 && node.isLeaf == true
              "
              src="../assets/image/addruser.png"
              class="treeimg"
            />
            <span class="treetext">{{ node.label }}</span>
          </span>
        </vs-tree>
      </van-cell>
      <van-index-anchor index="B">B</van-index-anchor>
      <van-cell>
        <vs-tree
          :data="data"
          default-expand-all
          ref="tree"
          highlight-current
          :expand-on-click-node="true"
          icon-class="iconimg"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <img
              v-if="node.expanded == false"
              src="../assets/image/filecollapse.png"
              class="treeimg"
            />
            <img
              v-if="
                node.expanded == true &&
                  (node.isLeaf != true || node.level == 1)
              "
              src="../assets/image/fileopen.png"
              class="treeimg"
            />
            <img
              v-if="
                node.expanded == true && node.level != 1 && node.isLeaf == true
              "
              src="../assets/image/addruser.png"
              class="treeimg"
            />
            <span class="treetext">{{ node.label }}</span>
          </span>
        </vs-tree>
      </van-cell>
    </van-index-bar>
  </div>
</template>

<script>
// import Treeselect from '@riophae/vue-treeselect'
// import '@riophae/vue-treeselect/dist/vue-treeselect.css'

import addruser from "@/assets/image/addruser.png";

export default {
  name: "address",
  components: {},
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      addruser,
      searchValue: "",
      activeName: ["1"],
      indexList: ["A", "B", "C"],
      data: [
        { label: "demo1", children: [{ label: "demo11" }] },
        { label: "demo2" }
      ]
    };
  },
  methods: {
    onSearch() {},
    onCancel() {},
    renderContent(h, { node, data, store }) {
      console.log(node, data);
      return (
        <span class="custom-tree-node">
          <van-icon name="chat-o" />
          <span>{node.label}</span>
        </span>
      );
    },
    fnAdd() {
      this.$router.push({ name: "GROUPCHART" });
    }
  }
};
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  justify-content: space-between;
  height: 85px;
  padding: 0 20px;
  background: #3295fa;
  .left {
    font-family: PingFang-SC-Bold;
    font-size: 18px;
    color: #fff;
    line-height: 85px;
  }
  .center {
  }
  .action {
    line-height: 85px;
  }
}

/deep/ .listcoll {
  .van-cell__left-icon {
    width: 76px;
    height: 76px;
  }
  .van-icon__image {
    width: 100%;
    height: 100%;
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
.van-cell__title,
.van-cell__value {
  line-height: 1;
}

// 树
/deep/ .iconimg {
  width: 0px;
  height: 20px;
}
/deep/ .vs-tree-node__content {
  height: auto;
  margin-bottom: 10px;
}
.custom-tree-node {
  display: flex;
}
.treeimg {
  width: 76px;
  height: 76px;
}
.treetext {
  color: #141418;
  font-size: 15px;
  line-height: 76px;
  margin-left: 24px;
  font-family: PingFang-SC-Medium;
}
</style>
