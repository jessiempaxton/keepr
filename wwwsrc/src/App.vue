<template>
  <div id="app">
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand justify-content-between p-3">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-lg-2">
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
                <a class="nav-link" href="#" style="color: #c36a2d" data-toggle="modal" data-target="#postModal"><i
                    class="fas fa-pencil-alt"></i>Post</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style="color: #c36a2d" data-toggle="modal"
                  data-target="#collectionModal"><i class="fas fa-pencil-alt"></i>Collection</a>
              </li>
            </ul>
            <button class="btn btn-secondary p-0" v-if="user.id" @click="logout">Logout</button>
            <router-link v-else :to="{name: 'login'}">Login</router-link>
          </div>
        </nav>
      </div>
    </div>
    <!-- POST MODAL -->
    <div class="modal fade" id="postModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Post</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-if="user.id" @submit.prevent="createKeep">
              <input required v-model="newKeep.img" type="text" class="form-control form-control-sm"
                placeholder="Image URL">
              <input required v-model="newKeep.name" type="text" class="form-control form-control-sm"
                placeholder="Name">
              <input required v-model="newKeep.description" type="text" class="form-control mb-1"
                placeholder="Description">
              Private?<input v-model="newKeep.isPrivate" type="checkbox" style="margin: 1vh;">
              <button class="btn btn-secondary" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- COLLECTION MODAL -->
    <div class="modal fade" id="collectionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Collection</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-if="user.id" @submit.prevent="createVault">
              <input required v-model="newVault.name" type="text" class="form-control form-control-sm"
                placeholder="Collection Name">
              <input required v-model="newVault.description" type="text" class="form-control form-control-sm mb-1"
                placeholder="Description">
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
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
    height: 5vh;
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