<template>
  <div class="row userKeeps">
    <div class="col-3" v-for="keep in userKeeps" :key="keep.id">
      <div class="card" style="width: 16rem; height: 30rem; margin: 1vh;">
        <img :src="keep.img" class="card-img-top" alt="image">
        <div class="card-body d-flex justify-content-end flex-column">
          <h5 class="card-title">{{keep.name}}</h5>
          <p class="card-text">{{keep.description}}
          </p>
          <p class="card-text">{{keep.isPrivate == true ? 'Private Post' : 'Public Post'}}</p>
          <select class="btn btn-secondary" v-model="selected" @change="addKeep(keep.id)" style="margin: 1vh;">
            <option disabled value style="color:white;">Archive to Collection</option>
            <option v-for="vault in vaults" :value="vault.id">{{vault.name}}</option>
          </select>
          <button class="btn btn-secondary p-1" @click="deleteKeep(keep.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userKeeps",
    props: ["userKeepsData"],
    data() {
      return {
        selected: "",
      }
    },
    mounted() {
      this.$store.dispatch("getUserKeeps");
    },
    computed: {
      userKeeps() {
        return this.$store.state.userKeeps;
      },
      vaults() {
        return this.$store.state.vaults;
      }
    },
    methods: {
      deleteKeep(keepId) {
        this.$store.dispatch("deleteKeep", keepId)
      },
      addKeep(keepId) {
        let vaultKeep = { keepId, vaultId: this.selected }
        this.$store.dispatch("addKeep", vaultKeep)
      },
    },
    components: {}
  }
</script>
<style>
  .vaults {
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

  .collections {
    background-color: #f4f4f4;
    /* height: 100%;
      width: 100%; */
  }
</style>