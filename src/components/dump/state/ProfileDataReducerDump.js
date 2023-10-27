import ProfileData from "../mock/ProfileData.json";
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

export const profileReducer = (profileDataState, operation) => {
  // task 3: use object destructuring for operation
  switch (operation.type) {
    case "create":
      return [...profileDataState, { ...operation.newProfileDtls }];
    case "update":
      return profileDataState.map((prof, pInd) => {
        if (operation.editIndex === pInd) {
          prof.profileName = operation.newProfileDtls.profileName;
          prof.profileImage = operation.newProfileDtls.profileImage;
          prof.designation = operation.newProfileDtls.designation;
          return prof;
        } else {
          return prof;
        }
      });
    case "delete":
      return profileDataState.filter((elem, index) => {
        return operation.currProfInd !== index;
      });
    case "search":
      if (operation.srhText === "") {
        return ProfileData;
      } else {
        // return ProfileData.filter((elem, index) => {
        return profileDataState.filter((elem, index) => {
          return (
            elem.profileName
              .toLowerCase()
              .includes(operation.srhText.toLowerCase()) ||
            elem.designation
              .toLowerCase()
              .includes(operation.srhText.toLowerCase())
          );
        });
      }
    default:
      return ProfileData;
  }
};
