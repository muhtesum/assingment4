
// Display ticket quantity
function displayQuantity(id, isIncrease) {
    let newCount;
    const inputElement = document.getElementById(id);
    const inputNumber = parseInt(inputElement.value);
    if (isIncrease) {
        newCount = inputNumber + 1;
    } else {
        newCount = inputNumber - 1;
    }
    inputElement.value = newCount;
}

// get and display subtotal  
function getSubtotal() {

    const subTotalElement = document.getElementById("subtotal");
    const firstClassQuantity = parseInt(document.getElementById("first-class-quantity").value);
    const economyClassQuantity = parseInt(document.getElementById("economy-quantity").value);
    const subtotal = firstClassQuantity * 150 + economyClassQuantity * 100;
    subTotalElement.innerText = subtotal;

    return subtotal;
}

// Get and display tax amount
function getTax(subtotal) {
    const taxElement = document.getElementById("tax");
    const tax = subtotal * 0.1;
    taxElement.innerText = tax;
    return tax;
}

// Display grand total 
function displayGrandTotal(subtotal, tax) {
    const grandTotalElement = document.getElementById("grand-total");
    const grandTotal = subtotal + tax;
    grandTotalElement.innerText = grandTotal;
}

// Display ticket quantity subtotal tax and grand total
function displayQuantityTotal(id, isIncrease) {
    const inputQuantity = document.getElementById((id))
    if (isIncrease == true || inputQuantity.value > 0) {

        displayQuantity(id, isIncrease);
        const subTotal = getSubtotal();
        const tax = getTax(subTotal)
        displayGrandTotal(subTotal, tax);
    }
}

// Get all click Event listener 
function getAllEvent(clickId, quantityId, isIncreas) {
    document.getElementById(clickId).addEventListener("click", function () {
        displayQuantityTotal(quantityId, isIncreas);
    })
}


// Display first-class-ticket and total  on click 

// Increase ticket quantity with subtotal,tax and grand total
getAllEvent("increase-first-class", "first-class-quantity", true)

// Disincrease ticket quantity with subtotal, tax and grand total 
getAllEvent("disincrease-first-class", "first-class-quantity", false)


//  Display economy class ticket and total onl click

// Increase ticket quantity with subtotal,tax and grand total
getAllEvent("increase-economy", "economy-quantity", true)

// Disincrease ticket quantity with subtotal, tax and grand total 
getAllEvent("disincrease-economy", "economy-quantity", false)


// Display booking summary
function displayBookingSummary(summaryid, mainid) {
    if (mainid == "grand-total") {
        document.getElementById(summaryid).innerText = document.getElementById(mainid).innerText;
    } else {
        document.getElementById(summaryid).innerText = document.getElementById(mainid).value;
    }
}


// Display successful massage on click book now button
document.getElementById("book-now").addEventListener("click", function () {

    // check if the customer click on book now without select any number of  ticket
    const firstClassQuantity = document.getElementById("first-class-quantity").value;
    const economyClassQuantity = document.getElementById("economy-quantity").value;
    if (firstClassQuantity == 0 && economyClassQuantity == 0) {

        document.querySelector(".warning-massage").style.display = "block"
        document.querySelector(".booking-compleat-massage").style.display = "none";
    } else {
        // Display booking successful massage block
        document.querySelector(".booking-compleat-massage").style.display = "block";
        document.querySelector(".warning-massage").style.display = "none";

        // display From location
        displayBookingSummary("from-location", "flaying-from");

        // display To location
        displayBookingSummary("to-location", "flaying-to")

        // Display departure date
        displayBookingSummary("departure-summary", "departure-date")

        // Display return date
        displayBookingSummary("return-summary", "return-date")

        // Display first class ticket quantity 
        displayBookingSummary("first-class-summary", "first-class-quantity")

        // Display economy class ticket quantity  
        displayBookingSummary("economy-class-summary", "economy-quantity")

        // Display grand total amount 
        displayBookingSummary("total-summary", "grand-total")
    }
})