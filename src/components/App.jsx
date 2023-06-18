import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Notes from "./Notes";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevValue => {
            return [...prevValue, note];
        });
    }

    function deleteNote(id){
        setNotes(prevValue => {
            return prevValue.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((item, index) => {
                return (<Notes
                    key={index}
                    id={index}
                    title={item.title}
                    content={item.content}
                    onDelete={deleteNote} />
                );
            })
            }
            <Footer />
        </div>
    )
}

export default App;