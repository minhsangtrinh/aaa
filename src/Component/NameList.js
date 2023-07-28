import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Minh",
      age: 19,
      skill: "React",
    },
    {
      id: 2,
      name: "Huy",
      age: 19,
      skill: "Java",
    },
    {
      id: 3,
      name: "Nam",
      age: 18,
      skill: "pHp",
    },
  ];
  const names = ["Nam", "Minh", "Sang"];
  const nameList = names.map((name, index) => (
    <h1 key={index}>
      {index} {name}
    </h1>
  ));
  //   const personList = persons.map((person) => (
  //     <Person key={person.id} person={person} />
  //   ));
  return <div>{nameList}</div>;
}

export default NameList;
