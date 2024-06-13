import { configureStore } from '@reduxjs/toolkit'
// import SystemInitializationReducer from '../reducers/SystemInitializationReducer'
// import AlertAndProgressReducer from '../reducers/AlertAndProgressReducer'
// import UserAuthReducer from '../reducers/UserAuthReducer'
// import kycReducer from '../reducers/KYCReducer'
// import DashBoardReducer from '../reducers/DashBoardReducer'
// import FixedDepositeReducer from '../reducers/FixedDepositeReducer'

import expensesReducer from './Reducers'

export const store = configureStore({
  reducer: {
    ExpensesDetails: expensesReducer
    

  },
  

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch