import ColContainer from "../ColContainer/ColContainer";

const SectionTitle = ({ children }) => {
  return (
    <ColContainer>
      <div className="mt-32 mb-16">
        <h2 className=" text-xl lg:text-3xl font-bold text-center">{children}</h2>
      </div>
    </ColContainer>
  );
};

export default SectionTitle;
