const ProfileSrchDump = (props) => {
  const { onSearch, searchInp } = props;
  return (
    <>
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
      </div>
    </>
  );
};

export default ProfileSrchDump;
