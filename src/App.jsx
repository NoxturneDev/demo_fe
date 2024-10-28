import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard.jsx";
import QuestionsPage from "./components/pages/QuestionsPage.jsx";
import Topics from "./components/pages/Topics.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/topics", element: <Topics /> },
  { path: "/questions", element: <QuestionsPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;