import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import Dashboard from "./components/Dashboard.jsx";
import TaskList from "./components/TaskList.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faUser } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [taskLists, setTaskLists] = useState([
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
  ]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedTaskList, setSelectedTaskList] = useState(null);
  const [isEditingTaskList, setIsEditingTaskList] = useState(false);
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [newTask, setNewTask] = useState("");

  const getTaskLists = () => {
    console.log("In getTaskLists of Task# ", selectedTaskList);
    const lists = taskLists.find((item) => item.id === selectedTaskList);
    return lists;
  };

  const getTaskName = () => {
    console.log("In getTaskName");
    const task = taskLists.find((item) => item.id === selectedTaskList);
    if (task) {
      console.log("Selected Task Name", task);
      return task.name;
    } else return;
  };
  /********************************************************** */
  /***************** DASHBOARD FUNCTION PROPS *************** */
  /********************************************************** */

  /****** CREATE TASKLIST*******/
  const createTaskList = (newTaskList) => {
    console.log("Creating task");

    setTaskLists([...taskLists, newTaskList]);
    newTaskStatus(false);
  };

  const newTaskStatus = (status) => {
    setNewTask(status);
  };

  /****** DELETE TASKLIST*******/
  const deleteTaskList = (e, taskId) => {
    e.preventDefault();
    console.log("Deleting task");
    const newTaskLists = taskLists.filter((task) => task.id !== taskId);
    setTaskLists(newTaskLists);
  };

  /****** UPDATE TASKLIST*******/
  const enableEditingTaskList = (condition) => {
    console.log("Condition", condition);
    setIsEditingTaskList(condition);
    console.log("IsEditingTaskList", isEditingTaskList);
  };

  const updateTaskList = (e, taskId) => {
    console.log("E ", e);
    console.log("In Update Task List");
    enableEditingTaskList("true");

    const newName = e.target.value;
    console.log(newName);
    setTaskLists((prevTaskLists) => {
      return prevTaskLists.map((taskList) => {
        if (taskList.id === taskId) {
          // Return a new taskList object with the updated name
          return { ...taskList, name: newName };
        }
        return taskList;
      });
    });
    console.log("Updated TaskLists", taskLists);
  };
  /********** SWITCHING BETWEEN TASKLIST **************/
  const changeSelectedTaskList = (e, id) => {
    e.preventDefault();
    console.log("You have clicked list with id: ", id);
    setSelectedTaskList(id);

    setIsEditingTaskList(false);
    setIsEditingTask(false);
    // setSelectedTaskName(e.target.innerHTML)
    console.log("selectedTaskList: ", selectedTaskList);
  };

  /********************************************************** */
  /***************** TASKLIST FUNCTION PROPS **************** */
  /********************************************************** */

  /********** SWITCHING BETWEEN TASKS **************/
  const changeSelectedTask = (e, taskId, subTaskId) => {
    if (e) e.preventDefault();
    console.log("You have clicked list with id of: ", taskId, " ", subTaskId);
    setSelectedTask(subTaskId);
    console.log("selectedTask: ", selectedTask);
  };
  /****** CREATE TASK*******/
  const createTask = (e) => {
    e.preventDefault();
    console.log("Creating task");

    const myRandomId = uuidv4();
    const newTask = {
      id: myRandomId,
      name: "NewTask", // Gets the taskName of the selectedTask
      priority: "Low",
      status: "InComplete",
      dueDate: "01/01/24",
    };
    console.log("NewTask", newTask);

    console.log("In Create - SelectedTaskList", selectedTaskList);
    setTaskLists((prevTaskLists) =>
      prevTaskLists.map((taskList) => {
        if (taskList.id === selectedTaskList) {
          console.log("In Create - TaskListID", taskList.id);
          // Aleem asked to use concat to add the new task to the subTaskLists
          return { ...taskList, subTaskLists: taskList.subTaskLists.concat(newTask) };
          // Another method is as follows:
          // return {...taskList,subTaskLists: [...taskList.subTaskLists, newTask]};
        }
        return taskList; // Return unmodified taskList if not the selected one
      })
    );

    console.log("Prev", taskLists);
    enableEditingTask(true);
    changeSelectedTask(e, selectedTaskList, newTask.id);
  };

  /****** DELETE TASK*******/
  const deleteTask = (e, taskListId, taskId) => {
    e.preventDefault();

    console.log("TaskList ID ", taskListId);
    console.log("Sub Task List ID ", taskId);

    setTaskLists((prevTaskLists) => {
      // Find the taskList with the given id
      const updatedTaskLists = prevTaskLists.map((taskList) => {
        if (taskList.id === taskListId) {
          // Filter out the subTaskList with the given id
          const updatedSubTaskLists = taskList.subTaskLists.filter(
            (subTaskList) => subTaskList.id !== taskId
          );
          // Return the taskList with the updated subTaskLists
          return { ...taskList, subTaskLists: updatedSubTaskLists };
        }
        return taskList;
      });
      return updatedTaskLists;
    });
  };

  /****** UPDATE TASK*******/
  const enableEditingTask = (condition) => {
    console.log("Setting state", condition);
    setIsEditingTask(condition);

    console.log("IsEditingTask", isEditingTask);
  };

  const updateTask = (e, taskListId, taskId, field, newValue) => {
    if (e) e.preventDefault();
    console.log("Updating task");
    console.log("E ", e);
    enableEditingTask(true);

    setTaskLists((prevTaskLists) =>
      prevTaskLists.map((taskList) => {
        // Check if this is the task list we want to update
        if (taskList.id === taskListId) {
          // Map over the subtasks to find the one we want to update
          const updatedSubTaskLists = taskList.subTaskLists.map((subTask) => {
            if (subTask.id === taskId) {
              // Update the specific field of the subtask
              return { ...subTask, [field]: newValue };
            }
            return subTask;
          });

          // Return the taskList with the updated subTaskLists
          return { ...taskList, subTaskLists: updatedSubTaskLists };
        }
        return taskList;
      })
    );

    console.log("Updated TaskLists", taskLists);
  };
  console.log("App taskLists", taskLists);
  console.log("App selectedTask", selectedTask);
  console.log("App selectedTaskList", selectedTaskList);


  
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
                <Dashboard
                  taskLists={taskLists}
                  changeSelectedTaskList={changeSelectedTaskList}
                  selectedTaskList={selectedTaskList}
                  createTaskList={createTaskList}
                  deleteTaskList={deleteTaskList}
                  updateTaskList={updateTaskList}
                  enableEditingTaskList={enableEditingTaskList}
                  isEditingTaskList={isEditingTaskList}
                  newTask={newTask}
                  newTaskStatus={newTaskStatus}
                />
              </div>
            </div>
          </div>
          {/************** SECOND COLUMN************* */}
          <div className="second-column">
            <div className="activetask-title">{getTaskName()}</div>
            <div className="second-column">
              {selectedTaskList !== null ? (
                <button
                  onClick={(e) => createTask(e)}
                  className="icon-large"
                  aria-label="Create Task"
                >
                  <FontAwesomeIcon icon={faCirclePlus} />
                </button>
              ) : null}
            </div>
            <div className="tasks-container">
              <TaskList
                task={getTaskLists()}
                changeSelectedTask={changeSelectedTask}
                selectedTask={selectedTask}
                createTask={createTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
                enableEditingTask={enableEditingTask}
                isEditingTask={isEditingTask}
              />
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
  );
}

export default App;
