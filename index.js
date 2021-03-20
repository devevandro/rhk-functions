function formatCep(value) {
    return value = String(value).replace(/\D/g, "").slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2");
}

function formatMoney(value) {

}

module.exports = {
    formatCep,
    formatMoney
};

console.log(formatCep(86300000));
