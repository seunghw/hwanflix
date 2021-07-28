import "./UserProfiles.scss"
import { useHistory, useParams } from "react-router-dom";

function UserProfiles(props) {

    let history = useHistory();

    let { id } = useParams(0);
    let userdata = props.data.find(function (상품) {
    return 상품.id == id;
    });
    return (
        <div className="Container">
            <div className="User">
                <h1 className="user_header">프로필 변경</h1>
                <div className="profile_metadata">
                    <div className="user_img">
                    <img src={"/img/profile" + (userdata.id + 1) + ".png" } width="100px"></img>
                    </div>
                    <div className="metadata">
                        <input id="user_name" text="text" value={userdata.name}></input>
                        <h2>언어</h2>
                        <div>한국어</div>
                        <div className="age_set">
                            <h2>관람등급설정:</h2>
                            <div className="label">모든 관람등급</div>
                            <p>이 프로필에서는 모든 관람등급의 콘텐츠가 표시됩니다.</p>
                            <div><button className="edit">수 정</button></div>
                        </div>
                        <div className="auto_play">
                            <h2>자동 재생 설정</h2>
                            <div><span>모든 디바이스에서 시리즈의 다음 화 자동 재생</span></div>
                            <div><span>모든 디바이스에서 탐색 중 미리보기 자동 재생</span></div>
                        </div>
                    </div>
                </div>
                <div className="User_profile_btn">
                    <button className="btn_save" onClick={()=>{history.goBack()}}>저장</button>
                    <button className="btn_back" onClick={()=>{history.goBack()}}>취소</button>
                    <button className="btn_del" onClick={()=>{history.goBack()}}>프로필 삭제</button>      
                </div>
            </div>
        </div>
    )
}

export default UserProfiles;