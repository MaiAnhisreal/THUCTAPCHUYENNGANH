import { getAllTodos } from "../../api";
import AddTask from "./components/AddTask";
import { CiBoxList } from "react-icons/ci";
import TodoList from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <main className="max-w-5xl mx-auto mt-4">
      <div className="text-center my-5">
        <br></br>
        <h1 className="text-2xl fort-bold flex items-center justify-center" style={{fontSize: 30}}>
          <span className="list-icon">
            <CiBoxList />
          </span>
          Welcome to TodoList
        </h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}