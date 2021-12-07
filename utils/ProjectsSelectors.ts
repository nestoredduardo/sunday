import { createSelector } from 'reselect'

import type { RootState } from '@store'

const selectSelectedProject = createSelector(
  (state: RootState) => state.projects,
  (projects) => projects.filter((project) => project['isSelected'])[0]
)

export { selectSelectedProject }
