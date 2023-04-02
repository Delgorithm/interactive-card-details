const textCardBackCvc = document.getElementsByClassName("card-img_back_cvc");

const textCardFrontNumber = document.getElementsByClassName("card-img_front_number");
const textCardFrontName = document.getElementsByClassName("card-image_front_name");
const textCardFrontDate = document.getElementsByClassName("card-img_front_date");

const inputCardholderName = document.getElementById("cardholder-name");
const inputCardholderNumber = document.getElementById("cardholder-number");
const inputCardholderExp = document.getElementById("cardholder-exp");
const inputCardholderDate = document.getElementById("cardholder-date");
const inputCardholderCvc = document.getElementById("cardholder-cvc");

// Cardholer name & front card
inputCardholderName.addEventListener('textCardFrontName', () => {
    const value = textCardFrontName.value;
    textCardFrontName.textContent = value;
});