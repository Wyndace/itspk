// === Button tapping animation =======================================================================================================================================

const buttonTapingAnimation = (btn = document.querySelector('button'), ms = 300) => {
        btn.classList.add('_tapped');
        setTimeout(() => {btn.classList.remove('_tapped')}, ms);
};

// ====================================================================================================================================================================
