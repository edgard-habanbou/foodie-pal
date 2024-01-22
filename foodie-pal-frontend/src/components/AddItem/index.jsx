import React from "react";

function AddItem() {
  const [itemName, setItemName] = useState("");

  const handleCamerabtn = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };
  return (
    <>
      <div className="flex margin gap  center">
        <input
          type="text"
          className="input"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            addBtnHandler(itemName);
            setItemName("");
          }}
        >
          Add Item
        </button>
        <button className="btn" onClick={handleCamerabtn}>
          <FontAwesomeIcon icon={faCamera} />
        </button>
      </div>
    </>
  );
}

export default AddItem;
