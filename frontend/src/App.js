import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import RootLayout from './RootLayout';
import UserPlace from './places/pages/UserPlace';

function App() {

  const router = createBrowserRouter([
    {path:'/',element:<RootLayout /> ,children:[
      {path:'/',element:<Users />},
      {path:'/places/new',element:<NewPlace />},
      {path:'/:userId/places',element:<UserPlace />} 
    ]},
  ])

  return (
   <RouterProvider router={router}/>
  );
}

export default App;
