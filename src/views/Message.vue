<template>
  <div>
    <van-cell>
      <van-swipe-cell>
        <van-card
            tag="6"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </van-cell>

    <van-cell >
      <div class="card-item">
        <div class="user">
          <div class="thumb">
<!--            <van-icon :badge="2" >-->
<!--              <img slot="name" src="https://img.yzcdn.cn/vant/cat.jpeg"/>-->
<!--            </van-icon>-->
<!--            <van-icon :badge="2" name="https://img.yzcdn.cn/vant/cat.jpeg">-->
<!--            </van-icon>-->
            <img slot="name" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
            <div class="badge">2</div>
          </div>
          <div class="mescont">
            <div class="title">商品标题</div>
            <div class="desc">描述信息</div>
          </div>
        </div>
        <div class="time">2020/11/09</div>
      </div>
    </van-cell>
    <van-cell >
      <div class="card-item">
        <div class="user">
          <div class="thumb">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg"/>
          </div>
          <div class="mescont">
            <div class="title">name</div>
            <div class="desc">desc</div>
          </div>
        </div>
        <div class="time">2020/11/09</div>
      </div>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: "Message"
};
</script>

<style scoped lang="less">
.card-item{
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  .user{
    display: flex;
    .thumb{
      width: 76px;
      height: 76px;
      position: relative;
      img{
        width: 76px;
        height: 76px;
      }
      .badge{
        position: absolute;
        top: -14px;
        right: -14px;
        background: #f00;
        border-radius: 16px;
        min-width: 26px;
        text-align: center;
        padding: 0 3px;
        line-height: 34px;
        font-size: 12px;
        color: #fff;
        border: 1px solid #fff;
      }
    }
    .mescont{
      margin-left: 25px;
      .title{
        color: #141418;
        font-size: 15px;
        font-weight: bold;
        font-family: PingFang-SC-Medium;
      }
      .desc{
        color: #97979f;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
  .time{
    color: #97979f;
    font-size: 10px;
    line-height: 70px;
  }
}

.van-card__thumb{
  width: 76px;
  height: 76px;
}
.van-card{
  background: #fff;
}
.van-card__content{
  min-height: 70px;
  margin-left: 10px;
}
.van-card__title{
  color: #141418;
  font-size: 15px;
}
.van-card__desc{
  color: #97979f;
  font-size: 12px;
}
.van-tag--mark{
  float: right;
  border: 1px solid #fff;
  border-radius: 16px;
}
.van-card__tag{
  top: -10px;
  right: -12px;
}
.van-tag{
  //min-width: 32px;
  //padding: 0 3px;
  //text-align: center;
}
.delete-button {
  height: 100%;
}
</style>
