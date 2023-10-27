import { useState } from "react";
import { useScreen } from "../../state/ScreenContext";

/**
 {
    dispatchDataState:dispatchDataState()
 }
 */
const SearchComponent = (props) => {
  const { mainHeader, initialState } = useScreen();
  const { dispatchDataState} = props;
  const [searchInp, setSearchInp] = useState(""); // holds value of Search Input

  const onSearch = (e) => {
    setSearchInp(e.target.value);
    dispatchDataState({
      initialState: initialState,
      type: "search",
      srhText: e.target.value,
    });
  };

  return (
    <>
      <h2>Search {mainHeader}</h2>

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
                placeholder={"Search by " +  mainHeader  + " or Designation"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchComponent;
