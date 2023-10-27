export const crudReducer = (dataState, operation) => {
  // task 3: use object destructuring for operation
  const { newDtls, editIndex, currInd, srhText, initialState } = operation;
  switch (operation.type) {
    case "create":
      return [...dataState, { ...newDtls }];
    case "update":
      return dataState.map((item, pInd) => {
        if (editIndex === pInd) {
          item.name = newDtls.name;
          item.image = newDtls.image;
          item.designation = newDtls.designation;
          return item;
        } else {
          return item;
        }
      });
    case "delete":
      return dataState.filter((elem, index) => {
        return currInd !== index;
      });
    case "search":
      if (srhText === "") {
        return initialState;
      } else {
        // return initialState.filter((elem, index) => {
        return initialState.filter((elem, index) => {
          return (
            elem.name.toLowerCase().includes(srhText.toLowerCase()) ||
            elem.designation.toLowerCase().includes(srhText.toLowerCase())
          );
        });
      }
    default:
      return initialState;
  }
};
