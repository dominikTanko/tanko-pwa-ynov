import { defineStore } from 'pinia'
import { Notify } from 'quasar';
import { createNewList, getAllList, deleteList } from 'src/services/list'

export const useListStore = defineStore('list', {
  state: () => ({
    lists: []
  }),
  actions: {
    async loadAllList () {
        try {
            const { data } = await getAllList();
            this.lists = data
        } catch (error) {
            Notify.create({
                message: "Error whilst loading lists",
                type: "negative"
            });
        }
    },

    async handleCreateList (listTitle) {
        try {
            await createNewList(listTitle);
            this.loadAllList();
        } catch (error) {
            throw new Error(error);
        }
    },

    async handleDeleteList (listId) {
        try {
            await deleteList(listId);
            this.loadAllList();
        } catch (error) {
            throw new Error(error);
        }
    }
  }
})