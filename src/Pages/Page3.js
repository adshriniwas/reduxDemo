import { useNavigate } from "react-router-dom";

const Page3 = () => {
  const navigate = useNavigate(); // programmatically navigating

  return (
    <>
      <h1>This is Page3</h1>
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
export default Page3;
