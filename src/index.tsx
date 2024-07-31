//REACT
import ReactDOM from 'react-dom/client';
//REACT-ROUTER-DOM
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
//AMPLIFY
import { Authenticator } from '@aws-amplify/ui-react';
//STYLES
import './styles/index.css';


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <Authenticator.Provider>
        <RouterProvider router={router} />
    </Authenticator.Provider>
);