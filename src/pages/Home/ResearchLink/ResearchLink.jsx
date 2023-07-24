import { useQuery } from "@tanstack/react-query";
import SingleResearchLink from "../../../components/ResearchLink/SingleResearchLink";
import ColContainer from "../../../components/shared/ColContainer/ColContainer";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import axios from "axios";

const ResearchLink = () => {
  const { data: researches } = useQuery({
    queryKey: ["researches"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/researches`)
        .then((res) => res.data),
  });

  return (
    <div>
      <SectionTitle>Research Link</SectionTitle>

      <ColContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {researches &&
            Array.isArray(researches) &&
            researches.map((item, index) => (
              <SingleResearchLink key={index} research={item} />
            ))}
        </div>
      </ColContainer>
    </div>
  );
};

export default ResearchLink;
