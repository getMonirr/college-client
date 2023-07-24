import ColContainer from "../../../components/shared/ColContainer/ColContainer";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import SingleCollege from "../../../components/SingleCollege/SingleCollege";
import { useSearch } from "../../../hooks/useSearch";

const SearchCollege = () => {
  const { searchResult } = useSearch();
  console.log(searchResult);

  return (
    <>
      {searchResult && Array.isArray(searchResult) && (
        <div>
          <SectionTitle>Here is your College</SectionTitle>
          <ColContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 xl:grid-cols-4">
              {searchResult.map((college) => (
                <SingleCollege key={college._id} college={college} />
              ))}
            </div>
          </ColContainer>
        </div>
      )}
    </>
  );
};

export default SearchCollege;
