let observerEnter = new IntersectionObserver(function (entries) {
  entries.forEach(({target, isIntersecting}) => {
    if(isIntersecting) {
      target.querySelectorAll('.wrap-media--video').forEach(media => {
        media.classList.add('is-playing');
      })
    }
  });
}, {
  threshold: 0.35,
});

let observerLeave = new IntersectionObserver(function (entries) {
  entries.forEach(({target, isIntersecting}) => {
    if(!isIntersecting) {
      target.querySelectorAll('.wrap-media--video').forEach(media => {
        media.classList.remove('is-playing');
      })
    }
  });
}, {
  threshold: 0,
});

var allItems = document.querySelectorAll(".js-scroll-video");

allItems.forEach(section => {
  observerEnter.observe(section);
  observerLeave.observe(section);
})
