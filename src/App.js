import './App.css';
import {Route, Routes} from "react-router-dom";
import Contentcontainer from "layout/components/Contentcontainer/Contentcontainer";
import React from "react";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="*" element={<Contentcontainer/>}/>
            </Routes>
        </>
    );
}

export default App;
