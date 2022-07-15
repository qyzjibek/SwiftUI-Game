import './../index.css'

export const Description11 = () => {
    return (
         <>
            <div className='instructions'>
                <p className='level-title'>Divider</p>
                <p>The <span style={{color: "#8c28c2"}}>Divider</span> in iOS is either a horizontal or a vertical 1pt thick line. The height of a Divider is determined by the system, and cannot be overriden. The system is responsible for adapting the appearance of Divider as best appropriate for the host platform.</p>
                <p>When contained in a stack, the divider stretches across the axis perpendicular to the axis of the stack. When not in a stack, the divider stretches across the horizontal axis.</p>
                <p>For example, use a <span style={{color: "#8c28c2"}}>Divider</span>  in a VStack to create a horizontal line between vertically laid out elements:</p>
                <pre className='desc-code'>
{`
   struct ExampleView: View {
        var body: some View {
            VStack {
                Text("My Awesome Book")

                Divider()

                Text("My Name")
            }
        }
    }

`}
                </pre>
                <img className='center-img' style={{width: "250px"}} src="https://bananadocs-documentation-assets.s3-us-west-2.amazonaws.com/Divider-example-1.png"/>
                <p>Or use a Divider in an HStack to create a vertical line between horizontally laid out elements:</p>
                <pre className='desc-code'>
{`
  struct ExampleView: View {
        var body: some View {
            HStack {
                Text("This is a line of text")

                Divider()

                Text("This is an unrelated line of text")
            }
        }
    }

`}
                </pre>
                <img className='center-img' style={{width: "250px"}} src="https://bananadocs-documentation-assets.s3-us-west-2.amazonaws.com/Horizontally-Split-Text.png"/>
                <p>The color of a divider can be modified using <span style={{color: "#8c28c2"}}>background(_:alignment:)</span>: </p>
                <pre className='desc-code'>
{` 
    struct ExampleView: View {
        var body: some View {
            VStack {
                Text("My Awesome Book")

                Divider()
                    .background(Color.orange)

                Text("My Name")
            }
        }
    }

`}
                </pre>
                <img className='center-img' style={{width: "250px"}} src="https://bananadocs-documentation-assets.s3-us-west-2.amazonaws.com/divider-colored.png"/>
            </div>
        </>
    );
};