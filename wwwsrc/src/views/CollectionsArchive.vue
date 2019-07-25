<!-- vault/:id -->
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h4>ARCHIVE</h4>
        <div class="col" v-for="vaultKeep in vaultKeeps" :key="vaultKeep.id">
          <!-- {{vaultKeep..?}} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "collectionsArchive",
    props: [],
    data() {
      return {}
    },
    mounted() {
      debugger
      this.$store.dispatch("getVaultKeeps", this.$route.params.id);
    },
    computed: {
      vaultKeeps() {
        return this.$store.state.vaultKeeps;
      }
    },
    methods: {},
    components: {}
  }
</script>