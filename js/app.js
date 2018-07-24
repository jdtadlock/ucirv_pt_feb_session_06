// console.log('test');

// Object

// var project = {
//   title: 'Camping with the Fam',
//   created: '1/1/2018',
//   about: 'Really fun to work on. Got to be out in nature, while coding!',
//   image: 'https://picsum.photos/500/500?image=50'
// };

var projects = [
  {
    title: 'Camping with the Fam',
    created: '1/1/2018',
    about: 'Really fun to work on. Got to be out in nature, while coding!',
    image: 'https://picsum.photos/500/500?image=50',
    details: {
      bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum voluptas dolorem atque ratione cupiditate ab blanditiis consequuntur laboriosam quibusdam quod odit, eaque eius rem perferendis optio distinctio repudiandae enim?
      Architecto vero ea dolore voluptatibus accusamus asperiores excepturi esse deleniti tenetur eum et cumque quod sunt officia non quae doloremque impedit, nulla quaerat eaque officiis rerum omnis! Possimus, dolores qui.
      Iure repellendus dolorum quia distinctio nemo fugiat ipsa nihil reiciendis ad itaque, optio, reprehenderit ex.Impedit hic qui enim iusto, consequatur accusantium distinctio id natus magni excepturi ipsa magnam officiis!`,
      research: 'Empathy maps, personas, customer journey',
      images: ['https://picsum.photos/500/500?image=140', 'https://picsum.photos/500/500?image=141']
    }
  },
  {
    title: 'Trip to China',
    created: '5/3/2018',
    about: 'Was awesome!. Beautiful scenery!',
    image: 'https://picsum.photos/500/500?image=80',
    details: {
      bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum voluptas dolorem atque ratione cupiditate ab blanditiis consequuntur laboriosam quibusdam quod odit, eaque eius rem perferendis optio distinctio repudiandae enim?
      Architecto vero ea dolore voluptatibus accusamus asperiores excepturi esse deleniti tenetur eum et cumque quod sunt officia non quae doloremque impedit, nulla quaerat eaque officiis rerum omnis! Possimus, dolores qui.
      Iure repellendus dolorum quia distinctio nemo fugiat ipsa nihil reiciendis ad itaque, optio, reprehenderit ex.Impedit hic qui enim iusto, consequatur accusantium distinctio id natus magni excepturi ipsa magnam officiis!`,
      research: 'Empathy maps, personas, customer journey',
      images: ['https://picsum.photos/500/500?image=133', 'https://picsum.photos/500/500?image=134']
    }
  },
  {
    title: 'Business Website 2',
    created: '3/2/2018',
    about: 'Very challenging, but worth it in the end!',
    image: 'https://picsum.photos/500/500?image=100',
    details: {
      bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum voluptas dolorem atque ratione cupiditate ab blanditiis consequuntur laboriosam quibusdam quod odit, eaque eius rem perferendis optio distinctio repudiandae enim?
      Architecto vero ea dolore voluptatibus accusamus asperiores excepturi esse deleniti tenetur eum et cumque quod sunt officia non quae doloremque impedit, nulla quaerat eaque officiis rerum omnis! Possimus, dolores qui.
      Iure repellendus dolorum quia distinctio nemo fugiat ipsa nihil reiciendis ad itaque, optio, reprehenderit ex.Impedit hic qui enim iusto, consequatur accusantium distinctio id natus magni excepturi ipsa magnam officiis!`,
      research: 'Empathy maps, personas, customer journey',
      images: ['https://picsum.photos/500/500?image=120', 'https://picsum.photos/500/500?image=121']
    }
  }
];


// project.title // 'Camping Website'


$('.bio').animate({opacity: 1}, 1200);

$.each(projects, function(item_number, object) {
  $('main.home').append(
    `<div class="project" style="background-image: url(${object.image})">
      <div class="project-text">
        <h3>${object.title}</h3>
        <p>${object.about}</p>
        <span>Created on ${object.created}</span>
      </div>
      <div class="modal">
        <h1>${object.title}</h1>
        <p class="details-bio">${object.details.bio}</p>
        <div class="images">
          <a href="${object.details.images[0]}">
            <img src="${object.details.images[0]}" alt="">
          </a>
          <a href="${object.details.images[1]}">
            <img src="${object.details.images[1]}" alt="">
          </a>
        </div>
        <p class="research">${object.details.research}</p>
        <button>Close</button>
      </div>
    </div>`
  );
});


$('main.home .project').each(function(index, project_div) {
  $(project_div).delay(220 * index).animate({opacity: 1}, 800); // fades in the current project in the loop

  // Adds a click event to each project div
  $(project_div).click(function() {
    $(this).find('.modal').addClass('show');
  });

  $(project_div).find('.modal button').click(function(event) {
    event.stopPropagation();
    $(this).parent().removeClass('show');
  });
});










// $('.logo-one').text('something').css('background', 'red');


// var info = {
//   name: 'JD',
//   age: 38
// };

// console.log(info.age);
