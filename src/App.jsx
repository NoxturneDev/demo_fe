import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard.jsx";
import QuestionsPage from "./components/pages/QuestionsPage.jsx";
import Topics from "./components/pages/Topics.jsx";
import HistoryScore from "./components/pages/HistoryScore.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/topics/:slide", element: <Topics /> },
  { path: "/questions", element: <QuestionsPage /> },
  { path: "/history", element: <HistoryScore /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;