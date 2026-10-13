import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import parser from "html-react-parser";
import NotFoundPage from "./NotFoundPage";
import { showFormattedDate } from "../utils";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";
import { FiArchive, FiTrash2 } from "react-icons/fi";
import { MdOutlineUnarchive } from "react-icons/md";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);
  const [note, setNote] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    getNote(id).then(({ data }) => {
      setNote(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <p>{locale === "id" ? "Memuat ...." : "Loading ...."}</p>;
  }

  if (!note) {
    return (
      <NotFoundPage
        message={locale === "id" ? "Catatan tidak ditemukan" : "Note not found"}
      />
    );
  }

  const onDelete = async () => {
    const { error } = await deleteNote(id);
    if (!error) {
      navigate("/");
    }
  };

  const onToggleArchive = async () => {
    const { error } = note.archived
      ? await unarchiveNote(id)
      : await archiveNote(id);

    if (!error) {
      navigate("/");
    }
  };

  const archiveTitle = note.archived
    ? (locale === "id" ? "Batal arsip" : "Unarchive")
    : (locale === "id" ? "Arsipkan" : "Archive");

  return (
    <section className="detail-page">
      <h2 className="detail-page__title">{note.title}</h2>
      <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
      <div className="detail-page__body">{parser(note.body)}</div>
      <div className="detail-page__action">
        <button
          type="button"
          className="action"
          title={archiveTitle}
          onClick={onToggleArchive}
        >
          {note.archived ? <MdOutlineUnarchive /> : <FiArchive />}
        </button>
        <button
          type="button"
          className="action"
          title={locale === "id" ? "Hapus" : "Delete"}
          onClick={onDelete}
        >
          <FiTrash2 />
        </button>
      </div>
    </section>
  );
}

export default DetailPage;