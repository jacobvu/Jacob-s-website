var input = document.createElement('input'); // input element to test
var supports = {};

supports.autofocus = 'autofocus' in input;
supports.required = 'required' in input;
supports.placeholder = 'placeholder' in input;

if (!supports.autofocus) {
	// support
}

if (!supports.required) {
	// support
}

if (!supports.placeholder) {
	// support
}

var send = document.getElementById('contact-submit');

if(send) {
	send.onclick = function (){
		this.innerHTML = "Sending..";
	}
}

}