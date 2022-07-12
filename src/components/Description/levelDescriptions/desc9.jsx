import './../index.css'

export const Description9 = () => {
    return (
         <>
            <div className='instructions'>
                <p className='level-title'>Using stacks to arrange views</p>
                <p>When we return <span style={{color: "#8c28c2"}}>some View</span> for our body, SwiftUI expects to receive back some kind of view that can be displayed on the screen. That might be a navigation view, a form, a text view, a picker, or something else entirely, but it must conform to the <span style={{color: "#8c28c2"}}>View</span> protocol so that it can be drawn on the screen.</p>
                <p>If we want to return multiple things we have various options, but three are particularly useful. They are <span style={{color: "#8c28c2"}}>HStack, VStack, and ZStack</span> which handle horizontal, vertical, and, er, zepth.</p>
                <p>So, for VStack – a vertical stack of views – the two text views would be placed one above the other, like this:</p>
                <pre className='desc-code'>
{`
   var body: some View {
        VStack {
            Text("Hello, world!")
            Text("This is inside a stack")
        }
   }

`}
                </pre>
                <p>By default <span style={{color: "#8c28c2"}}>VStack</span> places some automatic amount of spacing between the two views, but we can control the spacing by providing a parameter when we create the stack, like this:</p>
                <pre className='desc-code'>
{`
    VStack(spacing: 20) {
        Text("Hello, world!")
        Text("This is inside a stack")
    }

`}
                </pre>
                <p>By default, VStack aligns its views so they are centered, but you can control that with its alignment property. For example, this aligns the text views to their leading edge, which in a left-to-right language such as English will cause them to be aligned to the left: </p>
                <pre className='desc-code'>
{`
    VStack(alignment: .leading) {
        Text("Hello, world!")
        Text("This is inside a stack")
    }

`}
                </pre>
                <p>We also have <span style={{color: "#8c28c2"}}>ZStack</span> for arranging things by depth – it makes views that overlap. In the case of our two text views, this will make things rather hard to read:</p>
                <pre className='desc-code'>
{`
    ZStack {
        Text("Hello, world!")
        Text("This is inside a stack")
    }    

`}
                </pre>
                <p>ZStack doesn’t have the concept of spacing because the views overlap, but it does have alignment. So, if you have one large thing and one small thing inside your ZStack, you can make both views align to the top like this: ZStack(alignment: .top)</p>
                <p>ZStack draws its contents from top to bottom, back to front. This means if you have an image then some text ZStack will draw them in that order, placing the text on top of the image.</p>
            </div>
        </>
    );
};