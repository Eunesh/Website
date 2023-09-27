import AddImage from "../Components/AddImage";
import Sidebar from "../Components/Sidebar";
import "../Components/Css/addImage.css";

const AdminImage = () => {
  return (
    <>
      <Sidebar />
      <div className="card">
        <AddImage />
      </div>
    </>
  );
};

export default AdminImage;
