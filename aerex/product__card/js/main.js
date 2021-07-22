$('#character').readmore({
    moreLink: '<a href="#" class="open-txt"><span>Читать полностью</span></a>',
    lessLink: '<a href="#" class="open-txt"><span>Свернуть</span></a>',
    collapsedHeight: 600,
  afterToggle: function(trigger, element, expanded) {
    if(! expanded) { // The "Close" link was clicked
      $('html, body').animate({scrollTop: element.offset().top}, {duration: 100});
    }
  }
});

$('article').readmore({
    speed: 500
});
