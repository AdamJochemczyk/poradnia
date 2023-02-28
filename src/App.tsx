import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routes";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        draggable
        theme="colored"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
