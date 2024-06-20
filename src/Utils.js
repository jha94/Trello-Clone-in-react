export const status = ["todo", "progress", "completed"];

export const handleOnClick = (type = "", params) => {
  switch (type) {
    case "add":
      params.setTaks([
        ...params.tasks,
        {
          name: params.todo,
          status: params.todoStatus || "todo",
          ind: params.tasks.length,
        },
      ]);
      params.setTodo("");
      params.setTodoStatus("");
      break;
    case "edit":
      params.setTaks(params.tasks.filter((value, ind) => params.index !== ind));
      params.setTodo(params.name);
      params.setTodoStatus(params.status);
      break;
    default:
      break;
  }
};

export const handleOnChange = (event, type = "", params) => {
  switch (type) {
    case "selectStatus":
      return params.setTodoStatus(event?.target?.value);
    case "enterTodo":
      return params.setTodo(event?.target?.value);
    default:
      return;
  }
};
