const initialState = [
  {
    isSelected: true,
    name: 'Konto',
    aim: 'Simplificar el proceso de compartir cuentas de la manera manera más segura y cómoda posible permitiéndoles a los usuarios ahorrar en sus gastos de suscripciones.',
    task: [
      { id: 'task-1', content: 'Cook dinner', type: 'Design' },
      { id: 'task-2', content: 'Cook dinner', type: 'Design' },
      { id: 'task-3', content: 'Cook dinner', type: 'Design' },
      { id: 'task-4', content: 'Cook dinner', type: 'Design' },
      { id: 'task-5', content: 'Cook dinner', type: 'Design' },
      { id: 'task-6', content: 'Cook dinner', type: 'Design' },
    ],
    columns: [
      {
        id: 'backlog',
        title: 'Backlog',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      {
        id: 'todo',
        title: 'To do',
        taskIds: ['task-5'],
      },
      {
        id: 'done',
        title: 'Done',
        taskIds: ['task-6'],
      },
    ],
    columnOrder: ['backlog', 'todo', 'done'],
  },
  {
    isSelected: false,
    name: 'Sunday',
    aim: 'Simplificar el proceso de compartir cuentas de la manera manera más segura y cómoda posible permitiéndoles a los usuarios ahorrar en sus gastos de suscripciones.',
    task: [
      { id: 'task-1', content: 'Cook dinner', type: 'Design' },
      { id: 'task-2', content: 'Cook dinner', type: 'Design' },
      { id: 'task-3', content: 'Cook dinner', type: 'Design' },
      { id: 'task-4', content: 'Cook dinner', type: 'Design' },
      { id: 'task-5', content: 'Cook dinner', type: 'Design' },
      { id: 'task-6', content: 'Cook dinner', type: 'Design' },
    ],
    columns: [
      {
        id: 'backlog',
        title: 'Backlog',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      {
        id: 'todo',
        title: 'To do',
        taskIds: ['task-5'],
      },
      {
        id: 'done',
        title: 'Done',
        taskIds: ['task-6'],
      },
    ],
    columnOrder: ['backlog', 'todo', 'done'],
  },
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
