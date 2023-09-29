import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllPeople from "./components/AllPeople";
import InsertPeople from "./components/InsertPeople";


function People() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<AllPeople/>}/>
        <Route path='/people' element={<InsertPeople/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
  export default People;
  