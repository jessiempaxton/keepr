<template>
  <div class="row vaultKeeps">
    <div class="col-3" v-for="keep in vaultKeeps" :key="keep.id">
      <div class="card" style="width: 16rem; height: 30rem;">
        <img :src="keep.img" class="card-img-top" alt="image">
        <div class="card-body d-flex justify-content-end flex-column">
          <h5 class="card-title">{{keep.name}}</h5>
          <p class="card-text">{{keep.description}}
          </p>
          <p class="card-text">{{keep.isPrivate == true ? 'Private Post' : 'Public Post'}}</p>
          <button class="btn btn-secondary" @click="removeKeep(keep.id)">Remove</button>
        </div>
        <!-- <ul class="list-group list-group-flush">
              <li class="list-group-item">Private: {{keep.isPrivate}} - Views:
                {{keep.views}}</li>
              <li class="list-group-item">Shares: {{keep.shares}} - Keeps:
                {{keep.shares}}</li>
            </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vaultKeeps",
    props: ["vaultKeepsData"],
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch("getVaultKeeps", this.$route.params.id);
    },
    computed: {
      vaultKeeps() {
        return this.$store.state.vaultKeeps;
      },
    },
    methods: {
      removeKeep(keepId) {
        let vaultId = this.$route.params.id
        this.$store.dispatch("removeKeep", { keepId, vaultId })
      },
    },
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