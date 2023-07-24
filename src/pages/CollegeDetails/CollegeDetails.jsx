import { useParams } from "react-router-dom";
import SingleCollegeDetails from "../../components/CollegeDetails/SingleCollegeDetails";
import ColContainer from "../../components/shared/ColContainer/ColContainer";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CollegeDetails = () => {
  const { id: collegeId } = useParams();

  const { data: college } = useQuery({
    queryKey: ["college"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/colleges/${collegeId}`)
        .then((res) => res.data),
  });

  return (
    <div>
      <SectionTitle>Details about the college</SectionTitle>
      <ColContainer>
        <div className="">
          {college && <SingleCollegeDetails college={college} />}
        </div>
      </ColContainer>
    </div>
  );
};

export default CollegeDetails;
