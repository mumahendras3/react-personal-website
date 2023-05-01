import { legacy_createStore as createStore } from 'redux'

const defaultState = {
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
  }],

  workExperiences: [{
    duration: '24 January 2022 – 6 July 2022',
    title: 'Junior Instrument Engineer at PT Vale Indonesia Tbk.',
    description: 'Provided engineering services for instrument-related work to other departments inside PT Vale Indonesia Tbk..'
  }, {
    duration: '1 November 2021 – 23 January 2022',
    title: 'Commissioning and Service Engineer at PT Utama Marina Indonesia',
    description: 'Provided service for existing BWTS on the vessel MV Occitan Key (berthed at Belawan Port), ensured no more errors/alarms appeared during BWTS operation, and correct any improper operations by the vessel’s crews.'
  }, {
    duration: '5 September – 20 October 2021',
    title: 'Commissioning Engineer at PT Selaras Bina Sejahtera',
    description: 'Studied the basics of Ballast Water Treatment System (BWTS) and how to commission newly installed BWTS. Perform the commissioning of BWTS retrofitting project at ASL Shipyard, Batam, for the vessels MT Super Ruby and MT Super Emerald, specialized on electrical and PLC related work.'
  }, {
    duration: '17 June – 9 August 2019',
    title: 'Field Industrial Practice at PT Suzuki Indomobil Motor Cikarang',
    description: 'Learned the basics of electronic circuits, PLC, and HMI for industrial machines. Created a simple PLC circuit with its HMI based on a given timing charts, incorporating all materials learned from before. Lastly, created a simple training kit for operating an inverter using basic electronic circuits and PLC to help new mechanics-in-training on learning the basics of controlling an AC motor using inverter.'
  }],

  educations: [{
    duration: '2016 – 2021',
    school: 'Engineering Physics – Institut Teknologi Bandung (ITB)'
  }, {
    duration: '2013 – 2016',
    school: 'Senior High School (SMA) IT – AL BINAA Islamic Boarding School'
  }, {
    duration: '2010 – 2013',
    school: 'Junior High School (SMP) IT – AL BINAA Islamic Boarding School'
  }, {
    duration: '2004 – 2010',
    school: 'Elementary School (SD) – YPS Singkole'
  }]
};

function infoReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(infoReducer);

export default store;