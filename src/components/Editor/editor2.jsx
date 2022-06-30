import "./index.css"
import { useContext, useState } from "react";
import { EditorContext } from "../../Context";
import CustomizedDialogs from "../PopUp";

export const Editor2 = ({text, matchedColor}) => {
    const {handleContentChange} = useContext(EditorContext);
    return (
        <div className="editor-wrapper">
            <div className="editor-content">
                <pre>
{`
    import SwiftUI

    struct ContentView: View {
        var body: some View {
            Text("Make me bold, then italic")
`}
                </pre>
                <textarea value={text} autocapitalize="none" spellcheck="false" placeholder="Type your answer here..." onChange={handleContentChange} style={{height: '48px'}}></textarea>
                <pre>
{`
        }
    }
`}
                </pre>
                <div>
                <CustomizedDialogs matchedColor={matchedColor}/>
                </div>
            </div>
        </div>
    );
};
