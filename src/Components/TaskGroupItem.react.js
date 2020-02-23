import React from "react";

class TaskGroupItem extends React.Component {
  state = {
    completedTasks: 0,
    totalTasks: 0
  };

  componentDidMount() {
    this.calculateCompleteTasks();
    this.calculateTotalTasks();
  }

  calculateCompleteTasks() {
    const { taskGroupList, taskGroup } = this.props;
    let completion = 0;

    taskGroupList.forEach(taskGroupObj => {
      if (taskGroupObj.group === taskGroup) {
        if (taskGroupObj.completedAt !== null) {
          completion++;
        }
      }
    });

    this.setState({ completedTasks: completion });
  }

  calculateTotalTasks() {
    let taskTotal = 0;
    const { taskGroup, taskGroupList } = this.props;
    const newList = taskGroupList.filter(
      taskGroupObj => taskGroupObj.group === taskGroup
    );

    taskTotal = newList.length;
    this.setState({ totalTasks: taskTotal });
  }

  render() {
    const { taskGroup } = this.props;
    const { completedTasks, totalTasks } = this.state;

    return (
      <div onClick={this.props.onClick} className='task-group'>
        <svg className='task-group__icon'>
        </svg>
        <span>
          <p className='task-group__title'>{taskGroup}</p>
          <p className='task-group__content'>{`${completedTasks} of ${totalTasks} completed`}</p>
        </span>
      </div>
    );
  }
}

export default TaskGroupItem;
