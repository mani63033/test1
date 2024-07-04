function validateEmail(email) {
    if (!email) {
        return 'Email is required';
    }
    if (typeof email !== 'string') {
        return 'Email must be a string';
    }
    if (!email.includes('@')) {
        return 'Email must include @';
    }
    return null;
}

function validatePassword(password) {
    if (!password) {
        return 'Password is required';
    }
    if (typeof password !== 'string') {
        return 'Password must be a string';
    }
    if (password.length < 8) {
        return 'Password must be at least 8 characters';
    }
    return null;
}

function validatePhone(phone) {
    if (!phone) {
        return 'Phone is required';
    }
    if (typeof phone === 'string') {
        return 'Phone must not be a string';
    }
    if (phone.length > 10) {
        return 'Phone must be less than 20 characters';
    }
    return null;
}

module.exports = {
    validateEmail,
    validatePassword,
    validatePhone
};