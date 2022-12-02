<template>
    <div class="q-pa-md">
        <h3>Bonjour, Marc !</h3>
        <q-card 
        v-for="(list, index) in allList" :key="index"
        class="my-card"
        style="background: radial-gradient(circle, #ffffff  0%, #f0ebfc 100%)"
        >
            <q-expansion-item
                class="shadow-1 overflow-hidden"
                v-bind:label="list.title"
                header-class="bg-primary text-white"
                expand-icon-class="text-white"
            >
                <q-card-section>
                    <div class="text-subtitle2">{{ list.description }}</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <div v-for="(task, index) in allTasks" :key="index" class="listItem">
                        <div v-if="task.list == list._id">
                            <q-checkbox 
                                v-model="task.done" 
                                v-bind:label="task.title" 
                                @click="setTaskDone(task)">
                            </q-checkbox>
                            
                            <q-icon name="close" @click="taskStore.handleDeleteTask(task._id)" class="deleteTask" />
                        </div>
                    </div>

                    <q-input bottom-slots v-model="taskTitle" label="Ajouter une tâche">
                        <template v-slot:append>
                            <q-icon 
                                name="add" 
                                @click="taskStore.handleAddNewTask(taskTitle, list._id); taskTitle = ''"
                            />
                        </template>
                    </q-input>
                </q-card-section>

                <q-card-section align="center">
                    <q-btn 
                        unelevated label="Supprimer" color="primary"
                        @click="listStore.handleDeleteList(list._id)"
                    />
                    <q-btn
                        flat label="Voir plus" color="primary"
                    />
                </q-card-section>
            </q-expansion-item>
        </q-card>
    </div>
</template>

<style scoped>
    .my-card {
        margin-bottom: 2em;
    }
    .listItem {
        display: flex;
    }
    .deleteTask {
        position: left;
    }
</style>

<script setup>
    import { computed } from 'vue';
    import { setTaskDone } from 'src/services/tasks.js';
    import { useListStore } from 'src/stores/list-store';
    import { useTaskStore } from 'src/stores/task-store';

    const listStore = useListStore()
    listStore.loadAllList()
    const allList = computed(() => listStore.lists)

    const taskStore = useTaskStore()
    taskStore.loadAllTasks()
    const allTasks = computed(() => taskStore.tasks)

</script>