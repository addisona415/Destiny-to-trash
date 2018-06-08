walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

    v = v.replace(/\bDestiny 2\b/g, "Trash Game");
	v = v.replace(/\bDESTINY 2\b/g, "Trash Game");
    v = v.replace(/\bdestiny 2\b/g, "Trash Game");
	v = v.replace(/\bdestiny 2\b/g, "Trash Game");
	
	textNode.nodeValue = v;
}


