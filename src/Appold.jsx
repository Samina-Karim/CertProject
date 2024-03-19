import React, { useState, useEffect } from "react";
import "./index.css";
import TaskListDisplay from "./components/Dashboard.jsx";
import SubTaskListDisplay from "./components/TaskList.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faEdit,
  faSave,
  faTrash,
  faTrashRestore,
  faEllipsis,
  faCirclePlus,
  faUser
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [taskLists, setTaskLists] = useState([
    {
      id:1,
      name: "Personal",
      subTaskLists: [
        { id: 1, name: "Rmnbhfh", priority: "High", status: "Complete", dueDate: "10/01/24" },
        { id: 2, name: "Garden ", priority: "Low", status: "Complete", dueDate: "10/01/24" },
        { id: 3, name: "Paint", priority: "Low", status: "Complete", dueDate: "10/01/24" },
        { id: 4, name: "Call Mom ", priority: "High", status: "Complete", dueDate: "10/01/24" },
        { id: 5, name: "Laundry", priority: "High", status: "Complete", dueDate: "10/01/24" },
        { id: 6, name: "Garden ", priority: "Medium", status: "Complete", dueDate: "10/01/24" },
        { id: 7, name: "Dishes", priority: "High", status: "Complete", dueDate: "10/01/24" },
        { id: 8, name: "Cooking ", priority: "Low", status: "Complete", dueDate: "10/01/24" },
        { id: 9, name: "Reading", priority: "High", status: "Complete", dueDate: "10/01/24" },
        { id: 10, name: "Garden ", priority: "Medium", status: "Complete", dueDate: "10/01/24" },
        { id: 11, name: "Planting", priority: "High", status: "Complete", dueDate: "10/01/24" },
        { id: 12, name: "Teaching ", priority: "Low", status: "Complete", dueDate: "10/01/24" },
        { id: 13, name: "Studying", priority: "High", status: "Complete", dueDate: "10/01/24" },
        { id: 14, name: "Shopping ", priority: "Medium", status: "Complete", dueDate: "10/01/24" },
        { id: 15, name: "Reading", priority: "High", status: "Complete", dueDate: "10/01/24" },
        { id: 16, name: "Garden ", priority: "Medium", status: "Complete", dueDate: "10/01/24" },
        { id: 17, name: "Planting", priority: "High", status: "Complete", dueDate: "10/01/24" },
        { id: 18, name: "Teaching ", priority: "Low", status: "Complete", dueDate: "10/01/24" },
        { id: 19, name: "Studying", priority: "High", status: "Complete", dueDate: "10/01/24" },
        { id: 20, name: "Shopping ", priority: "Medium", status: "Complete", dueDate: "10/01/24" },
        { id: 21, name: "Garden ", priority: "Medium", status: "Complete", dueDate: "10/01/24" },
        { id: 22, name: "Planting", priority: "High", status: "Complete", dueDate: "10/01/24" },
        { id: 23, name: "Teaching ", priority: "Low", status: "Complete", dueDate: "10/01/24" },
        { id: 24, name: "Studying", priority: "High", status: "Complete", dueDate: "10/01/24" },
        { id: 25, name: "Shopping ", priority: "Medium", status: "Complete", dueDate: "10/01/24" }
 
      ]
    },
    { id:2,
      name: "Work",
      subTaskLists: [
        { id: 1, name: "Project 1", priority: "High", status: "InComplete", dueDate: "aaa" },
        { id: 2, name: "Project 2", priority: "High", status: "Complete", dueDate: "bbb" },
      ]
    },
    { id:3,
      name: "Business",
      subTaskLists: [
        { id: 1, name: "Project 5", priority: "Low", status: "InComplete", dueDate: "aaa" },
        { id: 2, name: "Project 6", priority: "High", status: "Complete", dueDate: "bbb" },
      ]
    },
    {
        id:4,
        name: "Office",
        subTaskLists: [
          { id: 1, name: "Reno", priority: "High", status: "Complete", dueDate: "aaa" },
          { id: 2, name: "Garden ", priority: "Medium", status: "Complete", dueDate: "bbb" },
        ]
      },
      { id:5,
        name: "Hobbies",
        subTaskLists: [
          { id: 1, name: "Project 1", priority: "Medium", status: "InComplete", dueDate: "aaa" },
          { id: 2, name: "Project 2", priority: "Low", status: "Complete", dueDate: "bbb" },
        ]
      },
      { id:6,
        name: "Vacations",
        subTaskLists: [
          { id: 1, name: "Project 5", priority: "Low", status: "InComplete", dueDate: "aaa" },
          { id: 2, name: "Project 6", priority: "High", status: "Complete", dueDate: "bbb" },
        ]
      },
      { id:7,
        name: "Parents",
        subTaskLists: [
          { id: 1, name: "Project 5", priority: "Low", status: "InComplete", dueDate: "aaa" },
          { id: 2, name: "Project 6", priority: "High", status: "Complete", dueDate: "bbb" },
        ]
      },
      { id:8,
        name: "Siblings",
        subTaskLists: [
          { id: 1, name: "Project 5", priority: "Low", status: "InComplete", dueDate: "aaa" },
          { id: 2, name: "Project 6", priority: "High", status: "Complete", dueDate: "bbb" },
        ]
      },
      { id:9,
        name: "Neighbours",
        subTaskLists: [
          { id: 1, name: "Project 5", priority: "Low", status: "InComplete", dueDate: "aaa" },
          { id: 2, name: "Project 6", priority: "High", status: "Complete", dueDate: "bbb" },
        ]
      },
      { id:10,
        name: "Community",
        subTaskLists: [
          { id: 1, name: "Project 5", priority: "Low", status: "InComplete", dueDate: "aaa" },
          { id: 2, name: "Project 6", priority: "High", status: "Complete", dueDate: "bbb" },
        ]
      },
      { id:11,
        name: "Permits",
        subTaskLists: [
          { id: 1, name: "Project 5", priority: "Low", status: "InComplete", dueDate: "aaa" },
          { id: 2, name: "Project 6", priority: "High", status: "Complete", dueDate: "bbb" },
        ]
      }
  ]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskNames, setTaskNames] = useState([]);
  const [selectedTaskName, setSelectedTaskName] = useState(null);
//   const [subTaskLists, setSubTaskLists] = useState([]);
 

  const changeSelectedTask = (e, id) => {
    e.preventDefault()
    console.log('You have clicked list with id: ', id)
    setSelectedTask(id)
    setSelectedTaskName(e.target.innerHTML)
    console.log('selectedTask: ', setSelectedTask)
  }

 

  const getSubTaskLists = () => {
    console.log("In getSubTaskNames of", selectedTask);
    const lists = taskLists.find(item => item.id=== selectedTask);
    return lists;

  }


  const getTaskNames = () => {
    console.log("In getTaskNames");

    const names = taskLists.map(item => item.name);
    setTaskNames(names);
    console.log("TaskNames", taskNames);

   
  }



  const onClose = (taskId) => {
    console.log("Closing task", taskId);
    setTaskLists(taskLists.filter((task) => task.id !== taskId));
  };

  const onEdit = (taskId) => {
    console.log("Editing task", taskId);
    // Implement the edit logic here
  };

  const onAdd = (taskId) => {
    console.log("Editing task", taskId);
    // Implement the edit logic here
  };
  
  return (
    <>
    <div className="container">
      <div>
        <h1 className="main-title">TASK MANAGER</h1>
      </div>
      <button onClick={() => onUser(task.id)} className="icon-login">
          <FontAwesomeIcon icon={faUser} />
      </button>
    
      <div className="main-container">
        {/************** FIRST COLUMN************* */}
        <div className="first-column">
            <div>
                <h2 className="column-title">TASK LIST</h2>
            </div>

            <div>
                 <div className="task-list">
                    <TaskListDisplay
                    taskLists={taskLists}
                    changeSelectedTask={changeSelectedTask}
                    selectedTask={selectedTask}
                    />
                </div> 
            </div>
        </div>
        {/************** SECOND COLUMN************* */}
        <div className="second-column">
          <div className="activetask-title">{selectedTaskName}</div>
          <div className="second-column">
            <button onClick={() => onAdd(selectedTask)} className="icon-large">
                <FontAwesomeIcon icon={faCirclePlus} />
            </button>
          </div>



            <div className="tasks-container">
                <SubTaskListDisplay subTaskLists={getSubTaskLists()}/>    
            </div>
           </div>
        
        {/************** THIRD COLUMN************* */}
        <div className="third-column">
          <h2 className="column-title">SEARCH</h2>
        <div className="search-result"></div>
        </div>
        {/**************************************** */}
      </div>
    </div>
    </>
  )};


export default App;
