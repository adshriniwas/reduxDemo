import { Fragment } from "react";
// <></>
// Fragment

function ConditinalRendering() {
  const persons = [
    {
      name: "Hemanth",
      place: "Hyderabad",
      gender: "Male",
      age: 0,
    },
    {
      name: "Shiva",
      place: "Mumbai",
      gender: "Male",
      age: 2,
    },
    {
      name: "Abhinav",
      place: "Warangal",
      gender: "Male",
      age: 3,
    },
    {
      name: "Saddiq",
      place: "Karimnagar",
      gender: "Male",
      age: 0,
    },
    {
      name: "Yasaswini",
      place: "Vijayawada",
      gender: "Female",
      age: 5,
    },
    {
      name: "Anand",
      place: "Nalgonda",
      gender: "Male",
      age: 6,
    },
    {
      name: "Sravya",
      place: "Vizag",
      gender: "Female",
      age: 7,
    },
  ];
  return (
    <>
      {persons.map((person, index) => {
        // loop
        const { name, place, gender, age } = person; // destructuring
        return age === 0 ? ( // cond rendering
          <Fragment key={index}>
            <h3>Person {index + 1}</h3>
            <p>
              {name} is from {place} and gender is {gender} and Age is {age}
            </p>
          </Fragment>
        ) : (
          <Fragment key={index}>
            <h3>Person {index + 1}</h3>
            <p>Name is: {name}</p>
            <p>Name is: {place}</p>
            <p>Name is: {gender}</p>
            <p>Name is: {age}</p>
          </Fragment>
        );
      })}
    </>
  );
}

export default ConditinalRendering;
