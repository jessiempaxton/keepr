<template>
  <div class="row vaults">
    <div class="col-2" v-for="vault in vaults" :key="vault.id">
      <div class="card" style="width: 10rem; height: 10rem; background-color: #e2c175">
        <div class="card-body">
          <h5 class="card-title">
            <router-link style="color: #2c3e50" :to="{name: 'collectionsArchive', params: {id: vault.id}}">
              {{vault.name}}
            </router-link>
          </h5>
          <p class="card-text">{{vault.description}}
          </p>
          <button class="btn btn-secondary p-1" @click="deleteVault(vault.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vaults",
    props: ["vaultsData"],
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch("getVaults");
    },
    computed: {
      vaults() {
        return this.$store.state.vaults;
      },
    },
    methods: {
      deleteVault(vaultId) {
        this.$store.dispatch("deleteVault", vaultId)
      },
    },
    components: {}
  }
</script>

<style>
  .vaults {
    background-color: #f4f4f4;
    height: 100%;
    width: 100%;
  }

  .card {
    /* background-color: #e2c175; */
    margin: 5vh;
  }

  .card-img-top {
    height: auto;
  }

  .collections {
    background-color: #f4f4f4;
    /* height: 100%;
      width: 100%; */
  }
</style>