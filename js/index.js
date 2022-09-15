var i=0,text;
text = "“ Code is like humor. When you have to explain it, it's bad.” – Cory House"

function typing(params) {
    if (i<text.length) {
        document.getElementById("typingP").innerHTML += text.charAt(i);
        i++
        setTimeout(typing,50)
    }
}

typing()