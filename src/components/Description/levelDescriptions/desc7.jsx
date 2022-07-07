import './../index.css'

export const Description7 = () => {
    return (
         <>
            <div className='instructions'>
                <p className='level-title'>How to transform text</p>
                <p>To underline the text in Text view, use <span style={{color: "#8c28c2"}}>underline()</span> modifier.</p>
                <pre className='desc-code'>
{`
    import SwiftUI
 
    struct ContentView: View {
        var body: some View {
            Text("Hello, world!")
                .underline()
        }
    }    

`}
                </pre>
                <p>To change the casing of text in Text view to uppercase, use <span style={{color: "#8c28c2"}}>textCase()</span> modifier.</p>
                <pre className='desc-code'>
{`
    import SwiftUI
 
    struct ContentView: View {
        var body: some View {
            Text("Hello, world!")
                .textCase(.uppercase)
        }
    }    

`}
                </pre>
                <p>To change the casing of text in Text view to lowercase, use <span style={{color: "#8c28c2"}}>textCase()</span> modifier.</p>
                <pre className='desc-code'>
{`
    import SwiftUI
 
    struct ContentView: View {
        var body: some View {
            Text("Hello, world!")
                .textCase(.lowercase)
        }
    }    

`}
                </pre>
            </div>
        </>
    );
};