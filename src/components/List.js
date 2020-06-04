import React, { useState } from "react";
import { flureeQL } from "@fluree/react-wrapper";
import { flureeTransact } from "../flureeTransact";
import "./List.css";

const List = ({ data }) => {
  const [addition, setAddition] = useState("");
  console.log(data.result);
  const todos = data.result;

  const handleToggle = (e) => {
    const { id } = e.target;
    const completed = e.target.className === "completed" ? false : true;
    const transaction = [
      {
        _id: parseInt(id),
        completed: completed,
      },
    ];
    flureeTransact("example/todo", transaction);
  };

  const handleChange = (e) => {
    setAddition(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = [
      {
        _id: "todo?item",
        "todo/text": addition,
        "todo/completed": false,
        "todo/created": Date.now(),
      },
    ];
    flureeTransact("example/todo", transaction)
      .then(setAddition(""))
      .catch((err) => console.log(err));
    // axios
    //   .post("http://localhost:8080/fdb/example/todo/transact", transaction)
    //   .then((res) => {
    //     console.log(res);
    //     setAddition("");
    //   })
    //   .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    let { itemid } = e.target.dataset;
    itemid = parseInt(itemid);
    const transaction = [
      {
        _id: itemid,
        _action: "delete",
      },
    ];
    flureeTransact("example/todo", transaction);
  };

  return (
    <div className="list-wrapper">
      {todos.map((item) => {
        return (
          <div key={item.created} className="item">
            {item.completed ? (
              <p className="completed" id={item._id} onClick={handleToggle}>
                {item.text}
              </p>
            ) : (
              <p className="incomplete" id={item._id} onClick={handleToggle}>
                {item.text}
              </p>
            )}
            <button
              data-itemid={item._id}
              onClick={handleDelete}
              className="delete"
            >
              X
            </button>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={addition}
          placeholder="Add new item"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

let listQuery = () => {
  return {
    select: ["todo/text", "todo/completed", "todo/created"],
    from: "todo",
    orderBy: ["DESC", "todo/created"],
  };
};

const FlureeList = flureeQL(listQuery)(List);

export default FlureeList;
