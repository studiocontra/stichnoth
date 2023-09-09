var callback = function (entries) {
  entries.forEach(({target, isIntersecting}) => {

    if(isIntersecting) {
      target.querySelectorAll('.wrap-media').forEach(media => {
        media.classList.add('is-playing');
      })
    }
  });
};

let observer = new IntersectionObserver(callback, {
  threshold: 0.7,
});

var allItems = document.querySelectorAll(".js-scroll-video");

allItems.forEach(section => {
  observer.observe(section);
})
