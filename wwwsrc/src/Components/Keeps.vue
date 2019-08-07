<template>
  <div class="home row">
    <div class="col-3" v-for="keep in keepsData">
      <div class="card" style="width: 16rem; height: 30rem;">
        <img :src="keep.img" class="card-img-top" alt="image">
        <div class="card-body d-flex justify-content-end flex-column">
          <h5 class="card-title">{{keep.name}}</h5>
          <p class="card-text">{{keep.description}}
          </p>
          <p class="card-text">{{keep.isPrivate == true ? 'Private Post' : 'Public Post'}}</p>
        </div>
        <!-- <ul class="list-group list-group-flush">
        <li class="list-group-item">Private: {{keep.isPrivate}} - Views:
          {{keep.views}}</li>
        <li class="list-group-item">Shares: {{keep.shares}} - Keeps:
          {{keep.shares}}</li>
      </ul> -->
        <select class="btn btn-secondary" v-model="selected" @change="addKeep(keep.id)" style="margin: 1vh;">
          <option disabled value>Archive to Collection</option>
          <option v-for="vault in vaults" :value="vault.id">{{vault.name}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "keeps",
    props: ["keepsData"],
    data() {
      return {
        selected: "",
      }
    },
    computed: {
      keeps() {
        return this.$store.state.keeps;
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
  .home {
    background-color: #f4f4f4;
    height: 100%;
  }

  .card {
    /* background-color: #e2c175; */
    margin: 5vh;
  }

  .card-img-top {
    height: auto;
  }
</style>