import React, { useEffect, useState } from "react";
import "./Login.scss";

function Login(props) {
    return (
        <div>
            <div className="Navbar">
                <img src="img/logo.png" width="100px" onClick={()=>{}}></img>
            </div>
            <h1 className="profile_header"> 넷플릭스를 시청할 프로필을 선택하세요.</h1>
        <ul className="choose_profile">
            <li className="profile">
                <img src="img/profile.png" width="100px"></img>
            </li>
            <li className="profile">
                <img src="img/profile2.png" width="90px"></img>
            </li>
            <li className="profile">
                <img src="img/profile3.png" width="100px"></img>
            </li>
            

        </ul>        
        
        
        </div>
    )
}

export default Login;