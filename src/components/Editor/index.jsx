import "./index.css"
import { useContext, useState } from "react";
import { EditorContext } from "../../Context";
import CustomizedDialogs from "../PopUp";

export const Editor = ({text}) => {
    const {handleContentChange} = useContext(EditorContext);
    return (
        <div className="editor-wrapper">
            <div className="editor-content">
                <pre>
{`
    import SwiftUI

    struct ContentView: View {
        var body: some View {
            Text("Hello SwiftUI")
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
                <CustomizedDialogs />
                </div>
            </div>
        </div>
    );
};
