const notification = document.getElementById("notification");

// Simulated server URL (JSONPlaceholder posts endpoint)
const SERVER_URL = "https://jsonplaceholder.typicode.com/posts"; // mock API

// Function to fetch server data
async function fetchServerQuotes() {
  try {
    const response = await fetch(SERVER_URL);
    const serverData = await response.json();

    // Simulate server quotes (take first 5 posts)
    const serverQuotes = serverData.slice(0, 5).map(post => ({
      text: post.title,
      category: "Server"
    }));

    resolveConflicts(serverQuotes);
  } catch (err) {
    console.error("Failed to fetch server quotes:", err);
    notification.textContent = "Failed to sync with server.";
  }
}

// Simple conflict resolution: server data takes precedence
function resolveConflicts(serverQuotes) {
  let conflictsResolved = false;

  // Check each server quote, if not in local quotes, add it
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
    setTimeout(() => (notification.textContent = ""), 5000); // clear after 5s
  }
}

// Periodic syncing (every 30 seconds)
setInterval(fetchServerQuotes, 30000);

// Optional: Manual sync button
const syncBtn = document.createElement("button");
syncBtn.textContent = "Sync Now";
syncBtn.addEventListener("click", fetchServerQuotes);
document.body.appendChild(syncBtn);

// Initial sync on page load
fetchServerQuotes();
