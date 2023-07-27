import { Routes, Route } from "react-router-dom";
import { JobsPage, HomePage, LoginPage } from "./pages";
import { Layout } from "./components";

export default function AppNavigator() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Route>
      <Route path="*" element={<div>not found</div>} />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
