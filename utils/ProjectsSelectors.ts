import { createSelector } from 'reselect'

interface RootState {
  projects: TProject[]
}

const selectSelectedProject = createSelector(
  (state: RootState) => state.projects,
  (projects) => projects.filter((project) => project['isSelected'])[0]
)

export { selectSelectedProject }
