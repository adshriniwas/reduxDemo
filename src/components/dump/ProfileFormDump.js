import { useState, useReducer } from "react";
import "./styles/Profiles.css";
import ProfileListDump from "./ProfilesListDump";
import { profileReducer } from "./state/ProfileDataReducerDump";
import ProfileData from "./mock/ProfileData.json";
import ProfileSrchDump from "./ProfileSrchDump";

const initialState = ProfileData;

function ProfileFormDump() {
  const [profileName, setProfileName] = useState(""); // holds value of Profile Name
  const [designation, setDesignation] = useState(""); // holds value of Designation
  const [profileImage, setProfileImage] = useState(""); // holds value of profile Image
  const [profileDataState, dispatchProfileDataState] = useReducer(
    profileReducer,
    initialState
  );

  const [editIndex, setEditIndex] = useState(-1);
  const [searchInp, setSearchInp] = useState(""); // holds value of Search Input

  const [profNameDirty, setProfNameDirty] = useState(false);
  const [designationDirty, setDesignationDirty] = useState(false);
  const [profImageDirty, setProfImageDirty] = useState(false);

  const formReset = () => {
    setProfileName("");
    setDesignation("");
    setProfileImage("");
    setEditIndex(-1);
    setProfNameDirty(false);
    setDesignationDirty(false);
    setProfImageDirty(false);
  };
  const handleInpChange = (e) => {
    switch (e.target.name) {
      case "ProfileName":
        setProfNameDirty(true);
        setProfileName(e.target.value);
        break;
      case "Designation":
        setDesignationDirty(true);
        setDesignation(e.target.value);
        break;
      case "ProfileImage":
        setProfImageDirty(true);
        setProfileImage(e.target.value);
        break;
      case "Search":
        setSearchInp(e.target.value);
        dispatchProfileDataState({
          type: "search",
          srhText: e.target.value,
        });
        break;
      default:
        formReset();
    }
  };

  const onSubmit = () => {
    // create and update
    setProfNameDirty(true);
    setDesignationDirty(true);
    setProfImageDirty(true);
    if (profileName.length && profileImage.length && designation.length) {
      dispatchProfileDataState({
        type: editIndex !== -1 ? "update" : "create",
        newProfileDtls: { profileName, profileImage, designation },
        editIndex: editIndex,
      });
      formReset();
    }
  }; // add & edit
  const editProfile = (pIndex) => {
    setProfileName(profileDataState[pIndex].profileName);
    setDesignation(profileDataState[pIndex].designation);
    setProfileImage(profileDataState[pIndex].profileImage);
    setEditIndex(pIndex);
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
                  handleInpChange(e);
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
                  handleInpChange(e);
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
                  handleInpChange(e);
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
          onClick={() => {
            onSubmit();
          }}
        >
          {editIndex !== -1 ? "EDIT" : "Submit"}
        </button>
      </div>
      <ProfileSrchDump onSearch={handleInpChange} searchInp={searchInp} />
      <ProfileListDump
        editProfile={editProfile}
        profileDataState={profileDataState}
        dispatchProfileDataState={dispatchProfileDataState}
      />
    </div>
  );
}

export default ProfileFormDump;
