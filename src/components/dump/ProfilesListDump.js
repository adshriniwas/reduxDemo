import { Fragment } from "react";
import "./styles/Profiles.css";

const ProfileListDump = (props) => {
  const { editProfile, profileDataState, dispatchProfileDataState } = props;

  return (
    <>
      <h2>Profiles</h2>
      <div className="rootContainer">
        {profileDataState.map((profile, index) => {
          return (
            <Fragment key={index}>
              <div className="card">
                <img
                  title={profile.profileName}
                  src={profile.profileImage}
                  alt="Avatar"
                  style={{ width: "100%" }}
                />
                <div className="container">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>{profile.profileName}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p>{profile.designation}</p>
                  </div>
                  <div className="iconContainer">
                    <img
                      onClick={() => editProfile(index)}
                      title="EDIT"
                      alt="edit"
                      className="imager"
                      src="https://cdn.pixabay.com/photo/2017/06/06/00/33/edit-icon-2375785_1280.png"
                    />
                    <img
                      onClick={() => {
                        dispatchProfileDataState({
                          type: "delete",
                          currProfInd: index,
                        });
                      }}
                      title="DELETE"
                      alt="delete"
                      className="imager"
                      src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                    />
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};
export default ProfileListDump;
