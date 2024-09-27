import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landingpage from "./LandingPage";
import Loginpage from "./StudentLoginpage";
import Teacherloginpage from "./TeacherLoginpage";
import Adminloginpage from "./AdminLoginpage";
import Studentslot from "./Studentslot";
import StudentSlotEdit from "./StudentSlotEdit.js";
import Teacherslot from "./Teacherslot";
import Adminpage from "./Adminpage";
import Studentslotdetail from "./Studentslotdetail";
import Teacherslotdetail from "./Teacherslotdetail";
import Slotbooking from "./Slotbooking.js";
import Test from "./Test.js";
import TeacherSlotEdit from "./TeacherSlotEdit.js";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage />,
    },

    {
      path: "/StudentLogin",
      element: <Loginpage />,
    },
    {
      path: "/TeacherLoginpage",
      element: <Teacherloginpage />,
    },
    {
      path: "/Adminloginpage",
      element: <Adminloginpage />,
    },
    {
      path: "/Studentslot",
      element: <Studentslot />,
    },
    {
      path: "/studentslotedit/:id/:email",
      element: <StudentSlotEdit />,
    },
    {
path:"/teacherslotedit/:id/:email",
element:<TeacherSlotEdit/>
    },
    {
      path: "/Teacherslot",
      element: <Teacherslot />,
    },
    {
      path: "/Adminpage",
      element: <Adminpage />,
    },
    {
      path: "/Studentslotdetail",
      element: <Studentslotdetail />,
    },
    {
      path: "/Teacherslotdetail",
      element: <Teacherslotdetail />,
    },
    {
      path: "/Slotbooking",
      element: <Slotbooking />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
