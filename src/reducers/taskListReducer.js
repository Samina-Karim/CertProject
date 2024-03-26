/**
 * Below is an example of a simple reducer, just added it to get the redux toolkit setup going
 * You'll need to make your own reducers, with actions as well to facilitate redux-toolkit
 */

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
      id: 1,
      name: "Personal",
      subTaskLists: [
        {
          id: 1,
          name: "Rmnbhfh",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Garden ",
          priority: "Low",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 3,
          name: "Paint",
          priority: "Low",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 4,
          name: "Call Mom ",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 5,
          name: "Laundry",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 6,
          name: "Garden ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 7,
          name: "Dishes",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 8,
          name: "Cooking ",
          priority: "Low",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 9,
          name: "Reading",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 10,
          name: "Garden ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 11,
          name: "Planting",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 12,
          name: "Teaching ",
          priority: "Low",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 13,
          name: "Studying",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 14,
          name: "Shopping ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 15,
          name: "Reading",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 16,
          name: "Garden ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 17,
          name: "Planting",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 18,
          name: "Teaching ",
          priority: "Low",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 19,
          name: "Studying",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 20,
          name: "Shopping ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 21,
          name: "Garden ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 22,
          name: "Planting",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 23,
          name: "Teaching ",
          priority: "Low",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 24,
          name: "Studying",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 25,
          name: "Shopping ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 2,
      name: "Work",
      subTaskLists: [
        {
          id: 1,
          name: "Project 1",
          priority: "High",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 2",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 3,
      name: "Business",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 4,
      name: "Office",
      subTaskLists: [
        {
          id: 1,
          name: "Reno",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Garden ",
          priority: "Medium",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 5,
      name: "Hobbies",
      subTaskLists: [
        {
          id: 1,
          name: "Project 1",
          priority: "Medium",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 2",
          priority: "Low",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 6,
      name: "Vacations",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 7,
      name: "Parents",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 8,
      name: "Siblings",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 9,
      name: "Neighbours",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 10,
      name: "Community",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
    {
      id: 11,
      name: "Permits",
      subTaskLists: [
        {
          id: 1,
          name: "Project 5",
          priority: "Low",
          status: "InComplete",
          dueDate: "10/01/24",
        },
        {
          id: 2,
          name: "Project 6",
          priority: "High",
          status: "Complete",
          dueDate: "10/01/24",
        },
      ],
    },
  ]

const taskListSlice = createSlice({
  name: 'taskLists',
  initialState,
  reducers: {
    createTaskList(state,action) {
      console.log(action);
      return state;
    },
    deleteTaskList(state,action) {
      console.log(action);
      return state;
    },
    updateTaskList(state,action) {
      console.log(action);
      return state;
    }
    
  }
})

export const { createTaskList, deleteTaskList, updateTaskList } = taskListSlice.actions;
export default taskListSlice.reducer;