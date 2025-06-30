import {jwtDecode} from "jwt-decode";

const ShowEntry = () => {
  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;

  return (
    <div>
      <h1>Welcome {user?.username}!</h1>
    </div>
  );
};
export default ShowEntry;