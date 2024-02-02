import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./page/Home";
import SignUp from "./page/Auth";
import NoPage from "./page/NoPage";
import Dashboard from "./page/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
          <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
