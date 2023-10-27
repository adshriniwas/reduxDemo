import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import UseAxios from "../API";

const getAllProfilesConfig = {
  // GET all Profiles using GET method
  method: "get",
  url: "profiles",
};
const getAProfilesConfig = {
  // GET a Profile using GET method
  method: "get",
  url: "profiles/deepak",
};
const searchAllProfilesConfig = {
  // Search all Profile using GET method
  method: "get",
  url: "profiles?name=deepak",
};
const createAProfilesConfig = {
  // create a Profile using POST method
  method: "post",
  url: "profiles",
  data: {
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    name: "Deepak",
    designation: "Engineer",
  },
};
const updateAllProfilesConfig = {
  // update a Profile using PUT method
  method: "put",
  url: "profiles",
  data: {
    id: "dhksdhckjcs",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    name: "Deepak Gunaganti",
    designation: "Engineer",
  },
};
const deleteAllProfilesConfig = {
  // delete a Profile using DELETE method
  method: "delete",
  url: "profiles/dhksdhckjcs",
};
const Page1 = () => {
  const navigate = useNavigate(); // programmatically navigating
  const location = useLocation();
  const [params] = useSearchParams(); // query

  useEffect(() => {
    // console.log("ppp", location.state);
  }, [location]);
  useEffect(() => {
    // console.log("ppp", params.get("name"));
    // console.log("ppp", params.get("age"));
    // console.log("ppp", params.get("place"));
  }, [params]);

  const APICALL = async (config) => {
    const response = await UseAxios(config);
    // if (response) console.log("ppp", response.data);
  };
  useEffect(() => {
    // "https://api.publicapis.org/entries",
    const fetchData = async () => {
      try {
        APICALL(getAllProfilesConfig);
        APICALL(getAProfilesConfig);
        APICALL(searchAllProfilesConfig);
        APICALL(createAProfilesConfig);
        APICALL(updateAllProfilesConfig);
        APICALL(deleteAllProfilesConfig);
      } catch (error) {
        console.log("ppp", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>This is Page1</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </>
  );
};
export default Page1;
