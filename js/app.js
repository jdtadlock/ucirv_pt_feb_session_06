// console.log('test');

$('.bio').animate({opacity: 1}, 1200);

$('main .project').each(function(index, element) {
  $(element).delay(220 * index).animate({opacity: 1}, 800);
});











// $('.logo-one').text('something').css('background', 'red');


// var info = {
//   name: 'JD',
//   age: 38
// };

// console.log(info.age);
