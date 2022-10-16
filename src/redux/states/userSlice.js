import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  name: '',
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => {
      return action.payload
    },

    updateUser: (state, action) => {
      return { ...state, ...action.payload }
    },

    resetUser: () => initialState
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions
