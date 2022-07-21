<template>
  <section id="about " class="p-5">
    <div class="container-fluid mt-5 p-5">
      <div class="heading d-flex justify-content-center">
        <div class="section-title">
          <h1 class="main-title">ABOUT</h1>
          <h4 class="subtitle">DITCHED BACTERIA FOR BUGS</h4>
        </div>
      </div>
      <div class="about-container row">
        <div class="profile col-lg-4">
          <h3>PROFILE</h3>
          <p>FULL NAME - <span>Carla Amy Lawrence</span></p>
          <p>EMAIL - <span>carlaamylawrence@gmail.com</span></p>
          <p>DEGREE - <span>BSc Biotechnology</span></p>
          <p>LOCATION - <span>Cape Town, South Africa</span></p>
          <p>FREELANCE - Available</p>
          <p>AGE - <span>23 Years Old</span></p>
        </div>
        <div class="about-text col-lg-8">
          <div class="about-des">
            <h4>DISECTING CARLA</h4>
            <p>
              I am an optimistic, driven, resilient and open-minded creative. I
              enjoy every encounter with others and meeting new people. I always
              put others first. My mind is full of ideas which feed into my
              adventurous, creative and exploring nature. I believe I can
              accomplish difficult things by tackling them piece by piece.
            </p>
          </div>
          <div class="about-bio">
            <h4>HOW DID I GET HERE YOU MIGHT ASK?</h4>
            <p>
              I graduated with a BSc in biotechnology, shortly after, I started
              researching free resources to learn how to code while looking for
              a job in Biotechnology. However, I found the Life Choices Academy
              internship advert and applied and now I have had exposure to
              programming languages and invaluable experiences. I am very
              grateful for the fast pace learning style and very fortunate to be
              able to network and learn from experienced developers. My interest
              and passion for web development stems from this now found mode for
              me to create and design. I firmly believe that tech is the future.
            </p>
          </div>
        </div>
      </div>
      <div class="skillset d-flex justify-content-center">
        <div
          class="designcards d-flex flex-column justify-content-center align-content-center"
        >
          <div class="design-icon"><i class="fa-solid fa-pen-ruler"></i></div>
          <div class="design-text"></div>
        </div>
        <div
          class="designcards d-flex flex-column justify-content-center align-content-center"
        >
          <div class="design-icon"><i class="fa-solid fa-code"></i></div>
          <div class="design-text"></div>
        </div>
        <div
          class="designcards d-flex flex-column justify-content-center align-content-center"
        >
          <div class="design-icon"><i class="fa-solid fa-code-branch"></i></div>
          <div class="design-text"></div>
        </div>
      </div>
      <div class="skills-container">
        <div class="skills-title">
          <h1>SKILLS</h1>
        </div>
        <div
          class="skills-display row d-flex justify-content-center align-items-center"
        >
          <div class="skills-info aboutCard-container col-md-3 g-3">
            <div class="aboutCard">
              <div class="front">
                <i class="fa-brands fa-html5"></i>
              </div>
              <div class="back">
                <h4>HTML</h4>
              </div>
            </div>
          </div>
          <div class="skills-info aboutCard-container col-md-3 g-3">
            <div class="aboutCard">
              <div class="front">
                <i class="fa-brands fa-css3-alt"></i>
              </div>
              <div class="back">
                <h4>CSS</h4>
              </div>
            </div>
          </div>
          <div class="skills-info aboutCard-container col-md-3 g-3">
            <div class="aboutCard">
              <div class="front">
                <i class="fa-brands fa-bootstrap"></i>
              </div>
              <div class="back">
                <h4>BOOTSTRAP</h4>
              </div>
            </div>
          </div>
          <div class="skills-info aboutCard-container col-md-3 g-3">
            <div class="aboutCard">
              <div class="front">
                <i class="fa-brands fa-js-square"></i>
              </div>
              <div class="back">
                <h4>JAVASCRIPT</h4>
              </div>
            </div>
          </div>
          <div class="skills-info aboutCard-container col-md-3 g-3">
            <div class="aboutCard">
              <div class="front">
                <i class="fa-brands fa-vuejs"></i>
              </div>
              <div class="back">
                <h4>VUE.JS</h4>
              </div>
            </div>
          </div>
          <div class="skills-info aboutCard-container col-md-3 g-3">
            <div class="aboutCard">
              <div class="front">
                <i class="fa-brands fa-node-js"></i>
              </div>
              <div class="back">
                <h4>NODE.JS</h4>
              </div>
            </div>
          </div>
          <div class="skills-info aboutCard-container col-md-3 g-3">
            <div class="aboutCard">
              <div class="front">
                <i class="fa-brands fa-solid fa-database"></i>
              </div>
              <div class="back">
                <h4>MySQL</h4>
              </div>
            </div>
          </div>
          <div class="skills-info aboutCard-container col-md-3 g-3">
            <div class="aboutCard">
              <div class="front">
                <i class="fa-brands fa-git-alt"></i>
              </div>
              <div class="back">
                <h4>GIT</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.aboutCard {
  position: relative;
  width: 100px;
  height: 100px;
  transition: all 0.6s ease;
  transform-style: preserve-3d;
}

.front,
.back {
  position: absolute;
  background: var(--background-color);
  top: 0;
  left: 0;
  width: 102px;
  height: 102px;
  border-radius: 5px;
  color: rgb(39, 39, 39);
  /* box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3),
    0 17px 17px 0 rgba(0, 0, 0, 0.15); */
  backface-visibility: hidden;
}

.front {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
}

.back {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.aboutCard-container:hover .aboutCard {
  transform: rotateY(180deg);
}

.back {
  transform: rotateY(180deg);
}
.fa-brands {
  font-size: 4rem;
}

.designcards {
  height: 200px;
  width: 200px;
}
</style>
