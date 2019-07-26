<template>
  <div class="home">
    <div class="row">
      <div class="col-12">
        <h1>KPR</h1>
        <h1>Welcome Home {{user.username}}</h1>
        <button v-if="user.id" @click="logout">logout</button>
        <router-link v-else :to="{name: 'login'}">Login</router-link>
        <router-link v-if="user.id" :to="{name: 'collections'}">Collections</router-link>
      </div>
      <div class="col-12">
        <!-- NEW VAULT -->
        <h5>Create New Collection:</h5>
        <form v-if="user.id" @submit.prevent="createVault">
          <input required v-model="newVault.name" type="text" class="form-control form-control-sm"
            placeholder="Collection Name">
          <input required v-model="newVault.description" type="text" class="form-control form-control-sm"
            placeholder="Description">
          <button type="submit">Submit</button>
        </form>
        <!-- NEW KEEP -->
        <h5>Create New Keep:</h5>
        <form v-if="user.id" @submit.prevent="createKeep">
          <input required v-model="newKeep.img" type="text" class="form-control form-control-sm"
            placeholder="Image URL">
          <input required v-model="newKeep.name" type="text" class="form-control form-control-sm" placeholder="Name">
          <input required v-model="newKeep.description" type="text" class="form-control form-control-sm"
            placeholder="Description">
          Private?<input v-model="newKeep.isPrivate" type="checkbox">
          <button type="submit">Submit</button>
        </form>
      </div>
      <!-- WHERE KEEPS RENDER -->
      <div class="row keeps">
        <div class="col" v-if="user.id" v-for="keep in keeps" :key="keep.id">
          <b>(IMAGE)</b>{{keep.img}} <b>(NAME)</b>{{keep.name}} <b>(DESC)</b>{{keep.description}}
          <b>(PRIVATE?)</b>{{keep.isPrivate}}<b>(VIEWS)</b>{{keep.views}}<b>(KEEPS)</b>{{keep.keeps}}<b>(SHARES)</b>{{keep.shares}}
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
      logout() {
        this.$store.dispatch("logout");
      },
      addKeep(keepId) {
        let vaultKeep = { keepId, vaultId: this.selected }
        this.$store.dispatch("addKeep", vaultKeep)
      },
      createKeep(value) {
        this.$store.dispatch("createKeep", this.newKeep)
      },
      createVault(value) {
        this.$store.dispatch("createVault", this.newVault)
      }
    }
  };
</script>
<style>
  .keeps {
    background-color: #f4f4f4;
    height: 100vh;
  }
</style>