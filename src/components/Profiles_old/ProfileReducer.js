import { Fragment, useReducer, useState } from "react";
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

const initialState = ProfileData;
/**
operation -- json object 

{
    *type: ---- Required for all operations {create|update|delete|search}
    data: ---- Required for {create and update} state variables from component
    editIndex --- Required for update
    currIndex --- Required for delete
    srhText --- Required for search
}
the above are dispatched 3 times
*/
const reducer = (profileDataState, operation) => {
  // task 3: use object destructuring for operation
  const {newProfileDtls,editIndex,currProfInd,srhText}=operation
  switch (operation.type) {
    case "create":
      return [...profileDataState, { ...newProfileDtls }];
    case "update":
      return profileDataState.map((prof, pInd) => {
        if (editIndex === pInd) {
          prof.profileName = newProfileDtls.profileName;
          prof.profileImage = newProfileDtls.profileImage;
          prof.designation = newProfileDtls.designation;
          return prof;
        } else {
          return prof;
        }
      });
    case "delete":
      return profileDataState.filter((elem, index) => {
        return currProfInd !== index;
      });
    case "search":
      if (srhText === "") {
        return initialState;
      } else {
        // return initialState.filter((elem, index) => {
        return ProfileData.filter((elem, index) => {
          return (
            elem.profileName
              .toLowerCase()
              .includes(srhText.toLowerCase()) ||
            elem.designation
              .toLowerCase()
              .includes(srhText.toLowerCase())
          );
        });
      }
    default:
      return initialState;
  }
};

function ProfileReducer() {
  // task 2 -> replace useState with useReducer profileName, designation and profileImage
  const [profileName, setProfileName] = useState(""); // holds value of Profile Name
  const [designation, setDesignation] = useState(""); // holds value of Designation
  const [profileImage, setProfileImage] = useState(""); // holds value of profile Image
  const [editIndex, setEditIndex] = useState(-1);
  const [searchInp, setSearchInp] = useState(""); // holds value of Search Input
  const [profNameDirty, setProfNameDirty] = useState(false);
  const [designationDirty, setDesignationDirty] = useState(false);
  const [profImageDirty, setProfImageDirty] = useState(false);
  const [profileDataState, dispatchProfileDataState] = useReducer(
    reducer,
    initialState
  );

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
    // create and update
    setProfNameDirty(true);
    setDesignationDirty(true);
    setProfImageDirty(true);
    if (profileName.length && profileImage.length && designation.length) {
      dispatchProfileDataState({
        type: editIndex !== -1 ? "update" : "create",
        // profileName, profileImage, designation
        newProfileDtls: {
          profileName,
          profileImage,
          designation,
        }, // task 1
        editIndex: editIndex,
      });
      setProfileName("");
      setDesignation("");
      setProfileImage("");
      setEditIndex(-1);
      setProfNameDirty(false);
      setDesignationDirty(false);
      setProfImageDirty(false);
    } else {
      alert("please complete the form");
    }
  }; // add & edit
  const editProfile = (pIndex) => {
    setProfileName(profileDataState[pIndex].profileName);
    setDesignation(profileDataState[pIndex].designation);
    setProfileImage(profileDataState[pIndex].profileImage);
    setEditIndex(pIndex);
  };
  const onSearch = (e) => {
    setSearchInp(e.target.value);
    dispatchProfileDataState({
      type: "search",
      srhText: e.target.value,
    });
  };

  return (
    <div className="rootDivContainer">
      <h2>Add Profile</h2>
    {/* form */}
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
                !profileName.length && profNameDirty && (
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
              {!profileImage.length && profImageDirty && (
                <span>Profile Image is Required</span>
              )}
            </div>
          </div>
        </div>
        <button
          style={{ justifySelf: "end" }}
          // onClick={onSubmit}
          onClick={() => {
            onSubmit();
          }}
        >
          {editIndex !== -1 ? "EDIT" : "Submit"}
        </button>
      </div>
      <h2>Search Profile</h2>
    {/* Search */}
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
      {/* List */}
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
                        // deleteProfile(index);
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
    </div>
  );
}

export default ProfileReducer;
