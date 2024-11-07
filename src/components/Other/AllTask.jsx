import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 ">
      <div className="bg-red-400   mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 flex items-center justify-center text-lg font-medium">
          Employee Name
        </h2>
        <h3 className="w-1/5 flex items-center justify-center text-lg font-medium">
          New Task
        </h3>
        <h5 className="w-1/5 flex items-center justify-center text-lg font-medium">
          Active Task
        </h5>
        <h5 className="w-1/5 flex items-center justify-center text-lg font-medium">
          Completed
        </h5>
        <h5 className="w-1/5 flex items-center justify-center text-lg font-medium">
          Failed
        </h5>
      </div>
      <div className="h-[80%] overflow-auto ">
        {userData.map(function (elem, index) {
          return (
            <div
              key={index}
              className="border-2 border-emerald-500  mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="w-1/5 flex items-center justify-center text-lg font-medium ">
                {elem.firstName}
              </h2>
              <h3 className="w-1/5 flex items-center justify-center text-lg font-medium text-blue-400">
                {elem.taskNumber.new}
              </h3>
              <h5 className="w-1/5 flex items-center justify-center text-lg font-medium text-yellow-400">
                {elem.taskNumber.active}
              </h5>
              <h5 className="w-1/5 flex items-center justify-center text-lg font-medium text-white">
                {elem.taskNumber.completed}
              </h5>
              <h5 className="w-1/5 flex items-center justify-center text-lg font-medium text-red-600">
                {elem.taskNumber.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTask;
