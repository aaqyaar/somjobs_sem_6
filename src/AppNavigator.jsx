import { Routes, Route } from "react-router-dom";
import { JobsPage, HomePage, ContactPage, JobPage } from "./pages";
import { Layout } from "./components";

export default function AppNavigator() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:slug" element={<JobPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
}
