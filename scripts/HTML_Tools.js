class HTML_Tools {
  // WARNING: DO NOT use the appendChild for method chaining,
  // it does return null/void/undefined

  static addParagraph(elementId, text) {
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
      node.removeChild(node.firstChild);
    }

    // add paragraph as child
    node.appendChild(paragraph);
  }
}
