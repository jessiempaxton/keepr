<template>
  <div class="home">
    <div class="row keeps mt-2">
      <div class="col-12">
        <h2>Welcome Home {{user.username}}</h2>
      </div>
    </div>
    <!-- WHERE KEEPS RENDER -->
    <keeps :keepsData="keeps" />
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