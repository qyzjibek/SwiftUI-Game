import './../index.css'

export const Description10 = () => {
    return (
         <>
            <div className='instructions'>
                <p className='level-title'>How to force views to one side inside a stack using Spacer</p>
                <p>SwiftUI’s <span style={{color: "#8c28c2"}}>Spacer</span> views automatically fill up all available space on their axis of expansion, which is a fancy way of saying they take up as much space as they can either horizontally or vertically, depending on what you put them in.</p>
                <p>To push that text view to the top of the parent, we’d place a spacer below it, like this:</p>
                <pre className='desc-code'>
{`
   VStack {
        Text("Hello World")
        Spacer()
    }

`}
                </pre>
                <img style={{height: "250px"}} src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer-2@2x.png"/>
                <p>If you wanted two pieces of text on the leading and trailing edges of a HStack, you would use a spacer like this:</p>
                <pre className='desc-code'>
{`
   HStack {
        Text("Hello")
        Spacer()
        Text("World")
   }

`}
                </pre>
                <img style={{height: "40px", border: "1px solid black", margin: "10px", padding: "0 8px"}} src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer-3@2x.png"/>
                <p>Spacers automatically divide up all remaining space, which means if you use if you use several spacers you can divide up the space in varying amounts.</p>
                <p>If you want to make a spacer of an exact size, just do the same thing you would do for any other kind of view: use a frame() modifier with the exact sizes you want.</p>
                <p>For example, this shows two text views, with a 50-point spacer in between them:</p>
                <pre className='desc-code'>
{`
   VStack {
        Text("First Label")
        Spacer()
            .frame(height: 50)
        Text("Second Label")
    }

`}
                </pre>
            </div>
        </>
    );
};