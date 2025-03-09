<script>
if (sessionStorage.getItem('authenticated') !== 'true') {
    window.location.href = 'index.html';
}
</script>

<!-- admin.js -->
<script>
async function addPassword() {
    const newPassword = document.getElementById('newPassword').value;
    const response = await fetch('passwords.json');
    let passwords = await response.json();
    passwords.push(newPassword);
    fetch('passwords.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(passwords)
    });
    document.getElementById('adminMessage').innerText = 'Password added successfully';
}
</script>
