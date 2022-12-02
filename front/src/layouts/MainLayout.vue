<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <q-toolbar>
        <q-btn 
          flat round dense icon="menu" class="q-mr-sm" 
          @click="toggleLeftDrawer()"
        />

        <q-toolbar-title>Dashboard</q-toolbar-title>

        <q-btn flat round dense icon="person" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        
      </q-list>
    </q-drawer>



    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="app-footer q-py-sm">
      <div class="flex justify-between">
        <q-btn
          icon="sort"
          flat
          text-color="grey-6"
          @click="() =>emit('toggleDrawer')"
        />
        <q-btn
          icon="add"
          round
          unelaveted
          text-color="white"
          color="purple"
        />
        <q-btn
          icon="person"
          flat
          text-color="grey-6"
          @click="() =>emit('toggleDrawer')"
        />
      </div>
    </q-footer>
  </q-layout>
</template>
<style scoped>
.title{
  color: black;
}
.app-header{
  background-color: rgb(255, 255, 255);
  box-shadow: 0px -2px 10px rgba(0,0,0,1);
}
.app-footer{
  background-color: rgb(255, 255, 255);
  box-shadow: 0px -2px 10px rgba(0,0,0,1);
}
</style>

<script>
import { defineComponent, ref } from 'vue'

const linksList = [

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
