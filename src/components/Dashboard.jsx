import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  faTimes,
  faEdit,
  faBars,
  faCirclePlus,
  faArrowUp,
  faArrowDown,
  faUser,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = ({
  taskLists,
  changeSelectedTaskList,
  selectedTaskList,
  createTaskList,
  deleteTaskList,
  updateTaskList,
  enableEditingTaskList,
  isEditingTaskList,
  newTask,
  newTaskStatus,
}) => {
  return (
    <div>
      <ul>
        {taskLists.map((item, index, list) => (
          <li
            key={item.id}
            className="task-list"
            onClick={(e) => {
              !isEditingTaskList && changeSelectedTaskList(e, item.id);
            }}
            style={{
              cursor: "pointer",
              color: selectedTaskList === item.id ? "#4285F4" : "black",
              backgroundColor:
                selectedTaskList === item.id ? "#f0f0f0" : "transparent",
            }}
          >
            {selectedTaskList === item.id && isEditingTaskList ? (
              <input
                id="newTaskName"
                type="text"
                required
                onChange={(e) => {
                  updateTaskList(e, item.id);
                }}
                onBlur={() => {
                  enableEditingTaskList(false);
                }}
              />
            ) : (
              <div>{item.name}</div>
            )}

            {selectedTaskList === item.id && !isEditingTaskList && !newTask ? (
              <div>
                {/************* EDIT ******************* */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    enableEditingTaskList(true);
                  }}
                  className="icon-button"
                  title="Edit"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>

                {/************** DELETE ****************** */}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTaskList(e, item.id);
                  }}
                  className="icon-button"
                  title="Delete"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            ) : (
              <div></div>
            )}

            <div>
              <br></br>
              {taskLists[index].id === taskLists[taskLists.length - 1].id &&
              newTask ? (
                <input
                  id="newTaskName"
                  className="task-list"
                  type="text"
                  required
                  onChange={(e) => {
                    console.log("Input Value:", e.target.value);
                  }}
                  onBlur={(e) => {
                    const myRandomId = uuidv4();
                    const newTaskList = {
                      id: myRandomId,
                      name: e.target.value,
                      subTaskLists: [],
                    };
                    createTaskList(newTaskList);
                  }}
                />
              ) : (
                <div></div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="main-options">
        <button onClick={() => onUpload(task.id)} className="icon-large">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>

        <button
          onClick={(e) => {
            newTaskStatus(true);
          }}
          className="icon-large"
        >
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
        <button onClick={() => onSave(task.id)} className="icon-large">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
