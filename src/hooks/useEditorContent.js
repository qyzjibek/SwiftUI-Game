import { useState } from "react";

export function useEditorContent () {
    const [editorContent, setEditorContent] = useState("");

    const handleContentChange = (value) => {
        setEditorContent(value);
    }

    return {editorContent, setEditorContent, handleContentChange};
}