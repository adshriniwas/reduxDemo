import Home from "../Home";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import Page4 from "../Pages/Page4";

export const ROUTER = [
    {
        path:'/',
        element: Home
    },
    {
        path:'/page1',
        element: Page1
    },
    {
        path:'/page2/:id',
        element: Page2
    },
    {
        path:'/page3',
        element: Page3
    },
    {
        path:'/page4',
        element: Page4
    },

]