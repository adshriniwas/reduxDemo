import { useEffect, useReducer, useRef, useState } from "react";
import { crudReducer } from "../../state/crudReducer";
import SearchComponent from "./SearchComponent";
import ListComponent from "./ListComponent";
import "../CSS/crud.css";
import { useScreen } from "../../state/ScreenContext";

function FormComponent() {
  const { mainHeader, initialState } = useScreen();
  /*
  props = {
    mainHeader:'Profile',
    initialState: ProfileData
  }
  const mainHeader = props.mainHeader
  const initialState = props.initialState
  */
  const [name, setName] = useState(""); // holds value of Profile Name
  const [nameDirty, setNameDirty] = useState(false);
  const [designation, setDesignation] = useState(""); // holds value of Designation
  const [designationDirty, setDesignationDirty] = useState(false);
  const [image, setImage] = useState(""); // holds value of profile Image
  const [imageDirty, setImageDirty] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [dataState, dispatchDataState] = useReducer(crudReducer, initialState);
  const formDiv = useRef(null);

  useEffect(() => {
    dispatchDataState({
      initialState: initialState,
    });
  }, [initialState]);
  const handleChangeName = (e) => {
    setNameDirty(true);
    setName(e.target.value); // setting the Profile Name state
  };
  const handleChangeDesignation = (e) => {
    setDesignationDirty(true);
    setDesignation(e.target.value); // setting the Profile Name state
  };
  const handleChangeImage = (e) => {
    setImageDirty(true);
    setImage(e.target.value); // setting the Profile Name state
  };
  const onSubmit = () => {
    // create and update
    setNameDirty(true);
    setDesignationDirty(true);
    setImageDirty(true);
    if (name.length && image.length && designation.length) {
      /**
       newDtls: {
        name: name
        image: image
        designation: designation
       }
       */
      dispatchDataState({
        type: editIndex !== -1 ? "update" : "create",
        // name, image, designation
        newDtls: {
          name,
          image,
          designation,
        }, // task 1
        editIndex: editIndex,
        initialState: initialState,
      });
      setName("");
      setDesignation("");
      setImage("");
      setEditIndex(-1);
      setNameDirty(false);
      setDesignationDirty(false);
      setImageDirty(false);
    } else {
      alert("please complete the form");
    }
  };
  const edit = (pIndex) => {
    setName(dataState[pIndex].name);
    setDesignation(dataState[pIndex].designation);
    setImage(dataState[pIndex].image);
    setEditIndex(pIndex);
    if (formDiv.current) {
      formDiv.current.scrollIntoView({ behaviour: "smooth" });
    }
  };
  return (
    <>
      <div className="rootDivContainer">
        <h2>
          {editIndex === -1 ? "Add" : "Edit "} {mainHeader}
        </h2>
        <div className="formMaintainer" ref={formDiv}>
          <div className="formContainer">
            <div>
              <label>{mainHeader} Name*</label>
              <div style={{ display: "grid" }}>
                <input
                  name={mainHeader + "Name"}
                  value={name}
                  onChange={(e) => {
                    handleChangeName(e);
                  }}
                />
                {
                  // ! not / negation
                  // cond rendering -> tertiary operator / &&
                  !name.length && nameDirty && (
                    <span>{mainHeader} Name is Required</span>
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
              <label>{mainHeader} Image*</label>
              <div style={{ display: "grid" }}>
                <input
                  name={mainHeader + "Image"}
                  value={image}
                  onChange={(e) => {
                    handleChangeImage(e);
                  }}
                />
                {!image.length && imageDirty && (
                  <span>{mainHeader} Image is Required</span>
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
            {editIndex === -1 ? "Submit" : "Edit"}
          </button>
        </div>
        <SearchComponent dispatchDataState={dispatchDataState} />
        <ListComponent
          edit={edit}
          dispatchDataState={dispatchDataState}
          dataState={dataState}
        />
      </div>
    </>
  );
}
export default FormComponent;
