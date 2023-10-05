import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home';
import LayOut from './LayOut/LayOut';

const routes = createBrowserRouter([

  {
    path:'/',
    element:<LayOut  />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/services',
        element:<Services />
      },
      {
        path:'/contact',
        element:<Contact />
      },
    ]
  }
  
])
function App() {
  return (
    <div className="App">
      <>
      <RouterProvider router={routes} />
      </>
      


    </div>  
  );
}

export default App;
