import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import projectsReducer from './projects/projectsReducer'
import modalReducer from './modal/modalReducers'
import filterReducer from './filters/filterReducers'

const rootReducer = combineReducers({
  projects: projectsReducer,
  modals: modalReducer,
  filter: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const generateStore = () => {
  const middlewareEnhancer = applyMiddleware(thunk)
  const composeEnhancers = composeWithDevTools(middlewareEnhancer)
  const store = createStore(rootReducer, composeEnhancers)

  return store
}

export default generateStore
