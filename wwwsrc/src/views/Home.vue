<template>
  <div class="home">
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg justify-content-between">
          <a class="navbar-brand" style="color: #c36a2d"><b>KPR</b></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#" style="color: #c36a2d">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <router-link style="color: #c36a2d" v-if="user.id" :to="{name: 'collections'}" title="Collections">
                    Collections</router-link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">New Post</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">New Collection</a>
              </li>
            </ul>
            <button class="btn btn-secondary" v-if="user.id" @click="logout">Logout</button>
            <router-link v-else :to="{name: 'login'}">Login</router-link>
          </div>
        </nav>
        </nav>
      </div>
    </div>








    <!-- <h1>KPR
          <router-link style="color: #c36a2d" v-if="user.id" :to="{name: 'collections'}" title="Collections"><i
              class="fas fa-th-list"></i> </router-link>
        </h1> <button v-if="user.id" @click="logout">logout</button>
        <router-link v-else :to="{name: 'login'}">Login</router-link>
      </div> -->
    <div class="row">
      <div class="col-12">
        <h1>Welcome Home {{user.username}}</h1>
      </div>
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
        <input required v-model="newKeep.img" type="text" class="form-control form-control-sm" placeholder="Image URL">
        <input required v-model="newKeep.name" type="text" class="form-control form-control-sm" placeholder="Name">
        <input required v-model="newKeep.description" type="text" class="form-control form-control-sm"
          placeholder="Description">
        Private?<input v-model="newKeep.isPrivate" type="checkbox">
        <button type="submit">Submit</button>
      </form>
    </div>
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
      <!-- <div class="col" v-if="user.id" v-for="keep in keeps" :key="keep.id">
          <b>(IMAGE)</b>{{keep.img}} <b>(NAME)</b>{{keep.name}} <b>(DESC)</b>{{keep.description}}
          <b>(PRIVATE?)</b>{{keep.isPrivate}}<b>(VIEWS)</b>{{keep.views}}<b>(KEEPS)</b>{{keep.keeps}}<b>(SHARES)</b>{{keep.shares}}
          <select v-model="selected" @change="addKeep(keep.id)">
            <option disabled value>Archive to Collection</option>
            <option v-for="vault in vaults" :value="vault.id">{{vault.name}}</option>
          </select>
        </div> -->
      <!--  -->
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
<style scoped>
  .keeps {
    background-color: #f4f4f4;
    height: 100%;
  }

  .card {
    background-color: #e2c175;
    margin: 5vh;
  }

  .navbar {
    background-color: #e2c175;
  }
</style>