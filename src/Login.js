import { useHistory } from 'react-router-dom';
import "./Login.scss";

function Login(props) {

    let history = useHistory();

    return (
        <div>
        
            <h1 className="profile_header"> 넷플릭스를 시청할 프로필을 선택하세요.</h1>
            
            <ul className="choose_profile">
                {props.data.map((a, i) => {
                    return <Profile data={props.data[i]} i={i} key={i}/>
                })}
            </ul>  
            <div className="profile_set">
                <button className="profile_button" onClick={()=>{ history.push("/manageProfiles")}} >프로필 관리</button>      
            </div>
        
        </div>
    )
}

function Profile(props) {

    let history = useHistory();

    return (
        <li className="profile">
            <img src={"/img/profile" + (props.i + 1) + ".png"} width="130px" onClick={()=>{ history.push("/main")}}></img>
            <div className="profile_name">{props.data.name}</div>
        </li>
    )
}

export default Login;