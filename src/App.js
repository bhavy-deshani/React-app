
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  RouterProvider
} from "react-router-dom";
import MainRoutes from './MainRoutes';

function App() {
  return (
    <>
     <RouterProvider router={MainRoutes} />
    </>
  )
}

export default App;

