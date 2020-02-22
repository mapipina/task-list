import React from "react";

class TaskGroupItem extends React.Component {
  constructor(props) {
    super(props);
  }

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
    const newList = taskGroupList.filter(taskGroupObj => taskGroupObj.group === taskGroup);

    taskTotal = newList.length;
    this.setState({ totalTasks: taskTotal });
  }

  render() {
    const { taskGroup } = this.props;
    const { completedTasks, totalTasks} = this.state;

    return <li onClick={this.props.onClick}>{taskGroup}
        <section>{`${completedTasks} of ${totalTasks} completed`}</section>
    </li>;
  }
}

export default TaskGroupItem;
