import UpdateTodo from "@/components/todo/UpdateTodo";
import React from "react";

function page() {
  return (
    <div className="outer-container">
      <div className="main-top-container">
        <h1>Edit or Update Todo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
          vitae quibusdam ullam unde, voluptates et quo nobis. Illum dolor omnis
          hic laborum beatae dicta officia tempore, cupiditate voluptate et!
        </p>
      </div>
      <UpdateTodo userId={1} />
    </div>
  );
}

export default page;
