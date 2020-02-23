import React from "react";
import TaskGroupListItem from "./TaskGroupListItem.react";

class TaskGroupListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTaskList: []
    };
    this.isTaskDependent = this.isTaskDependent.bind(this);
    this.isTaskLocked = this.isTaskLocked.bind(this);
  }

  componentDidMount() {
    this.filterData();
  }

  filterData() {
    const { selectedTaskGroup, taskGroupList } = this.props;
    const selectedTaskList = taskGroupList.filter(
      group => group.group === selectedTaskGroup
    );
    this.setState({ selectedTaskList });
  }

  isTaskDependent = taskID => {
    const tasks = [...this.props.taskGroupList];
    const task = tasks.filter(task => task.id === taskID);
    const isDependent = task[0].dependencyIds.length > 0 ? true : false;

    return { isDependent, task };
  };

  isTaskLocked = taskID => {
    let isLocked = false;
    const tasks = [...this.props.taskGroupList];
    const { isDependent, task } = this.isTaskDependent(taskID);

    if (isDependent) {
      const dependencies = task[0].dependencyIds;
      let incompleteDependencies = 0;

      dependencies.forEach(dependency => {
        const dependencyObj = tasks.filter(task => task.id === dependency);
        if (dependencyObj[0].completedAt === null) {
          incompleteDependencies++;
        }
      });

      isLocked = incompleteDependencies > 0 ? true : false;
    } else {
      isLocked = false;
    }

    return isLocked;
  };

  isTaskComplete = taskID => {
    const { taskGroupList } = this.props;
    const taskObjArr = taskGroupList.filter(task => task.id === taskID);
    const isComplete = taskObjArr[0].completedAt !== null ? true : false;

    return isComplete;
  };

  render() {
    const { onBackBtnClick, selectedTaskGroup, onTaskCompletion } = this.props;
    const { selectedTaskList } = this.state;
    return (
      <div>
        <span style={{ color: "#9DE1B6", cursor: 'pointer'}} onClick={onBackBtnClick}>
          All Groups
        </span>
        <div>
          {selectedTaskList.map(task => {
            return (
              <TaskGroupListItem
                onTaskCompletion={onTaskCompletion}
                key={`${selectedTaskGroup}-${task.id}`}
                task={task}
                lockedStatus={this.isTaskLocked(task.id)}
                completionStatus={this.isTaskComplete(task.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TaskGroupListContainer;
