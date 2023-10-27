import { Fragment } from "react";
import { useScreen } from "../../state/ScreenContext";

const ListComponent = (props) => {
  const { mainHeader, initialState } = useScreen();
  const { dataState, dispatchDataState, edit } = props;
  return (
    <>
      <h2>{mainHeader}s</h2>

      <div className="rootContainer">
        {dataState.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className="card">
                <img
                  title={item.name}
                  src={item.image}
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
                    <p style={{ fontWeight: "bold" }}>{item.name}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p>{item.designation}</p>
                  </div>
                  <div className="iconContainer">
                    <img
                      onClick={() => edit(index)}
                      title="EDIT"
                      alt="edit"
                      className="imager"
                      src="https://cdn.pixabay.com/photo/2017/06/06/00/33/edit-icon-2375785_1280.png"
                    />
                    <img
                      onClick={() => {
                        dispatchDataState({
                          initialState: initialState,
                          type: "delete",
                          currInd: index,
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
export default ListComponent;
