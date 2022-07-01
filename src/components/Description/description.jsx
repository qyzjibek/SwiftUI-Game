import './index.css'

export const GameDescription = ({level}) => {
    
    return (
        <div className='description'>
            {(() => {
                switch (level) {
                case 1:
                    return <>
                    <div className='heading'>
                        <p className='level'>Level 1</p>
                    </div>
        
                    <div className='instructions'>
                        <p>SwiftUI gives us a range of functionality to render colors, and manages to be both simple and powerful – a difficult combination, but one they really pulled off.</p>
                        <p>To try this out, let’s create a ZStack with a single text label: </p>
                        <pre>
        {`
            Text("Your content")
        
        `}
                        </pre>
                        <p>If we want to put something behind the text, we need to place it above it in the ZStack. But what if we wanted to put some red behind there – how would we do that?
        
        One option is to use the background() modifier, which can be given a color to draw like this:</p>
                        <pre>
        {`
            Text("Your content")
            .background(.red)
        
        `}
                        </pre>
                    </div>
                </>
                case 2:
                    return <>
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
                default:
                    return null
                }
            })()}
        </div>
    );
};