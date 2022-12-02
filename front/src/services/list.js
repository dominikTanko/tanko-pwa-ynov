import { api } from 'boot/axios'

export function getAllList () {
  return api.get('/list')
}