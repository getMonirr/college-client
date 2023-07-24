const SingleResearchLink = ({ research }) => {
  const { name, description } = research.researchHistory;

  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border border-base-300 bg-base-200"
    >
      <div className="collapse-title text-xl font-medium">{name}</div>
      <div className="collapse-content">
        <p>{description}</p>
        <div className="flex items-center justify-end">
          <div className="badge badge-secondary mt-4">Verified</div>
        </div>
      </div>
    </div>
  );
};

export default SingleResearchLink;
