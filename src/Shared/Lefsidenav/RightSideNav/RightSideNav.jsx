import React from "react";
import { FaFacebook, FaGit, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import swim from '../../../assets/Images-logos/swimming.png'
import class1 from '../../../assets/Images-logos/class.png'
import playground from '../../../assets/Images-logos/playground.png'
const RightSideNav = () => {
  return (
    <div>
      {/* login with  */}
      <div className="space-y-2">
        <h1 className="text-xl font-extrabold mb-4">Login with</h1>
        <button className="btn w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn w-full">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      {/* find us on */}
      <div className="mt-6">
        <h1 className="text-xl font-semibold">Find us on</h1>
        <div className="border rounded-lg">
<a href="" className="flex items-center gap-2 p-4 border-b-2">
    <FaFacebook ></FaFacebook>Facebook</a>
<a href="" className="flex items-center gap-2 p-4">
    <FaTwitter></FaTwitter>Twitter</a>
<a href="" className="flex items-center gap-2 p-4 border-t-2">
    <FaInstagram></FaInstagram>Instagram</a>
        </div>
      </div>
      <div className="mt-6 p-4 bg-[#F3F3F3] space-y-3">
        <h1 className="text-xl font-semibold">Q-zone</h1>
        <img src={swim} alt="" /><img src={class1} alt="" /><img src={playground} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;