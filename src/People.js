import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllPeople from "./components/AllPeople";


function People() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<AllPeople/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
  export default People;
  