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

                <q-separator inset />

                <q-card-section class="q-pt-none">
                    <div v-for="(task, index) in allTasks" :key="index">
                        <q-checkbox 
                            v-if="task.list == list._id" 
                            v-model="task.done" 
                            v-bind:label="task.title" 
                            @click="setTaskDone(task)"/>
                    </div>

                    <q-input bottom-slots v-model="taskTitle" label="Ajouter une tâche">
                        <template v-slot:append>
                            <q-icon name="add" 
                                class="cursor-pointer" 
                                @click="addNewTask(taskTitle, list._id)" />
                        </template>
                    </q-input>
                </q-card-section>
            </q-expansion-item>
        </q-card>
    </div>
</template>

<style scoped>
    .my-card {
        margin-bottom: 2em;
    }
</style>

<script setup>
    import { ref } from 'vue';
    import { getAllTasks, setTaskDone, addNewTask } from 'src/services/tasks.js';
    import { getAllList } from 'src/services/list.js';

    const allTasks = ref([]);
    const allList = ref([]);

    (async () => {
        const { data:task } = await getAllTasks()
        const { data:list } = await getAllList()
        allTasks.value = task
        allList.value = list
    })();

</script>