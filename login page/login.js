// Data username dan password yang valid
const validUsers = [
    { username: "user1", password: "pass123" },
    { username: "admin", password: "admin123" }
];

// validasi form login
function validateLogin(event) {
    event.preventDefault();

    const username =  document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // jika username dan password kosong
    if (username == "" || password == "") {
        showErrorMessage("Both username and password are required");
        return;
    }
    // Cek apakah username dan password sesuai dengan data yang valid
    const user = validUsers.find(user => user.username === username && user.password === password);

    // jika tidak sesuai dengan username atau password salah
    if (!user) {
        showErrorMessage("Invalid username or password.");
        return;
    }
    alert("Login Successful");
}

// menampilkan error message
function showErrorMessage(message) {
    const errorDiv =  document.getElementById("error-message");
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
}

// menyembunyikan error message saat user mengetik
function hideErrorMessage() {
    const errorDiv =  document.getElementById("error-message");
    errorDiv.style.display = "none";
}

// pasang event listener untuk tombol login dan input
document.getElementById("login-form").addEventListener("submit", validateLogin);
document.getElementById("username").addEventListener("input", hideErrorMessage);
document.getElementById("password").addEventListener("input", hideErrorMessage);