<template>
   <div class="collections">
      <div class="row">
         <div class="col-12">
            <h2>COLLECTIONS</h2>
         </div>
      </div>
      <div class="vaults row">
         <div class="col-12">
            <h4>Your Posts</h4>
            <div class="row">
               <div class="col-3" v-for="keep in userKeeps" :key="keep.id">
                  <div class="card" style="width: 16rem; height: 30rem; margin: 1vh;">
                     <img :src="keep.img" class="card-img-top" alt="image">
                     <div class="card-body d-flex justify-content-end flex-column">
                        <h5 class="card-title">{{keep.name}}</h5>
                        <p class="card-text">{{keep.description}}
                        </p>
                        <p class="card-text">{{keep.isPrivate == true ? 'Private Post' : 'Public Post'}}</p>
                        <button class="btn btn-secondary p-1" @click="deleteKeep(keep.id)">Delete</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="vaults row">
         <div class="col-12">
            <h4>Your Collections</h4>
            <div class="row">
               <div class="col-2" v-for="vault in vaults" :key="vault.id">
                  <div class="card" style="width: 10rem; height: 10rem; background-color: #e2c175">
                     <div class="card-body">
                        <h5 class="card-title">
                           <router-link :to="{name: 'collectionsArchive', params: {id: vault.id}}">{{vault.name}}
                           </router-link>
                        </h5>
                        <p class="card-text">{{vault.description}}
                        </p>
                        <button class="btn btn-secondary p-1" @click="deleteVault(vault.id)">Delete</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "collections",
      props: [],
      data() {
         return {}
      },
      mounted() {
         this.$store.dispatch("getVaults");
         this.$store.dispatch("getUserKeeps");
      },
      computed: {
         vaults() {
            return this.$store.state.vaults;
         },
         userKeeps() {
            return this.$store.state.userKeeps;
         },
      },
      methods: {
         deleteVault(vaultId) {
            this.$store.dispatch("deleteVault", vaultId)
         },
         deleteKeep(keepId) {
            this.$store.dispatch("deleteKeep", keepId)
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