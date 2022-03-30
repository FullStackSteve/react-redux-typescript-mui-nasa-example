import {
   createStore,
   applyMiddleware,
   Middleware,
   Dispatch,
   AnyAction,
   Store
} from 'redux'
import { Action } from 'src/redux/type'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer, State } from 'src/redux/root'

const loggerMiddleware = createLogger()

const middleware: Middleware<Record<string, unknown>, any, Dispatch<AnyAction>>[] = []

if (process.env.NODE_ENV === 'development') {
   middleware.push(loggerMiddleware)
}

export const store: Store<State, Action> & {
   dispatch: unknown
} = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
