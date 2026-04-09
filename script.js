// Dish filter
function filterDishes(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.dish-item').forEach(card => {
    card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
  });
}

// Add to cart toast
function addToCart(name) {
  const toast = document.getElementById('cartToast');
  document.getElementById('toastMsg').textContent = name + ' added to cart!';
  new bootstrap.Toast(toast).show();
}

// Login form
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      alert('Welcome back! Logged in as ' + email);
    });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Account created! Please login.');
      switchTab('login');
    });
  }
});
