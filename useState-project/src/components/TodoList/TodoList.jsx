import React, { useState, useEffect } from "react";
import "./styles.css";
import GroceryItem from "./GroceryItem";

//localStorage.getItem('groceryList')
const TodoList = () => {
  const [grocery, setGrocery] = useState("");
  const [groceryList, setGroceryList] = useState(
    JSON.parse(localStorage.getItem("groceryList")) || []
  );
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showActive, setShowActive] = useState(false);
  const unboughtGroceries = groceryList.filter(
    (grocery) => !grocery.isCompleted
  );
  const visibleGroceries = showActive ? unboughtGroceries : groceryList;

  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
  }, [groceryList]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      setGroceryList(
        groceryList.map((item) => {
          if (item.id === editId) {
            return { ...item, title: grocery };
          }
          return item;
        })
      );
      setIsEdit(false);
      setEditId(null);
      setGrocery("");
    } else {
      const newGrocery = {
        id: new Date().getTime().toString(),
        title: grocery,
        isCompleted: false,
      };
      setGroceryList([...groceryList, newGrocery]);
      setGrocery("");
    }
  };

  const editGrocery = (id) => {
    setIsEdit(true);
    const editedGrocery = groceryList.find((grocery) => grocery.id === id);
    setGrocery(editedGrocery.title);
    setEditId(id);
  };

  const deleteGrocery = (id) => {
    const newList = groceryList.filter((grocery) => grocery.id !== id);
    setGroceryList(newList);
  };

  const toggleComplete = (groceryId, checked) => {
    const updatedList = groceryList.map((grocery) => {
      if (grocery.id === groceryId) {
        return { ...grocery, isCompleted: checked };
      } else {
        return { ...grocery };
      }
    });
    setGroceryList(updatedList);
  };

  console.log(visibleGroceries);
  console.log(showActive);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>grocery list</h3>
        <div className="form-control">
          <input
            onChange={(e) => setGrocery(e.target.value)}
            className="grocery"
            type="text"
            value={grocery}
            placeholder="mesela yumurta"
          />
          <button
            type="submit"
            disabled={!grocery.trim()}
            className="submit-btn"
          >
            {isEdit ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {groceryList.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: 8,
            margin: "auto",
            justifyContent: "center",
          }}
        >
          <input
            type="checkbox"
            value={showActive}
            onChange={(e) => setShowActive(e.target.checked)}
          />
          <label htmlFor="">Only show unbought items</label>
        </div>
      )}
      {visibleGroceries.map((grocery) => {
        return (
          <GroceryItem
            toggleComplete={toggleComplete}
            grocery={grocery}
            key={grocery.id}
            deleteGrocery={deleteGrocery}
            editGrocery={editGrocery}
          />
        );
      })}

      {/* Clear All button shows only when there are items in the list */}
      {/* Clear all button here */}

      {groceryList.length !== 0 && (
        <>
          <p>Number of unbought groceries: {unboughtGroceries.length} </p>
          <button onClick={() => setGroceryList([])} className="clear-btn">
            Clear All Items
          </button>
        </>
      )}
    </section>
  );
};

export default TodoList;
