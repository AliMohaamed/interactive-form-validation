# Interactive Form Validation

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

A sophisticated client-side form validation system built with vanilla HTML, CSS, and JavaScript. This project implements real-time validation with detailed error feedback, creating a smooth and responsive user experience without relying on any external libraries.

## ✨ Features

- **Real-time Validation**: Validates inputs as the user types, providing immediate feedback
- **Comprehensive Validation Rules**:
  - Name validation with proper formatting requirements
  - Email validation with RFC-compliant patterns
  - Password strength evaluation with multiple criteria
  - Required field validation for radio buttons (gender)
  - Multiple selection validation for checkboxes (minimum 2 sports)
  - Dropdown selection validation (country)
- **Elegant Error Handling**: Clear, user-friendly error messages appear directly beneath the relevant fields
- **Form Reset Functionality**: Completely clears the form and removes all error messages
- **Accessible Design**: Follows web accessibility best practices
- **Cross-browser Compatible**: Works seamlessly across all modern browsers

## 🚀 Demo

[View Live Demo](https://alimohaamed.github.io/interactive-form-validation/) (placeholder link)

![Form Validation Demo](./assets/demo-screenshot.png)

## 🔧 Technical Implementation

The validation system is built around a modular architecture that makes it easy to maintain and extend:

### Core Validation Engine

The JavaScript implementation utilizes event delegation through the form container to efficiently capture input events:

```javascript
formContainer.addEventListener("input", function (event) {
  if (event.target.tagName === "INPUT") {
    if (event.target.getAttribute("name") === "fullName")
      validateInput(fullName, validateName);
    else if (event.target.getAttribute("name") === "email")
      validateInput(email, validateEmail);
    else if (event.target.getAttribute("name") === "password")
      validateInput(password, validatePassword);
  }
});
```

### Validation Methods

Each field type has its own specialized validation function:

- **Text Inputs**: Uses `validateInput()` with specific validation criteria
- **Selection Fields**: Uses `validateSelection()` for radio buttons, checkboxes, and dropdowns
- **Submit Validation**: All fields are re-validated upon form submission

### Error Handling System

The validation system dynamically creates and removes error messages:

```javascript
function validateSelection(items, minCount, errorMessage) {
  // Selection validation logic
  if (selectedItems.length < minCount) {
    if (!errorElement) {
      errorElement = document.createElement("p");
      errorElement.classList.add("error-message");
      errorElement.textContent = errorMessage;
      container.appendChild(errorElement);
    }
  } else {
    if (errorElement) errorElement.remove();
  }
}
```

## 📋 Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/AliMohaamed/interactive-form-validation.git
   ```

2. Open `index.html` in your browser or set up with your preferred server.

3. Customize validation rules:
   - Edit the validation functions in `js/validation.js` to modify requirements
   - Adjust error messages in the validation functions
   - Style error messages by modifying the `.error-message` class in CSS

## 🎨 Customization

### Styling

The form uses a modular CSS architecture with easy customization:

- `.input-error` class highlights invalid fields
- `.error-message` class styles error feedback
- Form element styles are separated for easy theming

### Extending Validation Rules

To add new validation rules:

1. Create a new validation function in the JavaScript file
2. Add the appropriate event listener and handler
3. Update the submission validation to include your new field

Example for adding a phone number validation:

```javascript
function validatePhone(value) {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(value) ? null : "Please enter a valid phone number";
}

// Add to input event listener
if (event.target.getAttribute("name") === "phoneNumber")
  validateInput(phoneNumber, validatePhone);

// Add to submit validation
btnSubmit.addEventListener("click", function (e) {
  // Existing validations
  validateInput(phoneNumber, validatePhone);
});
```

## 🔍 Code Structure

```
interactive-form-validation/
├── index.html          # Main HTML form
├── css/
│   └── styles.css      # Styling for form and validation elements
├── js/
│   └── validation.js   # Core validation logic
└── assets/
    └── demo-screenshot.png
```

## 🧪 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)


This project by Ali Mohamed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
