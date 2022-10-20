import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage, setLocalStorage } from '../../helpers'

const userInitialState = {
  id: 0,
  name: '',
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: getLocalStorage('user')
    ? JSON.parse(getLocalStorage('user'))
    : userInitialState,

  reducers: {
    createUser: (state, action) => {
      setLocalStorage('user', action.payload)
      return action.payload
    },

    updateUser: (state, action) => {
      const resuls = { ...state, ...action.payload }
      setLocalStorage('user', resuls)

      return resuls
    },

    resetUser: () => {
      localStorage.removeItem('user')
      return userInitialState
    }
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions
