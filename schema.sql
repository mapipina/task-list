DROP DATABASE IF EXISTS tasklist_db;

CREATE DATABASE tasklist_db;

USE tasklist_db;

CREATE TABLE tasks(
	id int NOT NULL,
	task_group varchar(100),
	task varchar(100),
	completedAt varchar(500),
	primary key(id)
);

CREATE TABLE task_dependencies(
    task_id int NOT NULL,
    dependency_id int NOT NULL,
    primary key(task_id)
)



