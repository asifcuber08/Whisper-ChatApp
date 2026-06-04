import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import PageLoader from "./components/PageLoader";
import { Navigate, Route, Routes } from "react-router";
import useUserSync from "./hooks/useUserSync";

function App() {
  const { isLoaded, isSignedIn } = useAuth();
  useUserSync();

  if (!isLoaded) return <PageLoader />;

  return (
    <Routes>
      <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/chat"} />} />
      <Route path="/chat" element={isSignedIn ? <ChatPage /> : <Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
