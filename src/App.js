import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import ConnectWalletPage from "./pages/ConnectWalletPage/ConnectWalletPage";
import AuthorizedPage from "./pages/AuthorizedPage/AuthorizedPage";
import { AuthProvider } from "./AuthContext";

//сюда вложим все страницы с маршрутами

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<ConnectWalletPage />}></Route>
        <Route path="/authorized" element={<AuthorizedPage />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
