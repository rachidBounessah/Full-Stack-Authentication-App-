import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Login from "./page/Login";
import Signup from "./page/Signup";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<h1>Authenification page</h1>} />
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
