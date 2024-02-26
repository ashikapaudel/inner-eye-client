
// import NavBar from "./assets/layout/nav_bar/nav_bar";
import HomePage from "src/pages/home_page";
import  'src/global.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import RootLayout from "./assets/layout/root_layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        {/* Define About and Contact routes if they are used */}
        {/* <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> */}
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<h1>OOPs page not found</h1>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

