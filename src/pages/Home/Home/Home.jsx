import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ResearchLink from "../ResearchLink/ResearchLink";
import Review from "../Review/Review";
import SearchCollege from "../SearchCollege/SearchCollege";

const Home = () => {
  return (
    <div>
      <SearchCollege />
      <PhotoGallery />
      <Review />
      <ResearchLink />
    </div>
  );
};

export default Home;
