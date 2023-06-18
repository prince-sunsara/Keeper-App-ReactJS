import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        // console.log(name + " + " + value);
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expand() {
        setIsExpanded(true);
    }

    return (
        <div>
            <form>
                {isExpanded && (
                    <input
                        onChange={handleChange}
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={note.title}
                    />
                )}

                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                />

                <Zoom in={isExpanded}>
                    <button onClick={submitNote}>
                        <AddIcon />
                    </button>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;