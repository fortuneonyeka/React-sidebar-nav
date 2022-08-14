import "./App.css";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/overview/Overview";
import Users from "./pages/overview/Users";
import Reports from "./pages/Reports/Reports";
import Report1 from "./pages/Reports/Report1"
import Report2 from "./pages/Reports/Report2"
import Report3 from "./pages/Reports/Report3"
import Products from "./pages/products/Products";
import Teams from "./pages/team/Team";
import Messages from "./pages/messages/Messages";
import Message1 from "./pages/messages/Message1";
import Message2 from "./pages/messages/Message2";
import Message3 from "./pages/messages/Message3";
import Supports from "./pages/supports/Supports";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ratings from "./pages/overview/Ratings";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/overview/users" element={<Users/>}/>
        <Route path="/overview/ratings" element={<Ratings/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/reports/reports1" element={<Report1/>}/>
        <Route path="/reports/reports2" element={<Report2/>}/>
        <Route path="/reports/reports3" element={<Report3/>}/>
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
