<template>
  <div id="app">
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand justify-content-between">
          <!-- <a class="navbar-brand" style="color: #c36a2d">
            <h3><b>COLLECTREST</b></h3>
          </a> -->
          <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> -->
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-1 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#" style="color: #c36a2d">
                  <h4><b>COLLECTREST</b></h4>
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  <router-link style="color: #c36a2d" :to="{name: 'home'}" title="Home"><i class="fas fa-home"></i>
                  </router-link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <router-link style="color: #c36a2d" v-if="user.id" :to="{name: 'collections'}" title="Collections">
                    <i class="fas fa-book-open"></i></router-link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style="color: #c36a2d"><i class="fas fa-pencil-alt"></i>Post</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style="color: #c36a2d"><i class="fas fa-pencil-alt"></i>Collection</a>
              </li>
            </ul>
            <button class="btn btn-secondary p-1" v-if="user.id" @click="logout">Logout</button>
            <router-link v-else :to="{name: 'login'}">Login</router-link>
          </div>
        </nav>
      </div>
    </div>
    <!-- NEW VAULT -->
    <div class="col-12">
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
        <input required v-model="newKeep.img" type="text" class="form-control form-control-sm" placeholder="Image URL">
        <input required v-model="newKeep.name" type="text" class="form-control form-control-sm" placeholder="Name">
        <input required v-model="newKeep.description" type="text" class="form-control form-control-sm"
          placeholder="Description">
        Private?<input v-model="newKeep.isPrivate" type="checkbox">
        <button type="submit">Submit</button>
      </form>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
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
      }
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
      createKeep(value) {
        this.$store.dispatch("createKeep", this.newKeep)
      },
      createVault(value) {
        this.$store.dispatch("createVault", this.newVault)
      }
    }
  }
</script>

<style>
  .navbar {
    background-color: #e2c175;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f4f4f4;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>