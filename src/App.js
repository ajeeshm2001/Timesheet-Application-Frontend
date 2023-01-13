import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginpage from "./Pages/Login";
import Registerpage from "./Pages/Register";
import Userhomepage from "./Pages/Userhomepage";
import 'react-toastify/dist/ReactToastify.css'
import Admincred from "./Pages/Admincred";
import Adminhome from "./Pages/Adminhome";
import AdminUsers from "./Pages/AdminUsers";
import AdminAddUser from "./Pages/AdminAddUser";
import AdminAddTask from "./Pages/AdminAddTask";
import UserTask from "./Pages/UserTask";
import UserTaskCompleted from "./Pages/UserTaskCompleted";
import AdminDailyReport from "./Pages/AdminDailyReport";
import AdminChart from "./Pages/AdminChart";
import AdminMonthlyReport from "./Pages/AdminMonthlyReport";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Userhomepage />} />
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/register" element={<Registerpage/>}/>
          <Route path='/admin' element={<Admincred/>}/>
          <Route path="/adminhome" element={<Adminhome/>}/>
          <Route path="/adminusers" element={<AdminUsers/>}/>
          <Route path="/addusers" element={<AdminAddUser/>}/>
          <Route path="/addtask" element={<AdminAddTask/>}/>
          <Route path="/usertask" element={<UserTask/>}/>
          <Route path="/usercompleted" element={<UserTaskCompleted/>}/>
          <Route path="/dailyreport" element={<AdminDailyReport/>}/>
          <Route path="/monthlyreport" element={<AdminMonthlyReport/>}/>
          <Route path="/adminchart" element={<AdminChart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
