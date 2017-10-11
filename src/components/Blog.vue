<template>
  <div id="blog">
    <ul>
      <li class="post" v-for="post in posts">
        <h2>
          <router-link :to="{ name: 'Post', params: { key: post.key }}">{{ post.title }}</router-link>
        </h2>
        <p>
          {{ post.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
      posts: [
        { key: 'blog-1', title: 'Blog title 1', description: 'Cool blog about some stuff...' },
        { key: 'blog-2', title: 'Blog title 2', description: 'Cool blog about some stuff...' },
        { key: 'blog-3', title: 'Blog title 3', description: 'Cool blog about some stuff...' },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
#blog {
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 14px 26px -12px rgba(#000, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(#000, 0.2);
  display: inline-block;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -20%;
  width: 100%;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li.post {
      display: block;
      margin-bottom: 20px;
      padding: 10px 20px;
      text-align: left;

      h2 {
        font-weight: normal;

        a {
          color: #00aeef;
        }
      }

      p {
        font-style: italic;
        color: #aaa;
      }
    }
  }
}
</style>
