<template>
    <div class="q-pa-md">
        <div class="list-title">
            <q-btn to="/" flat class="task-icon transparent">
                <q-icon name="arrow_back"/>
            </q-btn>
            <div class="text-h4">{{ currentList.title }}</div>
        </div>
        <h6>{{ currentList.description }}</h6>
        <q-btn 
            unelevated label="Modifier la description" color="primary"
            @click="modifyListDescription = true"
            style="margin-bottom: 2em;"/>
        <q-card
            class="task-card"
            v-for="(task, index) in allTasks" :key="index">

            <q-card-section horizontal
                v-if="task.list == currentList._id">
                <q-checkbox 
                    v-model="task.done" 
                    v-bind:label="task.title"
                    @click="setTaskDone(task)">
                </q-checkbox>

                <q-card-actions class="justify-around fit">
                    <q-btn flat
                        class="task-icon transparent"
                        @click="taskStore.handleDeleteTask(task._id)">
                    
                        <q-icon name="close"/>
                    </q-btn>
                    <q-btn flat
                        class="task-icon transparent"
                        @click="goToTask(task._id)">
                    
                        <q-icon name="more_horiz"/>
                    </q-btn>
                </q-card-actions>
            </q-card-section>
        </q-card>
        <q-input bottom-slots v-model="taskTitle" label="Ajouter une tâche">
            <template v-slot:append>
                <q-icon 
                    name="add" 
                    @click="taskStore.handleAddNewTask(taskTitle, currentList._id); taskTitle = ''"
                />
            </template>
        </q-input>

        <q-dialog v-model="modifyListDescription">
            <q-card class="modif-desc">
                <q-card-section>
                    <div class="text-h6" align="center">Modifier la description</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <q-input filled v-model="newDescription" label="Description"/>
                </q-card-section>

                <q-card-actions align="center">
                    <q-btn flat label="Annuler" color="primary" v-close-popup />
                    <q-btn 
                    unelevated label="Modifier" color="primary" v-close-popup
                    @click="listStore.handleChangeListDescription(currentList._id, newDescription); listName=''"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<style scoped>
    .task-card {
        margin-bottom: 1em;
        display: flexbox;
    }
    .task-icon {
        margin-left: auto;
    }
    .list-title {
        display: inline-flex;
    }
    .modif-desc {
        width: 100%;
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

    const listStore = useListStore()
    listStore.loadList(route.params.id)
    const currentList = computed(() => listStore.currentList)

    const taskStore = useTaskStore()
    taskStore.loadAllTasks()
    const allTasks = computed(() => taskStore.tasks)

    // const listStore = useListStore()
    // listStore.loadAllList()
    // const allList = computed(() => listStore.lists)

    // function currentRoute() {
    //     console.log(route.params.id)
    //     console.log(currentList);
    // }

    function goToTask(taskId) {
        router.replace(`/tasks/${taskId}`)
    }
</script>