import { useState } from "react";
import ColContainer from "../../components/shared/ColContainer/ColContainer";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import AdmissionModal from "../../components/AdmissionModal/AdmissionModal";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Admission = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const { data: collegeNames } = useQuery({
    queryKey: ["collegeNames"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/college-names`)
        .then((res) => res.data),
  });

  return (
    <>
      <div>
        <SectionTitle>Admission going on</SectionTitle>
        <ColContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 mx-auto">
            {collegeNames &&
              Array.isArray(collegeNames) &&
              collegeNames.map((name) => (
                <button
                  key={name._id}
                  className="btn btn-wide mx-auto"
                  onClick={openModal}
                >
                  {name.collegeName}
                </button>
              ))}
          </div>
        </ColContainer>
      </div>

      <AdmissionModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default Admission;
