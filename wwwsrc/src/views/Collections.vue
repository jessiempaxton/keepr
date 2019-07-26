<!-- dashboard -->
<template>
   <div class="collections">
      <div class="row">
         <div class="col-12">
            <h2>COLLECTIONS</h2>
         </div>
         <div class="col-4">
            <h4>Your Posts</h4>
            <div class="col" v-for="keep in userKeeps" :key="keep.id">
               <b>(IMAGE)</b>{{keep.img}} <b>(NAME)</b>{{keep.name}} <b>(DESC)</b>{{keep.description}}
               <b>(PRIVATE?)</b>{{keep.isPrivate}}
               <button @click="deleteKeep(keep.id)">Delete</button>
            </div>
         </div>
         <div class="col-8">
            <h4>Your Collections</h4>
            <div class="col" v-for="vault in vaults" :key="vault.id">
               <router-link :to="{name: 'collectionsArchive', params: {id: vault.id}}">
                  <b>(NAME)</b>{{vault.name}} <b>(DESCRIPTION)</b>{{vault.description}}</router-link>
               <button @click="deleteVault(vault.id)">Delete</button>
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