import Header from "../Components/Header";
import Filler from "../Components/Filler";
import "../GlobalCss/util.css";
// import GalleryBody from "../Components/GalleryBody";
import Title from "../Components/Title";
import GalleryThumbnail from "../Components/GalleryThumbnail";

const Gallery = () => {
  return (
    <>
      <Header textcolor="textcolordark" />
      <Filler />
      <Title title="GALLERY" />
      <GalleryThumbnail />
      {/* <GalleryBody /> */}
    </>
  );
};

export default Gallery;
