<template>
  <div class='login'>
    <div class="login__box">
      <div class="login__title">
        <img src="~@/assets/img/logo.png" alt="">
        <span>后 台 管 理 系 统</span>
      </div>
      <form action="" onkeypress="return event.keyCode != 13;">
        <div class="login__box__input">
          <i class="iconfont icon-user" />
          <input class="login__box__content" type="text" name="user" placeholder="请输入用户名">
        </div>
        <div class="login__box__input">
          <i class="iconfont icon-lock" />
          <input class="login__box__content" type="password" name="password" placeholder="请输入密码"
            @keyup.enter="hangleLogin">
        </div>
        <button class="login__box__button" @click.prevent="hangleLogin">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {

    }
  },
  methods: {
    hangleLogin() {
      console.log('denglu')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  background-color: $loginBg;
  height: 100%;
  &__box {
    // position: relative;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 500px;
    height: 400px;
    padding: 220px 30px 45px;
    border-radius: 15px;

    background-color: #fff;
    .login__title {
      position: absolute;
      width: 100%;
      top: 50px;
      left: -10px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 20%;
      }
      span {
        font-size: 25px;
        font-weight: bold;
        color: #39495e;
      }
    }
    &__input {
      width: 100%;
      height: 45px;
      margin-bottom: 10px;
      .iconfont {
        position: absolute;
        width: 50px;
        height: 45px;
        font-size: 25px;
        color: #66b1ff;
        text-align: center;
        line-height: 45px;
      }
      .login__box__content {
        width: 100%;
        height: 45px;
        outline-color: #a0cfff;
        border: 1px solid #e0e2e6;
        border-radius: 5px;
        padding-left: 50px;
        &::placeholder {
          color: #c0c4cc;
        }
      }
    }
    &__button {
      float: right;
      width: 75px;
      height: 40px;
      border-radius: 5px;
      border: none;
      color: #fff;
      background: #409eff;
      // box-shadow: 0 1px 1px 1px rgb(209, 208, 208);
      cursor: pointer;
      &:hover {
        background: #66b1ff;
      }
    }
  }
}
</style>
