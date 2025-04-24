const jsonString = [
    {
        tag: "div",
        attributes: {
            "id": "main"
        },
        children: [
            {
                text: "Hello"
            },
            {
                tag: "span",
                attributes: {
                    "class": "root"
                },
                children: [
                    {
                        text: "Hello 2"
                    }
                ]
            }
        ]
    },
    {
        tag: "div",
        attributes: {},
        children: []
    },
    {
        tag: "img",
        attributes: {
            "class":"abc"
        },
        children: []
    }
];

const JSONSTRING = JSON.stringify(jsonString);

function jsonToHtml(json) {
    const jsonParse = JSON.parse(json);
    let html = '';
    
    for(let i = 0; i < jsonParse.length; i++) {
        html += processElement(jsonParse[i]);
    }
    
    return html;
}

function processElement(elem) {
    // If it's a text node
    if (elem.text !== undefined) {
        return elem.text;
    }
    
    // Process tag
    const tagName = elem.tag;
    let attributes = '';
    
    // Process attributes
    if (elem.attributes && Object.keys(elem.attributes).length > 0) {
        for (const [key, value] of Object.entries(elem.attributes)) {
            attributes += ` ${key}="${value}"`;
        }
    }
    
    // Process children
    let childrenHtml = '';
    if (elem.children && elem.children.length > 0) {
        for (let i = 0; i < elem.children.length; i++) {
            childrenHtml += processElement(elem.children[i]);
        }
    }
    
    // Self-closing tags
    const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
    if (selfClosingTags.includes(tagName.toLowerCase())) {
        return `<${tagName}${attributes} />`;
    }
    
    // Regular tags with opening and closing
    return `<${tagName}${attributes}>${childrenHtml}</${tagName}>`;
}

console.log(jsonToHtml(JSONSTRING));

// toast machine coding navi