//REACT
import { FC, lazy } from "react";


export const Home: FC = lazy(() => import("./home"));
export const App: FC = lazy(() => import("./app"));