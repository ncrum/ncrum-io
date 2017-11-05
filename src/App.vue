<template>
  <div id="app">
    <div class="header">
      <!-- Logo -->
      <div class="logo">
        <img src="/static/img/ncrum-logo.png" />
      </div>

      <!-- Nav -->
      <div class="nav-container">
        <ul>
          <li>
            <router-link to="/">About Me</router-link>
          </li>
          <!-- <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/projects">Projects</router-link>
          </li> -->
        </ul>
      </div>
    </div>

    <!-- Photo Background -->
    <div class="photo-background">
      <img src="/static/img/banner-beach.jpg" fallback="http://via.placeholder.com/1680x600" />
    </div>

    <!-- Content -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  margin: 0;
}
</style>

<style lang='scss' scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #00aeef;
  color: #00aeef;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;

  .header {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    position: absolute;

    .logo {
      padding: 15px;

      img {
        width: 80px;
      }

      h4 {
        margin: 0;
      }
    }

    .nav-container {
      padding: 0 15px;

      ul {
        list-style-type: none;
        padding: 0;

        li {
          display: inline-block;
          margin: 0 10px;

          a {
            color: #ffffff;
            text-decoration: none;

            &:hover {
              border-bottom: 2px solid #ffffff;
            }
          }
        }
      }
    }
  }

  .photo-background {
    width: 100%;

    img {
      width: 100%;
      vertical-align: top;
    }
  }

  .content {
    width: 100%;
  }
}
</style>
