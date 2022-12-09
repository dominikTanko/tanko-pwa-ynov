<template>
    <div class="q-pa-md">
        
    </div>
</template>

<style scoped>

</style>

<script setup>
    import { ref, computed } from "vue";
    import { useRoute } from 'vue-router';
    import { setTaskDone } from 'src/services/tasks.js';
    import { useListStore } from 'src/stores/list-store';
    import { useTaskStore } from 'src/stores/task-store';

    const route = useRoute()
	const modifyListDescription = ref(false);

    // const listStore = useListStore()
    // listStore.loadList(route.params.id)
    // const currentList = computed(() => listStore.currentList)

    const taskStore = useTaskStore()
    taskStore.loadTask(route.params.id)
    const allTasks = computed(() => taskStore.tasks)

</script>