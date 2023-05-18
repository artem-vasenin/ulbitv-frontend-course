import {Route, Routes} from "react-router-dom";
import {Home} from "../home/Home";
import {Users} from "../users/Users";
import {UserDetails} from "../user-details/UserDetails";
import {About} from "../about/About";
import {Error} from "../error/Error";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path="/users/:id" element={<UserDetails/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/*" element={<Error/>}/>
  </Routes>
);
