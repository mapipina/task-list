import React from "react";
import TaskGroupItem from './TaskGroupItem.react'

class TaskGroupContainer extends React.Component {

  render() {
    const { taskGroupList } = this.props;
    const uniqueTaskGroups = [
      ...new Set(taskGroupList.map(taskGroup => taskGroup.group))
    ];
    return (
      <ul>
        {uniqueTaskGroups.map(taskGroup => (
          <TaskGroupItem
          key={taskGroup}
            onClick={() => {
                return this.props.onTaskGroupClick(taskGroup);
            }}
            taskGroup={taskGroup}
            taskGroupList={taskGroupList}
          />
        ))}
      </ul>
    );
  }
}

export default TaskGroupContainer;
