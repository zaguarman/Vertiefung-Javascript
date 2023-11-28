class HTML_Tools {
    static addElement(elementId, text) {
    // WARNING: DO NOT use the appendChild for method chaining,
    // it does return null/void/undefined
    
    // search for the node
    let node = document.getElementById(elementId);

    // create paragraph element
    let paragraph = document.createElement("P");

    // crete text element
    let textNode = document.createTextNode(text);

    // append text element to paragraph element
    paragraph.appendChild(textNode);

    // if does exist delete
    while (node.hasChildNodes()) {
        // firstElementChild vs firstChild:
        // firstChild takes anything
        // firstElementChild takes only element nodes
        node.removeChild(node.firstElementChild);
    }

    // add paragraph as child
    node.appendChild(paragraph);
  }

  static addSup(elementId, element)
  static addParagraph(elementId, text) {
    addElement(elementId, text);
  }
}
