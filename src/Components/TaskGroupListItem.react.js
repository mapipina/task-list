import React from "react";

class TaskGroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false, 
      checked: false,
    };
  }

  componentDidMount() {
    const { completionStatus } = this.props;
    this.setState({ disabled: completionStatus, checked: completionStatus });
  }

  onTaskCheck = taskID => {
    this.setState({ disabled: true, checked: true }, () => {
      this.props.onTaskCompletion(taskID);
    });
  };

  renderTask = (task, lockedStatus) => {
    const taskDiv = lockedStatus ? (
      <li>{task.task} is locked</li>
    ) : (
      <li>
        <input
          type='checkbox'
          id={task.id}
          name={task.task}
          onClick={() => this.onTaskCheck(task.id)}
          disabled={this.state.disabled}
          checked={this.state.checked}
        ></input>
        <label>{task.task}</label>
      </li>
    );
    return taskDiv;
  };

  render() {
    const { task, lockedStatus } = this.props;
    return <>{this.renderTask(task, lockedStatus)}</>;
  }
}

export default TaskGroupListItem;
