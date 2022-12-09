import { api } from 'boot/axios'

export function getList (listId) {
	return api.get(`/list/${listId}`)
}

export function getAllList () {
	return api.get('/list')
}

export function createNewList (listName) {
	return api.post('/list', 
	{
		title: listName,
		description: "La description de la liste"
	})
}

export function deleteList (listId) {
	return api.delete(`/list/${listId}`)
}

export function changeListDescription (listId, newDescription) {
	return api.put(`/list/${listId}`,
	{
		description: newDescription
	})
}