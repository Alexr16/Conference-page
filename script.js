const navMenu = document.querySelector('.nav-list');
const hamburguer = document.querySelector('#hamburguer');
const close = document.querySelector('#close');
const bodiId = document.querySelector('body').id;

hamburguer.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  close.classList.remove('show');
  document.querySelector('body').classList.toggle('overflow-hidden');
});

close.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  close.classList.add('show');
  document.querySelector('body').classList.toggle('overflow-hidden');
});

document.querySelectorAll('.item').forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  close.classList.add('show');
  document.querySelector('body').classList.toggle('overflow-hidden');
}));

if (bodiId === 'home') {
  const speakers = document.createElement('div');
  const startBody = document.getElementById('partner');
  const speakerData= {
    title: ['Alexander Guerrero', 'Yessenia Gallardo', 'Fausto Méndez', 'Karla Méndez', 'Jhonny Barrera', 'Marcela Saavedra'],
    subtitle: ['Lead Software Development Engineer at Dojo Coding School', 
              'Lead Software Development Engineer at Dojo Coding School',
              'Lead Software Development Engineer at Dojo Coding School',
              'Lead Software Development Engineer at Dojo Coding School',
              'Lead Software Development Engineer at Dojo Coding School',
              'Lead Software Development Engineer at Dojo Coding School'],
    paragraph: ['Full-stack engineer with more than ten years of experience. He is comfortable working on large-scale distributed systems and client-facing single-page web apps.', 
              'Previously the lead architect for Gucci´s eCommerce business, specializes in developing beautiful applications with Ruby on Rails, and has 9+ years of engineering experience.',
              'Spent three years developing custom data processing and analysis programs for NASA. He specializes in scalable, enterprise-level application development.',
              'Is a senior full-stack developer, working on the Microsoft platform for almost two decades. She has a strong background in IT security and secure coding practices.',
              'Is an experienced technical entrepreneur, having recently served as the CTO of Lottery.com, an entrepreneur in residence at Tencent, the CEO/CTO of three of his own startups, and many others.',
              'Carries multiple technical degrees in Nuclear Physics and worked at CERN as a Python developer implementing dynamic performance optimizations for complex web applications.'],
    image: ['images/speaker_01.png', 'images/speaker_02.png', 'images/speaker_03.png', 'images/speaker_04.png', 'images/speaker_07.png', 'images/speaker_06.png'],
    altText: ['Speaker 1', 'Speaker 2', 'Speaker 3', 'Speaker 4', 'Speaker 5', 'Speaker 6'],
  };

  function speaker(textooos, image, title, altText, subtitle, paragraph) {
      textooos.classList.add('spaeaker-card');
      textooos.innerHTML = `
        <div class="speaker-photo">
            <img src="${image}" alt="${altText}">
        </div>
        <div class="speaker-info">
            <h2>${title}</h2>
            <p class="speaker-subtitle">${subtitle}</p>
            <hr class="hr-speaker">
            <p class="speaker-paragraph">${paragraph}</p>
        </div>
    `;
  }

  const featuredSpeakers = document.createElement('section');
  featuredSpeakers.id = 'feature-speakers';
  document.body.insertBefore(featuredSpeakers, startBody);

  const featureTitle = document.createElement('div');
  featureTitle.classList.add('feature-speaker-title');
  featuredSpeakers.appendChild(featureTitle);

  const generalTitle = document.createElement('h2');
  generalTitle.classList.add('feature-speakers-title');
  generalTitle.textContent = 'Our Exclusive Network';
  featureTitle.appendChild(generalTitle);

  const lineTitle = document.createElement('hr');
  generalTitle.appendChild(lineTitle);

  speakers.classList.add('speakers');
  featuredSpeakers.append(speakers);

  for (let i = 0; i < 6; i += 1) {
    const speakerCard = document.createElement('div');
    speaker(speakerCard, speakerData.image[i], speakerData.title[i], speakerData.altText[i], speakerData.subtitle[i], speakerData.paragraph[i]);
    speakers.appendChild(speakerCard);
  }
}
