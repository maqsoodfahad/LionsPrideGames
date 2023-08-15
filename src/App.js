import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/Store";
import LoginPage from "./pages/LoginPage";
import "./assets/style.css";
import "./assets/style2.css";
import "./assets/responsive.css";
import ForgotPassword from "./pages/ForgotPassword";
import ResetEmail from "./pages/ResetEmail";
import CreateUser from "./components/CreateUser/CreateUser";
import Home from "./pages/Home/Home";
import NewPassword from "./pages/NewPassword";
import ContinuePage from "./pages/ContinuePage";
import EditProfile from "./pages/EditProfile/EditProfile";
import Games from "./pages/Game/Games";
import Lobby from "./pages/Lobby/Lobby";
import About from "./pages/About/About";
import Contact from "./pages/ContactUs/Contact";
import SettingsHome from "./pages/Settings/SettingsHome";
import ProtectedRoutes from "./router/Protected";
import Redirect from "./router/Redirect";
import ScrollTop from "./components/ScrollTop";
import BillingHistory from "./pages/BillingHistory/BillingHistory";
import ViewAllNotifications from "./components/Layout/Header/Notifications/ViewAllNotifications";
import SearchResults from "./pages/SearchResults/SearchResults";
import GamesTest from "./pages/Game/GamesTest";
import AllGames from "./pages/AllGames/AllGames";
import AllGamesFilter from "./pages/AllGames/AllGamesFilter";
// if (process.env.NODE_ENV === "production") {

//   console.log = () => { }
// }
function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollTop />
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <Redirect>
                <LoginPage />
              </Redirect>
            }
          />
          <Route
            exact
            path="/forgot-password"
            element={
              <Redirect>
                <ForgotPassword />
              </Redirect>
            }
          />
          <Route
            exact
            path="/resend-email"
            element={
              <Redirect>
                <ResetEmail />
              </Redirect>
            }
          />
          <Route
            exact
            path="/new-password/:id"
            element={
              <Redirect>
                <NewPassword />
              </Redirect>
            }
          />
          <Route
            exact
            path="/continue-password"
            element={
              <Redirect>
                <ContinuePage />
              </Redirect>
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <Redirect>
                <CreateUser />
              </Redirect>
            }
          />
          <Route
            path="/"
            element={
              <Redirect>
                <Home />
              </Redirect>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <ProtectedRoutes>
                <EditProfile />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/games/:id"
            element={
              <ProtectedRoutes>
                <Games />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/lobby"
            element={
              <ProtectedRoutes>
                <Lobby />
              </ProtectedRoutes>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/settings"
            element={
              <ProtectedRoutes>
                <SettingsHome />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/billing-history"
            element={
              <ProtectedRoutes>
                <BillingHistory />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/view-notifications"
            element={
              <ProtectedRoutes>
                <ViewAllNotifications />
              </ProtectedRoutes>
            }
          />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/test" element={<GamesTest />} />
          <Route path="/all-games" element={<AllGames />} />
          <Route path="/all-games-filter" element={<AllGamesFilter />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
