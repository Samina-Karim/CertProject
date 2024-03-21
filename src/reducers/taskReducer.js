/**
 * Below is an example of a simple reducer, just added it to get the redux toolkit setup going
 * You'll need to make your own reducers, with actions as well to facilitate redux-toolkit
 */

import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTask(state, action) {
      console.log('received action: ', action)
      console.log('updating state to ...', action.payload)
      return action.payload
    }
  }
})

export const { setTask } = taskSlice.actions;
export default taskSlice.reducer;