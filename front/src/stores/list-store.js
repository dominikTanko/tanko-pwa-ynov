import { defineStore } from 'pinia'
import { Notify } from 'quasar';
import { createNewList, getAllList, deleteList, getList, changeListDescription} from 'src/services/list'
import { ref } from 'vue';

export const useListStore = defineStore('list', {
  state: () => ({
    lists: [],
    currentList: ref()
  }),
  actions: {
    async loadList (listId) {
        try {
            const { data } = await getList(listId);
            this.currentList = data
        } catch (error) {
            Notify.create({
                message: "Error whilst loading list",
                type: "negative"
            });
        }
    },

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
    },

    async handleChangeListDescription (listId, newDescription) {
        try {
            await changeListDescription(listId, newDescription);
            this.loadList(listId);
        } catch (error) {
            throw new Error(error);
        }
    }
  }
})