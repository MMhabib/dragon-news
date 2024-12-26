import { useContext } from "react";
import { AuthContext } from "../../../providers/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGit, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const GoogleSIgn = () => {

    const {signInWithGoogle}=useContext(AuthContext);
    const location=useLocation()
const navigate=useNavigate()
const handleGoogleSignin=()=>{
  signInWithGoogle()
  .then((result) => {
    console.log(result.user);
    navigate(location?.state ? location.state:'/'); // Navigate after login
  })
  .catch();
};

    return (
        <div>
            <button onClick={handleGoogleSignin} className="btn w-full">
                      <FaGoogle></FaGoogle>
                      Google
                    </button>
        </div>
    );
};

export default GoogleSIgn;