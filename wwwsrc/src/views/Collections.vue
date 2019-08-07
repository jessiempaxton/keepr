<template>
   <div class="collections">
      <div class="row">
         <div class="col-12">
            <h2>{{user.username}}'s Collections</h2>
         </div>
      </div>
      <div class="row">
         <div class="col-12">
            <h4>Your Posts</h4>
            <!-- WHERE USERKEEPS RENDER -->
            <userKeeps :userKeepsData="userKeeps" />
         </div>
      </div>
      <div class="row">
         <div class="col-12">
            <h4>Your Collections</h4>
            <!-- WHERE VAULTS RENDER -->
            <vaults :vaultsData="vaults" />
         </div>
      </div>
   </div>
   </div>
</template>

<script>
   import UserKeeps from '@/Components/UserKeeps.vue'
   import Vaults from '@/Components/Vaults.vue'

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
         user() {
            return this.$store.state.user;
         },
      },
      components: {
         UserKeeps,
         Vaults
      }
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