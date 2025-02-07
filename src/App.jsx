import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Signuppage from "./pages/signuppage";
import Loginpage from "./pages/loginpage";
import StudentList from "./pages/studentlist";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/signup" element={<Signuppage />}></Route>
          <Route path="/login" element={<Loginpage />}></Route>

          <Route path="/studentlist" element={<StudentList />}></Route>
          <Route path="/" element={<Loginpage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
