// ===================================
// Configuration
// ===================================
const API_BASE_URL = 'http://localhost:5000/api';

// ===================================
// Medicine Database
// ===================================
const medicineDatabase = [
    // Supplements & Vitamins
    { id: 1, name: "PetVit Plus", type: "Vitamin Supplement", description: "Complete multivitamin for dogs and cats with essential nutrients", price: 199, stock: 50, image: "💊", category: "supplement" },
    { id: 6, name: "ImmunoBoost", type: "Immunity Booster", description: "Strengthens immune system and overall health", price: 249, stock: 45, image: "💪", category: "supplement" },
    { id: 9, name: "PetOmega-3", type: "Supplement", description: "Essential fatty acids for coat and heart health", price: 279, stock: 40, image: "🐟", category: "supplement" },
    { id: 4, name: "JointFlex Pro", type: "Joint Support", description: "Helps maintain joint health and mobility for active pets", price: 349, stock: 28, image: "🦴", category: "supplement" },

    // Treatments & Medicines
    { id: 2, name: "FleaGuard", type: "Anti-Parasitic", description: "Effective flea and tick prevention treatment", price: 299, stock: 35, image: "🛡️", category: "treatment" },
    { id: 3, name: "DigestiCare", type: "Digestive Aid", description: "Supports healthy digestion and gut health in pets", price: 229, stock: 42, image: "💊", category: "treatment" },
    { id: 5, name: "DermaHeal Cream", type: "Skin Care", description: "Treats common skin conditions and promotes healing", price: 269, stock: 31, image: "🧴", category: "treatment" },
    { id: 7, name: "CalmiPet", type: "Anti-Anxiety", description: "Natural calming supplement for stressed pets", price: 219, stock: 38, image: "😌", category: "treatment" },
    { id: 10, name: "WormiClear", type: "Dewormer", description: "Effective intestinal worm treatment", price: 179, stock: 48, image: "💊", category: "treatment" },

    // Grooming & Care Products
    { id: 11, name: "PetShine Shampoo", type: "Body Wash", description: "Gentle, pH-balanced shampoo for soft and shiny coat", price: 199, stock: 60, image: "🧴", category: "grooming" },
    { id: 12, name: "FreshPaws Body Wash", type: "Body Wash", description: "Natural body wash with aloe vera and coconut oil", price: 249, stock: 45, image: "🛁", category: "grooming" },
    { id: 13, name: "PawSpa Conditioner", type: "Grooming", description: "Moisturizing conditioner for long-haired pets", price: 229, stock: 35, image: "✨", category: "grooming" },
    { id: 14, name: "Anti-Itch Wash", type: "Medicated Wash", description: "Soothes itchy skin with oatmeal and tea tree oil", price: 299, stock: 28, image: "🧼", category: "grooming" },

    // Care Kits & Bundles
    { id: 15, name: "Complete Grooming Kit", type: "Care Kit", description: "Includes shampoo, conditioner, brush, nail clipper & towel", price: 899, stock: 20, image: "🎁", category: "kit" },
    { id: 16, name: "Puppy Starter Kit", type: "Care Kit", description: "Everything for new puppies: food bowl, toys, collar, leash", price: 649, stock: 25, image: "🐕", category: "kit" },
    { id: 17, name: "Dental Care Kit", type: "Care Kit", description: "Toothbrush, toothpaste, dental treats & chew toys", price: 449, stock: 40, image: "🦷", category: "kit" },
    { id: 18, name: "First Aid Kit", type: "Care Kit", description: "Essential medical supplies for pet emergencies", price: 599, stock: 30, image: "🏥", category: "kit" },
    { id: 19, name: "Travel Care Kit", type: "Care Kit", description: "Portable water bowl, food container, waste bags & more", price: 499, stock: 35, image: "🎒", category: "kit" },

    // Additional Grooming Items
    { id: 20, name: "Paw Balm", type: "Grooming", description: "Moisturizes and protects dry, cracked paws", price: 169, stock: 55, image: "🐾", category: "grooming" },
    { id: 21, name: "Ear Cleaning Solution", type: "Grooming", description: "Gentle ear cleaner prevents infections", price: 199, stock: 48, image: "👂", category: "grooming" },
    { id: 22, name: "Eye Wipes", type: "Grooming", description: "Tear stain remover and eye care wipes", price: 149, stock: 65, image: "👁️", category: "grooming" },
    { id: 23, name: "Nail Trimmer Pro", type: "Grooming Tool", description: "Professional-grade nail clipper with safety guard", price: 279, stock: 42, image: "✂️", category: "grooming" },
    { id: 24, name: "Detangling Spray", type: "Grooming", description: "Makes brushing easier, reduces mats and tangles", price: 219, stock: 38, image: "💨", category: "grooming" },

    // Dental Care
    { id: 8, name: "DentalFresh", type: "Dental Care", description: "Promotes oral health and fresh breath", price: 179, stock: 52, image: "🦷", category: "dental" },
    { id: 25, name: "Dental Chew Treats", type: "Dental Care", description: "Tasty treats that clean teeth and freshen breath", price: 199, stock: 70, image: "🦴", category: "dental" },
    { id: 26, name: "Water Additive", type: "Dental Care", description: "Add to water bowl for daily oral hygiene", price: 249, stock: 44, image: "💧", category: "dental" },

    // Accessories
    { id: 27, name: "Microfiber Towel Set", type: "Accessory", description: "Super absorbent towels for quick drying", price: 349, stock: 50, image: "🧺", category: "accessory" },
    { id: 28, name: "Grooming Glove", type: "Accessory", description: "Gentle brush glove removes loose fur", price: 199, stock: 60, image: "🧤", category: "accessory" },
    { id: 29, name: "Pet Hair Dryer", type: "Accessory", description: "Low-noise dryer with adjustable temperature", price: 1299, stock: 15, image: "💨", category: "accessory" },
    { id: 30, name: "Bathing Tub", type: "Accessory", description: "Portable folding tub for easy bathing", price: 1699, stock: 12, image: "🛁", category: "accessory" }
];

// ===================================
// Questionnaire Data
// ===================================
const petQuestions = [
    {
        id: 1,
        question: "What type of pet do you have?",
        options: ["Dog", "Cat", "Bird", "Rabbit", "Hamster", "Fish", "Other"]
    },
    {
        id: 2,
        question: "What is your pet's age category?",
        options: ["Puppy/Kitten (0-1 year)", "Young Adult (1-3 years)", "Adult (3-7 years)", "Senior (7+ years)"]
    },
    {
        id: 3,
        question: "What is your pet's size?",
        options: ["Small (under 10kg)", "Medium (10-25kg)", "Large (25-40kg)", "Extra Large (over 40kg)"]
    },
    {
        id: 4,
        question: "How would you describe your pet's energy level?",
        options: ["Very High - Always active", "High - Very playful", "Moderate - Balanced", "Low - Mostly calm", "Very Low - Sedentary"]
    },
    {
        id: 5,
        question: "How is your pet's appetite?",
        options: ["Excellent - Eats eagerly", "Good - Eats regularly", "Fair - Sometimes picky", "Poor - Often refuses food"]
    },
    {
        id: 6,
        question: "Does your pet have any health concerns?",
        options: ["No concerns", "Minor issues (occasional)", "Chronic condition (ongoing)", "Multiple health issues", "Need veterinary consultation"]
    },
    {
        id: 7,
        question: "How often does your pet exercise?",
        options: ["Daily - Multiple times", "Daily - Once", "Few times a week", "Rarely", "Never"]
    },
    {
        id: 8,
        question: "Is your pet on any regular medication?",
        options: ["No medication", "Vitamins/Supplements only", "One prescribed medication", "Multiple medications"]
    }
];

// ===================================
// Application Data & State
// ===================================
const appData = {
    currentPage: 'home',
    pets: [],
    selectedPet: null,
    currentPhotoData: null,
    orders: [],
    cart: [],
    activeSubscription: null,
    user: null,
    token: null,
    questionnaireAnswers: [],
    currentQuestionIndex: 0,
    searchResults: [],
    vaccinations: []
};

// ===================================
// Email Validation Function
// ===================================
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// ===================================
// Initialization
// ===================================
function init() {
    const savedToken = localStorage.getItem('petcare_token');
    const savedUser = localStorage.getItem('petcare_user');
    const savedCart = localStorage.getItem('petcare_cart');
    const savedVaccinations = localStorage.getItem('petcare_vaccinations');

    if (savedCart) {
        appData.cart = JSON.parse(savedCart);
        updateCartBadge();
    }

    if (savedVaccinations) {
        appData.vaccinations = JSON.parse(savedVaccinations);
    }

    if (savedToken && savedUser) {
        appData.token = savedToken;
        appData.user = JSON.parse(savedUser);
        showMainApp();
        loadUserData();
    } else {
        showAuthSection();
    }
}

// ===================================
// Cart Management
// ===================================
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        const totalItems = appData.cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function addToCart(medicineId) {
    const medicine = medicineDatabase.find(m => m.id === medicineId);
    if (!medicine) return;

    const existingItem = appData.cart.find(item => item.id === medicineId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        appData.cart.push({
            ...medicine,
            quantity: 1
        });
    }

    localStorage.setItem('petcare_cart', JSON.stringify(appData.cart));
    updateCartBadge();
    showAlert('success', `✓ ${medicine.name} added to cart!`);
}

function removeFromCart(medicineId) {
    appData.cart = appData.cart.filter(item => item.id !== medicineId);
    localStorage.setItem('petcare_cart', JSON.stringify(appData.cart));
    updateCartBadge();
    showCartModal();
}

function updateQuantity(medicineId, change) {
    const item = appData.cart.find(item => item.id === medicineId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(medicineId);
        return;
    }

    localStorage.setItem('petcare_cart', JSON.stringify(appData.cart));
    updateCartBadge();
    showCartModal();
}

function showCartModal() {
    if (appData.cart.length === 0) {
        showAlert('info', 'Your cart is empty. Add some medicines first!');
        return;
    }

    const subtotal = appData.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal > 500 ? 0 : 27;
    const total = subtotal + delivery;

    const modalContent = `
        <div class="modal-header">
            <h2 class="modal-title">🛒 Shopping Cart</h2>
            <button class="close-btn" onclick="closeModal('cartModal')">×</button>
        </div>

        <div style="max-height: 400px; overflow-y: auto; margin-bottom: 1.5rem;">
            ${appData.cart.map(item => `
                <div style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid var(--border-light); align-items: center;">
                    <div style="font-size: 2rem;">${item.image}</div>
                    <div style="flex: 1;">
                        <div style="font-weight: 700; margin-bottom: 0.25rem;">${item.name}</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">${item.type}</div>
                        <div style="color: var(--secondary-green); font-weight: 700; margin-top: 0.25rem;">₹${item.price}</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <button class="btn" style="padding: 0.5rem 0.75rem; font-size: 1.25rem;" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span style="font-weight: 700; min-width: 30px; text-align: center;">${item.quantity}</span>
                        <button class="btn" style="padding: 0.5rem 0.75rem; font-size: 1.25rem;" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="btn btn-danger" style="padding: 0.5rem 1rem;" onclick="removeFromCart(${item.id})">🗑️</button>
                </div>
            `).join('')}
        </div>

        <div class="order-summary" style="background: var(--bg-light); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
            <div class="summary-row" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light);">
                <span>Subtotal</span>
                <span>₹${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light);">
                <span>Delivery ${subtotal > 500 ? '(Free for orders > ₹500)' : ''}</span>
                <span>${delivery === 0 ? 'FREE' : '₹' + delivery.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-top: 1rem; font-size: 1.25rem; font-weight: 700; color: var(--primary-blue);">
                <span>Total</span>
                <span>₹${total.toFixed(2)}</span>
            </div>
        </div>

        <div style="display: flex; gap: 1rem;">
            <button class="btn btn-secondary btn-full" onclick="closeModal('cartModal')">Continue Shopping</button>
            <button class="btn btn-primary btn-full" onclick="proceedToCheckout()">Proceed to Checkout</button>
        </div>
    `;

    document.getElementById('cartModalContent').innerHTML = modalContent;
    openModal('cartModal');
}

function proceedToCheckout() {
    closeModal('cartModal');
    openModal('paymentModal');
    showPaymentForm();
}

function showPaymentForm() {
    const subtotal = appData.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal > 500 ? 0 : 27;
    const total = subtotal + delivery;

    const modalContent = `
        <div class="modal-header">
            <h2 class="modal-title">💳 Payment</h2>
            <button class="close-btn" onclick="closeModal('paymentModal')">×</button>
        </div>

        <div style="margin-bottom: 2rem;">
            <div class="payment-method selected" id="cardPaymentMethod" onclick="selectPaymentMethod('card')">
                <div class="payment-method-header">
                    <div class="payment-icon">💳</div>
                    <span>Credit/Debit Card</span>
                </div>
            </div>

            <div class="payment-method" id="upiPaymentMethod" onclick="selectPaymentMethod('upi')">
                <div class="payment-method-header">
                    <div class="payment-icon">📱</div>
                    <span>UPI Payment</span>
                </div>
            </div>

            <div class="payment-method" id="codPaymentMethod" onclick="selectPaymentMethod('cod')">
                <div class="payment-method-header">
                    <div class="payment-icon">💵</div>
                    <span>Cash on Delivery</span>
                </div>
            </div>
        </div>

        <div id="cardPaymentForm" style="display: block;">
            <form onsubmit="processPayment(event)">
                <div class="form-group">
                    <label class="form-label">Card Number</label>
                    <input type="text" class="form-input" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19" required>
                </div>

                <div class="form-group">
                    <label class="form-label">Cardholder Name</label>
                    <input type="text" class="form-input" id="cardName" placeholder="John Doe" required>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label class="form-label">Expiry Date</label>
                        <input type="text" class="form-input" id="expiry" placeholder="MM/YY" maxlength="5" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">CVV</label>
                        <input type="text" class="form-input" id="cvv" placeholder="123" maxlength="3" required>
                    </div>
                </div>

                <div class="order-summary" style="background: var(--bg-light); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
                    <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light);">
                        <span>Subtotal</span>
                        <span>₹${subtotal.toFixed(2)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light);">
                        <span>Delivery</span>
                        <span>${delivery === 0 ? 'FREE' : '₹' + delivery.toFixed(2)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding-top: 1rem; font-size: 1.25rem; font-weight: 700; color: var(--primary-blue);">
                        <span>Total</span>
                        <span>₹${total.toFixed(2)}</span>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary btn-full">Pay ₹${total.toFixed(2)}</button>
            </form>
        </div>

        <div id="upiPaymentForm" style="display: none;">
            <form onsubmit="processPayment(event)">
                <div class="form-group">
                    <label class="form-label">UPI ID</label>
                    <input type="text" class="form-input" placeholder="yourname@upi" required>
                </div>

                <div class="order-summary" style="background: var(--bg-light); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
                    <div style="display: flex; justify-content: space-between; font-size: 1.25rem; font-weight: 700; color: var(--primary-blue);">
                        <span>Total Amount</span>
                        <span>₹${total.toFixed(2)}</span>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary btn-full">Pay with UPI</button>
            </form>
        </div>

        <div id="codPaymentForm" style="display: none;">
            <div class="alert alert-info">
                ℹ️ You will pay ₹${total.toFixed(2)} in cash when your order is delivered.
            </div>

            <div class="form-group">
                <label class="form-label">Delivery Address</label>
                <textarea class="form-input" rows="3" placeholder="Enter your complete address" required></textarea>
            </div>

            <div class="form-group">
                <label class="form-label">Phone Number</label>
                <input type="tel" class="form-input" placeholder="Your contact number" required>
            </div>

            <button onclick="processPayment(event)" class="btn btn-primary btn-full">Place Order (COD)</button>
        </div>
    `;

    document.getElementById('paymentModalContent').innerHTML = modalContent;
}

function selectPaymentMethod(method) {
    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));

    if (method === 'card') {
        document.getElementById('cardPaymentMethod').classList.add('selected');
        document.getElementById('cardPaymentForm').style.display = 'block';
        document.getElementById('upiPaymentForm').style.display = 'none';
        document.getElementById('codPaymentForm').style.display = 'none';
    } else if (method === 'upi') {
        document.getElementById('upiPaymentMethod').classList.add('selected');
        document.getElementById('cardPaymentForm').style.display = 'none';
        document.getElementById('upiPaymentForm').style.display = 'block';
        document.getElementById('codPaymentForm').style.display = 'none';
    } else if (method === 'cod') {
        document.getElementById('codPaymentMethod').classList.add('selected');
        document.getElementById('cardPaymentForm').style.display = 'none';
        document.getElementById('upiPaymentForm').style.display = 'none';
        document.getElementById('codPaymentForm').style.display = 'block';
    }
}

function processPayment(event) {
    event.preventDefault();

    const orderId = 'ORD' + Date.now();
    const orderDate = new Date().toLocaleDateString('en-IN');
    const subtotal = appData.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal > 500 ? 0 : 27;
    const total = subtotal + delivery;

    const order = {
        id: orderId,
        date: orderDate,
        items: [...appData.cart],
        subtotal: subtotal,
        delivery: delivery,
        total: total,
        status: 'Processing'
    };

    appData.orders.push(order);
    localStorage.setItem('petcare_orders', JSON.stringify(appData.orders));

    // Clear cart
    appData.cart = [];
    localStorage.setItem('petcare_cart', JSON.stringify(appData.cart));
    updateCartBadge();

    closeModal('paymentModal');
    showAlert('success', '✓ Order placed successfully! Order ID: ' + orderId);

    setTimeout(() => {
        showPage('orders');
    }, 2000);
}

// ===================================
// Authentication Functions
// ===================================
function showLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
}

function showRegister() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

function showAuthSection() {
    document.getElementById('authSection').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
}

function showMainApp() {
    document.getElementById('authSection').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    showPage('home');
}

async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!validateEmail(email)) {
        showAlert('error', '⚠️ Please enter a valid email address');
        return;
    }

    // For demo purposes, simulate successful login
    const demoUser = {
        name: email.split('@')[0],
        email: email,
        token: 'demo_token_' + Date.now()
    };

    appData.token = demoUser.token;
    appData.user = demoUser;
    localStorage.setItem('petcare_token', demoUser.token);
    localStorage.setItem('petcare_user', JSON.stringify(demoUser));

    showMainApp();
    loadUserData();
    event.target.reset();
    showAlert('success', '✓ Welcome back!');
}

async function handleRegister(event) {
    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (!validateEmail(email)) {
        showAlert('error', '⚠️ Please enter a valid email address');
        return;
    }

    if (password !== confirmPassword) {
        showAlert('error', '⚠️ Passwords do not match!');
        return;
    }

    // For demo purposes, simulate successful registration
    const demoUser = {
        name: name,
        email: email,
        phone: phone,
        token: 'demo_token_' + Date.now()
    };

    appData.token = demoUser.token;
    appData.user = demoUser;
    localStorage.setItem('petcare_token', demoUser.token);
    localStorage.setItem('petcare_user', JSON.stringify(demoUser));

    showMainApp();
    loadUserData();
    event.target.reset();
    showAlert('success', '✓ Registration successful!');
}

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('petcare_token');
        localStorage.removeItem('petcare_user');
        appData.token = null;
        appData.user = null;
        appData.pets = [];
        appData.selectedPet = null;
        showAuthSection();
        showLogin();
    }
}

// ===================================
// Load User Data
// ===================================
async function loadUserData() {
    const savedPets = localStorage.getItem('petcare_pets');
    const savedOrders = localStorage.getItem('petcare_orders');

    if (savedPets) {
        appData.pets = JSON.parse(savedPets);
    }

    if (savedOrders) {
        appData.orders = JSON.parse(savedOrders);
    }
}

// ===================================
// Medicine Search Functions
// ===================================
function searchMedicine() {
    const query = document.getElementById('medicineSearch').value.toLowerCase().trim();

    if (!query) {
        showAlert('warning', '⚠️ Please enter a medicine name to search');
        return;
    }

    const results = medicineDatabase.filter(medicine =>
        medicine.name.toLowerCase().includes(query) ||
        medicine.type.toLowerCase().includes(query) ||
        medicine.description.toLowerCase().includes(query)
    );

    appData.searchResults = results;
    displayMedicineResults(results, query);
}

function displayMedicineResults(results, query) {
    const container = document.getElementById('mainContainer');

    if (results.length === 0) {
        container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">🔍 Search Results</h2>
                <p class="section-subtitle">No medicines found for "${query}"</p>
            </div>
            <div class="alert alert-warning">
                ⚠️ No medicines found matching "${query}". Try different keywords like "vitamin", "flea", or "joint".
            </div>
            <button class="btn btn-primary" onclick="showPage('home')">← Back to Home</button>
        `;
        return;
    }

    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">🔍 Search Results</h2>
            <p class="section-subtitle">Found ${results.length} medicine(s) for "${query}"</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <button class="btn btn-secondary" onclick="showPage('home')">← Back to Home</button>
        </div>

        <div class="medicine-results">
            ${results.map(medicine => `
                <div class="medicine-card">
                    <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">${medicine.image}</div>
                    <div class="medicine-name">${medicine.name}</div>
                    <div class="medicine-type">${medicine.type}</div>
                    <div class="medicine-description">${medicine.description}</div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin: 1rem 0;">
                        <div class="medicine-price">₹${medicine.price}</div>
                        <div style="color: ${medicine.stock > 10 ? 'var(--secondary-green)' : 'var(--accent-orange)'}; font-size: 0.875rem; font-weight: 600;">
                            ${medicine.stock > 10 ? '✓ In Stock' : '⚠️ Low Stock'}
                        </div>
                    </div>
                    <button class="btn btn-primary btn-full" onclick="addToCart(${medicine.id})">
                        🛒 Add to Cart
                    </button>
                </div>
            `).join('')}
        </div>
    `;
}

// ===================================
// Vaccination Management
// ===================================
function showVaccinationPage() {
    const container = document.getElementById('mainContainer');

    if (appData.pets.length === 0) {
        container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">💉 Vaccination History</h2>
                <p class="section-subtitle">Track your pet's vaccinations</p>
            </div>
            <div class="alert alert-info">
                ℹ️ Please add a pet first to track vaccination history.
            </div>
            <button class="btn btn-primary" onclick="openAddPetModal()">➕ Add Your First Pet</button>
        `;
        return;
    }

    const petVaccinations = appData.vaccinations.filter(v =>
        !appData.selectedPet || v.petId === appData.selectedPet._id
    );

    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">💉 Vaccination History</h2>
            <p class="section-subtitle">Keep track of all vaccinations for your pets</p>
        </div>

        <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="openAddVaccinationModal()">➕ Add Vaccination Record</button>
            ${appData.selectedPet ? `
                <button class="btn btn-secondary" onclick="selectPet(null); showVaccinationPage()">View All Pets</button>
            ` : ''}
        </div>

        ${petVaccinations.length === 0 ? `
            <div class="empty-state">
                <div class="empty-icon">💉</div>
                <h3 class="empty-title">No Vaccination Records</h3>
                <p class="empty-text">Start tracking your pet's vaccination history</p>
                <button class="btn btn-primary" onclick="openAddVaccinationModal()">Add First Record</button>
            </div>
        ` : `
            <div class="card-grid">
                ${groupVaccinationsByPet(petVaccinations).map(group => `
                    <div class="card">
                        <div class="card-icon">${getPetIcon(group.pet.type)}</div>
                        <h3 class="card-title">${group.pet.name}'s Vaccinations</h3>
                        <div style="margin-top: 1rem;">
                            ${group.vaccinations.map(v => `
                                <div style="padding: 1rem; background: var(--bg-light); border-radius: 10px; margin-bottom: 0.75rem;">
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                                        <div>
                                            <div style="font-weight: 700; color: var(--text-primary);">${v.vaccineName}</div>
                                            <div style="font-size: 0.875rem; color: var(--text-secondary);">
                                                Date: ${v.date}
                                            </div>
                                            ${v.nextDue ? `
                                                <div style="font-size: 0.875rem; color: var(--accent-orange); font-weight: 600; margin-top: 0.25rem;">
                                                    Next Due: ${v.nextDue}
                                                </div>
                                            ` : ''}
                                        </div>
                                        <button class="btn btn-danger" style="padding: 0.5rem 0.75rem; font-size: 0.875rem;" 
                                                onclick="deleteVaccination('${v.id}')">
                                            🗑️
                                        </button>
                                    </div>
                                    ${v.notes ? `
                                        <div style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-light);">
                                            📝 ${v.notes}
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `}
    `;
}

function groupVaccinationsByPet(vaccinations) {
    const groups = {};

    vaccinations.forEach(v => {
        const pet = appData.pets.find(p => p._id === v.petId);
        if (!pet) return;

        if (!groups[v.petId]) {
            groups[v.petId] = {
                pet: pet,
                vaccinations: []
            };
        }
        groups[v.petId].vaccinations.push(v);
    });

    return Object.values(groups);
}

function openAddVaccinationModal() {
    if (appData.pets.length === 0) {
        showAlert('error', '⚠️ Please add a pet first!');
        return;
    }

    const modalContent = `
        <div class="modal-header">
            <h2 class="modal-title">💉 Add Vaccination Record</h2>
            <button class="close-btn" onclick="closeModal('vaccinationModal')">×</button>
        </div>

        <form onsubmit="addVaccination(event)">
            <div class="form-group">
                <label class="form-label">Select Pet</label>
                <select class="form-select" id="vacPetId" required>
                    <option value="">Choose a pet</option>
                    ${appData.pets.map(pet => `
                        <option value="${pet._id}" ${appData.selectedPet && appData.selectedPet._id === pet._id ? 'selected' : ''}>
                            ${pet.name} (${pet.type})
                        </option>
                    `).join('')}
                </select>
            </div>

            <div class="form-group">
                <label class="form-label">Vaccine Name</label>
                <input type="text" class="form-input" id="vacName" placeholder="e.g., Rabies, DHPP, FVRCP" required>
            </div>

            <div class="form-group">
                <label class="form-label">Vaccination Date</label>
                <input type="date" class="form-input" id="vacDate" required>
            </div>

            <div class="form-group">
                <label class="form-label">Next Due Date (Optional)</label>
                <input type="date" class="form-input" id="vacNextDue">
            </div>

            <div class="form-group">
                <label class="form-label">Notes (Optional)</label>
                <textarea class="form-input" id="vacNotes" rows="3" placeholder="Any additional notes..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-full">Save Vaccination Record</button>
        </form>
    `;

    document.getElementById('vaccinationModalContent').innerHTML = modalContent;

    // Set today's date as default
    document.getElementById('vacDate').valueAsDate = new Date();

    openModal('vaccinationModal');
}

function addVaccination(event) {
    event.preventDefault();

    const vaccination = {
        id: 'vac_' + Date.now(),
        petId: document.getElementById('vacPetId').value,
        vaccineName: document.getElementById('vacName').value,
        date: document.getElementById('vacDate').value,
        nextDue: document.getElementById('vacNextDue').value || null,
        notes: document.getElementById('vacNotes').value || null,
        createdAt: new Date().toISOString()
    };

    appData.vaccinations.push(vaccination);
    localStorage.setItem('petcare_vaccinations', JSON.stringify(appData.vaccinations));

    closeModal('vaccinationModal');
    showAlert('success', '✓ Vaccination record added successfully!');
    showVaccinationPage();
}

function deleteVaccination(vacId) {
    if (confirm('Are you sure you want to delete this vaccination record?')) {
        appData.vaccinations = appData.vaccinations.filter(v => v.id !== vacId);
        localStorage.setItem('petcare_vaccinations', JSON.stringify(appData.vaccinations));
        showAlert('success', '✓ Vaccination record deleted');
        showVaccinationPage();
    }
}

// ===================================
// Questionnaire Functions
// ===================================
function startQuestionnaire() {
    appData.currentQuestionIndex = 0;
    appData.questionnaireAnswers = [];

    openModal('questionnaireModal');
    showQuestion();
}

function showQuestion() {
    const questionIndex = appData.currentQuestionIndex;

    if (questionIndex >= petQuestions.length) {
        showQuestionnaireResults();
        return;
    }

    const question = petQuestions[questionIndex];
    const progress = ((questionIndex / petQuestions.length) * 100).toFixed(0);

    const container = document.getElementById('questionnaireContent');
    container.innerHTML = `
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        
        <div class="question-card">
            <div class="question-text">
                Question ${questionIndex + 1} of ${petQuestions.length}: ${question.question}
            </div>
            <div class="answer-options">
                ${question.options.map((option, index) => `
                    <div class="answer-option" onclick="selectQuestionAnswer('${option.replace(/'/g, "\\'")}')">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function selectQuestionAnswer(answer) {
    appData.questionnaireAnswers.push({
        question: petQuestions[appData.currentQuestionIndex].question,
        answer: answer
    });

    appData.currentQuestionIndex++;
    showQuestion();
}

function showQuestionnaireResults() {
    const container = document.getElementById('questionnaireContent');
    const recommendations = generateRecommendations();

    container.innerHTML = `
        <div class="progress-bar">
            <div class="progress-fill" style="width: 100%"></div>
        </div>
        
        <div class="alert alert-success">
            ✓ Questionnaire Complete! Here are your personalized recommendations:
        </div>

        <div class="card">
            <div class="card-icon">🎯</div>
            <h3 class="card-title">Personalized Care Plan</h3>
            <div class="card-description">
                <strong>Based on your answers:</strong>
                <ul style="margin-top: 1rem; line-height: 2; text-align: left;">
                    ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
                </ul>
            </div>
            <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <button class="btn btn-primary" onclick="closeModal('questionnaireModal')">Done</button>
                <button class="btn btn-secondary" onclick="startQuestionnaire()">Start Again</button>
            </div>
        </div>
    `;
}

function generateRecommendations() {
    const recommendations = [];
    const answers = appData.questionnaireAnswers;

    const ageAnswer = answers.find(a => a.question.includes('age'));
    if (ageAnswer && ageAnswer.answer.includes('Senior')) {
        recommendations.push('Consider joint support supplements for senior pets');
        recommendations.push('Schedule bi-annual veterinary check-ups');
    } else if (ageAnswer && ageAnswer.answer.includes('Puppy')) {
        recommendations.push('Focus on proper nutrition for growth and development');
        recommendations.push('Start vaccination schedule as recommended by your vet');
    }

    const energyAnswer = answers.find(a => a.question.includes('energy'));
    if (energyAnswer && energyAnswer.answer.includes('High')) {
        recommendations.push('Ensure daily exercise and mental stimulation');
        recommendations.push('Consider high-energy diet formulations');
    }

    const healthAnswer = answers.find(a => a.question.includes('health concerns'));
    if (healthAnswer && (healthAnswer.answer.includes('Chronic') || healthAnswer.answer.includes('Multiple'))) {
        recommendations.push('⚠️ Schedule a veterinary consultation for ongoing health management');
        recommendations.push('Keep a health journal to track symptoms and progress');
    }

    const appetiteAnswer = answers.find(a => a.question.includes('appetite'));
    if (appetiteAnswer && (appetiteAnswer.answer.includes('Poor') || appetiteAnswer.answer.includes('Fair'))) {
        recommendations.push('Try appetite stimulants or different food varieties');
        recommendations.push('Consult with vet if appetite issues persist');
    }

    recommendations.push('Maintain regular grooming and hygiene routines');
    recommendations.push('Provide fresh water at all times');
    recommendations.push('Keep up with preventive care (flea, tick, heartworm)');

    return recommendations;
}

// ===================================
// Page Navigation
// ===================================
function showPage(page) {
    appData.currentPage = page;

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    const container = document.getElementById('mainContainer');

    switch (page) {
        case 'home':
            document.querySelector('.nav-btn:nth-child(1)').classList.add('active');
            renderHomePage();
            break;
        case 'pets':
            document.querySelector('.nav-btn:nth-child(2)').classList.add('active');
            renderPetsPage();
            break;
        case 'vaccinations':
            document.querySelector('.nav-btn:nth-child(3)').classList.add('active');
            showVaccinationPage();
            break;
        case 'orders':
            document.querySelector('.nav-btn:nth-child(4)').classList.add('active');
            renderOrdersPage();
            break;
        case 'subscription':
            document.querySelector('.nav-btn:nth-child(5)').classList.add('active');
            renderSubscriptionPage();
            break;
        default:
            renderHomePage();
    }
}

// ===================================
// Helper Functions
// ===================================
function getPetIcon(type) {
    const icons = {
        dog: '🐕', cat: '🐱', bird: '🐦', rabbit: '🐰',
        hamster: '🐹', fish: '🐠', other: '🐾'
    };
    return icons[type.toLowerCase()] || '🐾';
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function showAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '20px';
    alertDiv.style.right = '20px';
    alertDiv.style.zIndex = '9999';
    alertDiv.style.maxWidth = '400px';

    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.style.animation = 'slideOut 0.4s ease forwards';
        setTimeout(() => alertDiv.remove(), 400);
    }, 3000);
}

// ===================================
// Home Page Rendering
// ===================================
function renderHomePage() {
    const container = document.getElementById('mainContainer');
    const userName = appData.user?.name?.split(' ')[0] || 'there';

    container.innerHTML = `
        <div class="hero">
            <div class="hero-content">
                <div class="hero-badge">✨ Welcome ${userName}!</div>
                <h1 class="hero-title">Complete Pet Care Solution</h1>
                <p class="hero-subtitle">Your trusted partner in pet health and wellness. Find medicines, track health, and keep your furry friends happy!</p>
                
                <div class="search-box">
                    <label class="search-label">🔍 Find Your Medicine</label>
                    <div class="search-group">
                        <input type="text" class="search-input" placeholder="Search medicines, supplements, treatments..." id="medicineSearch" onkeypress="if(event.key==='Enter') searchMedicine()">
                        <button class="search-button" onclick="searchMedicine()">Search</button>
                    </div>
                </div>
            </div>
        </div>

        ${appData.pets.length === 0 ? `
            <div class="alert alert-info">
                👋 Welcome! Add your pet's profile to get started with personalized health recommendations.
            </div>
        ` : appData.selectedPet ? `
            <div class="alert alert-success">
                ✓ Currently caring for: <strong>${appData.selectedPet.name}</strong>
            </div>
        ` : ''}

        <div class="section-header">
            <h2 class="section-title">🐾 Quick Actions</h2>
            <p class="section-subtitle">Everything you need for your pet's care</p>
        </div>

        <div class="card-grid">
            <div class="card">
                <div class="card-icon">📝</div>
                <h3 class="card-title">Register Your Pet</h3>
                <p class="card-description">Add your pet's profile and receive personalized care recommendations.</p>
                <button class="btn btn-primary btn-full" onclick="openAddPetModal()">➕ Add Pet</button>
            </div>

            <div class="card">
                <div class="card-icon">📋</div>
                <h3 class="card-title">Know Your Pet</h3>
                <p class="card-description">Answer questions to get personalized insights and care recommendations.</p>
                <button class="btn btn-primary btn-full" onclick="startQuestionnaire()">Start Quiz</button>
            </div>

            <div class="card">
                <div class="card-icon">💉</div>
                <h3 class="card-title">Vaccination Tracker</h3>
                <p class="card-description">Keep track of all vaccinations and never miss a dose.</p>
                <button class="btn btn-primary btn-full" onclick="showPage('vaccinations')">View Records</button>
            </div>
        </div>

        ${appData.pets.length > 0 ? `
            <div class="section-header" style="margin-top: 3rem;">
                <h2 class="section-title">👥 Your Pet Family</h2>
                <p class="section-subtitle">You have ${appData.pets.length} pet${appData.pets.length > 1 ? 's' : ''} registered</p>
            </div>

            <div class="pet-grid">
                ${appData.pets.map((pet, index) => renderPetCard(pet, index)).join('')}
            </div>
        ` : ''}

        <div class="section-header" style="margin-top: 3rem;">
            <h2 class="section-title">🛍️ Popular Products</h2>
            <p class="section-subtitle">Best-selling items for your pet's care</p>
        </div>

        <!-- Category Filter Tabs -->
        <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem; flex-wrap: wrap; justify-content: center; padding: 0.5rem;">
            <button class="category-tab active" onclick="filterProducts('all')" id="filter-all" style="background: #E3F2FD; color: #1976D2; border: 2px solid #1976D2; padding: 0.75rem 1.5rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; gap: 0.5rem;">
                <span>All Products</span>
            </button>
            <button class="category-tab" onclick="filterProducts('supplement')" id="filter-supplement" style="background: white; color: #666; border: 2px solid #E0E0E0; padding: 0.75rem 1.5rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; gap: 0.5rem;">
                <span>💊</span>
                <span>Supplements</span>
            </button>
            <button class="category-tab" onclick="filterProducts('treatment')" id="filter-treatment" style="background: white; color: #666; border: 2px solid #E0E0E0; padding: 0.75rem 1.5rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; gap: 0.5rem;">
                <span>🩺</span>
                <span>Treatments</span>
            </button>
            <button class="category-tab" onclick="filterProducts('grooming')" id="filter-grooming" style="background: white; color: #666; border: 2px solid #E0E0E0; padding: 0.75rem 1.5rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; gap: 0.5rem;">
                <span>🛁</span>
                <span>Grooming</span>
            </button>
            <button class="category-tab" onclick="filterProducts('kit')" id="filter-kit" style="background: white; color: #666; border: 2px solid #E0E0E0; padding: 0.75rem 1.5rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; gap: 0.5rem;">
                <span>🎁</span>
                <span>Care Kits</span>
            </button>
            <button class="category-tab" onclick="filterProducts('dental')" id="filter-dental" style="background: white; color: #666; border: 2px solid #E0E0E0; padding: 0.75rem 1.5rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; gap: 0.5rem;">
                <span>🦷</span>
                <span>Dental</span>
            </button>
        </div>

        <div class="medicine-results" id="popularProducts">
            ${medicineDatabase.slice(0, 12).map(medicine => `
                <div class="medicine-card" data-category="${medicine.category}">
                    <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">${medicine.image}</div>
                    <div class="medicine-name">${medicine.name}</div>
                    <div class="medicine-type">${medicine.type}</div>
                    <div class="medicine-description">${medicine.description}</div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin: 1rem 0;">
                        <div class="medicine-price">₹${medicine.price}</div>
                        <div style="color: var(--secondary-green); font-size: 0.875rem; font-weight: 600;">
                            ✓ In Stock
                        </div>
                    </div>
                    <button class="btn btn-primary btn-full" onclick="addToCart(${medicine.id})">
                        🛒 Add to Cart
                    </button>
                </div>
            `).join('')}
        </div>

        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-primary" onclick="showAllProducts()">View All ${medicineDatabase.length} Products →</button>
        </div>

        <!-- Additional Features Section -->
        <div class="section-header" style="margin-top: 3rem;">
            <h2 class="section-title">🐾 Pet Care Features</h2>
            <p class="section-subtitle">Complete care solutions for your beloved pets</p>
        </div>

        <div class="card-grid">
            <!-- Pet Health Status -->
            <div class="card" style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">❤️</div>
                <h3 style="color: var(--primary-blue); margin-bottom: 1rem;">Health Status Checker</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                    Quick assessment of your pet's current health condition
                </p>
                <button class="btn btn-primary btn-full" onclick="showHealthChecker()">
                    Check Health Status
                </button>
            </div>

            <!-- Pet Medical Records -->
            <div class="card" style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">📋</div>
                <h3 style="color: var(--primary-blue); margin-bottom: 1rem;">Medical Records</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                    Manage complete medical history and appointments
                </p>
                <button class="btn btn-primary btn-full" onclick="showMedicalRecords()">
                    View Records
                </button>
            </div>

            <!-- Emergency Support -->
            <div class="card" style="text-align: center; border: 2px solid var(--accent-red);">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🚨</div>
                <h3 style="color: var(--accent-red); margin-bottom: 1rem;">Emergency Support</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                    Get immediate help for pet emergencies 24/7
                </p>
                <button class="btn btn-danger btn-full" onclick="showEmergencySupport()">
                    Emergency Help Now
                </button>
            </div>

            <!-- Pet Condition Quiz -->
            <div class="card" style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">❓</div>
                <h3 style="color: var(--primary-blue); margin-bottom: 1rem;">Pet Condition Quiz</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                    Assess your pet's health status with guided questions
                </p>
                <button class="btn btn-primary btn-full" onclick="startHealthQuiz()">
                    Start Quiz
                </button>
            </div>

            <!-- Pet Parenting Guide -->
            <div class="card" style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🐕</div>
                <h3 style="color: var(--primary-blue); margin-bottom: 1rem;">Pet Parenting Guide</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                    Learn best practices based on breed, age, and lifestyle
                </p>
                <button class="btn btn-primary btn-full" onclick="showParentingGuide()">
                    View Guide
                </button>
            </div>

            <!-- Medicine Delivery Options -->
            <div class="card" style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🚚</div>
                <h3 style="color: var(--primary-blue); margin-bottom: 1rem;">Delivery Options</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                    Multiple delivery choices for your convenience
                </p>
                <button class="btn btn-primary btn-full" onclick="showDeliveryOptions()">
                    View Options
                </button>
            </div>
        </div>
    `;
}

// ===================================
// Pet Management
// ===================================
function renderPetCard(pet, index) {
    const petIcon = getPetIcon(pet.type);

    return `
        <div class="pet-card ${appData.selectedPet?._id === pet._id ? 'active' : ''}" 
             onclick="selectPet(${index})">
            ${appData.selectedPet?._id === pet._id ? '<div class="pet-badge">✓ Selected</div>' : ''}
            <div class="pet-card-header">
                <div class="pet-photo-wrapper">
                    ${pet.photo ? `
                        <img src="${pet.photo}" alt="${pet.name}" class="pet-photo">
                    ` : `
                        <div class="pet-default-icon">${petIcon}</div>
                    `}
                </div>
                <div class="pet-info">
                    <div class="pet-name">${pet.name}</div>
                    <div class="pet-details">
                        ${pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}
                        ${pet.breed ? ' • ' + pet.breed : ''}
                        • ${pet.age}
                        ${pet.weight ? ' • ' + pet.weight + ' kg' : ''}
                    </div>
                </div>
            </div>
            <div class="pet-actions">
                <button class="pet-action-btn" onclick="event.stopPropagation(); editPet(${index})">✏️ Edit</button>
                <button class="pet-action-btn" onclick="event.stopPropagation(); deletePet(${index})" style="color: var(--accent-red);">🗑️ Delete</button>
            </div>
        </div>
    `;
}

function selectPet(index) {
    if (index === null) {
        appData.selectedPet = null;
    } else {
        appData.selectedPet = appData.pets[index];
    }
    showPage(appData.currentPage);
}

function openAddPetModal() {
    const modalContent = `
        <div class="modal-header">
            <h2 class="modal-title">➕ Add Your Pet</h2>
            <button class="close-btn" onclick="closeModal('addPetModal')">×</button>
        </div>

        <form onsubmit="addPet(event)">
            <div class="form-group">
                <label class="form-label">Pet Name</label>
                <input type="text" class="form-input" id="petName" placeholder="e.g., Max, Bella" required>
            </div>

            <div class="form-group">
                <label class="form-label">Pet Type</label>
                <select class="form-select" id="petType" required>
                    <option value="">Choose type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="hamster">Hamster</option>
                    <option value="fish">Fish</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div class="form-group">
                <label class="form-label">Breed (Optional)</label>
                <input type="text" class="form-input" id="petBreed" placeholder="e.g., Golden Retriever">
            </div>

            <div class="form-group">
                <label class="form-label">Age</label>
                <input type="text" class="form-input" id="petAge" placeholder="e.g., 2 years" required>
            </div>

            <div class="form-group">
                <label class="form-label">Weight (kg, Optional)</label>
                <input type="number" class="form-input" id="petWeight" placeholder="e.g., 15" step="0.1">
            </div>

            <button type="submit" class="btn btn-primary btn-full">Add Pet</button>
        </form>
    `;

    document.getElementById('addPetModalContent').innerHTML = modalContent;
    openModal('addPetModal');
}

function addPet(event) {
    event.preventDefault();

    const pet = {
        _id: 'pet_' + Date.now(),
        name: document.getElementById('petName').value,
        type: document.getElementById('petType').value,
        breed: document.getElementById('petBreed').value || null,
        age: document.getElementById('petAge').value,
        weight: document.getElementById('petWeight').value || null,
        photo: null,
        createdAt: new Date().toISOString()
    };

    appData.pets.push(pet);
    localStorage.setItem('petcare_pets', JSON.stringify(appData.pets));

    closeModal('addPetModal');
    showAlert('success', `✓ ${pet.name} has been added!`);
    showPage('pets');
}

function editPet(index) {
    const pet = appData.pets[index];

    const modalContent = `
        <div class="modal-header">
            <h2 class="modal-title">✏️ Edit ${pet.name}</h2>
            <button class="close-btn" onclick="closeModal('editPetModal')">×</button>
        </div>

        <form onsubmit="updatePet(event, ${index})">
            <div class="form-group">
                <label class="form-label">Pet Name</label>
                <input type="text" class="form-input" id="editPetName" value="${pet.name}" required>
            </div>

            <div class="form-group">
                <label class="form-label">Pet Type</label>
                <select class="form-select" id="editPetType" required>
                    <option value="dog" ${pet.type === 'dog' ? 'selected' : ''}>Dog</option>
                    <option value="cat" ${pet.type === 'cat' ? 'selected' : ''}>Cat</option>
                    <option value="bird" ${pet.type === 'bird' ? 'selected' : ''}>Bird</option>
                    <option value="rabbit" ${pet.type === 'rabbit' ? 'selected' : ''}>Rabbit</option>
                    <option value="hamster" ${pet.type === 'hamster' ? 'selected' : ''}>Hamster</option>
                    <option value="fish" ${pet.type === 'fish' ? 'selected' : ''}>Fish</option>
                    <option value="other" ${pet.type === 'other' ? 'selected' : ''}>Other</option>
                </select>
            </div>

            <div class="form-group">
                <label class="form-label">Breed</label>
                <input type="text" class="form-input" id="editPetBreed" value="${pet.breed || ''}">
            </div>

            <div class="form-group">
                <label class="form-label">Age</label>
                <input type="text" class="form-input" id="editPetAge" value="${pet.age}" required>
            </div>

            <div class="form-group">
                <label class="form-label">Weight (kg)</label>
                <input type="number" class="form-input" id="editPetWeight" value="${pet.weight || ''}" step="0.1">
            </div>

            <button type="submit" class="btn btn-primary btn-full">Update Pet</button>
        </form>
    `;

    document.getElementById('editPetModalContent').innerHTML = modalContent;
    openModal('editPetModal');
}

function updatePet(event, index) {
    event.preventDefault();

    appData.pets[index] = {
        ...appData.pets[index],
        name: document.getElementById('editPetName').value,
        type: document.getElementById('editPetType').value,
        breed: document.getElementById('editPetBreed').value || null,
        age: document.getElementById('editPetAge').value,
        weight: document.getElementById('editPetWeight').value || null
    };

    localStorage.setItem('petcare_pets', JSON.stringify(appData.pets));

    closeModal('editPetModal');
    showAlert('success', '✓ Pet updated successfully!');
    showPage('pets');
}

function deletePet(index) {
    const pet = appData.pets[index];

    if (confirm(`Are you sure you want to delete ${pet.name}?`)) {
        appData.pets.splice(index, 1);
        localStorage.setItem('petcare_pets', JSON.stringify(appData.pets));

        if (appData.selectedPet?._id === pet._id) {
            appData.selectedPet = null;
        }

        showAlert('success', `✓ ${pet.name} has been removed`);
        showPage('pets');
    }
}

// ===================================
// Other Page Renderings
// ===================================
function renderPetsPage() {
    const container = document.getElementById('mainContainer');

    if (appData.pets.length === 0) {
        container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">🐾 My Pets</h2>
                <p class="section-subtitle">Manage all your pet profiles</p>
            </div>
            <div class="empty-state">
                <div class="empty-icon">🐾</div>
                <h3 class="empty-title">No Pets Yet</h3>
                <p class="empty-text">Add your first pet to get started</p>
                <button class="btn btn-primary" onclick="openAddPetModal()">➕ Add Your First Pet</button>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">🐾 My Pets</h2>
            <p class="section-subtitle">You have ${appData.pets.length} pet${appData.pets.length > 1 ? 's' : ''} registered</p>
        </div>
        <div style="margin-bottom: 2rem;">
            <button class="btn btn-primary" onclick="openAddPetModal()">➕ Add Another Pet</button>
        </div>
        <div class="pet-grid">
            ${appData.pets.map((pet, index) => renderPetCard(pet, index)).join('')}
        </div>
    `;
}

function renderOrdersPage() {
    const container = document.getElementById('mainContainer');

    if (appData.orders.length === 0) {
        container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">📦 My Orders</h2>
                <p class="section-subtitle">Track and manage your orders</p>
            </div>
            <div class="empty-state">
                <div class="empty-icon">📦</div>
                <h3 class="empty-title">No Orders Yet</h3>
                <p class="empty-text">Start shopping for your pet's medicines</p>
                <button class="btn btn-primary" onclick="showPage('home')">🛍️ Browse Medicines</button>
            </div>
        `;
        return;
    }

    // Calculate order statistics
    const totalOrders = appData.orders.length;
    const processingOrders = appData.orders.filter(o => o.status === 'Processing').length;
    const deliveredOrders = appData.orders.filter(o => o.status === 'Delivered').length;
    const cancelledOrders = appData.orders.filter(o => o.status === 'Cancelled').length;
    const totalSpent = appData.orders
        .filter(o => o.status !== 'Cancelled')
        .reduce((sum, order) => sum + order.total, 0);

    container.innerHTML = `
        <div class="section-header">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <h2 class="section-title">📦 My Orders</h2>
                    <p class="section-subtitle">You have ${totalOrders} order${totalOrders > 1 ? 's' : ''}</p>
                </div>
                <button class="btn btn-secondary" onclick="showOrderHistory()" style="display: flex; align-items: center; gap: 0.5rem;">
                    📊 Order History & Stats
                </button>
            </div>
        </div>

        <!-- Order Statistics Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div class="card" style="text-align: center; padding: 1.5rem;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📦</div>
                <div style="font-size: 1.75rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 0.25rem;">
                    ${totalOrders}
                </div>
                <div style="color: var(--text-secondary); font-size: 0.875rem;">Total Orders</div>
            </div>

            <div class="card" style="text-align: center; padding: 1.5rem;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">⚡</div>
                <div style="font-size: 1.75rem; font-weight: 700; color: var(--accent-orange); margin-bottom: 0.25rem;">
                    ${processingOrders}
                </div>
                <div style="color: var(--text-secondary); font-size: 0.875rem;">Processing</div>
            </div>

            <div class="card" style="text-align: center; padding: 1.5rem;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">✅</div>
                <div style="font-size: 1.75rem; font-weight: 700; color: var(--secondary-green); margin-bottom: 0.25rem;">
                    ${deliveredOrders}
                </div>
                <div style="color: var(--text-secondary); font-size: 0.875rem;">Delivered</div>
            </div>

            <div class="card" style="text-align: center; padding: 1.5rem;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">💰</div>
                <div style="font-size: 1.75rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 0.25rem;">
                    ₹${totalSpent.toFixed(0)}
                </div>
                <div style="color: var(--text-secondary); font-size: 0.875rem;">Total Spent</div>
            </div>
        </div>

        <!-- Filter Buttons -->
        <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem; flex-wrap: wrap;">
            <button class="btn btn-secondary active" id="filter-all" onclick="filterOrders('all')">
                All Orders (${totalOrders})
            </button>
            <button class="btn btn-secondary" id="filter-processing" onclick="filterOrders('Processing')">
                ⚡ Processing (${processingOrders})
            </button>
            <button class="btn btn-secondary" id="filter-shipped" onclick="filterOrders('Shipped')">
                🚚 Shipped (${appData.orders.filter(o => o.status === 'Shipped').length})
            </button>
            <button class="btn btn-secondary" id="filter-delivered" onclick="filterOrders('Delivered')">
                ✅ Delivered (${deliveredOrders})
            </button>
            ${cancelledOrders > 0 ? `
                <button class="btn btn-secondary" id="filter-cancelled" onclick="filterOrders('Cancelled')">
                    ❌ Cancelled (${cancelledOrders})
                </button>
            ` : ''}
        </div>

        <div class="card-grid" id="ordersContainer">
            ${appData.orders.map((order, index) => `
                <div class="card order-card" data-status="${order.status}">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                        <div>
                            <div style="font-weight: 700; font-size: 1.125rem; margin-bottom: 0.25rem;">Order #${order.id}</div>
                            <div style="color: var(--text-secondary); font-size: 0.875rem;">Placed on ${order.date}</div>
                        </div>
                        <div style="background: ${getOrderStatusColor(order.status)}; color: ${getOrderStatusTextColor(order.status)}; padding: 0.375rem 0.875rem; border-radius: 20px; font-size: 0.813rem; font-weight: 700;">
                            ${order.status}
                        </div>
                    </div>

                    ${order.status === 'Shipped' || order.status === 'Delivered' ? `
                        <div style="background: var(--primary-blue-light); border-left: 4px solid var(--primary-blue); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 1.25rem;">🚚</span>
                                <span style="font-weight: 600; color: var(--primary-blue-dark);">
                                    ${order.status === 'Shipped' ? 'Out for Delivery' : 'Delivered'}
                                </span>
                            </div>
                            <div style="color: var(--text-secondary); font-size: 0.875rem;">
                                ${order.status === 'Shipped' ? 'Expected delivery: Today by 8 PM' : 'Delivered on ' + order.date}
                            </div>
                        </div>
                    ` : ''}

                    <div style="background: var(--bg-light); border-radius: 10px; padding: 1rem; margin-bottom: 1rem;">
                        ${order.items.map(item => `
                            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0;">
                                <span>${item.name} × ${item.quantity}</span>
                                <span style="font-weight: 600;">₹${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        `).join('')}
                    </div>

                    <div style="display: flex; justify-content: space-between; font-size: 1.125rem; font-weight: 700; color: var(--primary-blue); padding-top: 1rem; border-top: 2px solid var(--border-light); margin-bottom: 1rem;">
                        <span>Total</span>
                        <span>₹${order.total.toFixed(2)}</span>
                    </div>

                    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                        ${order.status !== 'Cancelled' ? `
                            <button class="btn btn-primary" style="flex: 1;" onclick="trackOrder(${index})">
                                📍 Track Order
                            </button>
                        ` : ''}
                        <button class="btn btn-secondary" style="flex: 1;" onclick="downloadReceipt(${index})">
                            📄 Receipt
                        </button>
                        <button class="btn btn-secondary" style="flex: 1;" onclick="viewOrderDetails(${index})">
                            👁️ Details
                        </button>
                        ${order.status !== 'Cancelled' && order.status !== 'Delivered' ? `
                            <button class="btn btn-danger" style="flex: 1;" onclick="cancelOrder(${index})">
                                ❌ Cancel
                            </button>
                        ` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Helper function to get order status color
function getOrderStatusColor(status) {
    switch (status) {
        case 'Processing':
            return 'var(--secondary-green-light)';
        case 'Shipped':
            return 'var(--primary-blue-light)';
        case 'Delivered':
            return 'var(--secondary-green-light)';
        case 'Cancelled':
            return 'rgba(231, 76, 60, 0.15)';
        default:
            return 'var(--bg-light)';
    }
}

function getOrderStatusTextColor(status) {
    switch (status) {
        case 'Processing':
            return 'var(--secondary-green-dark)';
        case 'Shipped':
            return 'var(--primary-blue-dark)';
        case 'Delivered':
            return 'var(--secondary-green-dark)';
        case 'Cancelled':
            return 'var(--accent-red-dark)';
        default:
            return 'var(--text-secondary)';
    }
}

// Cancel order function
function cancelOrder(orderIndex) {
    const order = appData.orders[orderIndex];

    if (order.status === 'Cancelled') {
        showAlert('info', 'This order is already cancelled');
        return;
    }

    if (order.status === 'Delivered') {
        showAlert('error', 'Cannot cancel a delivered order');
        return;
    }

    if (confirm(`Are you sure you want to cancel Order #${order.id}?`)) {
        // Update order status
        appData.orders[orderIndex].status = 'Cancelled';

        // Save to localStorage
        localStorage.setItem('petcare_orders', JSON.stringify(appData.orders));

        showAlert('success', `✓ Order #${order.id} has been cancelled successfully`);

        // Refresh the page
        renderOrdersPage();
    }
}

// Filter orders by status
function filterOrders(status) {
    const orderCards = document.querySelectorAll('.order-card');

    // Update button states
    document.querySelectorAll('[id^="filter-"]').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('filter-' + status.toLowerCase()).classList.add('active');

    // Filter orders
    orderCards.forEach(card => {
        if (status === 'all') {
            card.style.display = 'block';
        } else {
            if (card.dataset.status === status) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// View order details
function viewOrderDetails(orderIndex) {
    const order = appData.orders[orderIndex];

    openModal('orderDetailsModal');

    const modalContent = `
        <div class="modal-header">
            <h2 class="modal-title">📦 Order Details</h2>
            <button class="close-btn" onclick="closeModal('orderDetailsModal')">×</button>
        </div>

        <div style="padding: 2rem;">
            <!-- Order Header -->
            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <div>
                        <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">
                            Order #${order.id}
                        </div>
                        <div style="color: var(--text-secondary);">
                            Placed on ${order.date}
                        </div>
                    </div>
                    <div style="background: ${getOrderStatusColor(order.status)}; color: ${getOrderStatusTextColor(order.status)}; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 700;">
                        ${order.status}
                    </div>
                </div>
            </div>

            <!-- Order Items -->
            <div style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem;">📋 Order Items</h3>
                <div class="card">
                    ${order.items.map(item => `
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; border-bottom: 1px solid var(--border-light);">
                            <div>
                                <div style="font-weight: 600; margin-bottom: 0.25rem;">${item.name}</div>
                                <div style="color: var(--text-secondary); font-size: 0.875rem;">
                                    ${item.type}
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-weight: 600; margin-bottom: 0.25rem;">
                                    ₹${item.price} × ${item.quantity}
                                </div>
                                <div style="color: var(--primary-blue); font-weight: 700;">
                                    ₹${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Order Summary -->
            <div style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem;">💰 Payment Summary</h3>
                <div class="card">
                    <div style="display: flex; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--border-light);">
                        <span>Subtotal</span>
                        <span style="font-weight: 600;">₹${order.subtotal.toFixed(2)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--border-light);">
                        <span>Delivery Fee</span>
                        <span style="font-weight: 600; color: ${order.delivery === 0 ? 'var(--secondary-green)' : 'inherit'};">
                            ${order.delivery === 0 ? 'FREE' : '₹' + order.delivery.toFixed(2)}
                        </span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 1rem 0; font-size: 1.25rem; font-weight: 700; color: var(--primary-blue);">
                        <span>Total</span>
                        <span>₹${order.total.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <!-- Actions -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <button class="btn btn-primary" onclick="downloadReceipt(${orderIndex}); closeModal('orderDetailsModal');">
                    📄 Download Receipt
                </button>
                ${order.status !== 'Cancelled' && order.status !== 'Delivered' ? `
                    <button class="btn btn-danger" onclick="cancelOrder(${orderIndex}); closeModal('orderDetailsModal');">
                        ❌ Cancel Order
                    </button>
                ` : `
                    <button class="btn btn-secondary" onclick="closeModal('orderDetailsModal')">
                        Close
                    </button>
                `}
            </div>
        </div>
    `;

    const modal = document.getElementById('orderDetailsModal');
    if (!modal) {
        // Create modal if doesn't exist
        const newModal = document.createElement('div');
        newModal.id = 'orderDetailsModal';
        newModal.className = 'modal';
        newModal.innerHTML = '<div class="modal-content"></div>';
        document.body.appendChild(newModal);
    }

    document.getElementById('orderDetailsModal').querySelector('.modal-content').innerHTML = modalContent;
}

// Track order with detailed timeline
function trackOrder(orderIndex) {
    const order = appData.orders[orderIndex];

    // Generate tracking timeline based on status
    const getTrackingSteps = (status) => {
        const steps = [
            {
                title: 'Order Placed',
                description: 'Your order has been confirmed',
                date: order.date,
                icon: '✅',
                completed: true
            },
            {
                title: 'Order Processing',
                description: 'We are preparing your items',
                icon: '📦',
                completed: status !== 'pending'
            },
            {
                title: 'Shipped',
                description: 'Your order is on the way',
                icon: '🚚',
                completed: status === 'Shipped' || status === 'Delivered'
            },
            {
                title: 'Out for Delivery',
                description: 'Your order is out for delivery',
                icon: '🏍️',
                completed: status === 'Delivered'
            },
            {
                title: 'Delivered',
                description: 'Order delivered successfully',
                icon: '🎉',
                completed: status === 'Delivered'
            }
        ];

        if (status === 'Cancelled') {
            return [
                steps[0],
                {
                    title: 'Order Cancelled',
                    description: 'This order has been cancelled',
                    date: order.date,
                    icon: '❌',
                    completed: true,
                    cancelled: true
                }
            ];
        }

        return steps;
    };

    const trackingSteps = getTrackingSteps(order.status);

    // Generate tracking number
    const trackingNumber = order.trackingNumber || 'PKG' + order.id.substring(3);

    openModal('trackingModal');

    const modalContent = `
        <div class="modal-header">
            <h2 class="modal-title">📍 Track Your Order</h2>
            <button class="close-btn" onclick="closeModal('trackingModal')">×</button>
        </div>

        <div style="padding: 2rem;">
            <!-- Order Summary -->
            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div>
                        <div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">
                            Order #${order.id}
                        </div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">
                            Placed on ${order.date}
                        </div>
                    </div>
                    <div style="background: ${getOrderStatusColor(order.status)}; color: ${getOrderStatusTextColor(order.status)}; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 700;">
                        ${order.status}
                    </div>
                </div>

                ${order.status !== 'Cancelled' ? `
                    <div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <div style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.25rem;">
                                    Tracking Number
                                </div>
                                <div style="font-family: monospace; font-size: 1.125rem; font-weight: 700; color: var(--primary-blue);">
                                    ${trackingNumber}
                                </div>
                            </div>
                            <button class="btn btn-secondary" onclick="copyTrackingNumber('${trackingNumber}')">
                                📋 Copy
                            </button>
                        </div>
                    </div>
                ` : ''}

                ${order.status === 'Shipped' || order.status === 'Delivered' ? `
                    <div style="margin-top: 1rem; padding: 1rem; background: var(--primary-blue-light); border-radius: 8px;">
                        <div style="font-weight: 600; color: var(--primary-blue-dark); margin-bottom: 0.5rem;">
                            📍 Current Location
                        </div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">
                            ${order.status === 'Delivered' ? 'Delivered to your address' : 'In transit - Expected delivery: Today by 8 PM'}
                        </div>
                    </div>
                ` : ''}
            </div>

            <!-- Tracking Timeline -->
            <div>
                <h3 style="margin-bottom: 1.5rem;">📦 Delivery Timeline</h3>
                
                <div style="position: relative;">
                    ${trackingSteps.map((step, index) => `
                        <div style="display: flex; gap: 1.5rem; margin-bottom: ${index === trackingSteps.length - 1 ? '0' : '2rem'};">
                            <!-- Timeline Line -->
                            ${index < trackingSteps.length - 1 ? `
                                <div style="position: absolute; left: 20px; top: 45px; width: 3px; height: calc(100% - 40px); background: ${step.completed ? 'var(--secondary-green)' : 'var(--border-light)'};"></div>
                            ` : ''}
                            
                            <!-- Icon -->
                            <div style="flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; background: white; border: 3px solid ${step.completed ? (step.cancelled ? 'var(--accent-red)' : 'var(--secondary-green)') : 'var(--border-light)'}; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; position: relative; z-index: 1;">
                                ${step.icon}
                            </div>
                            
                            <!-- Content -->
                            <div style="flex: 1; padding-top: 0.25rem;">
                                <div style="font-weight: 700; margin-bottom: 0.25rem; color: ${step.completed ? 'var(--text-primary)' : 'var(--text-secondary)'};">
                                    ${step.title}
                                </div>
                                <div style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.25rem;">
                                    ${step.description}
                                </div>
                                ${step.date ? `
                                    <div style="color: var(--text-secondary); font-size: 0.75rem;">
                                        ${step.date}
                                    </div>
                                ` : step.completed ? `
                                    <div style="color: var(--secondary-green); font-size: 0.75rem; font-weight: 600;">
                                        ✓ Completed
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            ${order.status !== 'Cancelled' && order.status !== 'Delivered' ? `
                <!-- Expected Delivery -->
                <div style="background: var(--secondary-green-light); padding: 1.5rem; border-radius: 12px; margin-top: 2rem; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🚚</div>
                    <div style="font-weight: 700; color: var(--secondary-green-dark); margin-bottom: 0.5rem;">
                        Expected Delivery
                    </div>
                    <div style="font-size: 1.25rem; font-weight: 700; color: var(--primary-blue);">
                        ${order.status === 'Shipped' ? 'Today by 8:00 PM' : 'Within 3-5 Business Days'}
                    </div>
                </div>
            ` : ''}

            <!-- Order Items Summary -->
            <div style="margin-top: 2rem;">
                <h3 style="margin-bottom: 1rem;">📋 Items in This Order</h3>
                <div style="background: var(--bg-light); padding: 1rem; border-radius: 8px;">
                    ${order.items.map(item => `
                        <div style="display: flex; justify-content: space-between; padding: 0.75rem 0;">
                            <div>
                                <div style="font-weight: 600;">${item.name}</div>
                                <div style="color: var(--text-secondary); font-size: 0.875rem;">Qty: ${item.quantity}</div>
                            </div>
                            <div style="font-weight: 600; color: var(--primary-blue);">
                                ₹${(item.price * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    `).join('')}
                    <div style="display: flex; justify-content: space-between; padding-top: 1rem; font-size: 1.125rem; font-weight: 700; color: var(--primary-blue); border-top: 1px solid var(--border-light);">
                        <span>Total</span>
                        <span>₹${order.total.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <!-- Actions -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">
                <button class="btn btn-primary" onclick="downloadReceipt(${orderIndex}); closeModal('trackingModal');">
                    📄 Download Receipt
                </button>
                ${order.status !== 'Cancelled' && order.status !== 'Delivered' ? `
                    <button class="btn btn-danger" onclick="if(confirm('Cancel this order?')) { cancelOrder(${orderIndex}); closeModal('trackingModal'); }">
                        ❌ Cancel Order
                    </button>
                ` : `
                    <button class="btn btn-secondary" onclick="closeModal('trackingModal')">
                        Close
                    </button>
                `}
            </div>

            ${order.status !== 'Cancelled' ? `
                <!-- Help Section -->
                <div style="margin-top: 2rem; padding: 1rem; background: var(--bg-light); border-radius: 8px; text-align: center;">
                    <div style="color: var(--text-secondary); margin-bottom: 0.5rem;">
                        Need help with your order?
                    </div>
                    <button class="btn btn-secondary" onclick="closeModal('trackingModal'); showEmergencySupport();">
                        📞 Contact Support
                    </button>
                </div>
            ` : ''}
        </div>
    `;

    const modal = document.getElementById('trackingModal');
    if (!modal) {
        const newModal = document.createElement('div');
        newModal.id = 'trackingModal';
        newModal.className = 'modal';
        newModal.innerHTML = '<div class="modal-content"></div>';
        document.body.appendChild(newModal);
    }

    document.getElementById('trackingModal').querySelector('.modal-content').innerHTML = modalContent;
}

// Copy tracking number to clipboard
function copyTrackingNumber(trackingNumber) {
    navigator.clipboard.writeText(trackingNumber).then(() => {
        showAlert('success', '✓ Tracking number copied to clipboard!');
    }).catch(() => {
        showAlert('info', 'Tracking Number: ' + trackingNumber);
    });
}

// Show order history with analytics
function showOrderHistory() {
    const container = document.getElementById('mainContainer');

    // Calculate detailed statistics
    const totalOrders = appData.orders.length;
    const totalSpent = appData.orders.filter(o => o.status !== 'Cancelled').reduce((sum, o) => sum + o.total, 0);
    const avgOrderValue = totalOrders > 0 ? totalSpent / totalOrders : 0;

    // Most ordered items
    const itemCounts = {};
    appData.orders.forEach(order => {
        order.items.forEach(item => {
            itemCounts[item.name] = (itemCounts[item.name] || 0) + item.quantity;
        });
    });
    const topItems = Object.entries(itemCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    // Monthly spending (last 6 months)
    const monthlySpending = {};
    appData.orders.forEach(order => {
        if (order.status !== 'Cancelled') {
            const month = order.date.split('/').slice(0, 2).join('/');
            monthlySpending[month] = (monthlySpending[month] || 0) + order.total;
        }
    });

    container.innerHTML = `
        <div class="section-header">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <h2 class="section-title">📊 Order History & Analytics</h2>
                    <p class="section-subtitle">Complete overview of your purchases</p>
                </div>
                <button class="btn btn-secondary" onclick="showPage('orders')">
                    ← Back to Orders
                </button>
            </div>
        </div>

        <!-- Summary Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div class="card" style="text-align: center; padding: 2rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📦</div>
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 0.5rem;">
                    ${totalOrders}
                </div>
                <div style="color: var(--text-secondary);">Total Orders</div>
            </div>

            <div class="card" style="text-align: center; padding: 2rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">💰</div>
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--secondary-green); margin-bottom: 0.5rem;">
                    ₹${totalSpent.toFixed(0)}
                </div>
                <div style="color: var(--text-secondary);">Total Spent</div>
            </div>

            <div class="card" style="text-align: center; padding: 2rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📈</div>
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--accent-orange); margin-bottom: 0.5rem;">
                    ₹${avgOrderValue.toFixed(0)}
                </div>
                <div style="color: var(--text-secondary);">Avg Order Value</div>
            </div>
        </div>

        <!-- Top Purchased Items -->
        <div class="card" style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1.5rem;">🏆 Most Purchased Items</h3>
            ${topItems.length > 0 ? `
                <div style="display: grid; gap: 1rem;">
                    ${topItems.map(([name, count], index) => `
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-light); border-radius: 8px;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="background: var(--primary-blue); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">
                                    ${index + 1}
                                </div>
                                <div>
                                    <div style="font-weight: 600;">${name}</div>
                                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                                        Ordered ${count} time${count > 1 ? 's' : ''}
                                    </div>
                                </div>
                            </div>
                            <div style="background: var(--secondary-green-light); color: var(--secondary-green-dark); padding: 0.5rem 1rem; border-radius: 20px; font-weight: 700;">
                                ${count}x
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <p style="text-align: center; color: var(--text-secondary); padding: 2rem;">
                    No purchase history yet
                </p>
            `}
        </div>

        <!-- Order Timeline -->
        <div class="card">
            <h3 style="margin-bottom: 1.5rem;">📅 Order Timeline</h3>
            <div style="display: grid; gap: 1rem;">
                ${appData.orders.slice().reverse().map((order, index) => `
                    <div style="display: flex; gap: 1rem; padding: 1rem; background: var(--bg-light); border-radius: 8px; border-left: 4px solid ${getOrderStatusColor(order.status)};">
                        <div style="flex-shrink: 0; width: 100px;">
                            <div style="font-size: 0.875rem; color: var(--text-secondary);">${order.date}</div>
                        </div>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; margin-bottom: 0.5rem;">Order #${order.id}</div>
                            <div style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.5rem;">
                                ${order.items.length} item${order.items.length > 1 ? 's' : ''} • ₹${order.total.toFixed(2)}
                            </div>
                            <div style="background: ${getOrderStatusColor(order.status)}; color: ${getOrderStatusTextColor(order.status)}; padding: 0.25rem 0.75rem; border-radius: 12px; display: inline-block; font-size: 0.75rem; font-weight: 700;">
                                ${order.status}
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-secondary" style="padding: 0.5rem 1rem;" onclick="viewOrderDetails(${appData.orders.length - 1 - index})">
                                View
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Download receipt function
function downloadReceipt(orderIndex) {
    const order = appData.orders[orderIndex];
    const user = appData.user;

    // Create receipt HTML
    const receiptHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Receipt - Order #${order.id}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Times New Roman', Times, serif;
            padding: 40px;
            background: #f5f5f5;
        }
        
        .receipt-container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        
        .header {
            text-align: center;
            border-bottom: 3px solid #4A90E2;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        
        .logo {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .company-name {
            font-size: 2rem;
            font-weight: 800;
            color: #4A90E2;
            margin-bottom: 5px;
        }
        
        .receipt-title {
            font-size: 1.5rem;
            color: #333;
            margin-top: 10px;
        }
        
        .info-section {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 8px;
        }
        
        .info-block {
            flex: 1;
        }
        
        .info-title {
            font-weight: 700;
            font-size: 1.1rem;
            margin-bottom: 10px;
            color: #4A90E2;
        }
        
        .info-text {
            color: #666;
            line-height: 1.8;
        }
        
        .order-items {
            margin-bottom: 30px;
        }
        
        .items-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #333;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
        }
        
        th {
            background: #4A90E2;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: 700;
        }
        
        td {
            padding: 12px;
            border-bottom: 1px solid #e0e0e0;
        }
        
        tr:hover {
            background: #f9f9f9;
        }
        
        .totals {
            margin-top: 20px;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 8px;
        }
        
        .total-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            font-size: 1rem;
        }
        
        .total-row.grand-total {
            border-top: 2px solid #4A90E2;
            padding-top: 15px;
            margin-top: 10px;
            font-size: 1.3rem;
            font-weight: 700;
            color: #4A90E2;
        }
        
        .status-badge {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 700;
            font-size: 0.9rem;
        }
        
        .status-processing {
            background: #D5F4E6;
            color: #27AE60;
        }
        
        .status-cancelled {
            background: rgba(231, 76, 60, 0.15);
            color: #C0392B;
        }
        
        .status-delivered {
            background: #D5F4E6;
            color: #27AE60;
        }
        
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e0e0e0;
            text-align: center;
            color: #666;
        }
        
        .thank-you {
            font-size: 1.2rem;
            font-weight: 700;
            color: #2ECC71;
            margin-bottom: 10px;
        }
        
        @media print {
            body {
                background: white;
                padding: 0;
            }
            
            .receipt-container {
                box-shadow: none;
            }
        }
    </style>
</head>
<body>
    <div class="receipt-container">
        <div class="header">
            <div class="logo">🐾</div>
            <div class="company-name">PetCare+</div>
            <div class="receipt-title">ORDER RECEIPT</div>
        </div>
        
        <div class="info-section">
            <div class="info-block">
                <div class="info-title">Order Information</div>
                <div class="info-text">
                    <strong>Order Number:</strong> ${order.id}<br>
                    <strong>Order Date:</strong> ${order.date}<br>
                    <strong>Status:</strong> <span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span>
                </div>
            </div>
            
            <div class="info-block">
                <div class="info-title">Customer Information</div>
                <div class="info-text">
                    <strong>Name:</strong> ${user.name}<br>
                    <strong>Email:</strong> ${user.email}<br>
                    <strong>Phone:</strong> ${user.phone || 'N/A'}
                </div>
            </div>
        </div>
        
        <div class="order-items">
            <div class="items-title">Order Items</div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${order.items.map(item => `
                        <tr>
                            <td>${item.name}</td>
                            <td>₹${item.price.toFixed(2)}</td>
                            <td>${item.quantity}</td>
                            <td>₹${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        
        <div class="totals">
            <div class="total-row">
                <span>Subtotal:</span>
                <span>₹${order.subtotal.toFixed(2)}</span>
            </div>
            <div class="total-row">
                <span>Delivery Fee:</span>
                <span>${order.delivery === 0 ? 'FREE' : '₹' + order.delivery.toFixed(2)}</span>
            </div>
            <div class="total-row grand-total">
                <span>Grand Total:</span>
                <span>₹${order.total.toFixed(2)}</span>
            </div>
        </div>
        
        <div class="footer">
            <div class="thank-you">Thank You for Your Order! 🐾</div>
            <p>For any questions or concerns, please contact us at support@petcare.com</p>
            <p style="margin-top: 10px; font-size: 0.9rem;">© ${new Date().getFullYear()} PetCare+. All rights reserved.</p>
        </div>
    </div>
    
    <script>
        // Auto-print on load
        window.onload = function() {
            window.print();
        };
    </script>
</body>
</html>
    `;

    // Create a new window with the receipt
    const receiptWindow = window.open('', '_blank');
    receiptWindow.document.write(receiptHTML);
    receiptWindow.document.close();

    showAlert('success', '✓ Receipt opened in new window. You can print or save as PDF!');
}

function renderSubscriptionPage() {
    const container = document.getElementById('mainContainer');
    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">⭐ Premium Plans</h2>
            <p class="section-subtitle">Choose the perfect plan for your pet</p>
        </div>
        <div class="card-grid">
            <div class="card">
                <div class="card-icon">💎</div>
                <h3 class="card-title">Basic Care</h3>
                <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary-blue); margin: 1rem 0;">
                    ₹499<span style="font-size: 1.125rem; color: var(--text-secondary); font-weight: 400;">/month</span>
                </div>
                <p class="card-description">Perfect for pet parents starting their journey</p>
                <ul style="list-style: none; margin-bottom: 1.5rem; line-height: 2.2;">
                    <li style="color: var(--text-secondary);">✅ 5% discount on medicines</li>
                    <li style="color: var(--text-secondary);">✅ Free standard delivery</li>
                    <li style="color: var(--text-secondary);">✅ Monthly health tips</li>
                    <li style="color: var(--text-secondary);">✅ Basic health guides</li>
                </ul>
                <button class="btn btn-secondary btn-full" onclick="showAlert('info', 'Subscription feature coming soon!')">Choose Plan</button>
            </div>
            <div class="card" style="border-color: var(--primary-blue); border-width: 3px; transform: scale(1.05);">
                <div style="background: var(--primary-blue); color: white; padding: 0.5rem 1rem; border-radius: 10px; font-size: 0.813rem; font-weight: 700; display: inline-block; margin-bottom: 1rem;">
                    ⭐ MOST POPULAR
                </div>
                <div class="card-icon">💎</div>
                <h3 class="card-title">Premium Care</h3>
                <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary-blue); margin: 1rem 0;">
                    ₹999<span style="font-size: 1.125rem; color: var(--text-secondary); font-weight: 400;">/month</span>
                </div>
                <p class="card-description">Most loved by pet parents</p>
                <ul style="list-style: none; margin-bottom: 1.5rem; line-height: 2.2;">
                    <li style="color: var(--text-secondary);">✅ 15% discount on medicines</li>
                    <li style="color: var(--text-secondary);">✅ Free priority delivery</li>
                    <li style="color: var(--text-secondary);">✅ 24/7 vet consultation</li>
                    <li style="color: var(--text-secondary);">✅ Personalized health plans</li>
                    <li style="color: var(--text-secondary);">✅ Priority support</li>
                </ul>
                <button class="btn btn-primary btn-full" onclick="showAlert('info', 'Subscription feature coming soon!')">Choose Plan</button>
            </div>
            <div class="card">
                <div class="card-icon">👑</div>
                <h3 class="card-title">Ultimate Care</h3>
                <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary-blue); margin: 1rem 0;">
                    ₹1999<span style="font-size: 1.125rem; color: var(--text-secondary); font-weight: 400;">/month</span>
                </div>
                <p class="card-description">Complete peace of mind</p>
                <ul style="list-style: none; margin-bottom: 1.5rem; line-height: 2.2;">
                    <li style="color: var(--text-secondary);">✅ 25% discount on medicines</li>
                    <li style="color: var(--text-secondary);">✅ Free emergency delivery</li>
                    <li style="color: var(--text-secondary);">✅ Unlimited vet consultations</li>
                    <li style="color: var(--text-secondary);">✅ Health monitoring</li>
                    <li style="color: var(--text-secondary);">✅ Dedicated support manager</li>
                </ul>
                <button class="btn btn-primary btn-full" onclick="showAlert('info', 'Subscription feature coming soon!')">Choose Plan</button>
            </div>
        </div>
    `;
}

// ===================================
// Product Filter Functions
// ===================================
function filterProducts(category) {
    const products = document.querySelectorAll('#popularProducts .medicine-card');

    // Reset all filter buttons to inactive state
    document.querySelectorAll('[id^="filter-"]').forEach(btn => {
        btn.classList.remove('active');
        btn.style.background = 'white';
        btn.style.color = '#666';
        btn.style.border = '2px solid #E0E0E0';
    });

    // Activate current filter button with blue style
    const activeBtn = document.getElementById('filter-' + category);
    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.style.background = '#E3F2FD';
        activeBtn.style.color = '#1976D2';
        activeBtn.style.border = '2px solid #1976D2';
    }

    // Filter products
    products.forEach(product => {
        if (category === 'all') {
            product.style.display = 'block';
        } else {
            if (product.dataset.category === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        }
    });
}

function showAllProducts() {
    const container = document.getElementById('mainContainer');

    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">🛍️ All Products</h2>
            <p class="section-subtitle">Browse our complete catalog of ${medicineDatabase.length} items</p>
        </div>

        <div style="margin-bottom: 2rem;">
            <button class="btn btn-secondary" onclick="showPage('home')">← Back to Home</button>
        </div>

        <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
            <button class="btn btn-secondary active" onclick="filterAllProducts('all')" id="filterAll-all">All</button>
            <button class="btn btn-secondary" onclick="filterAllProducts('supplement')" id="filterAll-supplement">💊 Supplements</button>
            <button class="btn btn-secondary" onclick="filterAllProducts('treatment')" id="filterAll-treatment">🩺 Treatments</button>
            <button class="btn btn-secondary" onclick="filterAllProducts('grooming')" id="filterAll-grooming">🛁 Grooming</button>
            <button class="btn btn-secondary" onclick="filterAllProducts('kit')" id="filterAll-kit">🎁 Care Kits</button>
            <button class="btn btn-secondary" onclick="filterAllProducts('dental')" id="filterAll-dental">🦷 Dental</button>
            <button class="btn btn-secondary" onclick="filterAllProducts('accessory')" id="filterAll-accessory">🧰 Accessories</button>
        </div>

        <div class="medicine-results" id="allProductsContainer">
            ${medicineDatabase.map(medicine => `
                <div class="medicine-card" data-category="${medicine.category}">
                    <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">${medicine.image}</div>
                    <div class="medicine-name">${medicine.name}</div>
                    <div class="medicine-type">${medicine.type}</div>
                    <div class="medicine-description">${medicine.description}</div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin: 1rem 0;">
                        <div class="medicine-price">₹${medicine.price}</div>
                        <div style="color: ${medicine.stock > 10 ? 'var(--secondary-green)' : 'var(--accent-orange)'}; font-size: 0.875rem; font-weight: 600;">
                            ${medicine.stock > 10 ? '✓ In Stock' : '⚠️ Low Stock'}
                        </div>
                    </div>
                    <button class="btn btn-primary btn-full" onclick="addToCart(${medicine.id})">
                        🛒 Add to Cart
                    </button>
                </div>
            `).join('')}
        </div>
    `;
}

function filterAllProducts(category) {
    const products = document.querySelectorAll('#allProductsContainer .medicine-card');

    // Reset all filter buttons
    document.querySelectorAll('[id^="filterAll-"]').forEach(btn => {
        btn.classList.remove('active');
    });

    // Activate current filter button
    const activeBtn = document.getElementById('filterAll-' + category);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Filter products
    let visibleCount = 0;
    products.forEach(product => {
        if (category === 'all') {
            product.style.display = 'block';
            visibleCount++;
        } else {
            if (product.dataset.category === category) {
                product.style.display = 'block';
                visibleCount++;
            } else {
                product.style.display = 'none';
            }
        }
    });

    // Update subtitle with count
    const subtitle = document.querySelector('.section-subtitle');
    if (category === 'all') {
        subtitle.textContent = `Browse our complete catalog of ${medicineDatabase.length} items`;
    } else {
        subtitle.textContent = `Showing ${visibleCount} ${category} products`;
    }
}

// ===================================
// New Feature Functions
// ===================================

// Health Status Checker
function showHealthChecker() {
    if (appData.pets.length === 0) {
        showAlert('info', 'Please add a pet first to check health status');
        showPage('pets');
        return;
    }

    const container = document.getElementById('mainContainer');
    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">❤️ Pet Health Status Checker</h2>
            <p class="section-subtitle">Quick assessment of your pet's health</p>
        </div>

        <div class="card">
            <h3 style="margin-bottom: 1.5rem;">Select Your Pet</h3>
            <select id="healthPetSelect" class="form-input" style="margin-bottom: 1.5rem;">
                ${appData.pets.map(pet => `
                    <option value="${pet._id}">${pet.name} (${pet.type})</option>
                `).join('')}
            </select>

            <h3 style="margin-bottom: 1rem;">Health Indicators (Select all that apply)</h3>
            <div style="display: grid; gap: 1rem;">
                <label style="display: flex; align-items: center; gap: 0.5rem; padding: 1rem; border: 1px solid var(--border-light); border-radius: 8px; cursor: pointer;">
                    <input type="checkbox" id="symptom1" value="appetite">
                    <span>Good Appetite</span>
                </label>
                <label style="display: flex; align-items: center; gap: 0.5rem; padding: 1rem; border: 1px solid var(--border-light); border-radius: 8px; cursor: pointer;">
                    <input type="checkbox" id="symptom2" value="energy">
                    <span>High Energy Level</span>
                </label>
                <label style="display: flex; align-items: center; gap: 0.5rem; padding: 1rem; border: 1px solid var(--border-light); border-radius: 8px; cursor: pointer;">
                    <input type="checkbox" id="symptom3" value="coat">
                    <span>Shiny Coat</span>
                </label>
                <label style="display: flex; align-items: center; gap: 0.5rem; padding: 1rem; border: 1px solid var(--border-light); border-radius: 8px; cursor: pointer;">
                    <input type="checkbox" id="symptom4" value="eyes">
                    <span>Clear Eyes</span>
                </label>
                <label style="display: flex; align-items: center; gap: 0.5rem; padding: 1rem; border: 1px solid var(--border-light); border-radius: 8px; cursor: pointer;">
                    <input type="checkbox" id="symptom5" value="behavior">
                    <span>Normal Behavior</span>
                </label>
            </div>

            <button class="btn btn-primary btn-full" style="margin-top: 2rem;" onclick="analyzeHealth()">
                Analyze Health Status
            </button>
        </div>

        <div id="healthResults" style="display: none; margin-top: 2rem;"></div>
    `;
}

function analyzeHealth() {
    const symptoms = ['symptom1', 'symptom2', 'symptom3', 'symptom4', 'symptom5'];
    const checked = symptoms.filter(id => document.getElementById(id).checked).length;
    const percentage = (checked / symptoms.length) * 100;

    let status, color, recommendation;

    if (percentage >= 80) {
        status = 'Excellent Health';
        color = 'var(--secondary-green)';
        recommendation = 'Your pet is in great health! Continue with regular care and checkups.';
    } else if (percentage >= 60) {
        status = 'Good Health';
        color = 'var(--primary-blue)';
        recommendation = 'Your pet is healthy but could benefit from some improvements. Consider supplements.';
    } else if (percentage >= 40) {
        status = 'Fair Health';
        color = 'var(--accent-orange)';
        recommendation = 'Your pet may need attention. Schedule a vet visit soon.';
    } else {
        status = 'Needs Attention';
        color = 'var(--accent-red)';
        recommendation = 'Please consult a veterinarian as soon as possible.';
    }

    const resultsDiv = document.getElementById('healthResults');
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = `
        <div class="card" style="border-left: 4px solid ${color};">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="font-size: 3rem;">
                    ${percentage >= 80 ? '🌟' : percentage >= 60 ? '👍' : percentage >= 40 ? '⚠️' : '🚨'}
                </div>
                <div>
                    <h3 style="color: ${color}; margin-bottom: 0.5rem;">${status}</h3>
                    <div style="font-size: 1.5rem; font-weight: 700;">${percentage.toFixed(0)}% Health Score</div>
                </div>
            </div>
            <p style="font-size: 1.125rem; margin-bottom: 1.5rem;">${recommendation}</p>
            
            ${percentage < 60 ? `
                <div style="background: var(--bg-light); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                    <h4 style="margin-bottom: 1rem;">Recommended Products:</h4>
                    <div style="display: grid; gap: 0.5rem;">
                        <a href="#" onclick="showPage('home')" style="color: var(--primary-blue);">• PetVit Plus - Daily Vitamins</a>
                        <a href="#" onclick="showPage('home')" style="color: var(--primary-blue);">• ImmunoBoost - Immune Support</a>
                        <a href="#" onclick="showEmergencySupport()" style="color: var(--accent-red);">• Emergency Support →</a>
                    </div>
                </div>
            ` : ''}
        </div>
    `;

    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// Medical Records
function showMedicalRecords() {
    if (appData.pets.length === 0) {
        showAlert('info', 'Please add a pet first to manage medical records');
        showPage('pets');
        return;
    }

    const container = document.getElementById('mainContainer');
    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">📋 Pet Medical Records</h2>
            <p class="section-subtitle">Complete medical history and appointments</p>
        </div>

        ${appData.pets.map(pet => `
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1.5rem;">
                    <div>
                        <h3 style="margin-bottom: 0.5rem;">${pet.name}</h3>
                        <div style="color: var(--text-secondary);">${pet.type} • ${pet.breed || 'Mixed'} • ${pet.age}</div>
                    </div>
                    <button class="btn btn-primary" onclick="addMedicalRecord('${pet._id}')">
                        ➕ Add Record
                    </button>
                </div>

                <div style="background: var(--bg-light); border-radius: 8px; padding: 1.5rem;">
                    <h4 style="margin-bottom: 1rem;">Medical History:</h4>
                    
                    <!-- Vaccinations -->
                    <div style="margin-bottom: 1rem;">
                        <strong>💉 Vaccinations:</strong>
                        <div style="margin-top: 0.5rem; color: var(--text-secondary);">
                            ${appData.vaccinations.filter(v => v.petId === pet._id).length > 0
            ? appData.vaccinations.filter(v => v.petId === pet._id).map(v =>
                `• ${v.vaccineName} - ${v.date}`
            ).join('<br>')
            : 'No vaccination records yet'}
                        </div>
                    </div>

                    <!-- Allergies -->
                    <div style="margin-bottom: 1rem;">
                        <strong>⚠️ Allergies:</strong>
                        <div style="margin-top: 0.5rem; color: var(--text-secondary);">
                            ${pet.allergies || 'None recorded'}
                        </div>
                    </div>

                    <!-- Weight Tracking -->
                    <div style="margin-bottom: 1rem;">
                        <strong>⚖️ Current Weight:</strong>
                        <div style="margin-top: 0.5rem; color: var(--text-secondary);">
                            ${pet.weight ? pet.weight + ' kg' : 'Not recorded'}
                        </div>
                    </div>

                    <!-- Quick Actions -->
                    <div style="display: flex; gap: 0.5rem; margin-top: 1.5rem;">
                        <button class="btn btn-secondary" onclick="showPage('vaccinations')">View All Vaccinations</button>
                        <button class="btn btn-secondary" onclick="exportMedicalRecord('${pet._id}')">📄 Export PDF</button>
                    </div>
                </div>
            </div>
        `).join('')}
    `;
}

function addMedicalRecord(petId) {
    showAlert('info', 'Medical record feature - Coming soon! Use vaccinations for now.');
    showPage('vaccinations');
}

function exportMedicalRecord(petId) {
    const pet = appData.pets.find(p => p._id === petId);
    const vaccinations = appData.vaccinations.filter(v => v.petId === petId);

    const recordHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>Medical Record - ${pet.name}</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 40px; }
        h1 { color: #4A90E2; }
        .section { margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 8px; }
    </style>
</head>
<body>
    <h1>🐾 Medical Record: ${pet.name}</h1>
    <div class="section">
        <h3>Pet Information</h3>
        <p><strong>Name:</strong> ${pet.name}</p>
        <p><strong>Type:</strong> ${pet.type}</p>
        <p><strong>Breed:</strong> ${pet.breed || 'Mixed'}</p>
        <p><strong>Age:</strong> ${pet.age}</p>
        <p><strong>Weight:</strong> ${pet.weight || 'Not recorded'} kg</p>
    </div>
    <div class="section">
        <h3>Vaccination History</h3>
        ${vaccinations.length > 0
            ? vaccinations.map(v => `<p>• ${v.vaccineName} - ${v.date}</p>`).join('')
            : '<p>No vaccinations recorded</p>'}
    </div>
    <div class="section">
        <h3>Allergies</h3>
        <p>${pet.allergies || 'None recorded'}</p>
    </div>
    <p style="margin-top: 30px; color: #666;">Generated on ${new Date().toLocaleDateString()}</p>
</body>
</html>`;

    const recordWindow = window.open('', '_blank');
    recordWindow.document.write(recordHTML);
    recordWindow.document.close();
    showAlert('success', 'Medical record opened in new window. You can print or save it!');
}

// Emergency Support
function showEmergencySupport() {
    openModal('emergencyModal');
    const modalContent = `
        <div class="modal-header" style="background: var(--accent-red); color: white;">
            <h2 class="modal-title">🚨 Emergency Support</h2>
            <button class="close-btn" onclick="closeModal('emergencyModal')" style="color: white;">×</button>
        </div>

        <div style="padding: 2rem;">
            <div style="background: rgba(231, 76, 60, 0.1); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-red); margin-bottom: 2rem;">
                <h3 style="color: var(--accent-red); margin-bottom: 0.5rem;">⚠️ Is this a life-threatening emergency?</h3>
                <p style="margin-bottom: 1rem;">If your pet is experiencing:</p>
                <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
                    <li>Difficulty breathing</li>
                    <li>Severe bleeding</li>
                    <li>Unconsciousness</li>
                    <li>Seizures</li>
                    <li>Poisoning</li>
                </ul>
                <p style="margin-top: 1rem; font-weight: 700; color: var(--accent-red);">
                    Call your nearest emergency vet immediately!
                </p>
            </div>

            <h3 style="margin-bottom: 1.5rem;">24/7 Emergency Services</h3>

            <div class="card" style="margin-bottom: 1rem; border-left: 4px solid var(--primary-blue);">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h4 style="margin-bottom: 0.5rem;">📞 Emergency Hotline</h4>
                        <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary-blue);">
                            1800-PET-CARE
                        </div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Available 24/7</div>
                    </div>
                    <button class="btn btn-danger" onclick="window.location.href='tel:1800738273'">
                        📞 Call Now
                    </button>
                </div>
            </div>

            <div class="card" style="margin-bottom: 1rem;">
                <h4 style="margin-bottom: 1rem;">💬 Chat with Vet</h4>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                    Get instant advice from our veterinary team
                </p>
                <button class="btn btn-primary btn-full" onclick="startEmergencyChat()">
                    Start Emergency Chat
                </button>
            </div>

            <div class="card" style="margin-bottom: 1rem;">
                <h4 style="margin-bottom: 1rem;">🏥 Find Nearest Emergency Clinic</h4>
                <button class="btn btn-secondary btn-full" onclick="findNearestClinic()">
                    📍 Locate Clinics Near Me
                </button>
            </div>

            <div class="card" style="background: var(--bg-light);">
                <h4 style="margin-bottom: 1rem;">🚑 Request Home Visit (Premium)</h4>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                    Emergency vet will visit your home within 2 hours
                </p>
                <button class="btn btn-primary btn-full" onclick="requestHomeVisit()">
                    Request Emergency Home Visit
                </button>
            </div>
        </div>
    `;

    document.getElementById('emergencyModal').querySelector('.modal-content').innerHTML = modalContent;
}

function startEmergencyChat() {
    showAlert('info', '🔜 Emergency chat feature coming soon! Please call our hotline for immediate assistance.');
}

function findNearestClinic() {
    showAlert('info', '🔜 Clinic locator coming soon! Meanwhile, call 1800-PET-CARE for clinic information.');
}

function requestHomeVisit() {
    showAlert('info', '🔜 Home visit booking coming soon! Please call our emergency hotline to arrange.');
}

// Pet Health Quiz
function startHealthQuiz() {
    if (appData.pets.length === 0) {
        showAlert('info', 'Please add a pet first to take the health quiz');
        showPage('pets');
        return;
    }

    // Redirect to existing health questionnaire
    showPage('home');
    setTimeout(() => {
        const quizSection = document.querySelector('.section-title');
        if (quizSection) {
            quizSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 500);
    showAlert('info', 'Health quiz is available in the home page. Scroll down!');
}

// Pet Parenting Guide
function showParentingGuide() {
    const container = document.getElementById('mainContainer');
    container.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">🐕 Pet Parenting Guide</h2>
            <p class="section-subtitle">Expert advice for raising happy, healthy pets</p>
        </div>

        <div class="card-grid">
            <!-- Puppy Care -->
            <div class="card">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">🐶</div>
                <h3 style="text-align: center; margin-bottom: 1rem;">Puppy Care Guide</h3>
                <ul style="color: var(--text-secondary); margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li>Feeding schedule: 3-4 times daily</li>
                    <li>Training basics: House training, commands</li>
                    <li>Socialization period: 3-14 weeks</li>
                    <li>Vaccination schedule</li>
                </ul>
                <button class="btn btn-secondary btn-full" onclick="showDetailedGuide('puppy')">
                    Learn More
                </button>
            </div>

            <!-- Adult Dog Care -->
            <div class="card">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">🦮</div>
                <h3 style="text-align: center; margin-bottom: 1rem;">Adult Dog Care</h3>
                <ul style="color: var(--text-secondary); margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li>Feeding: 2 times daily</li>
                    <li>Exercise: 30-60 minutes daily</li>
                    <li>Dental care routine</li>
                    <li>Annual health checkups</li>
                </ul>
                <button class="btn btn-secondary btn-full" onclick="showDetailedGuide('adult')">
                    Learn More
                </button>
            </div>

            <!-- Cat Care -->
            <div class="card">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">🐱</div>
                <h3 style="text-align: center; margin-bottom: 1rem;">Cat Care Guide</h3>
                <ul style="color: var(--text-secondary); margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li>Litter box training</li>
                    <li>Scratching post essentials</li>
                    <li>Indoor cat enrichment</li>
                    <li>Grooming needs</li>
                </ul>
                <button class="btn btn-secondary btn-full" onclick="showDetailedGuide('cat')">
                    Learn More
                </button>
            </div>

            <!-- Senior Pet Care -->
            <div class="card">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">🐕‍🦺</div>
                <h3 style="text-align: center; margin-bottom: 1rem;">Senior Pet Care</h3>
                <ul style="color: var(--text-secondary); margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li>Joint support supplements</li>
                    <li>Modified exercise routine</li>
                    <li>Dietary adjustments</li>
                    <li>Regular vet visits</li>
                </ul>
                <button class="btn btn-secondary btn-full" onclick="showDetailedGuide('senior')">
                    Learn More
                </button>
            </div>

            <!-- Nutrition Guide -->
            <div class="card">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">🍖</div>
                <h3 style="text-align: center; margin-bottom: 1rem;">Nutrition Guide</h3>
                <ul style="color: var(--text-secondary); margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li>Balanced diet requirements</li>
                    <li>Foods to avoid</li>
                    <li>Portion control</li>
                    <li>Supplement recommendations</li>
                </ul>
                <button class="btn btn-secondary btn-full" onclick="showDetailedGuide('nutrition')">
                    Learn More
                </button>
            </div>

            <!-- Training Tips -->
            <div class="card">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">🎾</div>
                <h3 style="text-align: center; margin-bottom: 1rem;">Training & Behavior</h3>
                <ul style="color: var(--text-secondary); margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li>Basic commands</li>
                    <li>Positive reinforcement</li>
                    <li>Common behavioral issues</li>
                    <li>Socialization tips</li>
                </ul>
                <button class="btn btn-secondary btn-full" onclick="showDetailedGuide('training')">
                    Learn More
                </button>
            </div>
        </div>
    `;
}

function showDetailedGuide(type) {
    showAlert('info', `🔜 Detailed ${type} guide coming soon! Check back for expert articles and videos.`);
}

// Delivery Options
function showDeliveryOptions() {
    openModal('deliveryModal');
    const modalContent = `
        <div class="modal-header">
            <h2 class="modal-title">🚚 Medicine Delivery Options</h2>
            <button class="close-btn" onclick="closeModal('deliveryModal')">×</button>
        </div>

        <div style="padding: 2rem;">
            <div class="card" style="border-left: 4px solid var(--secondary-green); margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <div>
                        <h3 style="color: var(--secondary-green); margin-bottom: 0.5rem;">
                            🚚 Standard Delivery
                        </h3>
                        <div style="color: var(--text-secondary); margin-bottom: 0.5rem;">
                            Delivery in 3-5 business days
                        </div>
                        <div style="font-size: 1.25rem; font-weight: 700; color: var(--primary-blue);">
                            ₹27 (FREE for orders ≥ ₹500)
                        </div>
                    </div>
                    <div style="background: var(--secondary-green-light); color: var(--secondary-green-dark); padding: 0.5rem 1rem; border-radius: 20px; font-weight: 700;">
                        Default
                    </div>
                </div>
            </div>

            <div class="card" style="border-left: 4px solid var(--primary-blue); margin-bottom: 1.5rem;">
                <h3 style="color: var(--primary-blue); margin-bottom: 0.5rem;">
                    ⚡ Express Delivery
                </h3>
                <div style="color: var(--text-secondary); margin-bottom: 0.5rem;">
                    Delivery within 24 hours
                </div>
                <div style="font-size: 1.25rem; font-weight: 700; color: var(--primary-blue);">
                    ₹99
                </div>
            </div>

            <div class="card" style="border-left: 4px solid var(--accent-red); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-red); margin-bottom: 0.5rem;">
                    🚨 Emergency Delivery
                </h3>
                <div style="color: var(--text-secondary); margin-bottom: 0.5rem;">
                    Delivery within 2-4 hours (Available in select areas)
                </div>
                <div style="font-size: 1.25rem; font-weight: 700; color: var(--primary-blue);">
                    ₹199
                </div>
            </div>

            <div class="card" style="background: var(--bg-light);">
                <h3 style="margin-bottom: 1rem;">📦 Scheduled Delivery</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                    Choose a specific date and time slot for delivery
                </p>
                <div style="font-size: 1.25rem; font-weight: 700; color: var(--primary-blue);">
                    ₹49
                </div>
            </div>

            <div style="background: var(--secondary-green-light); padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                <h4 style="color: var(--secondary-green-dark); margin-bottom: 0.5rem;">
                    💡 Pro Tip
                </h4>
                <p style="color: var(--secondary-green-dark);">
                    Add items worth ₹${500 - (appData.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) || 0)} more to get FREE standard delivery!
                </p>
            </div>
        </div>
    `;

    document.getElementById('deliveryModal').querySelector('.modal-content').innerHTML = modalContent;
}

// ===================================
// Initialize on page load
// ===================================
window.addEventListener('DOMContentLoaded', init);

// Add CSS animation for slideOut
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        to {
            transform: translateX(120%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);