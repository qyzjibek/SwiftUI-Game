import "./index.css"
import { useContext, useState } from "react";
import { EditorContext } from "../../Context";
import CustomizedDialogs from "../PopUp";

export const Editor = ({text, label, isValidAnswer}) => {
    const {handleContentChange} = useContext(EditorContext);
    return (
        <div className="editor-wrapper">
            <div className="editor-content">
                <pre>
{`
    import SwiftUI

    struct ContentView: View {
        var body: some View {
            ${label}
`}
                </pre>
                <textarea value={text} autocapitalize="none" spellcheck="false" placeholder="Type your answer here..." onChange={handleContentChange}></textarea>
                <pre>
{`
        }
    }
`}
                </pre>
                <div>
                <CustomizedDialogs isValidAnswer={isValidAnswer}/>
                </div>
            </div>
        </div>
    );
};
