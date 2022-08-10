const getElement = (selector, list) => {
  const element = list
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

  // check if only one element
  if (list && element.length === 1) return element[0];

  // check if the list is not empty
  if (list && element.length > 0) return element;

  // check if not a list and element exists
  if (!list && element) return element;
  throw new Error(`Please check your ${selector}`);
};

const btns = getElement(".question-btn", true);
const title = getElement(".title");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
