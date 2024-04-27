// Js for creating dynamic content and popup modal

// getting and assigning variables to elements
const mobWorks = document.querySelector('#mob-works-section');
const deskWorks = document.querySelector('#desk-works-section');
const mobModalPopup = document.querySelector('#mob-modal-popup');
const deskModalPopup = document.querySelector('#desk-modal-popup');

// creating js object
const worksObj = {
  card1: {
    featuredImg: ['./images/photos/conference.png', './images/photos/portfolio-pic-5.png'],
    title: ['Conference', 'Conference'],
    type: ['Event', 'Frontend', '2023'],
    description: ['An up-coming conference, with conference logo, title and schedule. It includes details of the speakers, program and registration.',
      'An up-coming conference, with conference logo, title and schedule. It includes details of the speakers, program and registration.',
      'This project is about an up-coming conference. It has conference logo, title and schedule. It includes details of the speakers, program and registration. It employs HTML, CSS, JavaScript, Bootstrap and Design UI technologies.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Bootstrap', 'Behance Design'],
    details: 'See more',
    liveLink: ['See live', 'https://ometman.github.io/conference-event'],
    sourceLink: ['Source', 'https://github.com/ometman/conference-event'],
  },

  card2: {
    featuredImg: ['./images/photos/fashion-store.png', './images/photos/portfolio-pic-6.png'],
    title: ['E-Commerce', 'Multi-Post Stories'],
    type: ['Store', 'Frontend', '2023'],
    description: ['Single page shopping site accessing Base Product and Involvement APIs. Using dynamic content,  modal for product details, and allowing comments and likes by users with accounts.',
      'Single page shopping site accessing Base Product and Involvement APIs. Using dynamic content,  modal for product details, and allowing comments and likes by users with accounts.',
    ],
    technologies: ['HTML', 'CSS', 'Javascript', 'APIs', 'Webpack', 'Github', 'Bootraps', 'Wireframe', 'Jest'],
    details: 'See more',
    liveLink: ['See live', 'https://github.com/ometman/fashion-store'],
    sourceLink: ['Source', 'https://github.com/ometman/fashion-store'],
  },

  card3: {
    featuredImg: ['./images/photos/bookstore-cms.png', './images/photos/portfolio-pic-8.png'],
    title: ['Library CMS', 'Uber Navigation'],
    type: ['Bookstore', 'Frontend+Backend', '2023'],
    description: ['Demonstration of Redux state management in React, performing CRUD funtionalities and indicating metrics. Athenticated and authorized users create a book with category, title, author, completion and update or edit.',
      'Demonstration of Redux state management in React, performing CRUD funtionalities and indicating metrics. Athenticated and authorized users create a book with category, title, author, completion and update or edit.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'GitHub', 'Bootstrap', 'APIs', 'Zeplin Design'],
    details: 'See more',
    liveLink: ['See live', 'https://github.com/ometman/react-bookstore-website'],
    sourceLink: ['Source', 'https://github.com/ometman/react-bookstore-website'],
  },

  card4: {
    featuredImg: ['./images/photos/desk-finmetrics.png', './images/photos/portfolio-pic-7.png'],
    title: ['World Data', 'FinMetrics'],
    type: ['Metrics', 'Front+Backend', '2023'],
    description: ['React-Redux app, accessing World Bank metrics on Indicators for Sub-Saharan African countries; Providing information for decision-making. Employing state management, prop drilling and libraries.',
      'React-Redux app, accessing World Bank metrics on Indicators for Sub-Saharan African countries; Providing information for decision-making. Employing state management, prop drilling and libraries.',
    ],
    technologies: ['JavaScript', 'Webpack', 'React-Redux', 'APIs', 'GitHub', 'Jest', 'Axios'],
    details: 'See more',
    liveLink: ['See live', 'https://github.com/ometman/FinMetrics'],
    sourceLink: ['Source', 'https://github.com/ometman/FinMetrics'],
  },

  card5: {
    featuredImg: ['./images/photos/budget.png', './images/photos/portfolio-pic-7.png'],
    title: ['Personal Finance', 'Finance'],
    type: ['Budgeting', 'Front+Backend', '2023'],
    description: ['Employing the power of Ruby on Rails and PostgreSql Database Management to create a personal budgeting app, with authentication and authorization. Users privately perform CRUD on expenses, categories and transactions.',
      'Employing the power of Ruby on Rails and PostgreSql Database Management to create a personal budgeting app, with authentication and authorization. Users privately perform CRUD on expenses, categories and transactions.',
    ],
    technologies: ['Ruby on Rails', 'APIs', 'RSpec', 'MVC', 'Rubocop', 'Devise', 'Cancancan', 'ERD', 'PosgreSql'],
    details: 'See more',
    liveLink: ['See live', 'https://github.com/ometman/budget-app'],
    sourceLink: ['Source', 'https://github.com/ometman/budget-app'],
  },

  card6: {
    featuredImg: ['./images/photos/desk-bookify.png', './images/photos/portfolio-pic-7.png'],
    title: ['Social Library', 'Finance'],
    type: ['Rental', 'Front+Backend', '2023'],
    description: ['Combining React on frontend and Rails on Backend with Devise JWT athentication; for a Book reservation system, where a user can rent a book, add or remove a favorite book.',
      'Combining React on frontend and Rails on Backend with Devise JWT athentication; for a Book reservation system, where a user can rent a book, add or remove a favorite book.',
    ],
    technologies: ['JavaScript', 'React', 'Ruby on Rails', 'API', 'RSpec', 'UI/UX', 'ERD', 'PosgreSql'],
    details: 'See more',
    liveLink: ['See live', 'https://github.com/AlierPM/bookify-backend'],
    sourceLink: ['Source', 'https://github.com/AlierPM/bookify-frontend'],
  },

};

// give dynamic content to the works section on mobile
mobWorks.classList.add('mob-works-section');
mobWorks.innerHTML = `
        <!--card one -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-0">
                <img class="portfolio-img" src="${worksObj.card1.featuredImg[0]}" alt="1st-portfolio-photo">
            </div>
            <!--portfolio details one -->
           <div class="pr-details order-1"> 
                <!--project title-->
                <h2 class="pr-title">
                    ${worksObj.card1.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card1.type[0]} </li>
                    <li> ${worksObj.card1.type[1]} </li>
                    <li> ${worksObj.card1.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card1.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card1.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card1.technologies[1]} </li>
                    <li class="pr-tag">${worksObj.card1.technologies[2]}</li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a  href="#" id="mobcard1Btn" onclick="showMobPopup()" class="pr-call-to-action-button"> 
                        ${worksObj.card1.details}
                    </a>
                </div>
            </div>
        </div>
        <!--card two -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-1">
                <img class="portfolio-img" src="${worksObj.card2.featuredImg[0]}" alt="2nd-portfolio-photo">
            </div>
            <!--portfolio details one -->
           <div class="pr-details order-0"> 
                <!--project title-->
                <h2 class="pr-title">
                ${worksObj.card2.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card2.type[0]} </li>
                    <li> ${worksObj.card2.type[1]} </li>
                    <li> ${worksObj.card2.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card2.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card2.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card2.technologies[1]} </li>
                    <li class="pr-tag">${worksObj.card2.technologies[2]}</li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a href="#" id="mobcard2Btn" onclick="showMobPopup()" class="pr-call-to-action-button"> 
                    ${worksObj.card2.details}
                    </a>
                </div>
            </div>
        </div>
        <!--card three -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-0">
                <img class="portfolio-img" src="${worksObj.card3.featuredImg[0]}" alt="3rd-portfolio-photo">
            </div>
            <!--portfolio details one -->
           <div class="pr-details order-1"> 
                <!--project title-->
                <h2 class="pr-title">
                ${worksObj.card3.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card3.type[0]} </li>
                    <li> ${worksObj.card3.type[1]} </li>
                    <li> ${worksObj.card3.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card3.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card3.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card3.technologies[1]} </li>
                    <li class="pr-tag">${worksObj.card3.technologies[2]}</li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a href="#" id="mobcard3Btn" onclick="showMobPopup()" class="pr-call-to-action-button"> 
                        ${worksObj.card3.details}
                    </a>
                </div>
            </div>
        </div>
        <!--card four -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-1">
                <img class="portfolio-img" src="${worksObj.card4.featuredImg[0]}" alt="4th-portfolio-photo">
            </div>
            <!--portfolio details one -->
           <div class="pr-details order-0"> 
                <!--project title-->
                <h2 class="pr-title">
                ${worksObj.card4.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card4.type[0]} </li>
                    <li> ${worksObj.card4.type[1]} </li>
                    <li> ${worksObj.card4.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card4.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card4.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card4.technologies[1]} </li>
                    <li class="pr-tag">${worksObj.card4.technologies[2]}</li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a href="#" id="mobcard4Btn" onclick="showMobPopup()" class="pr-call-to-action-button"> 
                        ${worksObj.card4.details}
                    </a>
                </div>
        </div `;

// give dynamic content to the works section on desktop
deskWorks.classList.add('desk-works-section');
deskWorks.innerHTML = `
        <!--card one -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-0">
                <img class="portfolio-img" src="${worksObj.card1.featuredImg[0]}" alt="1st-portfolio-photo">
            </div>
            <!--portfolio details one -->
           <div class="pr-details order-1"> 
                <!--project title-->
                <h2 class="pr-title">
                    ${worksObj.card1.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card1.type[0]} </li>
                    <li> ${worksObj.card1.type[1]} </li>
                    <li> ${worksObj.card1.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card1.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card1.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card1.technologies[1]}</li>
                    <li class="pr-tag">${worksObj.card1.technologies[2]}</li>
                    <li class="pr-tag">${worksObj.card1.technologies[3]}</li>
                    <li class="pr-tag">${worksObj.card1.technologies[4]}</li>
                    <li class="pr-tag">${worksObj.card1.technologies[5]}</li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a  href="#" id="deskcard1Btn" onclick="showDeskPopup()" class="pr-call-to-action-button"> 
                        ${worksObj.card1.details}
                    </a>
                </div>
            </div>
        </div>
        <!--card two -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-1">
                <img class="portfolio-img" src="${worksObj.card2.featuredImg[0]}" alt="2nd-portfolio-photo">
            </div>
            <!--portfolio details one -->
           <div class="pr-details order-0"> 
                <!--project title-->
                <h2 class="pr-title">
                ${worksObj.card2.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card2.type[0]} </li>
                    <li> ${worksObj.card2.type[1]} </li>
                    <li> ${worksObj.card2.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card2.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card2.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card2.technologies[1]}</li>
                    <li class="pr-tag">${worksObj.card2.technologies[2]}</li>
                    <li class="pr-tag">${worksObj.card2.technologies[3]}</li>
                    <li class="pr-tag">${worksObj.card2.technologies[4]} </li>
                    <li class="pr-tag">${worksObj.card2.technologies[5]} </li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a href="#" id="deskcard2Btn" onclick="showDeskPopup()" class="pr-call-to-action-button"> 
                    ${worksObj.card2.details}
                    </a>
                </div>
            </div>
        </div>
        <!--card three -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-0">
                <img class="portfolio-img" src="${worksObj.card3.featuredImg[0]}" alt="3rd-portfolio-photo">
            </div>
            <!--portfolio details one -->
           <div class="pr-details order-1"> 
                <!--project title-->
                <h2 class="pr-title">
                ${worksObj.card3.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card3.type[0]} </li>
                    <li> ${worksObj.card3.type[1]} </li>
                    <li> ${worksObj.card3.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card3.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card3.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card3.technologies[1]}</li>
                    <li class="pr-tag">${worksObj.card3.technologies[2]}</li>
                    <li class="pr-tag">${worksObj.card3.technologies[3]} </li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a href="#" id="deskcard3Btn" onclick="showDeskPopup()" class="pr-call-to-action-button"> 
                        ${worksObj.card3.details}
                    </a>
                </div>
            </div>
        </div>
        <!--card four -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-1">
                <img class="portfolio-img" src="${worksObj.card4.featuredImg[0]}" alt="4th-portfolio-photo">
            </div>
            <!--portfolio details one -->
           <div class="pr-details order-0"> 
                <!--project title-->
                <h2 class="pr-title">
                ${worksObj.card4.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card4.type[0]} </li>
                    <li> ${worksObj.card4.type[1]} </li>
                    <li> ${worksObj.card4.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card4.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card4.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card4.technologies[1]}</li>
                    <li class="pr-tag">${worksObj.card4.technologies[2]}</li>
                    <li class="pr-tag">${worksObj.card4.technologies[3]} </li>
                    <li class="pr-tag">${worksObj.card4.technologies[4]}</li>
                    <li class="pr-tag">${worksObj.card4.technologies[5]} </li>
                    <li class="pr-tag">${worksObj.card4.technologies[6]} </li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a href="#" id="deskcard4Btn" onclick="showDeskPopup()" class="pr-call-to-action-button"> 
                        ${worksObj.card4.details}
                    </a>
                </div>
            </div>
        </div> 
        <!--card five -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-0">
                <img class="portfolio-img" src="${worksObj.card5.featuredImg[0]}" alt="4th-portfolio-photo">
            </div>
            <!--portfolio details one -->
            <div class="pr-details order-1"> 
                <!--project title-->
                <h2 class="pr-title">
                ${worksObj.card5.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card5.type[0]} </li>
                    <li> ${worksObj.card5.type[1]} </li>
                    <li> ${worksObj.card5.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card5.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card5.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card5.technologies[1]}</li>
                    <li class="pr-tag">${worksObj.card5.technologies[2]}</li>
                    <li class="pr-tag">${worksObj.card5.technologies[3]} </li>
                    <li class="pr-tag">${worksObj.card5.technologies[4]}</li>
                    <li class="pr-tag">${worksObj.card5.technologies[5]} </li>
                    <li class="pr-tag">${worksObj.card5.technologies[6]} </li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a href="#" id="deskcard5Btn" onclick="showDeskPopup()" class="pr-call-to-action-button"> 
                        ${worksObj.card5.details}
                    </a>
                </div>
            </div>
        </div> 
        <!--card six -->
        <div class="card">
            <!--portfolio image one -->
            <div class="pr-photo order-1">
                <img class="portfolio-img" src="${worksObj.card6.featuredImg[0]}" alt="4th-portfolio-photo">
            </div>
            <!--portfolio details one -->
           <div class="pr-details order-0"> 
                <!--project title-->
                <h2 class="pr-title">
                ${worksObj.card6.title[0]}
                </h2>
                <!--project type-->
                <ul class="pr-type">
                    <li class="no-style"> ${worksObj.card6.type[0]} </li>
                    <li> ${worksObj.card6.type[1]} </li>
                    <li> ${worksObj.card6.type[2]} </li>
                </ul>
                <!--project description-->
                <p class="pr-description">
                    ${worksObj.card6.description[0]}
                </p>
                <!--tech tags-->
                <ul class="pr-tech-tags no-style">
                    <li class="pr-tag">${worksObj.card6.technologies[0]}</li>
                    <li class="pr-tag">${worksObj.card6.technologies[1]}</li>
                    <li class="pr-tag">${worksObj.card6.technologies[2]}</li>
                    <li class="pr-tag">${worksObj.card6.technologies[3]} </li>
                    <li class="pr-tag">${worksObj.card6.technologies[4]}</li>
                    <li class="pr-tag">${worksObj.card6.technologies[5]} </li>
                    <li class="pr-tag">${worksObj.card6.technologies[6]} </li>
                </ul>
                <!--action button -->
                <div class="pr-call-to-action-box">
                    <a href="#" id="deskcard6Btn" onclick="showDeskPopup()" class="pr-call-to-action-button"> 
                        ${worksObj.card6.details}
                    </a>
                </div>
            </div>
        </div> `;

// function for selecting the right card, getting card content
// making card visible and event for calling mob popup function
function showMobPopup(card) {
// select the right card
  let mobCard;
  if (card === 'mobcard1Btn') {
    mobCard = worksObj.card1;
  } else if (card === 'mobcard2Btn') {
    mobCard = worksObj.card2;
  } else if (card === 'mobcard3Btn') {
    mobCard = worksObj.card3;
  } else if (card === 'mobcard4Btn') {
    mobCard = worksObj.card4;
  }

  //  event and dynamic content for mobile modal popup
  mobModalPopup.classList.add('mob-modal-popup');
  mobModalPopup.innerHTML = `
    <div class="popup-card">
        <div class="popup-title">
            <h2 class="popup-pr-title">
                ${mobCard.title[0]}
            </h2>
            <a id="popup-close-btn">
                <span class="popup-toggle">&times;</span>
            </a>
        </div>
        <ul class="popup-pr-type">
            <li class="no-style"> ${mobCard.type[0]} </li>
            <li> ${mobCard.type[1]} </li>
            <li> ${mobCard.type[2]} </li>
        </ul>
        <div class="popup-pr-photo">
        <img class="popup-portfolio-img" src="${mobCard.featuredImg[0]}" alt="4th portfolio photo">
        </div>
        <div class="popup-details">
            <p class="popup-pr-desc">
                ${mobCard.description[2]}.
            </p>
            <div class="popup-tech-info">
                <ul class="popup-pr-techs no-style">
                    <li class="pr-tag">${mobCard.technologies[0]}</li>
                    <li class="pr-tag">${mobCard.technologies[1]}</li>
                    <li class="pr-tag"> ${mobCard.technologies[2]}</li>
                </ul>
                <hr class="popup-divider">
                <div class="pr-call-to-action-box popup-action-btns">
                    <a id="popup-livelink" href="https://ometman.github.io/first-capstone" class="live-source-btns pr-call-to-action-button">
                        <p>${mobCard.liveLink}</p>
                        <img src="./images/icons/live-icon.png" alt="a live icon">
                    </a>
                    <a id="popup-sourcelink" href="https://github.com/ometman/first-capstone" class="live-source-btns pr-call-to-action-button">
                        <p>${mobCard.sourceLink}</p>
                        <img class="github-icon-trim" src="./images/icons/github-icon.png" alt="a github icon">
                    </a>
                </div>
            </div>
        </div>
    </div> `;

  // make card visible
  mobModalPopup.style.visibility = 'visible';

  // event for closing popup by x toggle button
  const closeModalPopup = document.querySelector('#popup-close-btn');
  closeModalPopup.addEventListener('click', () => {
    mobModalPopup.style.visibility = 'hidden';
  });
}

//
// function for selecting the right card, getting card content
// making card visible and event for calling mob popup function
// this is desktop part -- later use loop and index from object entries
function showDeskPopup(card) {
  // select the right card
  let deskCard;
  if (card === 'deskcard1Btn') {
    deskCard = worksObj.card1;
  } else if (card === 'deskcard2Btn') {
    deskCard = worksObj.card2;
  } else if (card === 'deskcard3Btn') {
    deskCard = worksObj.card3;
  } else if (card === 'deskcard4Btn') {
    deskCard = worksObj.card4;
  } else if (card === 'deskcard5Btn') {
    deskCard = worksObj.card5;
  } else if (card === 'deskcard6Btn') {
    deskCard = worksObj.card6;
  }

  //  event and dynamic content for desktop modal popup
  deskModalPopup.classList.add('modal-popup');
  deskModalPopup.innerHTML = `
  <div class="popup-card">
      <div class="popup-title">
          <h2 class="popup-pr-title">
              ${deskCard.title[0]}
          </h2>
          <a id="popup-close-btn">
              <span class="popup-toggle">&times;</span>
          </a>
      </div>
      <ul class="popup-pr-type">
          <li class="no-style"> ${deskCard.type[0]} </li>
          <li> ${deskCard.type[1]} </li>
          <li> ${deskCard.type[2]} </li>
      </ul>
      <div class="popup-pr-photo">
        <img class="popup-portfolio-img" src="${deskCard.featuredImg[0]}" alt="portfolio photo">
      </div>
      <div class="popup-details ">
          <p class="popup-pr-desc">
              ${deskCard.description[1]}.
          </p>
          <div class="popup-tech-info">
              <ul class="popup-pr-techs no-style">
                  <li class="pr-tag">${deskCard.technologies[0]}</li>
                  <li class="pr-tag">${deskCard.technologies[1]}</li>
                  <li class="pr-tag">${deskCard.technologies[2]}</li>
                  <li class="pr-tag">${deskCard.technologies[3]}</li>
                  <li class="pr-tag">${deskCard.technologies[4]}</li>
                  <li class="pr-tag">${deskCard.technologies[5]}</li>
              </ul>
              <hr class="popup-divider">
              <div class="pr-call-to-action-box popup-action-btns">
                  <a id="popup-livelink" href="${deskCard.liveLink[1]}" class="live-source-btns pr-call-to-action-button">
                      <p>${deskCard.liveLink[0]}</p>
                      <img src="./images/icons/live-icon.png" alt="a live icon">
                  </a>
                  <a id="popup-sourcelink" href="${deskCard.sourceLink[1]}" class="live-source-btns pr-call-to-action-button">
                      <p>${deskCard.sourceLink[0]}</p>
                      <img class="github-icon-trim" src="./images/icons/github-icon.png" alt="a github icon">
                  </a>
              </div>
          </div>
      </div>
  </div> `;

  // make desk card visible
  deskModalPopup.style.visibility = 'visible';

  // event for closing desk popup by x toggle button
  const closeModalPopup = document.querySelector('#popup-close-btn');
  closeModalPopup.addEventListener('click', () => {
    deskModalPopup.style.visibility = 'hidden';
  });
}

// Now, event for calling mobile pop function
document.querySelector('#mobcard1Btn').addEventListener(('click'), () => {
  showMobPopup('mobcard1Btn');
});
document.querySelector('#mobcard2Btn').addEventListener(('click'), () => {
  showMobPopup('mobcard2Btn');
});
document.querySelector('#mobcard3Btn').addEventListener(('click'), () => {
  showMobPopup('mobcard3Btn');
});
document.querySelector('#mobcard4Btn').addEventListener(('click'), () => {
  showMobPopup('mobcard4Btn');
});
// document.querySelector('#mobcard5Btn').addEventListener(('click'), () => {
//   showMobPopup('mobcard5Btn');
// });
// document.querySelector('#mobcard6Btn').addEventListener(('click'), () => {
//   showMobPopup('mobcard6Btn');
// });

//  now call desk pop function
document.querySelector('#deskcard1Btn').addEventListener(('click'), () => {
  showDeskPopup('deskcard1Btn');
});
document.querySelector('#deskcard2Btn').addEventListener(('click'), () => {
  showDeskPopup('deskcard2Btn');
});
document.querySelector('#deskcard3Btn').addEventListener(('click'), () => {
  showDeskPopup('deskcard3Btn');
});
document.querySelector('#deskcard4Btn').addEventListener(('click'), () => {
  showDeskPopup('deskcard4Btn');
});
document.querySelector('#deskcard5Btn').addEventListener(('click'), () => {
  showDeskPopup('deskcard5Btn');
});
document.querySelector('#deskcard6Btn').addEventListener(('click'), () => {
  showDeskPopup('deskcard6Btn');
});
