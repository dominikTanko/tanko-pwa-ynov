import { defineStore } from 'pinia'
import { Notify } from 'quasar';
import { getAllTasks, addNewTask, deleteTask } from 'src/services/tasks';

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: []
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