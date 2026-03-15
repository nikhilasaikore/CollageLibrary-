// --- INITIAL DATA & STORAGE ---
const booksData = [
   {
        id: 1,
        title: "Python for Data Analysis",
        author: "Wes McKinney",
        category: "Data Science",
        cover: "https://learning.oreilly.com/library/cover/9781098104023/"
    },
    {
        id: 2,
        title: "Deep Learning",
        author: "Ian Goodfellow",
        category: "Data Science",
        cover: "https://covers.openlibrary.org/b/id/8109392-L.jpg"
    },
    {
        id: 3,
        title: "Statistical Learning",
        author: "Trevor Hastie",
        category: "Data Science",
        cover: "https://miro.medium.com/v2/resize:fit:875/1*XYhM4U79Z2B3rHKImMMrEA.jpeg"
    },
    {
        id: 4,
        title: "Pattern Recognition",
        author: "Christopher Bishop",
        category: "Data Science",
        cover: "https://i0.wp.com/ubiai.tools/wp-content/uploads/2023/11/pattern-recognition-image.jpg?fit=2234%2C1180&ssl=1"
    },
    {
        id: 5,
        title: "Data Science from Scratch",
        author: "Joel Grus",
        category: "Data Science",
        cover: "https://learning.oreilly.com/library/cover/9781492041122/"
    },
    {
        id: 6,
        title: "Hands-On Machine Learning",
        author: "Aurélien Géron",
        category: "Data Science",
        cover: "https://learning.oreilly.com/library/cover/9781098125738/"
    },
    {
        id: 7,
        title: "Storytelling with Data",
        author: "Cole Knaflic",
        category: "Data Science",
        cover: ""
    },
    {
        id: 8,
        title: "Data-Intensive Apps",
        author: "Martin Kleppmann",
        category: "Data Science",
        cover: "https://learning.oreilly.com/library/cover/9781449373320/"
    },
    {
        id: 9,
        title: "Practical Statistics",
        author: "Peter Bruce",
        category: "Data Science",
        cover: "https://learning.oreilly.com/library/cover/9781492072935/"
    },
    {
        id: 10,
        title: "Naked Statistics",
        author: "Charles Wheelan",
        category: "Data Science",
        cover: "https://m.media-amazon.com/images/I/51f8B4kH7dL._SL1500_.jpg"
    },

    // --- Computer Science (CSE) ---
    {
        id: 11,
        title: "Intro to Algorithms",
        author: "Thomas H. Cormen",
        category: "Computer Science",
        cover: "https://m.media-amazon.com/images/I/41SN7P3W9LL._SL1500_.jpg"
    },
    {
        id: 12,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Computer Science",
        cover: "https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg"
    },
    {
        id: 13,
        title: "Design Patterns",
        author: "Erich Gamma",
        category: "Computer Science",
        cover: "https://m.media-amazon.com/images/I/81gtfoqgj6L._SL1500_.jpg"
    },
    {
        id: 14,
        title: "Operating Systems",
        author: "Abraham Silberschatz",
        category: "Computer Science",
        cover: "https://m.media-amazon.com/images/I/41-v8m69uDL._SL1500_.jpg"
    },
    {
        id: 15,
        title: "Computer Networking",
        author: "James Kurose",
        category: "Computer Science",
        cover: "https://m.media-amazon.com/images/I/81vR8Slsf8L._SL1500_.jpg"
    },
    {
        id: 16,
        title: "Structure of Programs",
        author: "Harold Abelson",
        category: "Computer Science",
        cover: "https://m.media-amazon.com/images/I/819S6+nAnKL._SL1500_.jpg"
    },
    {
        id: 17,
        title: "Code Complete",
        author: "Steve McConnell",
        category: "Computer Science",
        cover: "https://m.media-amazon.com/images/I/41J9M9C7mNL._SL1000_.jpg"
    },
    {
        id: 18,
        title: "Pragmatic Programmer",
        author: "Andrew Hunt",
        category: "Computer Science",
        cover: "https://m.media-amazon.com/images/I/41as+49FOKL._SL1000_.jpg"
    },
    {
        id: 19,
        title: "Compilers",
        author: "Alfred V. Aho",
        category: "Computer Science",
        cover: "https://m.media-amazon.com/images/I/41Y0oDoxrFL._SL1500_.jpg"
    },
    {
        id: 20,
        title: "Artificial Intelligence",
        author: "Stuart Russell",
        category: "Computer Science",
        cover: "https://m.media-amazon.com/images/I/81pP6Y-ZndL._SL1500_.jpg"
    },

    // --- Web Development ---
    {
        id: 21,
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        category: "Web Development",
        cover: "https://m.media-amazon.com/images/I/51InjRPaF7L._SL1200_.jpg"
    },
    {
        id: 22,
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        category: "Web Development",
        cover: "https://m.media-amazon.com/images/I/81kS8mIEYDL._SL1500_.jpg"
    },
    {
        id: 23,
        title: "HTML and CSS",
        author: "Jon Duckett",
        category: "Web Development",
        cover: "https://m.media-amazon.com/images/I/41p96S66m6L._SL1000_.jpg"
    },
    {
        id: 24,
        title: "JS: The Good Parts",
        author: "Douglas Crockford",
        category: "Web Development",
        cover: "https://learning.oreilly.com/library/cover/9780596517748/"
    },
    {
        id: 25,
        title: "React Up and Running",
        author: "Stoyan Stefanov",
        category: "Web Development",
        cover: "https://learning.oreilly.com/library/cover/9781492051459/"
    },
    {
        id: 26,
        title: "Learning Node.js",
        author: "Marc Wandschneider",
        category: "Web Development",
        cover: "https://m.media-amazon.com/images/I/71u9i7O076L._SL1500_.jpg"
    },
    {
        id: 27,
        title: "CSS Secrets",
        author: "Lea Verou",
        category: "Web Development",
        cover: "https://m.media-amazon.com/images/I/51S6m8F87AL._SL1200_.jpg"
    },
    {
        id: 28,
        title: "Refactoring UI",
        author: "Adam Wathan",
        category: "Web Development",
        cover: "https://pbs.twimg.com/media/DnumV_XWsAA_7pC.jpg"
    },
    {
        id: 29,
        title: "Grokking Algorithms",
        author: "Aditya Bhargava",
        category: "Computer Science",
        cover: "https://m.media-amazon.com/images/I/61u9zNAdS0L._SL1500_.jpg"
    },
    {
        id: 30,
        title: "Head First Patterns",
        author: "Eric Freeman",
        category: "Computer Science",
        cover: "https://learning.oreilly.com/library/cover/9781492057123/"
    }
];

let myCheckouts = JSON.parse(localStorage.getItem('libraryData')) || [];
let selectedBook = null;

// --- CHECK LOGIN STATUS ON RELOAD ---
window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        showDashboard();
    }
};

function showDashboard() {
    document.getElementById('login-view').classList.remove('active-view');
    document.getElementById('app-view').classList.add('active-view');
    renderBooks();
}

// --- LOGIN & LOGOUT ---
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;

    if(u === 'admin' && p === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true'); // Save login state
        showDashboard();
    } else {
        alert("Invalid Login!");
    }
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn'); // Clear login state
    location.reload(); // Refresh to show login screen
});

// --- NAVIGATION ---
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
        this.classList.add('active');
        const target = this.getAttribute('data-target');
        document.querySelectorAll('.app-page').forEach(p => p.classList.remove('active-page'));
        document.getElementById(target).classList.add('active-page');
        if(target === 'page-bookings') renderTracker();
    });
});

// --- RENDER BOOKS ---
function renderBooks() {
    ['homeBookGrid', 'catalogBookGrid'].forEach(id => {
        const grid = document.getElementById(id);
        if(!grid) return;
        grid.innerHTML = '';
        booksData.forEach(book => {
            const div = document.createElement('div');
            div.className = 'book-card';
            div.innerHTML = `
                <img src="${book.cover}" class="book-cover">
                <div class="book-details">
                    <h3>${book.title}</h3>
                    <button class="btn-primary" onclick="openModal(${book.id})">Take Book</button>
                </div>
            `;
            grid.appendChild(div);
        });
    });
}

// --- MODAL & CHECKOUT ---
function openModal(id) {
    selectedBook = booksData.find(b => b.id === id);
    document.getElementById('modal-book-title').innerText = "Book: " + selectedBook.title;
    document.getElementById('student-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('student-modal').style.display = 'none';
}

document.getElementById('confirmCheckout').addEventListener('click', () => {
    const sName = document.getElementById('studentName').value;
    const sID = document.getElementById('studentID').value;
    if(!sName || !sID) return alert("Fill all details!");

    const now = new Date();
    const newEntry = {
        id: Date.now(), // Unique ID for deleting later
        student: sName,
        studentId: sID,
        bookTitle: selectedBook.title,
        timestamp: `${now.toLocaleDateString()} ${now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}`
    };

    myCheckouts.push(newEntry);
    localStorage.setItem('libraryData', JSON.stringify(myCheckouts));
    closeModal();
    alert("Book Saved!");
    document.getElementById('studentName').value = '';
    document.getElementById('studentID').value = '';
});

// --- TRACKER & REMOVE (RETURN) LOGIC ---
function renderTracker() {
    const tbody = document.getElementById('myBookingsGrid');
    tbody.innerHTML = '';
    if (myCheckouts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No history.</td></tr>';
        return;
    }

    myCheckouts.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.student}</td>
            <td>${item.studentId}</td>
            <td>${item.bookTitle}</td>
            <td>${item.timestamp}</td>
            <td><span class="status-tag">Borrowed</span></td>
            <td><button class="btn-return" onclick="returnBook(${item.id})">Return</button></td>
        `;
        tbody.appendChild(row);
    });
}

function returnBook(uid) {
    if(confirm("Confirm book return? This will remove the record.")) {
        myCheckouts = myCheckouts.filter(entry => entry.id !== uid);
        localStorage.setItem('libraryData', JSON.stringify(myCheckouts));
        renderTracker(); // Refresh table
    }
}