import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
let users = { id: 0 };

export default function Fetch() {
  const [data, setData] = useState([]);
  async function getUser() {
    const a = document.querySelector(".add-user-name").value;

    fetch(`https://api.github.com/users/${a}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }

  return (
    <div>
      <input placeholder="enter your name" class="add-user-name"></input>
      <button onClick={getUser}>click</button>
      <div
        style={{
          display: "block",
          width: 500,
          padding: 30,
        }}
      ></div>
      <Table bordered={true}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Image</td>
            <td>Name</td>
            <td>github url</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>
              <img src={data.avatar_url}></img>
            </td>
            <td>{data.name}</td>
            <td>
              <a href={data.url}>url</a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
