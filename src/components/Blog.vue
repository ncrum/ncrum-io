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

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li.post {
      border: 1px solid #ccc;
      border-radius: 4px;
      display: block;
      margin-bottom: 20px;
      padding: 10px 20px;
      text-align: left;

      h2 {
        font-weight: normal;

        a {
          color: #42b983;
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
