import './../index.css'

export const Description1 = () => {
    return (
        <>
            <div className='instructions'>
                <p>SwiftUI gives us a range of functionality to render colors, and manages to be both simple and powerful – a difficult combination, but one they really pulled off.</p>
                <p>To try this out, let’s create a ZStack with a single text label: </p>
                <pre className='desc-code'>
{`
    Text("Your content")

`}
                </pre>
                <p>If we want to put something behind the text, we need to place it above it in the ZStack. But what if we wanted to put some red behind there – how would we do that?

One option is to use the background() modifier, which can be given a color to draw like this:</p>
                <pre className='desc-code'>
{`
    Text("Your content")
    .background(.red)
    
`}
                </pre>
            </div>
        </>
    );
};