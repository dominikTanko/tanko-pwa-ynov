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
          color="secondary"
          @click="newListCard = true"
        />
        <q-btn
          icon="person"
          flat
          text-color="grey-6"
          @click="() =>emit('toggleDrawer')"
        />
      </div>

      <q-dialog v-model="newListCard">
        <q-card>
          <q-card-section>
            <div class="text-h6" align="center">Créer une nouvelle liste</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input filled v-model="listName" label="Nom de la liste" placeholder="Ex: Courses" />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn flat label="Annuler" color="primary" v-close-popup />
            <q-btn 
              unelevated label="Créer" color="primary" v-close-popup
              @click="listStore.handleCreateList(listName); listName=''"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
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

<script setup>
    import { ref } from 'vue';
	import { useListStore } from 'src/stores/list-store';

    const leftDrawerOpen = ref(false);
	const newListCard = ref(false);

	const listStore = useListStore()

    function toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value;
    }

</script>
