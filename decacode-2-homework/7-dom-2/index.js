(() => {
  //slides content
  const $arrSlides = document.body.dataset.slides;
  const $arrContent = $arrSlides.split(', ');

  // const $container = document.createElement('div');
  // $container.classList.add("container");
  // document.body.append($container);




  const $sliderBox = document.querySelector(".slider-box");
  
  //pagination positioning
  const rect = $sliderBox.getBoundingClientRect();
  const $pagination = document.querySelector(".pagination");
  $pagination.style.top = rect.bottom + 'px';
  $pagination.style.left = rect.left + (rect.width / 2) + 'px';

  //progress label positioning
  const $progress = document.querySelector(".progress");
  $progress.style.top = rect.top -10 + 'px';
  $progress.style.left = rect.left + (rect.width / 2) + 'px';

  //dynamic creation of slides and pagination elements
  $arrContent.forEach(($Content, i) => {
    const $slide = document.createElement('div');
    $slide.setAttribute('id', i);

    const $slideText = document.createElement('p');
    $slideText.innerText=$Content;
    
    $slide.append($slideText);  
    $slide.classList.add("my-Slide");
   $sliderBox.append($slide);

    const $page = document.createElement('a');
    $page.setAttribute('slideNum', i);
    $page.classList.add("selector");
    $pagination.append($page);
  });

  let $activeSlide = document.getElementById('0');
  progressChange(0);
  $activeSlide.classList.add('active');

  //handling pagination controls
  document.addEventListener('click', ev => {
    if (ev.target.hasAttribute('slideNum')) {
      const currId = ev.target.getAttribute('slideNum');
      const currSlide = document.getElementById(currId);
      $activeSlide.classList.remove('active');
      $activeSlide = currSlide;
      $activeSlide.classList.add('active');

      progressChange(currId);
    }
  });
  
  //function to change the slides
  function SlideChange(n) {
    const currId = parseInt($activeSlide.getAttribute('id'));
    let newId;
    
    if (n < 0) {
      (currId === 0 ? newId = $arrContent.length - 1 : newId = currId + n);
    }
    else {
      (currId === $arrContent.length - 1 ? newId = 0 : newId = currId + n);
    }

    const currSlide = document.getElementById(newId);
    $activeSlide.classList.remove('active');
    $activeSlide = currSlide;
    $activeSlide.classList.add('active');

    progressChange(newId);
  }

  function progressChange(num) {
    $progress.innerHTML = '<p>' + (parseInt(num) + 1) + '/' + $arrContent.length + '</p>';
  }
  
  const $next = document.querySelector('.next');
  $next.addEventListener('click', () => {
    SlideChange(1);
  })

  const $prev = document.querySelector('.prev');
  $prev.addEventListener('click', () => {
    SlideChange(-1);
  })

  setInterval(function() {SlideChange(1)}, 4000);

  })();