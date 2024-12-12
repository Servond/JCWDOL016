import { task } from "../static/chores.json";
function Task() {
  return (
    <div className="ml-auto mr-auto">
      {task?.map((item) => (
        <div
          id={`${item.id}`}
          className="m-4 flex justify-between items-center space-x-12 border-1 border-[#51d986]"
        >
          <input
            type="checkbox"
            className="border border-1 rounded-sm border-[#50d885] accent-[#50d885] appearance-none checked:bg-[#50d885] bg-[#1a202c] p-2"
          />
          <p className="">{item.name}</p>
          <button className="border-solid border-2 border-[#be898c] p-1 rounded-md text-[#be898c]">
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

function TaskList() {
  return (
    <div className="flex items-center justify-between">
      <Task />
    </div>
  );
}

export default TaskList;
