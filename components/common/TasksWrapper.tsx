import { Tasks } from "./Tasks";

function getData() {
  return process.cwd();
}

export const TasksWrapper = () => {
  const data = getData();

  return <Tasks path={data} />;
};
