import { api } from 'boot/axios'

export function getAllTasks () {
  return api.get('/tasks')
}

export function setTaskDone (task) {
  return api.put(`/tasks/${task._id}`, 
  {
    done: task.done
  })
}

export function addNewTask (taskTitle, listId) {
  return api.post('/tasks', 
  {
    title: taskTitle,
    description: "Description de la tâche",
    list: listId,
    done: false
  })
}

export function deleteTask (taskId) {
  return api.delete(`/tasks/${taskId}`)
}