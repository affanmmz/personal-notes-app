import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import NoteList from "./NoteList";

function NotesView({ title, notes, emptyMessage }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') || '';

    const onKeywordChange = (value) => {
        setSearchParams(value ? {keyword: value } : {});
    };

    const filtered = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

    return (
        <section>
            <h2>{title}</h2>
            <SearchBar keyword={keyword} onKeywordChange={onKeywordChange} />
            <NoteList 
            notes={filtered}
            emptyMessage={keyword && notes.length > 0 ? 'tidak ada catatan' : emptyMessage}
            />
        </section>
    );
}

export default NotesView;