class HTML_Tools {
  static createElement(type, content) {
    switch (type) {
      case "text":
        return document.createTextNode(content);
      case "P":
        return document.createElement("p");
      case "sup":
        return document.createElement("sup");
      default:
        console.log("It didn't work, sorry :(");
    }
  }

  static addElements(parentNode, childNodes) {
    // Add each child node to the parent node
    childNodes.forEach((childNode) => {
      parentNode.appendChild(childNode);
    });
  }

  static addElement(parentNode, childNode) {
    // Remove existing child nodes
    while (parentNode.hasChildNodes()) {
      parentNode.removeChild(parentNode.firstChild);
    }

    // Add the new child node
    parentNode.appendChild(childNode);
  }
}
