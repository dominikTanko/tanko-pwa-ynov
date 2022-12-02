import { api } from 'boot/axios'

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