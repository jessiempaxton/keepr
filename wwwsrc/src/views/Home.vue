<template>
  <div class="home">
    <!-- WHERE KEEPS RENDER -->
    <div class="row keeps">
      <div class="col-lg-3 col-md-4 col-sm-6" v-if="user.id" v-for="keep in keeps" :key="keep.id">
        <div class="card" style="width: 16rem;">
          <img src="" class="card-img-top" alt="image">
          <div class="card-body">
            <h5 class="card-title">{{keep.name}}</h5>
            <p class="card-text">{{keep.description}}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" style="background-color: #e2c175">Private: {{keep.isPrivate}} - Views:
              {{keep.views}}</li>
            <li class="list-group-item" style="background-color: #e2c175">Shares: {{keep.shares}} - Keeps:
              {{keep.shares}}</li>
          </ul>
          <select v-model="selected" @change="addKeep(keep.id)">
            <option disabled value>Archive to Collection</option>
            <option v-for="vault in vaults" :value="vault.id">{{vault.name}}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        newVault: {
          name: "",
          description: "",
        },
        newKeep: {
          img: "",
          name: "",
          description: "",
          isPrivate: 0,
        },
        selected: "",
      }
    },
    mounted() {
      this.$store.dispatch("getKeeps");
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
      keeps() {
        return this.$store.state.keeps
      },
      vaults() {
        return this.$store.state.vaults;
      }
    },
    methods: {
      addKeep(keepId) {
        let vaultKeep = { keepId, vaultId: this.selected }
        this.$store.dispatch("addKeep", vaultKeep)
      },
    }
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