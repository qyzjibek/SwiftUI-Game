export const modifierSuggestions = [
    {
        initializer: "underline()",
        autocomplete: ".underline()",
        description: "Applies an underline to the Text"
    },
    {
        initializer: "background(content:)",
        autocomplete: ".background()"
    },
    {
        initializer: "foregroundColor(_ color: Color?) Text",
        autocomplete: ".foregroundColor()"
    },
    {
        initializer: "italic()",
        autocomplete: ".italic()"
    },
    {
        initializer: "bold()",
        autocomplete: ".bold()"
    },
    {
        initializer: "frame(width:height:alignment:)",
        autocomplete: ".frame(width: CGFloat?, height: CGFloat?, alignment: Alignment)"
    },
    {
        initializer: "textCase(_ textCase:)",
        autocomplete: ".textCase()"
    },
    {
        initializer: "font(_ font: Font?) Text",
        autocomplete: ".font()"
    },
    {
        initializer: "fontWeight(_ weight:)",
        autocomplete: ".fontWeight()"
    },
    {
        initializer: "padding()",
        autocomplete: ".padding()"
    },
    {
        initializer: "padding(_ length: CGFloat)",
        autocomplete: ".padding(_ length: CGFloat)"
    },
    {
        initializer: "opacity(_ opacity:)",
        autocomplete: ".opacity()"
    },
]

export const stackSuggestions = [
    {
        initializer: "HStack",
        autocomplete: "HStack"
    },
    {
        initializer: "HStack(alignment:spacing:content:)",
        autocomplete: "HStack(alignment: VerticalAlignment, spacing: CGFloat?)"
    },
    {
        initializer: "VStack",
        autocomplete: "VStack"
    },
    {
        initializer: "VStack(alignment:spacing:content:)",
        autocomplete: "VStack(alignment: VerticalAlignment, spacing: CGFloat?)"
    },
    {
        initializer: "ZStack",
        autocomplete: "ZStack"
    },
]

export const viewSuggestions = [
    {
        initializer: "Spacer",
        autocomplete: "Spacer()"
    },
    {
        initializer: "Divider",
        autocomplete: "Divider()"
    }
]