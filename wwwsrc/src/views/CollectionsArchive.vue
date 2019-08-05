<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h4>ARCHIVE</h4>
        <div class="col" v-for="keep in vaultKeeps" :key="keep.id">
          {{keep.img}}{{keep.name}}{{keep.description}}
          <button @click="removeKeep(keep.id)">Remove</button>
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
      this.$store.dispatch("getVaultKeeps", this.$route.params.id);
    },
    computed: {
      vaultKeeps() {
        return this.$store.state.vaultKeeps;
      }
    },
    methods: {
      removeKeep(keepId) {
        let vaultId = this.$route.params.id
        this.$store.dispatch("removeKeep", { keepId, vaultId })
      }
    },
    components: {}
  }
</script>