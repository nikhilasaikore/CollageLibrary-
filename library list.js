// ================= DATA & STORAGE =================
const booksData = [
    // --- Data Science ---
    { id: 1, title: "Python for Data Analysis", author: "Wes McKinney", category: "Data Science", cover: "https://learning.oreilly.com/library/cover/9781098104023/" },
    { id: 2, title: "Deep Learning", author: "Ian Goodfellow", category: "Data Science", cover: "https://covers.openlibrary.org/b/id/8109392-L.jpg" },
    { id: 3, title: "Statistical Learning", author: "Trevor Hastie", category: "Data Science", cover: "https://covers.openlibrary.org/b/id/12534138-L.jpg" },
    { id: 4, title: "Pattern Recognition", author: "Christopher Bishop", category: "Data Science", cover: "https://covers.openlibrary.org/b/id/8226012-L.jpg" },
    { id: 5, title: "Data Science from Scratch", author: "Joel Grus", category: "Data Science", cover: "https://learning.oreilly.com/library/cover/9781492041122/" },
    
    // --- CSE ---
    { id: 11, title: "Intro to Algorithms", author: "Thomas H. Cormen", category: "Computer Science", cover: "https://covers.openlibrary.org/b/id/13145455-L.jpg" },
    { id: 12, title: "Clean Code", author: "Robert C. Martin", category: "Computer Science", cover: "https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg" },
    
    // --- Web Dev ---
    { id: 21, title: "Eloquent JavaScript", author: "Marijn Haverbeke", category: "Web Development", cover: "https://m.media-amazon.com/images/I/51InjRPaF7L._SL1200_.jpg" },
    { id: 23, title: "HTML and CSS", author: "Jon Duckett", category: "Web Development", cover: "https://m.media-amazon.com/images/I/41p96S66m6L._SL1000_.jpg" }
];

// Load saved data from browser memory
let myCheckouts = JSON.parse(localStorage.getItem('libraryData')) || [];
let selectedBook = null;

// ================= APP INITIALIZATION =================
window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        showDashboard();
    }
};

function showDashboard() {
    document.getElementById('login-view').classList.remove('active-view');
    document.getElementById('app-view').classList.add('active-view');
    renderAllBooks();
}

// ================= LOGIN & LOGOUT =================
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;

    if(u === 'admin' && p === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        showDashboard();
    } else {
        alert("Invalid Credentials! Try admin / admin123");
    }
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
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
    });
});

// ================= RENDER SYSTEM =================
function renderAllBooks() {
    // 1. Featured Home (First 4 books)
    const homeGrid = document.getElementById('homeBookGrid');
    homeGrid.innerHTML = '';
    booksData.slice(0, 4).forEach(book => homeGrid.appendChild(createBookCard(book)));

    // 2. Full Catalog (All books)
    const catalogGrid = document.getElementById('catalogBookGrid');
    catalogGrid.innerHTML = '';
    booksData.forEach(book => catalogGrid.appendChild(createBookCard(book)));
}

function createBookCard(book) {
    const el = document.createElement('div');
    el.className = 'book-card';
    el.innerHTML = `
        <div class="card-image-wrapper">
            <img src="${book.cover}" class="book-cover">
        </div>
        <div class="book-details">
            <span class="category-badge">${book.category}</span>
            <h3>${book.title}</h3>
            <p class="author-text">by ${book.author}</p>
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
        timestamp: `${now.toLocaleDateString()} ${now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}`
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
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:30px;">No books currently borrowed.</td></tr>';
        return;
    }

    myCheckouts.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.student}</td>
            <td>${item.studentId}</td>
            <td><strong>${item.bookTitle}</strong></td>
            <td>${item.timestamp}</td>
            <td><span class="status-tag">Borrowed</span></td>
            <td><button class="btn-return" onclick="returnBook(${item.id})">Return</button></td>
        `;
        tbody.appendChild(row);
    });
}

function returnBook(uid) {
    if(confirm("Confirm return? This will remove the student record.")) {
        myCheckouts = myCheckouts.filter(entry => entry.id !== uid);
        localStorage.setItem('libraryData', JSON.stringify(myCheckouts));
        renderTracker();
    }
}