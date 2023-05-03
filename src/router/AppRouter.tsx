import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="auth" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="auth" />} />
    </Routes>
  );
};
export default AppRouter;
