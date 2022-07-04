import './index.css'

export const Description2= () => {
    return (
         <>
                    <div className='heading'>
                            <p className='level'>Level 2</p>
                        </div>

                        <div className='instructions'>
                            <p>How to style Text view in SwiftUI</p>
                            <p>You can style SwiftUI Text views with a bunch of dedicated ViewModifiers.</p>
                            <p style={{fontWeight: "bold"}}>How to apply italic text style?</p>
                            <pre>
            {`
                Text("italic")
                .italic()

            `}
                            </pre>
                            <p style={{fontWeight: "bold"}}>How to apply bold text style?</p>
                            <pre>
            {`
                Text("bold")
                .bold()

            `}
                            </pre>
                            <p>
                            Of course, you can stack these two modifiers to create an italic and bold typeface.
                            </p>
                            <pre>
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