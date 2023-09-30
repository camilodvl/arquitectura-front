import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPeople from "./components/AllPeople";
import InsertPeople from "./components/InsertPeople";
import UpdatePeople from "./components/UpdatePeople";


function People() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<AllPeople/>}/>
        <Route path='/people' element={<InsertPeople/>}/>
        <Route path ='/get/:id' element={<UpdatePeople/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
  export default People;
  