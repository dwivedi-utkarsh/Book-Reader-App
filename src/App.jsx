import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookAppHome from './Components/BookAppHome';
import BookDetail from './Pages/BookDetail';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookAppHome />} />
          <Route path="/BookAppHome" element={<BookAppHome />} />
          <Route path='/BookDetail/:id' element={<BookDetail/>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
