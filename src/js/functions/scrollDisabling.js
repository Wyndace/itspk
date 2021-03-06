const scrollDisabling = (element, fixed = false, position) => {
  if (!element.classList.contains("_scroll-disabled") && !element.classList.contains("_scroll-disabled_horizontal") && !element.classList.contains("_scroll-disabled_vertical")) {
    if (fixed) {
      if (element == document.body) {
        let paddingOffset = innerWidth - document.body.offsetWidth + "px";
        document.body.style.paddingRight = paddingOffset;
        if (scrollFixedElements.length > 0) {
          for (let index = 0; index < scrollFixedElements.length; index++) {
            const el = scrollFixedElements[index];
            el.style.paddingRight = paddingOffset;
          }
        }
      }
    }
    if (position == "vertical") {
      element.classList.add("_scroll-disabled_vertical");
    } else if (position == "horizontal") {
      element.classList.add("_scroll-disabled_horizontal");
    } else {
      element.classList.add("_scroll-disabled");
    }
  }
};

const scrollEnabling = (element, fixed = false, position) => {
  if (element.classList.contains("_scroll-disabled") || element.classList.contains("_scroll-disabled_horizontal") || element.classList.contains("_scroll-disabled_vertical")) {
    if (fixed) {
      if (element == document.body) {
        document.body.style.cssText = "";
      }
      if (scrollFixedElements.length > 0) {
        for (let index = 0; index < scrollFixedElements.length; index++) {
          const el = scrollFixedElements[index];
          el.style.cssText = "";
        }
      }
    }
    if (position == "vertical") {
      element.classList.remove("_scroll-disabled_vertical");
    } else if (position == "horizontal") {
      element.classList.remove("_scroll-disabled_horizontal");
    } else {
      element.classList.remove("_scroll-disabled");
    }
  }
};

const toggleScroll = (element, fixed = false, position) => {
  if (element.classList.contains("_scroll-disabled") || element.classList.contains("_scroll-disabled_horizontal") || element.classList.contains("_scroll-disabled_vertical")) scrollEnabling(element, fixed, position);
  else scrollDisabling(element, fixed, position);
};

const scrollDisablers = document.querySelectorAll("[data-scroll_disable]");
if (scrollDisablers.length > 0) {
  for (scrollDisabler of scrollDisablers) {
    positon = scrollDisabler.dataset.scroll_disable;
    scrollDisabling(scrollDisabler, positon);
  }
}

const scrollFixedElements = document.querySelectorAll("[data-scroll-fixed]");
