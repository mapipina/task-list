import React from "react";

class TaskGroupListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTaskList: []
    };
  }

  componentDidMount() {
    this.filterData();
  }

  // need to render each task
  // each task has it's own propert
  /**
   * Locked tasks cannot have their completion status toggled
Tasks remain locked until all of their dependencies have been completed
Your implementation should resemble the above design
Please don't introduce any new dependencies, you should have everything you need to complete the challenge
We value well structured code that follows best practices
   */
  checkLockStatus() {}

  checkCompletionStatus() {}

  filterData() {
    const { selectedTaskGroup, taskGroupList } = this.props;
    const selectedTaskList = taskGroupList.filter(
      group => group.group === selectedTaskGroup
    );
    this.setState({ selectedTaskList });
  }

  render() {
    const { onBackBtnClick, selectedTaskGroup } = this.props;
    return (
      <div>
        <button onClick={onBackBtnClick}>Back</button>
        <div>
          {this.state.selectedTaskList.map(task => (
            <div>
              <input
                type="checkbox"
                key={`${selectedTaskGroup}-${task.id}`}
                name={task.task}
              ></input>
              <label key={`Label-${task.id}`}>{task.task}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TaskGroupListContainer;
