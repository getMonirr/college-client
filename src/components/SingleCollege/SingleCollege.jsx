import { Link } from "react-router-dom";

const SingleCollege = ({ college }) => {
  const {
    collegeName,
    collegeImage,
    admissionDate,
    eventsDetails,
    researchHistory,
    sportsCategories,
    _id,
  } = college;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[300px]" src={collegeImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{collegeName}</h2>
        <p>Admission Date: {admissionDate}</p>
        <p>Events: {eventsDetails.length} events</p>
        <p>Research History: {researchHistory.length} research</p>
        <p>Sports: {sportsCategories.length} kind of sports</p>
        <div className="card-actions justify-end">
          <Link to={`/college-details/${_id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCollege;
