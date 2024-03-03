import { Route, Routes } from "react-router-dom";
import "./App.css";
import ConnectWalletPage from './pages/ConnectWalletPage/ConnectWalletPage.js'
import AuthorizedPage from "./pages/AuthorizedPage/AuthorizedPage.js";
import { AuthProvider } from "./AuthContext.js";
import Layout from "./pages/layout.js";
import CreateAddressPage from "./pages/CreateAddressPage/CreateAddressPage.js";
import ShareAccessPage from './pages/ShareAccessPage/ShareAccessPage.js'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ConnectWalletPage />} />
          <Route path="/authorized" element={<AuthorizedPage />} />
          <Route path="/create-address" element={<CreateAddressPage/>}/>
          <Route path="/share-access" element={<ShareAccessPage/>}/>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
