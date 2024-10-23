import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { useAppSelector } from "./stores/hooks";
import AlertModal from "./components/infoModal";
import ValidateAuth from "./route-layers/validate-auth";
import EventsPage from "./pages/events";
import SpeakersPage from "./pages/speakers";
import ReportsPage from "./pages/reports";
import NotificationsPage from "./pages/notifications";
import MessagesPage from "./pages/messages";
import SettingsPage from "./pages/settings";
import ProfilePage from "./pages/profile";

function App() {
  const { show } = useAppSelector((state) => state.snackbar.value);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ValidateAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* alert Popup */}
      <AlertModal openModal={show} />
    </>
  );
}

export default App;
