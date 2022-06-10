// === JS for index.html =========================================================================================================================================
fileInclude.include("./components/buttonTappingAnimation.js");
document.addEventListener('click', (e) => {
    if (e.target.closest("button")) {
        buttonTapingAnimation(e.target.closest("button"), 300);
    }
});

// ====================================================================================================================================================================
