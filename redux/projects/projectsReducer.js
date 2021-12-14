import { UPDATE_COLUMN, SELECT_PROJECT, CREATE_PROJECT } from './projectsType'

const initialState = [
  {
    isSelected: true, //default
    name: 'Konto', //user
    aim: 'Simplificar el proceso de compartir cuentas de la manera manera más segura y cómoda posible permitiéndoles a los usuarios ahorrar en sus gastos de suscripciones.', //user
    types: [
      //default
      { id: 1, name: 'Design', color: 'pink' },
      { id: 2, name: 'Development', color: 'green' },
      { id: 3, name: 'Data', color: 'blue' },
      { id: 4, name: 'Planning', color: 'indigo' },
      { id: 5, name: 'Testing', color: 'purple' },
      { id: 6, name: 'Launch', color: 'yellow' },
      { id: 7, name: 'Marketing', color: 'red' },
    ],
    taskList: [
      //default
      { id: 'task-1', content: 'Cook Design', typeId: 1 },
      { id: 'task-2', content: 'Cook dinner', typeId: 2 },
      { id: 'task-3', content: 'Cook dinner', typeId: 3 },
      { id: 'task-4', content: 'Cook dinner', typeId: 4 },
      { id: 'task-5', content: 'Cook dinner', typeId: 5 },
      { id: 'task-6', content: 'Cook dinner', typeId: 6 },
    ],
    columns: [
      //default
      {
        id: 'backlog',
        title: 'Backlog',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      {
        id: 'todo',
        title: 'Doing',
        taskIds: ['task-5'],
      },
      {
        id: 'done',
        title: 'Done',
        taskIds: ['task-6'],
      },
    ],
    columnOrder: ['backlog', 'todo', 'done'], //default
  },
  {
    isSelected: false,
    name: 'Sunday',
    aim: 'Usando Simplificar el proceso de compartir cuentas de la manera manera más segura y cómoda posible permitiéndoles a los usuarios ahorrar en sus gastos de suscripciones.',
    types: [
      { id: 1, name: 'Design', color: 'pink' },
      { id: 2, name: 'Development', color: 'green' },
      { id: 3, name: 'Data', color: 'blue' },
      { id: 4, name: 'Planning', color: 'indigo' },
      { id: 5, name: 'Testing', color: 'purple' },
      { id: 6, name: 'Launch', color: 'yellow' },
      { id: 7, name: 'Marketing', color: 'red' },
    ],
    taskList: [
      { id: 1, content: 'Cook Design', typeId: 1 },
      { id: 2, content: 'Cook dinner', typeId: 2 },
      { id: 3, content: 'Cook dinner', typeId: 3 },
      { id: 4, content: 'Cook dinner', typeId: 4 },
      { id: 5, content: 'Cook dinner', typeId: 5 },
      { id: 6, content: 'Cook dinner', typeId: 6 },
    ],
    columns: [
      {
        id: 'backlog',
        title: 'Backlog',
        taskIds: [1, 2, 3, 4],
      },
      {
        id: 'todo',
        title: 'Doing',
        taskIds: [5],
      },
      {
        id: 'done',
        title: 'Done',
        taskIds: [6],
      },
    ],
    columnOrder: ['backlog', 'todo', 'done'],
  },
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return [...state, action.payload]
    case UPDATE_COLUMN:
      return state.map((project) => {
        if (!project.isSelected) {
          return project
        }

        return {
          ...project,
          columns: project.columns.map((column) => {
            if (column.id !== action.payload.id) {
              return column
            }

            return action.payload
          }),
        }
      })
    case SELECT_PROJECT:
      return state.map((project) => {
        if (project.name === action.payload) {
          return {
            ...project,
            isSelected: true,
          }
        }

        return {
          ...project,
          isSelected: false,
        }
      })
    default:
      return state
  }
}

export default reducer
