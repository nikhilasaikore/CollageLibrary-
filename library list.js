// ================= DATA & STORAGE =================
const booksData = [
    // --- Data Science (1-10) ---
    { id: 1, title: "Python for Data Analysis", author: "Wes McKinney", category: "Data Science", cover: "https://learning.oreilly.com/library/cover/9781098104023/" },
    { id: 2, title: "Deep Learning", author: "Ian Goodfellow", category: "Data Science", cover: "https://covers.openlibrary.org/b/id/8109392-L.jpg" },
    { id: 3, title: "Statistical Learning", author: "Trevor Hastie", category: "Data Science", cover: "https://images.squarespace-cdn.com/content/v1/5ff2ad4b4d3ef15494295325/1611005881454-0J0970SCSH99SGP99H4H/ISL_Cover_2.png" },
    { id: 4, title: "Pattern Recognition", author: "Christopher Bishop", category: "Data Science", cover: "https://m.media-amazon.com/images/I/61M6K2-R0fL._SL1500_.jpg" },
    { id: 5, title: "Data Science from Scratch", author: "Joel Grus", category: "Data Science", cover: "https://learning.oreilly.com/library/cover/9781492041122/" },
    { id: 6, title: "Hands-On Machine Learning", author: "Aurélien Géron", category: "Data Science", cover: "https://learning.oreilly.com/library/cover/9781098125738/" },
    { id: 7, title: "Storytelling with Data", author: "Cole Knaflic", category: "Data Science", cover: "https://m.media-amazon.com/images/I/41T-mIDm6rL._SL1500_.jpg" },
    { id: 8, title: "Data-Intensive Apps", author: "Martin Kleppmann", category: "Data Science", cover: "https://learning.oreilly.com/library/cover/9781449373320/" },
    { id: 9, title: "Practical Statistics", author: "Peter Bruce", category: "Data Science", cover: "https://learning.oreilly.com/library/cover/9781492072935/" },
    { id: 10, title: "Naked Statistics", author: "Charles Wheelan", category: "Data Science", cover: "https://m.media-amazon.com/images/I/51f8B4kH7dL._SL1500_.jpg" },

    // --- Computer Science (11-20) ---
    { id: 11, title: "Intro to Algorithms", author: "Thomas H. Cormen", category: "Computer Science", cover: "https://m.media-amazon.com/images/I/41SN7P3W9LL._SL1500_.jpg" },
    { id: 12, title: "Clean Code", author: "Robert C. Martin", category: "Computer Science", cover: "https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg" },
    { id: 13, title: "Design Patterns", author: "Erich Gamma", category: "Computer Science", cover: "https://m.media-amazon.com/images/I/81gtfoqgj6L._SL1500_.jpg" },
    { id: 14, title: "Operating Systems", author: "Abraham Silberschatz", category: "Computer Science", cover: "https://m.media-amazon.com/images/I/41-v8m69uDL._SL1500_.jpg" },
    { id: 15, title: "Computer Networking", author: "James Kurose", category: "Computer Science", cover: "https://m.media-amazon.com/images/I/81vR8Slsf8L._SL1500_.jpg" },
    { id: 16, title: "Structure of Programs", author: "Harold Abelson", category: "Computer Science", cover: "https://m.media-amazon.com/images/I/819S6+nAnKL._SL1500_.jpg" },
    { id: 17, title: "Code Complete", author: "Steve McConnell", category: "Computer Science", cover: "https://m.media-amazon.com/images/I/41J9M9C7mNL._SL1000_.jpg" },
    { id: 18, title: "Pragmatic Programmer", author: "Andrew Hunt", category: "Computer Science", cover: "https://m.media-amazon.com/images/I/41as+49FOKL._SL1000_.jpg" },
    { id: 19, title: "Compilers", author: "Alfred V. Aho", category: "Computer Science", cover: "https://m.media-amazon.com/images/I/41Y0oDoxrFL._SL1500_.jpg" },
    { id: 20, title: "Artificial Intelligence", author: "Stuart Russell", category: "Computer Science", cover: "https://m.media-amazon.com/images/I/81pP6Y-ZndL._SL1500_.jpg" },

    // --- Web Development (21-30) ---
    { id: 21, title: "Eloquent JavaScript", author: "Marijn Haverbeke", category: "Web Development", cover: "https://m.media-amazon.com/images/I/51InjRPaF7L._SL1200_.jpg" },
    { id: 22, title: "You Don't Know JS", author: "Kyle Simpson", category: "Web Development", cover: "https://m.media-amazon.com/images/I/81kS8mIEYDL._SL1500_.jpg" },
    { id: 23, title: "HTML and CSS", author: "Jon Duckett", category: "Web Development", cover: "https://m.media-amazon.com/images/I/41p96S66m6L._SL1000_.jpg" },
    { id: 24, title: "JS: The Good Parts", author: "Douglas Crockford", category: "Web Development", cover: "https://learning.oreilly.com/library/cover/9780596517748/" },
    { id: 25, title: "React Up and Running", author: "Stoyan Stefanov", category: "Web Development", cover: "https://learning.oreilly.com/library/cover/9781492051459/" },
    { id: 26, title: "Learning Node.js", author: "Marc Wandschneider", category: "Web Development", cover: "https://m.media-amazon.com/images/I/71u9i7O076L._SL1500_.jpg" },
    { id: 27, title: "CSS Secrets", author: "Lea Verou", category: "Web Development", cover: "https://m.media-amazon.com/images/I/51S6m8F87AL._SL1200_.jpg" },
    { id: 28, title: "Refactoring UI", author: "Adam Wathan", category: "Web Development", cover: "https://pbs.twimg.com/media/DnumV_XWsAA_7pC.jpg" },
    { id: 29, title: "Grokking Algorithms", author: "Aditya Bhargava", category: "Computer Science", cover: "https://m.media-amazon.com/images/I/61u9zNAdS0L._SL1500_.jpg" },
    { id: 30, title: "Head First Patterns", author: "Eric Freeman", category: "Computer Science", cover: "https://learning.oreilly.com/library/cover/9781492057123/" }
];

// Load saved data (Records stay in localStorage)
let myCheckouts = JSON.parse(localStorage.getItem('libraryData')) || [];
let historyData = JSON.parse(localStorage.getItem('historyData')) || [];
let selectedBook = null;

// ================= APP INITIALIZATION =================
window.onload = function() {
    // FIX: Using sessionStorage so login expires when tab closes
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        showDashboard();
    } else {
        // Force show login view if not logged in
        document.getElementById('login-view').classList.add('active-view');
        document.getElementById('app-view').classList.remove('active-view');
    }
};

function showDashboard() {
    document.getElementById('login-view').classList.remove('active-view');
    document.getElementById('app-view').classList.add('active-view');
    renderAllBooks();
    loadProfile(); 
}

// ================= LOGIN & LOGOUT =================
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;

    if(u === 'admin' && p === 'admin123') {
        // FIX: Store login state in sessionStorage
        sessionStorage.setItem('isLoggedIn', 'true');
        showDashboard();
    } else {
        alert("Invalid Credentials! Try admin / admin123");
    }
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    sessionStorage.removeItem('isLoggedIn'); // Clear session
    location.reload(); 
});

// ================= NAVIGATION =================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
        this.classList.add('active');
        
        const target = this.getAttribute('data-target');
        document.querySelectorAll('.app-page').forEach(p => p.classList.remove('active-page'));
        document.getElementById(target).classList.add('active-page');

        if(target === 'page-bookings') renderTracker();
        if(target === 'page-history') renderHistory();
        if(target === 'page-profile') loadProfile();
    });
});

// ================= RENDER SYSTEM =================
function renderAllBooks() {
    const homeGrid = document.getElementById('homeBookGrid');
    homeGrid.innerHTML = '';
    booksData.slice(0, 8).forEach(book => homeGrid.appendChild(createBookCard(book)));

    const catalogGrid = document.getElementById('catalogBookGrid');
    catalogGrid.innerHTML = '';
    booksData.forEach(book => catalogGrid.appendChild(createBookCard(book)));
}

function createBookCard(book) {
    const el = document.createElement('div');
    el.className = 'book-card';
    el.innerHTML = `
        <div class="card-image-wrapper">
            <img src="${book.cover}" class="book-cover" onerror="this.src='https://via.placeholder.com/400x600?text=Cover+Not+Found'">
        </div>
        <div class="book-details">
            <div>
                <span class="category-badge">${book.category}</span>
                <h3 style="font-size: 16px; margin-bottom: 5px;">${book.title}</h3>
                <p style="color: #6b7280; font-size: 14px;">${book.author}</p>
            </div>
            <button class="btn-primary-small" onclick="openModal(${book.id})">Take Book</button>
        </div>
    `;
    return el;
}

// ================= CHECKOUT MODAL =================
function openModal(id) {
    selectedBook = booksData.find(b => b.id === id);
    document.getElementById('modal-book-title').innerText = "Assigning: " + selectedBook.title;
    document.getElementById('student-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('student-modal').style.display = 'none';
}

document.getElementById('confirmCheckout').addEventListener('click', () => {
    const sName = document.getElementById('studentName').value;
    const sID = document.getElementById('studentID').value;

    if(!sName || !sID) return alert("Please fill Student details!");

    const now = new Date();
    const entry = {
        id: Date.now(),
        student: sName,
        studentId: sID,
        bookTitle: selectedBook.title,
        timestamp: `${now.toLocaleDateString()} ${now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}`,
        status: "Borrowed"
    };

    myCheckouts.push(entry);
    localStorage.setItem('libraryData', JSON.stringify(myCheckouts));
    
    closeModal();
    alert("Record Saved!");
    document.getElementById('studentName').value = '';
    document.getElementById('studentID').value = '';
});

// ================= TRACKER & RETURN =================
function renderTracker() {
    const tbody = document.getElementById('myBookingsGrid');
    tbody.innerHTML = '';

    if (myCheckouts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:30px;">No active checkouts.</td></tr>';
        return;
    }

    myCheckouts.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.student}</td>
            <td>${item.studentId}</td>
            <td><strong>${item.bookTitle}</strong></td>
            <td>${item.timestamp}</td>
            <td><button class="btn-return" onclick="returnBook(${item.id})">Return</button></td>
        `;
        tbody.appendChild(row);
    });
}

function returnBook(uid) {
    if(confirm("Confirm return? This will move record to Permanent History.")) {
        const itemIndex = myCheckouts.findIndex(entry => entry.id === uid);
        const item = myCheckouts[itemIndex];

        const now = new Date();
        item.returnedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}`;
        item.status = "Returned";
        
        historyData.push(item);
        myCheckouts.splice(itemIndex, 1);

        localStorage.setItem('libraryData', JSON.stringify(myCheckouts));
        localStorage.setItem('historyData', JSON.stringify(historyData));
        renderTracker();
    }
}

// ================= HISTORY RENDER =================
function renderHistory() {
    const tbody = document.getElementById('historyGrid');
    tbody.innerHTML = '';

    if (historyData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:30px;">No history records found.</td></tr>';
        return;
    }

    historyData.slice().reverse().forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.student}</td>
            <td>${item.bookTitle}</td>
            <td>${item.timestamp}</td>
            <td>${item.returnedDate}</td>
            <td><span class="status-returned">Returned</span></td>
        `;
        tbody.appendChild(row);
    });
}

// ================= PROFILE SYSTEM =================
function saveProfile() {
    const name = document.getElementById('adminNameInput').value;
    if(!name) return alert("Please enter a name");
    localStorage.setItem('adminName', name);
    document.getElementById('display-admin-name').innerText = name;
    alert("Profile Updated!");
}

function loadProfile() {
    const savedName = localStorage.getItem('adminName') || "System Administrator";
    document.getElementById('display-admin-name').innerText = savedName;
    document.getElementById('adminNameInput').value = savedName;
    
    const savedImg = localStorage.getItem('adminImg');
    if(savedImg) document.getElementById('profileImage').src = savedImg;
}

document.getElementById('imageInput').addEventListener('change', function() {
    const reader = new FileReader();
    reader.onload = function(e) {
        const base64Image = e.target.result;
        localStorage.setItem('adminImg', base64Image);
        document.getElementById('profileImage').src = base64Image;
    };
    reader.readAsDataURL(this.files[0]);
});
