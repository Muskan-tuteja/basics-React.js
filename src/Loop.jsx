import React from "react";

const Loop = () => {
  const userData = [
    {
      name: "muskan",
      age: "45",
      email: "mus@test.com",
      id: 1,
    },
    {
      name: "mahi",
      age: "45",
      email: "muss@test.com",
      id: 2,
    },
    {
      name: "isha",
      age: "45",
      email: "musk@test.com",
      id: 3,
    },
    {
      name: "muskannn",
      age: "45",
      email: "mmus@test.com",
      id: 4,
    },
  ];

  return (
    <div>
      <h1>using map</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>not map</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>muskan</td>
            <td>musu@testcom</td>
            <td>23</td>
          </tr>
          <tr>
            <td>2</td>
            <td>musk</td>
            <td>usu@testcom</td>
            <td>20</td>
          </tr>
          <tr>
            <td>3</td>
            <td>mu</td>
            <td>su@testcom</td>
            <td>29</td>
          </tr>
          <tr>
            <td>4</td>
            <td>an</td>
            <td>u@testcom</td>
            <td>23</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Loop;
