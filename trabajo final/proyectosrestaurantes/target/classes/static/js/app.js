const API_URL = '/api';

// Auth
async function login(email, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    if (response.ok) {
        const user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
    window.location.href = user.role === 'ADMIN' ? 'admin.html' : 'dashboard.html';
    } else {
        alert('Login failed');
    }
}

async function register(name, email, password) {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role: 'USER' })
    });
    if (response.ok) {
        alert('Registration successful! Please login.');
        toggleAuthMode();
    } else {
        alert('Registration failed');
    }
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

function checkAuth() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = 'index.html';
    }
    return user;
}

// Productos
async function getProducts() {
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
}

async function createProduct(adminUserId, product) {
    const response = await fetch(`${API_URL}/products?adminUserId=${encodeURIComponent(adminUserId)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });
    return response.ok;
}

async function deleteProduct(adminUserId, id) {
    const response = await fetch(`${API_URL}/products/${id}?adminUserId=${encodeURIComponent(adminUserId)}`, {
        method: 'DELETE'
    });
    return response.ok;
}

// Carrito
async function getUserCart(userId) {
    const response = await fetch(`${API_URL}/cart?userId=${encodeURIComponent(userId)}`);
    return await response.json();
}

async function addToCart(payload) {
    const response = await fetch(`${API_URL}/cart/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    return response.ok;
}

async function removeCartItem(id) {
    const response = await fetch(`${API_URL}/cart/${id}`, { method: 'DELETE' });
    return response.ok;
}

async function clearCart(userId) {
    const response = await fetch(`${API_URL}/cart/clear?userId=${encodeURIComponent(userId)}`, { method: 'DELETE' });
    return response.ok;
}

// Pedidos
async function createOrder(userId) {
    const response = await fetch(`${API_URL}/orders?userId=${encodeURIComponent(userId)}`, { method: 'POST' });
    return response.ok;
}

async function getMyOrders(userId) {
    const response = await fetch(`${API_URL}/orders/mine?userId=${encodeURIComponent(userId)}`);
    return await response.json();
}

async function getAllOrders(adminUserId) {
    const response = await fetch(`${API_URL}/orders?adminUserId=${encodeURIComponent(adminUserId)}`);
    if (!response.ok) return [];
    return await response.json();
}

async function acceptOrder(adminUserId, id) {
    const response = await fetch(`${API_URL}/orders/${id}/accept?adminUserId=${encodeURIComponent(adminUserId)}`, { method: 'POST' });
    return response.ok;
}

async function rejectOrder(adminUserId, id) {
    const response = await fetch(`${API_URL}/orders/${id}/reject?adminUserId=${encodeURIComponent(adminUserId)}`, { method: 'POST' });
    return response.ok;
}
