import './../index.css'

export const Description2= () => {
    return (
         <>
            <div className='instructions'>
                <p>How to style Text view in SwiftUI</p>
                <p>You can style SwiftUI Text views with a bunch of dedicated ViewModifiers.</p>
                <p style={{fontWeight: "bold"}}>How to apply italic text style?</p>
                <pre className='desc-code'>
{`
    Text("italic")
    .italic()
    
`}
                </pre>
                <p style={{fontWeight: "bold"}}>How to apply bold text style?</p>
                <pre className='desc-code'>
{`
    Text("bold")
    .bold()

`}
                </pre>
                <p>
                Of course, you can stack these two modifiers to create an italic and bold typeface.
                </p>
                <pre className='desc-code'>
{`
    Text("bold & italic")
    .bold()
    .italic()

`}
                </pre>
            </div>
        </>
    );
};