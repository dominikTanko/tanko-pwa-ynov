<template>
    <div class="q-pa-md">
        <h3>Bonjour, Marc !</h3>
        <q-card 
        v-for="(list, index) in allList" :key="index"
        class="list-card"
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
                            
                            <q-card-actions>
                                <q-checkbox id="task-title-txt"
                                    v-model="task.done" 
                                    v-bind:label="task.title" 
                                    @click="setTaskDone(task)">
                                </q-checkbox>
                                <q-btn flat
                                    class="task-icon transparent"
                                    name="close" 
                                    @click="taskStore.handleDeleteTask(task._id)">
                                    <q-icon name="close"/>
                                </q-btn>
                            </q-card-actions>
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
                        @click="goToList(list._id)"
                    />
                </q-card-section>
            </q-expansion-item>
        </q-card>
    </div>
</template>

<style scoped>
    .list-card {
        margin-bottom: 2em;
    }
    .listItem {
        display: flex;
        flex-direction: column;
    }
    .task-icon {
        margin-left: auto;
    }
    #task-title-txt {
        /* display: -webkit-box; */
        max-width: 85%;
        /* -webkit-box-orient: vertical; */
        overflow: hidden;
    }
</style>

<script setup>
    import { computed } from 'vue';
    import { setTaskDone } from 'src/services/tasks.js';
    import { useListStore } from 'src/stores/list-store';
    import { useTaskStore } from 'src/stores/task-store';

    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute()
    const router = useRouter()

    const listStore = useListStore()
    listStore.loadAllList()
    const allList = computed(() => listStore.lists)

    const taskStore = useTaskStore()
    taskStore.loadAllTasks()
    const allTasks = computed(() => taskStore.tasks)

    function goToList(listId) {
        router.replace(`/lists/${listId}`)
    }

</script>