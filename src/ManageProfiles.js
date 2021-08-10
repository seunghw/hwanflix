import { useHistory } from "react-router-dom";
import "./ManageProfiles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import NavbarLogin from "./common/NavbarLogin";
function ManageProfiles(props) {
  let history = useHistory();

  return (
    <div>
      <NavbarLogin />
      <h1 className="profile_header">프로필 관리</h1>

      <ul className="chosed_profile">
        {props.data.map((a, i) => {
          return <Profile data={props.data[i]} i={i} key={i} />;
        })}
      </ul>

      <div className="Manage_profile_set">
        <button
          className="Manage_profile_button"
          onClick={() => {
            history.push("/");
          }}
        >
          완료
        </button>
      </div>
    </div>
  );
}

function Profile(props) {
  let history = useHistory();

  return (
    <li className="profile">
      <FontAwesomeIcon className="profile_icon" icon={faEdit} />
      <img
        src={"/img/profile" + (props.i + 1) + ".png"}
        width="130px"
        alt=""
        onClick={() => {
          history.push("/UserProfiles/" + props.data.id);
        }}
      ></img>
      <div className="profile_name">{props.data.name}</div>
    </li>
  );
}

export default ManageProfiles;
