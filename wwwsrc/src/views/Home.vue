<template>
  <div class="home">
    <div class="row keeps mt-2">
      <div class="col-12">
        <h2>Welcome Home {{user.username}}</h2>
      </div>
      <!-- WHERE KEEPS RENDER -->
    </div>
    <!-- <div class="row"> -->
    <keeps :keepsData="keeps" />
  </div>
  </div>
</template>

<script>
  import Keeps from '@/Components/Keeps.vue'

  export default {
    name: "home",
    computed: {
      user() {
        return this.$store.state.user;
      },
      keeps() {
        return this.$store.state.keeps;
      }
    },
    mounted() {
      this.$store.dispatch("getKeeps");
    },
    components: {
      Keeps
    },
  }
</script>

<style scoped>
  .keeps {
    background-color: #f4f4f4;
    height: 100%;
  }

  .card {
    background-color: #e2c175;
    margin: 5vh;
  }
</style>