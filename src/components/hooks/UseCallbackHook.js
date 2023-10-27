import { memo, useCallback, useState } from "react";
import Profiles from "./Profiles/Profiles";
const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [students, addStudent] = useState(["Hemanth"]);

  const newStudentAdd = useCallback(() => {
    addStudent((students) => [...students, Math.random() + "Hemanth"]);
  }, [students]);
  return (
    <>
      <h2>This is UseCallbackHook Component</h2>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <ClassRoom students={students} addStudent={newStudentAdd} />
      <Profiles/>
    </>
  );
}; // parent comp

const ClassRoom = memo(({ students, addStudent }) => {
  console.log("ppp");
  return (
    <>
      <h2>This is Classrom Component</h2>
      {students.map((student, index) => {
        return <p key={index}>{student}</p>;
      })}
      <button onClick={addStudent}>Add Student</button>
    </>
  );
}) // child comp

export default UseCallbackHook;
