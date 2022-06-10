// ==== Global scripts ====================================================================================================================================================

// === Animation, this script is best to leave connected. Some scripts do not work without it =============================================================================

fileInclude.include("./functions/_animation.js");

// ========================================================================================================================================================================

// === Small convenient functions, this script is the best to leave connected. Some scripts do not work without it ========================================================

fileInclude.include("./functions/_functions.js");

// ========================================================================================================================================================================

// ========================================================================================================================================================================

// === Global functions ===================================================================================================================================================

// ==== Smooth scrolling to element | Require _animation.js ===================================--==========================================================================

fileInclude.include("./functions/smoothScrollTo.js");

// ========================================================================================================================================================================

// ==== Full disable/enable scroll from the element =======================================================================================================================

fileInclude.include("./functions/scrollDisabling.js");

// ========================================================================================================================================================================

// ==== Spoilers and Accordions | Require _animation.js ===================================================================================================================

fileInclude.include("./functions/spoilerCreator.js");

// ========================================================================================================================================================================

// ==== Check and send form without reloading page ========================================================================================================================

fileInclude.include("./functions/sendingOnPage.js");

// ========================================================================================================================================================================

// ==== Mask for phone input ==============================================================================================================================================

fileInclude.include("./functions/phoneMask.js");

// ========================================================================================================================================================================

// ==== Slide Surveys | Require sendingOnPage.js, phoneMask.js ============================================================================================================

/*
fileInclude.includ("./functions/surveySlide.js");
*/

// ========================================================================================================================================================================

// ==== Modal windows | Require ScrollDisabling.js ========================================================================================================================

/*
fileInclude.includ("./functions/modalWindowCreator.js");
*/

// ========================================================================================================================================================================

// ==== Header Scroller ===================================================================================================================================================

fileInclude.include("./functions/headerScroller.js");

// ========================================================================================================================================================================

// ==== Tabs ==============================================================================================================================================================

/*
fileInclude.includ("./functions/tabsCreator.js");
*/

// ========================================================================================================================================================================

// ==== Check on the device with touch screen | Require _function.js ======================================================================================================

/*
fileInclude.includ("./functions/isMobile.js");
*/

// ========================================================================================================================================================================

// ==== Slider | Requires connecting a third-party library swiper-bundle.min.js in the file vendor.js | Require _functions.js =============================================

/*
fileInclude.includ("./functions/sliderCreator.js");
*/

// ========================================================================================================================================================================

// ==== Custom Select =====================================================================================================================================================

fileInclude.include("./functions/selectCreator.js");

// ========================================================================================================================================================================

// ==== Lang traslator with select ========================================================================================================================================

fileInclude.include("./functions/selectLangTranslator.js");

// ========================================================================================================================================================================

// ==== Google translate ==================================================================================================================================================

fileInclude.include("./vendor/google-translate.js");
fileInclude.include("./vendor/translateGoogleIniter.js");

// ========================================================================================================================================================================

// ==== Burgers Button ====================================================================================================================================================

fileInclude.include("./functions/burger.js");

// ========================================================================================================================================================================

// ==== Dynamical Adaptive ================================================================================================================================================

fileInclude.include("./vendor/dynamicAdapt.min.js");

// ========================================================================================================================================================================

// ========================================================================================================================================================================