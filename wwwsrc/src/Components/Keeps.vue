<template>
  <div class="card keeps" style="width: 16rem;">
    <img :src="keeps.img" class="card-img-top" alt="image">
    <div class="card-body">
      <h5 class="card-title">{{keeps.name}}</h5>
      <p class="card-text">{{keeps.description}}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" style="background-color: #e2c175">Private: {{keeps.isPrivate}} - Views:
        {{keeps.views}}</li>
      <li class="list-group-item" style="background-color: #e2c175">Shares: {{keeps.shares}} - Keeps:
        {{keeps.shares}}</li>
    </ul>
    <select v-model="selected" @change="addKeep(keep.id)">
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
  .keeps {
    background-color: #f4f4f4;
    height: 100%;
  }

  .card {
    background-color: #e2c175;
    margin: 5vh;
  }
</style>