document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    // Add code here to handle sign up and redirection to login or booking page
});
