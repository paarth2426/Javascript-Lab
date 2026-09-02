document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("customPopup");
    const closeBtn = document.getElementById("closePopupBtn");

    // Display the block overlay instantly on window load
    if (popup) {
        popup.style.display = "block";
    }

    // Hide the layout element when user targets the click action button
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            popup.style.display = "none";
        });
    }
});
