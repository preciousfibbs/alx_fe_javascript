# Dynamic Quote Generator

A dynamic web application that allows users to **view, add, filter, and manage quotes**.  
This project demonstrates **advanced DOM manipulation, web storage, JSON handling, and server sync with conflict resolution** using vanilla JavaScript.

---

## Table of Contents

- [Features](#features)  
- [Getting Started](#getting-started)  
- [Project Structure](#project-structure)  
- [Usage](#usage)  
- [Technologies Used](#technologies-used)  
- [Tasks Completed](#tasks-completed)  
- [License](#license)  
- [Key Improvements for GitHub Preview](#key-improvements-for-github-preview)

---

## Features

- Display random quotes from multiple categories  
- Add new quotes dynamically through a form  
- Filter quotes by category with persistent selection  
- Persist quotes across sessions using **localStorage**  
- Import and export quotes as **JSON files**  
- Simulated server syncing with conflict resolution  
- User notifications and alerts for updates and conflicts  

---

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)  
- Code editor (VS Code recommended)  
- Internet connection for server sync simulation  

### Installation

1. **Clone the repository**
   
```bash
git clone https://github.com/<your-username>/alx_fe_javascript.git
Navigate to the project directory

bash
Copy
Edit
cd alx_fe_javascript/dom-manipulation
Open index.html in your browser to run the application
````
---
### Project Structure

dom-manipulation/
├── index.html        # Main HTML file
├── script.js         # JavaScript logic for Tasks 0–3
└── README.md         # Project documentation
---
### Usage
#### 1.View Quotes
  - Click "Show New Quote" to display a random quote.

#### 2.Add Quotes
     - Enter a quote and category in the form, then click "Add Quote".

#### 3.Filter Quotes
     - Select a category from the dropdown to filter displayed quotes.

#### 4.JSON Export / Import
    - Click "Export Quotes (JSON)" to download all quotes as a JSON file.
    - Use the file input to import quotes from a JSON file.

#### 5.Server Sync
   - Quotes are automatically synced with a simulated server every 30 seconds.
   - Conflicts are automatically resolved; new server quotes are added locally.
   - Notifications appear on updates and an alert confirms sync.
   - Click "Sync Now" to manually trigger a sync.

---

### Technologies Used
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - Local Storage & Session Storage
  - Fetch API for simulated server interactions

---

### Tasks Completed

#### Task 0: Dynamic Content Generation
   - Created dynamic quote display
   - Added new quotes via a form
   - DOM manipulation for interactive elements

#### Task 1: Web Storage and JSON Handling
   - Persist quotes using localStorage
   - Use sessionStorage for last viewed quote
   - Import/export quotes using JSON files

#### Task 2: Dynamic Content Filtering
   - Filter quotes by category
   - Populate category dropdown dynamically
   - Remember last selected filter using localStorage

#### Task 3: Server Sync and Conflict Resolution
   - Simulated fetching and posting data to a mock server
   - Automatic conflict resolution (server data takes precedence)
   - Notification and alert system for updates
   - Periodic and manual syncing implemented

---
License
This project is licensed under the MIT License.
