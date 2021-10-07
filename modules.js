var ui = {};

ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#" onclick="defaultModule()">New BadBank</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadCreateAccount()">Create Account</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadLogin()">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadBalance()">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadAllData()">AllData</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    
  </div>
</div>
</nav>
`;

var navigation = document.getElementById('navigation');
navigation.innerHTML = ui.navigation


ui.createAccount = `
<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Create Account</div>
    <div class="card-body text-primary">
        <p id="status">Fill in the form to create your account noob!</p>
        Name<br>
        <input type="input" class="form-control" id="name" placeholder="Enter name">
        Email<br>
        <input type="input" class="form-control" id="email" placeholder="Enter email">
        Password<br>
        <input type="password" class="form-control" id="password" placeholder="Enter password"><br>
        <button type="submit" id="submit" onclick="create()">Create Account</button>
        <div id="createStatus"></div>
    </div>
</div>
`;


ui.login = `
<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">LogIn</div>
    <div class="card-body text-primary">
        Email<br>
        <input type="input" class="form-control" id="email" placeholder="Enter email">
        Password<br>
        <input type="input" class="form-control" id="password" placeholder="Enter password"><br>
        <button type="submit" id="submit" onclick="login()">Login</button>
    </div>
</div>
`;


ui.deposit = `
<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Deposit</div>
    <div class="card-body text-primary">
        Email<br>
        <input type="input" class="form-control" id="email" placeholder="Enter email">
        Amount<br>
        <input type="input" class="form-control" id="amount" placeholder="Enter deposit amount"><br>
        <button type="submit" id="submit" onclick="deposit()">Deposit</button>
    </div>
</div>
`;


ui.withdraw = `
<div class="card border-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Withdraw</div>
    <div class="card-body text-primary">
        Email<br>
        <input type="input" class="form-control" id="email" placeholder="Enter email">
        Amount<br>
        <input type="input" class="form-control" id="amount" placeholder="Enter withdrawal amount"><br>
        <button type="submit" id="submit" onclick="deposit()">Withdraw</button>
    </div>
</div>
`;


ui.balance = `
    <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Balance</div>
        <div class="card-body text-primary">
        Email<br>
        <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
        <button type="submit" id="submit" onclick="showBalance()">Show Balance</button>
        </div>
    </div>
    `;


ui.allData = `
    <h5>All Data in Store</h5>
    <button type="button" class="btn btn-secondary" onclick="showAllData()">Show All Data</button>
    <div id="allDataStatus"></div>
    `;


ui.default = `
<div class="card bg-light mb-3" style="max-width: 18rem;">
<div class="card-header">BadBank Landing Module</div>
<div class="card-body">
    <h5 class="card-title">Welcome to the bank</h5>
    <p class="card-text">You can move around using the navigation bar.</p>
    <img src="bank.png" class="img-fluid" alt="Responsive image">
</div>
</div>  
`;


var loadCreateAccount = function() {
  target.innerHTML = ui.createAccount;
}

var loadLogin = function() {
  target.innerHTML = ui.login;
}

var loadDeposit = function() {
  target.innerHTML = ui.deposit;
}

var loadWithdraw= function() {
  target.innerHTML = ui.withdraw;
}

var loadBalance = function() {
  target.innerHTML = ui.balance;
}

var loadAllData = function() {
  target.innerHTML = ui.allData;
}

var defaultModule = function() {
  target.innerHTML = ui.default;
}


defaultModule();
