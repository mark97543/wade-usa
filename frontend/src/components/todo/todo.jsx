import React, {useState, useEffect} from "react";
import Header from "../header/header";
import Footer from "../footer/footer"

import './todo.css'
import axios from "axios"; //npm i axios

function ToDo(){

    return(
        <div>
            < Header />


            <Footer />
        </div>

    )

}

export default ToDo;