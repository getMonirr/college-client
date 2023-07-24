const SingleCollegeDetails = ({ college }) => {
  const {
    collegeName,
    collegeImage,
    admissionDate,
    eventsDetails,
    researchHistory,
    sportsCategories,
    admissionProcess,
  } = college;
  return (
    <>
      {/* main details */}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="object-cover w-full h-[500px]"
            src={collegeImage}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{collegeName}</h2>
          <h3 className="mt-8 text-lg">Admission Proccess Details</h3>
          <h3 className="text-sm text-red-400">
            Admission Date: {admissionDate}
          </h3>

          <ul className="space-y-3 mt-4">
            {admissionProcess.map((item, index) => (
              <li key={index}>
                Step {index + 1}: {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-32">
        {/* event details  */}
        <div>
          <h3 className=" mb-12 text-2xl font-bold text-center">
            Events Details
          </h3>
          <div className="card w-full bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://www.fedracongressi.com/fedra/wp-content/uploads/2016/02/revelry-event-designers-homepage-slideshow-38.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body h-[450px]">
              {eventsDetails.map((item, index) => (
                <div
                  className="bg-gray-400 p-4 backdrop-blur-3xl rounded-xl bg-opacity-60 mb-4"
                  key={index}
                >
                  <h2 className="card-title">
                    <span className="text-orange-300">Event Name:</span>{" "}
                    {item.name}
                  </h2>
                  <p>
                    <span className="text-orange-300">Description:</span>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* research details  */}
        <div>
          <h3 className=" mb-12 text-2xl font-bold text-center">
            Research works
          </h3>
          <div className="card w-full bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://politicalscience.uonbi.ac.ke/sites/politicalscience.uonbi.ac.ke/files/inline-images/ILRN.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body h-[450px]">
              {researchHistory.map((item, index) => (
                <div
                  className="bg-gray-400 p-4 backdrop-blur-3xl rounded-xl bg-opacity-60 mb-4"
                  key={index}
                >
                  <h2 className="card-title">
                    <span className="text-orange-300">Research Name:</span>{" "}
                    {item.name}
                  </h2>
                  <p>
                    <span className="text-orange-300">Description:</span>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Sports details  */}
        <div>
          <h3 className=" mb-12 text-2xl font-bold text-center">
            sports categories
          </h3>
          <div className="card w-full bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://media.istockphoto.com/id/1355687160/photo/various-sport-equipment-gear.webp?b=1&s=170667a&w=0&k=20&c=SXCgXww7veX8n9fwf_fqEu18ZmdrNG3dPNrfbZFOnns="
                alt="Shoes"
              />
            </figure>
            <div className="card-body h-[450px]">
              {sportsCategories.map((item, index) => (
                <div
                  className="bg-gray-400 p-4 backdrop-blur-3xl rounded-xl bg-opacity-60 mb-4"
                  key={index}
                >
                  <h2 className="card-title">
                    <span className="text-orange-300">Sports Name:</span>{" "}
                    {item.name}
                  </h2>
                  <p>
                    <span className="text-orange-300">Description:</span>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCollegeDetails;
