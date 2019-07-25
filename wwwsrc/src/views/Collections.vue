<!-- dashboard -->
<template>
   <div class="collections">
      <div class="row">
         <div class="col-12">
            <h2>COLLECTIONS</h2>
         </div>
         <!-- <div class="col" v-for="vaulkeeps in vaultkeeps" :key="vaultkeep.id"></div> -->
         <div class="col" v-for="vault in vaults" :key="vault.id">
            <router-link :to="{name: 'collectionsArchive', params: {id: vault.id}}">
               <b>(NAME)</b>{{vault.name}} <b>(DESCRIPTION)</b>{{vault.description}}</router-link>
            <button @click="deleteVault(vault.id)">Delete</button>
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
      },
      computed: {
         vaults() {
            return this.$store.state.vaults
         }

      },
      methods: {
         deleteVault(vaultId) {
            this.$store.dispatch("deleteVault", vaultId)
         }
      },
      components: {}
   }
</script>