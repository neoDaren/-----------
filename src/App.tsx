import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage.tsx'
import { MainPage } from './pages/MainPage/MainPage.tsx'
import { ProfilePage } from './pages/ProfilePage/ProfilePage.tsx'
import {RegPage, } from './pages/RegPage/RegPage.tsx'
export const App = () => {
  const router = createBrowserRouter([
  {
    path:"/",
    element:<LoginPage/>
  },

  {
    path:"/login-page",
    element:<MainPage/>
  },
  {
    path:"/registration-page",
    element:<RegPage/>
  },
  {
    path:"/profile-page",
    element:<ProfilePage/>
  },
  ])
  return(
  <>
  <div className="App">
    <div className="container">
      <RouterProvider router={router}/>
    </div>
  </div>
  /</>
  );}
  export default App;

// function App() {
//   return (
//     <>
//       <div className="App">
      
//         <div className="container">
//           <LoginPage />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
