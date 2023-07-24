import ColContainer from "../../components/shared/ColContainer/ColContainer";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import edit from "../../assets/edit.png";

const Profile = () => {
  return (
    <div>
      <SectionTitle>Profile</SectionTitle>
      <ColContainer>
        <div>
          <div className="flex justify-end items-center">
            <button className="btn ">
              Edit
              <img className="w-4" src={edit} alt="edit" />
            </button>
          </div>
          <h2>Name: </h2>
          <h2>Name: </h2>
        </div>
      </ColContainer>
    </div>
  );
};

export default Profile;
