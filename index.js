//only numbers
function onlyNumbers(value) {
    return value = String(value).replace(/\D/g, "");
}

function size(value) {
    value = onlyNumbers(value);

    return value.length();
}

function formatZipcode(value) {
    value = onlyNumbers(value);

    if (value.length === 0 || value.length < 8 || value.length > 8) {
        return "Invalid zip code!";
    }

    return value.slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2");
}

function formatPhoneNumber(value) {
    value = onlyNumbers(value);

    if (value.length < 9 || value.length > 11) {
        return "Invalid phone number!";
    }

    return value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
}

function formatCpf(value) {
    value = onlyNumbers(value);
    let check = checkCpf(value);

    if (check === false) {
        return "Invalid cpf!";
    }

    if (value.length === 0 || value.length < 11 || value.length > 11) {
        return "Invalid cpf!";
    }

    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function formatRg(value) {
    value = onlyNumbers(value);

    if (value.length === 0 || value.length < 8 || value.length > 8) {
        return "Ivalid rg";
    }

    return value.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");
}

function formatCnpj(value) {
    value = onlyNumbers(value);
    let check = checkCnpj(value);

    if (check === false) {
        return "Invalid cnpj";
    }

    if (value.length === 0 || value.length < 14 || value.length > 14) {
        return "Invalid cnpj";
    }

    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}

function ageBirthday(value) {
    value = onlyNumbers(value);
    value = value.slice(0, 8);

    let date = new Date();

    let yearNow = date.getFullYear();
    let monthNow = date.getMonth() + 1;
    let dayNow = date.getDay();

    let year = value.slice(0, 4);
    let month = value.slice(5, 6);
    let day = value.slice(6, 8);

    year = +year;
    month = +month;
    day = +day;

    let years = yearNow - year;

    if (monthNow < month || monthNow == month && dayNow < day) {
        years--;
    }

    return years < 0 ? 0 : years;
}

function checkEmail(value) {
    if (value.length === 0) {
        return false;
    }

    value.trim();
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegex.test(value)) {
        return true;
    }

    return false;
}

function checkCpf(value) {
    let sum, rest;
    sum = 0;

    if (value.length === 0 || value.length < 11 || value.length > 11) {
        return false;
    }

    if (value == "00000000000" || value == "11111111111" || value == "22222222222"
        || value == "33333333333" || value == "44444444444" || value == "55555555555"
        || value == "66666666666" || value == "77777777777" || value == "88888888888"
        || value == "99999999999") {
        return false;
    }

    for (i = 1; i <= 9; i++) {
        sum = sum + parseInt(value.substring(i - 1, i)) * (11 - i);
    }

    rest = sum % 11;

    if (rest == 10 || rest == 11 || rest < 2) {
        rest = 0;
    } else {
        rest = 11 - rest;
    }

    if (rest != parseInt(value.substring(9, 10))) {
        return false;
    }

    sum = 0;

    for (i = 1; i <= 10; i++) {
        sum = sum + parseInt(value.substring(i - 1, i)) * (12 - i);
    }
    rest = sum % 11;

    if (rest == 10 || rest == 11 || rest < 2) {
        rest = 0;
    } else {
        rest = 11 - rest;
    }

    if (rest != parseInt(value.substring(10, 11))) {
        return false;
    }

    return true;
}

function checkCnpj(value) {
    value = onlyNumbers(value);

    if (value == '') {
        return false;
    }

    if (value.length != 14) {
        return false;
    }

    if (value == "00000000000000" || value == "11111111111111" || value == "22222222222222" ||
        value == "33333333333333" || value == "44444444444444" || value == "55555555555555" ||
        value == "66666666666666" || value == "77777777777777" || value == "88888888888888" ||
        value == "99999999999999") {
        return false;
    }

    let tam = value.length - 2;
    let numbers = value.substring(0, tam);
    let digits = value.substring(tam);
    let sum = 0;
    let pos = tam - 7;

    for (i = tam; i >= 1; i--) {
        sum += numbers.charAt(tam - i) * pos--;
        if (pos < 2)
            pos = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;

    if (result != digits.charAt(0)) {
        return false;
    }

    tam = tam + 1;
    numbers = value.substring(0, tam);
    sum = 0;
    pos = tam - 7;

    for (i = tam; i >= 1; i--) {
        sum += numbers.charAt(tam - i) * pos--;
        if (pos < 2)
            pos = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - sum % 11;

    if (result != digits.charAt(1)) {
        return false;
    }

    return true;
}

function checkPassword(value) {
    let rangeLengthRegex = /^.{6,18}$/;
    let invalidCharactersRegex = /[^A-Za-z0-9]+/;
    let validCharactersRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])/;

    if (!rangeLengthRegex.test(value)) {
        return 'Password too short or too long';
    }

    if (invalidCharactersRegex.test(value)) {
        return 'Invalid characters';
    }

    if (!validCharactersRegex.test(value)) {
        return "Weak password";
    }

    return "Valid password";
}

module.exports = {
    formatRg,
    formatCpf,
    formatCnpj,
    ageBirthday,
    formatZipcode,
    formatPhoneNumber,
    checkCpf,
    checkCnpj,
    checkEmail,
    checkPassword,
    size
};
