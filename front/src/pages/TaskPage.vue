<template>
    <div class="q-pa-md">
        <q-btn flat class="task-icon transparent"
            @click="goBackToList(currentTask.list)">
            <q-icon name="arrow_back"/>
        </q-btn>
        <div class="text-weight-regular">Tâche</div>
        
        <div class="text-h5">{{ currentTask.title }}</div>
    </div>
</template>

<style scoped>
    .task-title {
        display: inline-flex;
    }
    #task-title-txt {
        /* display: -webkit-box; */
        max-width: 85%;
        /* -webkit-box-orient: vertical; */
        overflow: hidden;
    }
</style>

<script setup>
    import { ref, computed } from "vue";
    import { useRoute, useRouter } from 'vue-router';
    import { setTaskDone } from 'src/services/tasks.js';
    import { useListStore } from 'src/stores/list-store';
    import { useTaskStore } from 'src/stores/task-store';

    const route = useRoute()
    const router = useRouter()
	const modifyListDescription = ref(false);

    // const listStore = useListStore()
    // listStore.loadList(route.params.id)
    // const currentList = computed(() => listStore.currentList)

    const taskStore = useTaskStore()
    taskStore.loadTask(route.params.id)
    const currentTask = computed(() => taskStore.currentTask)

    function goBackToList(listId) {
        router.replace(`/lists/${listId}`)
    }
</script>