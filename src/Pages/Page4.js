import { useNavigate } from "react-router-dom";

const Page4 = () => {
  const navigate = useNavigate(); // programmatically navigating

  return (
    <>
      <h1>This is Page4</h1>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Back
      </button>
    </>
  );
};
export default Page4;
