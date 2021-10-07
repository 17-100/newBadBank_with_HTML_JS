// Context is globally shared
const ctx = {
    "accounts": [
        {
            "name": "oezge",
            "email": "sebisteri@outlook.com",
            "balance": 0,
            "password": "secret"
        }
    ]
}

function create() {
    const name      = document.getElementById("name");
    const email     = document.getElementById("email");
    const password  = document.getElementById("password");
    const status    = document.getElementById("status");

    // Push a new user-object into the ctx-array
    ctx.accounts.push({
        name: name.value,
        email: email.value,
        password: password.value,
        balance: 0,
    });

    // Update status & clear form
    name.value      = '';
    email.value     = '';
    password.value  = '';
    status.innerHTML    = 'Your Account has been created olum';
}

function showAllData() {
    const status = document.getElementById("allDataStatus");
    status.innerHTML = JSON.stringify(ctx)
}