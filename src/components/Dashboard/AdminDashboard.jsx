import AllTask from "../Other/AllTask";
import CreateTask from "../Other/CreateTask";
import Header from "../Other/Header";

function AdminDashboard(props) {
  return (
    <div className="h-screen  w-full px-5 py-2">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
