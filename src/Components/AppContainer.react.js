import React from "react";
import TaskGroupContainer from "./TaskGroupContainer.react";
import TaskGroupListContainer from "./TaskGroupListContainer.react";

const DEFAULT_TITLE = "Things To Do";
const DEFAULT_VIEW = "taskGroupContainer";
const LIST_VIEW = "taskGroupListContainer";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        title: DEFAULT_TITLE,
        view: DEFAULT_VIEW,
        selectedTaskGroup: '',
      };
      this.initialState = this.state;
      this.onTaskGroupClick = this.onTaskGroupClick.bind(this)
      this.onBackBtnClick = this.onBackBtnClick.bind(this)
      // this.renderView = this.renderView.bind(this);
  }

  renderView = taskGroupList => {
    const { view, selectedTaskGroup } = this.state;
    let selectedView = "";

    view === LIST_VIEW
      ? (selectedView = (
          <TaskGroupListContainer
            onBackBtnClick={this.onBackBtnClick}
            selectedTaskGroup={selectedTaskGroup}
            taskGroupList={taskGroupList}
          />
        ))
      : (selectedView = (
          <TaskGroupContainer
            taskGroupList={taskGroupList}
            onTaskGroupClick={this.onTaskGroupClick}
          />
        ));

    return selectedView;
  };

  onTaskGroupClick = selectedTaskGroup => {
    this.setState({ view: LIST_VIEW, title: selectedTaskGroup, selectedTaskGroup});
  }

  onBackBtnClick() {
    this.setState(this.initialState);
  }

  render() {
    const { taskGroupList } = this.props;

    return (
      <div>
        <h1> {this.state.title}</h1>
        {this.renderView(taskGroupList)}
      </div>
    );
  }
}

export default AppContainer;
