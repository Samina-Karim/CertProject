import React from "react";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";
import Task from "./Task.jsx";

const TaskList = ({
  task,
  changeSelectedTask,
  selectedTask,
  createTask,
  deleteTask,
  updateTask,
  enableEditingTask,
  isEditingTask,
}) => {
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return { color: "red" };
      case "Medium":
        return { color: "orange" };
      case "Low":
        return { color: "green" };
      default:
        return {};
    }
  };

  function TaskDueDate({ subTask }) {
    const dueDate = new Date(subTask.dueDate);
    const isValidDate = dueDate instanceof Date && !isNaN(dueDate);

    return (
      <div>{isValidDate ? dueDate.toLocaleDateString() : "Invalid date"}</div>
    );
  }

  function whatIsSelectedTask() {
    console.log("Selected Task in TaskList", selectedTask);
  }

  return (
    <>
      <div className="subtask-container">
        {task && task.subTaskLists && (
          <div className="subtask-grid">
            {" "}
            {/* Grid to display the subtasks */}
            {whatIsSelectedTask()}
            {task.subTaskLists.map((subTask) => (
              <div
                key={subTask.id}
                className="subtask-item"
                style={getPriorityStyle(subTask.priority)}
              >
                {isEditingTask && selectedTask == subTask.id ? (
                  <>
                    <Task
                      task={task}
                      subTask={subTask}
                      updateTask={updateTask}
                      enableEditingTask={enableEditingTask}
                    />
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      {subTask.name}
                    </div>

                    <div>{subTask.priority}</div>
                    <div>{subTask.status}</div>
                    <TaskDueDate subTask={subTask} />
                  </>
                )}
                <div className="icon-container">
                  {/******* EDIT TASK ************* */}
                  <button
                    onClick={(e) => {
                      enableEditingTask(true);
                      changeSelectedTask(e, task.id, subTask.id);
                    }}
                    className="icon-button"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>

                  {/******* DELETE TASK ************* */}
                  <button
                    onClick={(e) => deleteTask(e, task.id, subTask.id)}
                    className="icon-button"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
