import { legacy_createStore as createStore } from 'redux'

const projectsDefaultState = {
  projects: [{
    url: 'https://codepen.io/mumahendras3/full/XWYZMgQ',
    image: 'https://i.ibb.co/HdYHjcf/survey-form.png',
    title: 'Survey Form',
    description: 'An example webpage of a survey form'
  }, {
    url: 'https://codepen.io/mumahendras3/full/eYKVvNP',
    image: "https://i.ibb.co/D4d9ZGZ/tribute-page.png",
    title: 'Tribute Page',
    description: 'An example webpage of a tribute page'
  }, {
    url: 'https://codepen.io/mumahendras3/full/RwJQpVG',
    image: "https://i.ibb.co/NFNBQRB/technical-documentation-page.png",
    title: 'Technical Documentation Page',
    description: 'An example webpage of a technical documentation page'
  }, {
    url: 'https://codepen.io/mumahendras3/full/qBKxrPE',
    image: "https://i.ibb.co/r6WXTs4/product-landing-page.png",
    title: 'Product Landing Page',
    description: 'An example webpage of a product landing page'
  }, {
    url: 'https://codepen.io/mumahendras3/full/yLExvVo',
    image: "https://i.ibb.co/5GP9RRS/personal-portfolio-webpage.png",
    title: 'Personal Portfolio Webpage',
    description: 'My personal portfolio webpage written in pure HTML and CSS'
  }, {
    url: 'https://github.com/mumahendras3/sl6ckware',
    image: "https://i.ibb.co/1MvFcrK/sl6ckware.png",
    title: 'Sl6ckware',
    description: 'Using s6 + s6-rc + s6-linux-init as the init system on Slackware'
  }]
};

function projectsReducer(state = projectsDefaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(projectsReducer);

export default store;