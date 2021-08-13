import {combineReducers, comblineReducers} from 'redux'

import events from './events'
import operationLogs from './operationLogs'

export default combineReducers({
  events, 
  operationLogs,
})