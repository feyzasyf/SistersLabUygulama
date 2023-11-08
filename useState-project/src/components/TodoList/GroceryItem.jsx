import { useState } from "react";

export default function GroceryItem({
  grocery,
  deleteGrocery,
  editGrocery,
  toggleComplete,
}) {
  const handleOnChange = (e) => {
    toggleComplete(grocery.id, e.target.checked);
  };
  const { id, title } = grocery;
  return (
    <article className="grocery-item">
      <div className="checkbox-input">
        <input
          type="checkbox"
          checked={grocery.isCompleted}
          onChange={handleOnChange}
          id={title}
        />
        <label
          htmlFor={title}
          className={`title  ${grocery.isCompleted ? "completed-grocery" : ""}`}
        >
          {title}
        </label>
      </div>

      <div>
        {!grocery.isCompleted && (
          <button onClick={() => editGrocery(id)} className="edit-btn">
            Edit
          </button>
        )}
        <button onClick={() => deleteGrocery(id)} className="edit-btn">
          Delete
        </button>
      </div>
    </article>
  );
}
