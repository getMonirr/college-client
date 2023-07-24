import Gallery from "react-photo-gallery";
import ColContainer from "../../../components/shared/ColContainer/ColContainer";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";

const PhotoGallery = () => {
  const photos = [
    {
      src: "https://source.unsplash.com/g1Kr4Ozfoac/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/96DW4Pow3qI/800x799",
      width: 1,
      height: 1,
    },
    {
      src: "https://source.unsplash.com/fDostElVhN8/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/UZe35tk5UoA/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/2RouMSg9Rnw/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/YRMWVcdyhmI/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/XkKCui44iM0/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/8CqDvPuo_kI/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/_kd5cxwZOK4/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/Dv2PNbMWtsE/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/K8AxP6RcqgA/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/DJsbfCjhnJ4/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/XkKCui44iM0/420x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/5H0p6JPUHbI/320x400",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/96DW4Pow3qI/645x533",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/_qKwbkeoNW8/740x494",
      width: 4,
      height: 3,
    },
  ];

  return (
    <div>
      <SectionTitle>College Photo Gallery</SectionTitle>
      <ColContainer>
        <Gallery photos={photos} direction={"column"} />
      </ColContainer>
    </div>
  );
};

export default PhotoGallery;
