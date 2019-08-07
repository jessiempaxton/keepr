<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h4>{{vaults.name}} Post Archive</h4>
        <!-- WHERE VAULTKEEPS RENDER -->
        <vaultKeeps :vaultKeepsData="vaultKeeps" />
      </div>
    </div>
  </div>
</template>

<script>
  import VaultKeeps from '@/Components/VaultKeeps.vue'

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
      vaults() {
        return this.$store.state.vaults;
      },
      vaultKeeps() {
        return this.$store.state.vaultKeeps;
      },
    },
    components: {
      VaultKeeps
    }
  }
</script>