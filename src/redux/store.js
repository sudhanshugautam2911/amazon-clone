import { configureStore } from '@reduxjs/toolkit'
import amazonReducer from './amazonSlice'
// import { composeWithDevTools } from 'redux-devtools-extension';

export default configureStore({
  reducer: {amazonReducer}
  
})

