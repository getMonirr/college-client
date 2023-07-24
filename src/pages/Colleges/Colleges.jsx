import { useQuery } from "@tanstack/react-query";
import SingleCollege from "../../components/SingleCollege/SingleCollege";
import ColContainer from "../../components/shared/ColContainer/ColContainer";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import axios from "axios";

const Colleges = () => {
  const { data: colleges } = useQuery({
    queryKey: ["allColleges"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/colleges`)
        .then((res) => res.data),
  });

  return (
    <div>
      <SectionTitle>All top rated college</SectionTitle>
      <ColContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 xl:grid-cols-4">
          {colleges &&
            Array.isArray(colleges) &&
            colleges.map((college) => (
              <SingleCollege key={college._id} college={college} />
            ))}
        </div>
      </ColContainer>
    </div>
  );
};

export default Colleges;
