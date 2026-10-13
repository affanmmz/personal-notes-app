import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";
import { FiCheck } from "react-icons/fi";

function AddPage() {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const onSave = async () => {
    const { error } = await addNote({ title, body });

    if (!error) {
      navigate("/");
    }
  };

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder={locale === "id" ? "catatan rahasia" : "secret note"}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <div
          className="add-new-page__input__body"
          data-placeholder={
            locale === "id" ? "Sebenarnya saya adalah ...." : "Actually, I am ...."
          }
          contentEditable
          suppressContentEditableWarning
          onInput={(event) => setBody(event.target.innerHTML)}
        />
      </div>
      <div className="add-new-page__action">
        <button
          type="button"
          className="action"
          title={locale === "id" ? "Simpan" : "Save"}
          onClick={onSave}
        >
          <FiCheck />
        </button>
      </div>
    </section>
  );
}

export default AddPage;