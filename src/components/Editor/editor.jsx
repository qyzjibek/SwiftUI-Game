import "./index.css"
import { useContext, useState } from "react";
import { EditorContext } from "../../Context";
import CustomizedDialogs from "../PopUp";

export const Editor = ({text, label, isValidAnswer, level}) => {
    const {handleContentChange} = useContext(EditorContext);

    const textModifier = level == 4 ? "\t .background(.red)" : "";
    return (
        <div className="editor-wrapper">
            <div className="editor-content">
                <pre>
{`
    import SwiftUI

    struct ContentView: View {
        var body: some View {
            ${label}
            ${textModifier}
`}
                </pre>
                <textarea value={text} autocapitalize="none" spellcheck="false" placeholder="Type your answer here..." onChange={handleContentChange} style={{height: `${level < 3 ? "24px" : "48px"}`}}></textarea>
                <pre>
{`
        }
    }
`}
                </pre>
                <div>
                <CustomizedDialogs isValidAnswer={isValidAnswer} level={level}/>
                </div>
            </div>
        </div>
    );
};
