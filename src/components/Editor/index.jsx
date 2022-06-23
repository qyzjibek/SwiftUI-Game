import "./index.css"

export const Editor = () => {
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
                <textarea autocapitalize="none" spellcheck="false" placeholder="Type your answer here..."></textarea>
                <pre>
{`
        }
    }

`}
                </pre>
                <div>
                <button className="check-btn">Check Answer</button>
                </div>
            </div>
        </div>
    );
};
