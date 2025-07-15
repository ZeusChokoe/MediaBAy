// Side panel and Auth logic moved from index.html
(function() {
  // Side panel logic
  var logoPanelTrigger = document.getElementById('logoPanelTrigger');
  var sidePanel = document.getElementById('sidePanel');
  var closePanelBtn = document.getElementById('closePanelBtn');
  if (logoPanelTrigger && sidePanel && closePanelBtn) {
    logoPanelTrigger.addEventListener('click', function() {
      sidePanel.style.right = '0';
    });
    closePanelBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      sidePanel.style.right = '-350px';
    });
    // Optional: close panel when clicking outside
    document.addEventListener('click', function(e) {
      if (sidePanel.style.right === '0px' && !sidePanel.contains(e.target) && e.target !== logoPanelTrigger && !logoPanelTrigger.contains(e.target)) {
        sidePanel.style.right = '-350px';
      }
    });
  }

  // Auth panel logic
  var showSignIn = document.getElementById('showSignIn');
  var showLogIn = document.getElementById('showLogIn');
  var signInForm = document.getElementById('signInForm');
  var logInForm = document.getElementById('logInForm');
  if (showSignIn && showLogIn && signInForm && logInForm) {
    showSignIn.addEventListener('click', function() {
      signInForm.style.display = signInForm.style.display === 'flex' ? 'none' : 'flex';
      logInForm.style.display = 'none';
    });
    showLogIn.addEventListener('click', function() {
      logInForm.style.display = logInForm.style.display === 'flex' ? 'none' : 'flex';
      signInForm.style.display = 'none';
    });
    // Handle Sign In form submission (connect to backend)
    signInForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const name = signInForm.querySelector('input[type="text"]').value;
      const email = signInForm.querySelector('input[type="email"]').value;
      const password = signInForm.querySelector('input[type="password"]').value;
      try {
        const res = await fetch('/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        });
        if (res.ok) {
          alert('Sign up successful!');
          signInForm.reset();
          signInForm.style.display = 'none';
        } else {
          const data = await res.json();
          alert('Sign up failed: ' + (data.message || 'Unknown error'));
        }
      } catch (err) {
        alert('Sign up failed: ' + err.message);
      }
    });
    // Handle Log In form submission (connect to backend)
    logInForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const email = logInForm.querySelector('input[type="email"]').value;
      const password = logInForm.querySelector('input[type="password"]').value;
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        if (res.ok) {
          alert('Login successful!');
          logInForm.reset();
          logInForm.style.display = 'none';
        } else {
          const data = await res.json();
          alert('Login failed: ' + (data.message || 'Unknown error'));
        }
      } catch (err) {
        alert('Login failed: ' + err.message);
      }
    });
  }
})();
