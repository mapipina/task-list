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
      selectedTaskGroup: "",
      taskGroupList: []
    };
    this.initialState = this.state;
    this.onTaskGroupClick = this.onTaskGroupClick.bind(this);
    this.onBackBtnClick = this.onBackBtnClick.bind(this);
    this.onTaskCompletion = this.onTaskCompletion.bind(this);
  }

  componentDidMount() {
    const { taskGroupList } = this.props;
    this.setState({ taskGroupList });
  }

  renderView = taskGroupList => {
    const { view, selectedTaskGroup } = this.state;
    let selectedView = "";

    view === LIST_VIEW
      ? (selectedView = (
          <TaskGroupListContainer
            onTaskCompletion={this.onTaskCompletion}
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
    this.setState({
      view: LIST_VIEW,
      title: selectedTaskGroup,
      selectedTaskGroup
    });
  };

  onTaskCompletion = taskID => {
    const taskGroupList = [...this.state.taskGroupList];
    taskGroupList.forEach(task => {
      if (task.id === taskID) {
        task.completedAt = new Date();
      }
    });
    this.setState({ taskGroupList });
  };

  onBackBtnClick() {
    this.setState({
      title: DEFAULT_TITLE,
      view: DEFAULT_VIEW,
      selectedTaskGroup: ""
    });
  }

  render() {
    const { taskGroupList, title } = this.state;

    return (
      <div>
        <h1> {title}</h1>
        {this.renderView(taskGroupList)}
      </div>
    );
  }
}

export default AppContainer;
