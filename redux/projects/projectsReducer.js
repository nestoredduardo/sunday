const initialState = {
  konto: {
    name: 'Konto',
    aim: 'Simplificar el proceso de compartir cuentas de la manera manera más segura y cómoda posible permitiéndoles a los usuarios ahorrar en sus gastos de suscripciones.',
    milestones: {
      diseño: {
        name: 'Diseño',
        task: {
          'task-1': { id: 'task-1', content: 'Cook dinner' },
          'task-2': { id: 'task-2', content: 'Cook dinner' },
          'task-3': { id: 'task-3', content: 'Cook dinner' },
          'task-4': { id: 'task-4', content: 'Cook dinner' },
        },
        columns: {
          'column-1': {
            id: 'column-1',
            title: 'Backlog',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
          },
        },
        columnOrder: ['column-1'],
      },
    },
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
