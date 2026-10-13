import React from "react";
import { Link } from "react-router-dom";
import  parse from "html-react-parser";
import { showFormattedDate } from "../utils/index";

function NoteItem({ id, title, body, createdAt }) {
    return (
        <article className="note-item">
            <h3 className="note-item__title"><Link to={`/notes/${id}`}>{title}</Link></h3>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="note-item__body">{parse(body)}</div>
        </article>
    );
}

export default NoteItem;