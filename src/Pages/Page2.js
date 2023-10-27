import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate(); // programmatically navigating
  const { id } = useParams();
  useEffect(() => {
    console.log("ppp", id);
  }, [id]);
  return (
    <>
      <h1>This is Page2</h1>
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
export default Page2;
