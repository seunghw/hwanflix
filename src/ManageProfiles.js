import { useHistory } from 'react-router-dom'
import "./ManageProfiles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";


function ManageProfiles(params) {

    let history = useHistory();

    return (
        <div>
            
            <h1 className="profile_header"> 
            
            프로필 관리</h1>
            
            <ul className="chosed_profile">
                <li className="profile">
                    <FontAwesomeIcon className="profile_icon" icon={faEdit}  />
                    <img src="img/profile.png" width="130px" ></img>
                    <div className="profile_name">아이유</div>
                </li>
                <li className="profile">
                    <FontAwesomeIcon className="profile_icon" icon={faEdit}  />
                    <img src="img/profile2.png" width="130px" ></img>
                    <div className="profile_name">이지은</div>
                </li>
                <li className="profile">
                    <FontAwesomeIcon className="profile_icon" icon={faEdit}  />
                    <img src="img/profile3.png" width="130px"></img>
                    <div className="profile_name">장만월</div>
                </li>
                <li className="profile">
                    <FontAwesomeIcon className="profile_icon" icon={faEdit}  />
                    <img src="img/profile4.png" width="130px"></img>
                    <div className="profile_name">이지안</div>
                </li>
                <li className="profile">
                    <FontAwesomeIcon className="profile_icon" icon={faEdit}  />
                    <img src="img/profile5.png" width="130px" ></img>
                    <div className="profile_name">해수</div>
                </li>
            </ul>  
            <div className="Manage_profile_set">
                <button className="Manage_profile_button" onClick={()=>{history.push("/")}}>완료</button>      
            </div>
        
        </div>
    )
}

export default ManageProfiles;