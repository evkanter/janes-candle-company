function updateValue() {
    var amount = Number(document.getElementById('amount').value);
    var taxPercent = Number(document.getElementById('taxRate').value);
    var taxRate = .01 * Number(taxPercent);
    var taxPaid = Number(amount) * Number(taxRate);
    var total = Number(amount) + Number(taxPaid);

    document.getElementById("entered-value").innerHTML = convertToDollars(amount);
    document.getElementById("sales-tax-paid").innerHTML = convertToDollars(taxPaid);
    document.getElementById("sales-tax-percent").innerHTML = convertToPercent(taxPercent);
    document.getElementById("total-value").innerHTML = convertToDollars(total);
}
function convertToDollars(amount) {
    return amount.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function convertToPercent(amount) {
    return amount.toLocaleString('en-us', { minimumFractionDigits: 0, maximumFractionDigits: 3 });
}