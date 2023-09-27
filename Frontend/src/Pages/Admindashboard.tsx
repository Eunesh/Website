import http from "../AxiosIInstance/Https";
import Sidebar from "../Components/Sidebar";
import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import "./PageCss/Admindashboard.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admindashboard = () => {
  const navigate = useNavigate();
  // function for calling APi endpoint with axios
  async function Response(url: string) {
    const res = await http.get(url);
    return res;
  }

  async function PostResponse(url: string) {
    const res = await http.post(url);
    return res;
  }

  async function RefreshToken() {
    try {
      const response = await PostResponse("/RefreshToken");
    } catch (err) {
      console.log(err);
    }
  }

  async function isAuth() {
    try {
      const response = await Response("/IsAuth");
      if (response.status !== 200) {
        const error = new Error("You are not Authorized");
        throw error;
      }
    } catch (err) {
      navigate("/admin");
      // console.log(err);
    }
  }

  useEffect(() => {
    RefreshToken();
    setTimeout(() => {
      isAuth();
    }, 2000);
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <h1 className="welcome_title"> Welcome to Admin Dashboard </h1>
      </div>
    </>
  );
};

export default Admindashboard;
