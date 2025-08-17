const notification = document.getElementById("notification");
const SERVER_URL = "https://jsonplaceholder.typicode.com/posts"; // mock API

// Fetch quotes from the server
async function fetchQuotesFromServer() {
  try {
    const response = await fetch(SERVER_URL);
    const data = await response.json();

    // Simulate server quotes
    const serverQuotes = data.slice(0, 5).map(post => ({
      text: post.title,
      category: "Server"
    }));

    return serverQuotes;
  } catch (err) {
    console.error("Error fetching server quotes:", err);
    notification.textContent = "Failed to fetch quotes from server.";
    return [];
  }
}

// Sync local quotes with server and resolve conflicts
async function syncQuotes() {
  const serverQuotes = await fetchQuotesFromServer();
  let conflictsResolved = false;

  serverQuotes.forEach(sq => {
    if (!quotes.some(lq => lq.text === sq.text && lq.category === sq.category)) {
      quotes.push(sq);
      conflictsResolved = true;
    }
  });

  if (conflictsResolved) {
    saveQuotes();
    populateCategories();
    filterQuotes();
    notification.textContent = "Quotes updated from server!";
    setTimeout(() => (notification.textContent = ""), 5000);
  }

  // Optional: simulate posting local changes to server
  try {
    await fetch(SERVER_URL, {
      method: "POST",
      body: JSON.stringify(quotes),
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Error posting quotes to server:", err);
  }
}

// Periodically sync every 30 seconds
setInterval(syncQuotes, 30000);

// Manual sync button
const syncBtn = document.createElement("button");
syncBtn.textContent = "Sync Now";
syncBtn.addEventListener("click", syncQuotes);
document.body.appendChild(syncBtn);

// Initial sync on page load
syncQuotes();
