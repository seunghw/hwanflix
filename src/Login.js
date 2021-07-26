import { useHistory } from 'react-router-dom';
import "./Login.scss";

function Login(props) {

    let history = useHistory();

    return (
        <div>
        
            <h1 className="profile_header"> 넷플릭스를 시청할 프로필을 선택하세요.</h1>
            
            <ul className="choose_profile">
                <li className="profile">
                    <img src="img/profile.png" width="130px" onClick={()=>{ history.push("/main")}}></img>
                    <div className="profile_name">아이유</div>
                </li>
                <li className="profile">
                    <img src="img/profile2.png" width="130px" onClick={()=>{ history.push("/main")}}></img>
                    <div className="profile_name">이지은</div>
                </li>
                <li className="profile">
                    <img src="img/profile3.png" width="130px" onClick={()=>{ history.push("/main")}}></img>
                    <div className="profile_name">장만월</div>
                </li>
                <li className="profile">
                    <img src="img/profile4.png" width="130px" onClick={()=>{ history.push("/main")}}></img>
                    <div className="profile_name">이지안</div>
                </li>
                <li className="profile">
                    <img src="img/profile5.png" width="130px" onClick={()=>{ history.push("/main")}}></img>
                    <div className="profile_name">해수</div>
                </li>
            </ul>  
            <div className="profile_set">
                <button className="profile_button" onClick={()=>{ history.push("/manageProfiles")}} >프로필 관리</button>      
            </div>
        
        </div>
    )
}

export default Login;