import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home";
import { Matches } from "../pages/Matches";



export function Router (){


    return(

        <Routes>
            <Route path="/" element ={<DefaultLayout/>}>
                <Route  path="/" element ={<Home/>} />
                <Route  path="/matches" element ={<Matches/>} />
            </Route>

        </Routes>
    )
}