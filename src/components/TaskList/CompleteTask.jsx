import React from "react";

function CompleteTask({ data }) {
  return (
    <div className="flex-shrink-0 h-full  w-[300px] bg-yellow-400 rounded-xl">
      <div className="flex justify-between p-5  ">
        <button className="bg-red-500 rounded-md font-bold px-3 ">
          {data.category}
        </button>
        <h2 className="font-bold">{data.taskDate}</h2>
      </div>
      <div className="flex flex-col px-5  ">
        <h1 className="font-bold text-2xl">{data.taskTitle}</h1>
        <p className="text-xl mt-3">{data.taskDescription}</p>
      </div>
      <div className="mt-2 px-5">
        <button className="bg-green-500 py-1 px-2 text-sm w-full">
          Completed Task
        </button>
      </div>
    </div>
  );
}

export default CompleteTask;
