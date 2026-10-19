function firstChar(text) {
	let counter = 0;
	while(counter<text.length && text[counter]===" "){
			counter++;
		}
		return text[counter] || "";
		
	}
}

const text = prompt("Enter text:");
alert(firstChar(text));
