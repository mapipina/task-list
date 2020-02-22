import React from "react";

class TaskGroupListContainer extends React.Component {
  constructor(props) {
    super(props);
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
  checkLockStatus() {

  }

  checkCompletionStatus() {

  }

  render() {
    return (
      <div>
        <button onClick={this.props.onBackBtnClick}>Back</button>
        <h1>
          hello from task group list container. You have selected
          {this.props.selectedTaskGroup}
        </h1>
      </div>
    );
  }
}

export default TaskGroupListContainer;
