import React from "react";

class TaskGroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      checked: false
    };
  }

  componentDidMount() {
    const { completionStatus, lockedStatus } = this.props;
    if (lockedStatus) {
      this.setState({
        disabled: true,
        checked: false
      });
    } else {
      this.setState({ disabled: completionStatus, checked: completionStatus });
    }
  }

  onTaskCheck = taskID => {
    this.setState({ disabled: true, checked: true }, () => {
      this.props.onTaskCompletion(taskID);
    });
  };

  renderTask = (task, lockedStatus) => {
    const customCheckmark = lockedStatus && this.state.disabled
      ? "task__custom-checkbox--locked"
      : this.state.checked
      ? "task__custom-checkbox--complete"
      : "task__custom-checkbox--incomplete";

    const taskText = this.state.checked
      ? "task__label--complete"
      : lockedStatus
      ? "task__label--locked"
      : "";

    return (
      <div className='task'>
        <label>
          <input
            type='checkbox'
            id={task.id}
            name={task.task}
            onChange={() => this.onTaskCheck(task.id)}
            disabled={this.state.disabled}
            checked={this.state.checked}
          />
          <span className={`task__custom-checkbox ${customCheckmark}`}></span>
          <span className={taskText}>{task.task}</span>
        </label>
      </div>
    );
  };

  render() {
    const { task, lockedStatus } = this.props;
    return <>{this.renderTask(task, lockedStatus)}</>;
  }
}

export default TaskGroupListItem;
