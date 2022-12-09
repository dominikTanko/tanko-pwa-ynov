import { defineStore } from 'pinia'
import { Notify } from 'quasar';
import { getAllTasks, addNewTask, deleteTask, getTask } from 'src/services/tasks';
import { ref } from 'vue';

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    currentTask: ref()
  }),
  actions: {
    async loadAllTasks () {
        try {
            const { data } = await getAllTasks();
            this.tasks = data
        } catch (error) {
            Notify.create({
                message: "Error whilst loading tasks",
                type: "negative"
            });
        }
    },

    async loadTask (taskId) {
        try {
            const { data } = await getTask(taskId);
            this.currentTask = data
        } catch (error) {
            throw new Error(error);
        }
    },

    async handleAddNewTask (taskTitle, listId) {
        try {
            await addNewTask(taskTitle, listId);
            this.loadAllTasks();
        } catch (error) {
            throw new Error(error);
        }
    },
    
    async handleDeleteTask (taskId) {
        try {
            await deleteTask(taskId);
            this.loadAllTasks();
        } catch (error) {
            throw new Error(error);
        }
    }
  }
})