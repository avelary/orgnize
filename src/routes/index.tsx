import { BrowserRouter, Route, Routes } from "react-router"
import { Home, Login, Register } from "../pages"
import { PrivateRoute } from "./private-route";

export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  };