import { useState } from "react";

export function useEditorContent () {
    const [editorContent, setEditorContent] = useState(".background(.yellow)");

    const handleContentChange = (value) => {
        setEditorContent(value);
    }

    return {editorContent, setEditorContent, handleContentChange};
}