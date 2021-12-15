type TProject = {
  isSelected: boolean
  name: string
  aim: string
  types: TTaskType[]
  taskList: TTask[]
  columns: TColumn[]
  columnOrder: string[]
}

type TTaskType = {
  id: number
  name: string
  color: string
}

type TTask = {
  id: number
  content: string
  typeId: number
}

type TColumn = {
  id: string
  title: string
  taskIds: number[]
}
