import "./index.css"
import { useContext, useState } from "react";
import { EditorContext } from "../../Context";
import CustomizedDialogs from "../PopUp";

export const CustomEditor = ({text, isValidAnswer, level}) => {

    // ForEach(fruits, id: \.self) { fruit in
    //     Text(fruit).padding()
    //  }

    const {handleContentChange} = useContext(EditorContext);

    return (
        <div className="editor-wrapper">
            <div className="editor-content">
                <pre>
{`
    import SwiftUI

    struct ContentView: View {
        let fruits = ["Apple", "Banana", "Pineapple", "Strawberry"]
        
        var body: some View {
            VStack(alignment: .trailing) {
`}
                </pre>
                <textarea value={text} 
                autocapitalize="none" 
                spellcheck="false" 
                placeholder="Type your answer here..." 
                onChange={e => handleContentChange(e.target.value)} 
                style={{height: "96px", width: "70%", marginLeft: "120px"}} >
                </textarea>
                <pre>
{`
            }
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
