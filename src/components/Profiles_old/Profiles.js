import { Fragment, useState } from "react";
import "./Profiles.css";

const ProfileData = [
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    profileName: "Hemanth sai",
    designation: "Software Developer",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    profileName: "Kalyani",
    designation: "Doctor",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    profileName: "Deepak",
    designation: "Engineer",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    profileName: "Yesesvi",
    designation: "Student",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    profileName: "Yewshwant",
    designation: "Advocate",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    profileName: "Sesa Sai",
    designation: "Student",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    profileName: "Samuel",
    designation: "Scientist",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    profileName: "Nikhitha",
    designation: "Software Developer",
  },
];
function Profiles() {
  const [profileName, setProfileName] = useState(""); // holds value of Profile Name
  const [designation, setDesignation] = useState(""); // holds value of Designation
  const [profileImage, setProfileImage] = useState(""); // holds value of profile Image
  const [profileDataState, setProfileDataState] = useState(ProfileData);
  const [editIndex, setEditIndex] = useState(-1);
  const [searchInp, setSearchInp] = useState(""); // holds value of Search Input
  const [profNameDirty, setProfNameDirty] = useState(false);
  const [designationDirty, setDesignationDirty] = useState(false);
  const [profImageDirty, setProfImageDirty] = useState(false);

  const handleChangeProfileName = (e) => {
    setProfNameDirty(true);
    setProfileName(e.target.value); // setting the Profile Name state
  };
  const handleChangeDesignation = (e) => {
    setDesignationDirty(true);
    setDesignation(e.target.value); // setting the Profile Name state
  };
  const handleChangeProfileImage = (e) => {
    setProfImageDirty(true);
    setProfileImage(e.target.value); // setting the Profile Name state
  };
  const onSubmit = () => {
    // summarize the add profile form
    //  avoid using push method with state variables
    // empty string ?
    // if(0) =>false  if(1)=>true
    // && ||
    setProfNameDirty(true);
    setDesignationDirty(true);
    setProfImageDirty(true);

    if (profileName.length && profileImage.length && designation.length) {
      if (editIndex !== -1) {
        // //update /edit
        // let tempProfileDataState = profileDataState; // array of all prof
        // let tempProf =  tempProfileDataState[editIndex] // user trying to edit prof
        // // updating old values with new values
        // tempProf.profileName = profileName;
        // tempProf.designation = designation;
        // tempProf.profileImage = profileImage;

        // tempProfileDataState = tempProfileDataState.map((prof, pIndex) => {
        //   // prof - json
        //   if (editIndex === pIndex) {
        //     return tempProf;
        //   }
        //   return prof;
        // });

        // setProfileDataState(tempProfileDataState);
        setProfileDataState(() => {
          return profileDataState.map((prof, pInd) => {
            if (editIndex === pInd) {
              prof.profileName = profileName;
              prof.profileImage = profileImage;
              prof.designation = designation;
              return prof;
            } else {
              return prof;
            }
          });
        });
        setEditIndex(-1);
        setProfNameDirty(false);
        setDesignationDirty(false);
        setProfImageDirty(false);
      } else {
        // create/add
        setProfileDataState([
          ...profileDataState,
          {
            profileName: profileName,
            designation: designation,
            profileImage: profileImage,
          },
        ]);
        setProfNameDirty(false);
        setDesignationDirty(false);
        setProfImageDirty(false);
      }

      setProfileName("");
      setDesignation("");
      setProfileImage("");
    } else {
      alert("please complete the form");
    }
  };
  const editProfile = (pIndex) => {
    setProfileName(profileDataState[pIndex].profileName);
    setDesignation(profileDataState[pIndex].designation);
    setProfileImage(profileDataState[pIndex].profileImage);
    setEditIndex(pIndex);
  };
  const deleteProfile = (pIndex) => {
    // let deleteArr = profileDataState;
    // let deepak = deleteArr.filter((element, index) => {
    //   return pIndex !== index;
    // });
    // setProfileDataState(deepak);
    setProfileDataState(() => {
      return profileDataState.filter((elem, index) => {
        return pIndex !== index;
      });
    });
  };
  const onSearch = (e) => {
    setSearchInp(e.target.value);
    if (e.target.value === "") {
      setProfileDataState(ProfileData);
    } else {
      let tempProfileDataState = profileDataState;
      // let tempProfileDataState = ProfileData;
      // let profileNameMatchingArr = tempProfileDataState.filter(
      //   (elem, index) => {
      //     return elem.profileName.toLocaleLowerCase().includes(e.target.value);
      //   }
      // );
      // setProfileDataState(profileNameMatchingArr);
      // a
      let profileNameMatchingArr = tempProfileDataState.filter(
        (elem, index) => {
          return (
            elem.profileName
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            elem.designation
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          );
        }
      );
      setProfileDataState(profileNameMatchingArr);
    }
  };
  return (
    <div className="rootDivContainer">
      <h2>Add Profile</h2>
      <div className="formMaintainer">
        <div className="formContainer">
          <div>
            <label>Profile Name*</label>
            <div style={{ display: "grid" }}>
              <input
                name="ProfileName"
                value={profileName}
                onChange={(e) => {
                  handleChangeProfileName(e);
                }}
              />
              {
                // ! not / negation
                // cond rendering -> tertiary operator / &&
                (!profileName.length && profNameDirty) && (
                  <span>Profile Name is Required</span>
                )
              }
            </div>
          </div>
          <div>
            <label>Designation*</label>
            <div style={{ display: "grid" }}>
              <input
                name="Designation"
                value={designation}
                onChange={(e) => {
                  handleChangeDesignation(e);
                }}
              />
              {!designation.length && designationDirty ? (
                <span>Designation is Required</span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div>
            <label>Profile Image*</label>
            <div style={{ display: "grid" }}>
              <input
                name="ProfileImage"
                value={profileImage}
                onChange={(e) => {
                  handleChangeProfileImage(e);
                }}
              />
              {(!profileImage.length && profImageDirty) && (
                <span>Profile Image is Required</span>
              )}
            </div>
          </div>
        </div>
        <button style={{ justifySelf: "end" }} onClick={onSubmit}>
          {editIndex !== -1 ? "EDIT" : "Submit"}
        </button>
      </div>
      <h2>Search Profile</h2>
      <div className="formMaintainer">
        <div className="formContainer">
          <div>
            <label>Search</label>
            <div style={{ display: "grid" }}>
              <input
                onChange={onSearch}
                value={searchInp}
                style={{ width: "100%" }}
                name="Search"
                placeholder="Search by Profile Name or Designation"
              />
            </div>
          </div>
        </div>
        {/* <button style={{ justifySelf: "end" }} onClick={onSubmit}>
          {"Search"}
        </button> */}
      </div>
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
                        deleteProfile(index);
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
    </div>
  );
}

export default Profiles;
