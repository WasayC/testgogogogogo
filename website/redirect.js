document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", checkPassword);
});

async function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    
    try {
        const response = await fetch('passwords.json');
        if (!response.ok) {
            throw new Error('Failed to load passwords.json');
        }
        const passwords = await response.json();

        if (passwords.includes(passwordInput)) {
            const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            const today = days[new Date().getDay()];
            sessionStorage.setItem('authenticated', 'true');
            window.location.href = today + '.html';
        } else {
            document.getElementById('message').innerText = 'Incorrect password';
        }
    } catch (error) {
        console.error('Error fetching passwords:', error);
        document.getElementById('message').innerText = 'Error loading passwords';
    }
}
