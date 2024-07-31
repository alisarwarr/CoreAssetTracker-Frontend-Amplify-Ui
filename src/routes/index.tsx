//REACT
import { Suspense } from 'react';
//PAGES
import {
    Home,
    App
} from '../pages';
//REACT-ROUTER-DOM
import { createBrowserRouter } from 'react-router-dom';
//LAYOUTS
import Layout from '../components/layouts/Layout';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={null}> <Home /> </Suspense>
            },
            {
                path: "app",
                element: <Suspense fallback={null}> <App /> </Suspense>
            }
        ]
    },
    {
        path: "*",
        element: <Suspense fallback={null}> <>404</> </Suspense>
    }        
]);