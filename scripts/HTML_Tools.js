class HTML_Tools {
  static addParagraph(elementId, text) {
    // search for the node
    let node = document.getElementById(elementId);

    // create paragraph element
    let paragraph = document.createElement("P");

    // crete text element
    let textNode = document.createTextNode(text);

    // append text element to paragraph element
    let paragraphWithText = paragraph.appendChild(textNode);

    console.log("node:", node);
    console.log("Paragraph with text:", paragraphWithText);

    // if does exist delete
    while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }

    // console.log("Node After:", node);

    // add paragraph as child
    node.appendChild(paragraphWithText);
  }
}
