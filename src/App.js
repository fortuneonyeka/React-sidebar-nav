import "./App.css";
import Sidebar from "./components/Sidebar";
import {Overview, Users, Ratings} from "./pages/overview/Overview";
import Supports from "./pages/supports/Supports"
import {Reports,ReportOne,ReportTwo,ReportThree} from "./pages/Reports/Reports";
import Products from "./pages/products/Products";
import Teams from "./pages/team/Team";
import {Messages,Message1,Message2,Message3} from "./pages/messages/Messages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/overview/users" element={<Users/>}/>
        <Route path="/overview/ratings" element={<Ratings/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/reports/reports1" element={<ReportOne/>}/>
        <Route path="/reports/reports2" element={<ReportTwo/>}/>
        <Route path="/reports/reports3" element={<ReportThree/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/team" element={<Teams/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/messages/message1" element={<Message1/>}/>
        <Route path="/messages/message2" element={<Message2/>}/>
        <Route path="/messages/message3" element={<Message3/>}/>
        <Route path="/support" element={<Supports/>}/>
      </Routes>
    </Router>
  );
}

export default App;
