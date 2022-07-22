<template>
  <!-- RESUME -->
  <div id="timeline" class="container mt-5 p-5">
    <div class="heading d-flex justify-content-center">
      <div class="section-title">
        <h1 class="main-title">CAREER</h1>
        <h4 class="subtitle">ASPIRING WEB DEVELOPER</h4>
      </div>
    </div>
    <div
      class="d-flex flex-column justify-content-center align-items-center mb-2"
    >
      <a href="../assets/cv/cv.pdf" download="cv PDF"
        ><button class="btn btn-outline-light">DOWNLOAD CV</button></a
      >
    </div>
    <div class="experiences">
      <ResumeCard
        v-for="resume of experience"
        :key="resume.title"
        :resume="resume"
      />
    </div>
  </div>

  <!-- TESTIMONIALS -->
  <div id="testimonials" class="container mt-3 p-5 mb-4">
    <div
      class="section-title d-flex flex-column justify-content-center align-items-center mb-2"
    >
      <h1>TESTIMONIALS</h1>
      <h3>WHAT OTHERS HAVE SAID ABOUT ME</h3>
    </div>
    <div id="card-holder" class="row justify-content-evenly">
      <TestCard v-for="test of testimonials" :key="test.message" :test="test" />
    </div>
  </div>
</template>
<script>
import ResumeCard from "../components/ResumeCard.vue";
import TestCard from "../components/TestCard.vue";

export default {
  data() {
    return {
      experience: [
        {
          header: "MARCH 2022 -CURRENT",
          title: "Life Choices Academy",
          role: "FULLSTACK DEVELOPER INTERN",
          description:
            "An organisation that aims to rectify inequality to disadvantaged youth by empowering them through a six month web development bootcamp",
          heading: "What I learnt:",
          list: "Learnt Front-end styling frameworks,manipulations styling with CSS and Bootsrap, Coding webpages using HTML. ",
        },
        {
          header: "FEB 2017-NOVEMBER 2021",
          title: "The University of the Western Cape",
          role: "BSc BIOTECHNOLOGY GRADUATE",
          description:
            "Both theory and practical based learning about the wonderful world at a microscpic level.",
          heading: "Modules taken:",
          list: "Biochemistry, Microbiology, Bioinformatics, Mathematics, Statistics,  Plant, food and Industrical Biotechnology",
        },
        {
          header: "JUNE 2020 - OCTOBER 2020",
          title: "Amazon",
          role: "CUSTOMER SERVICE AGENT",
          description:
            "I worked for a massive global eCommerce website within the customer service branch",
          heading: "My Responsibilities:",
          list: "Solved customer queries expeditiously // Empathetic listener and persuasive speaker towards customers //Commended by management for efficiency and professionalism ",
        },
        {
          header: "JUNE 2016-JANUARY 2020",
          title: "Khanyisa Real Sytems",
          role: "TEMP RECEPTIONIST",
          description:
            "A software developer house based in Rondebosch where I worked in a relief role when needed.",
          heading: "What I learnt:",
          list: "Managed a switchboard and mailing system // Filing of invoices // Stock control and product logistics",
        },
      ],
      testimonials: [
        {
          message:
            "In the short time that I have known Carla, she has continuously surprised and impressed me. Carla is a natural born leader and has quickly become someone that her peers look up to. Carla is also very dedicated, both to her colleagues as well as her studies. Carla has proven to be an absolute powerhouse of talent and I cannot wait to see the heights to which she soars!",
          person: "Jason Wandrag - Lecturer",
          img: "https://i.postimg.cc/TwGvGPPz/2021-team-jason-wandrag.jpg",
        },
        {
          message:
            "Carla Amy Lawrence is an excellent web developer. Carla is clearly focused on self progression, she is definitely not the type of person to associate her self with anything mediocre. Her kind personality combined with her determined work ethic makes her an absolute pleasure to have around in the work environment",
          person: "Jesse Spence - Colleague",
          img: "https://i.postimg.cc/bw27tnSX/Jesse-2.jpg",
        },
        {
          message:
            "Carla, busting with potential, great initiative and a great personality with a can do spirt. When responsibly comes her way she takes charge. Being elected as a team rep she has shown prowess in working in a team and communicating effectively to plan projects and events. A insider with a outside perspective, with those skills she would be a asset to any team and with her work ethic and drive she is assured for success",
          person: "Emile Van Wyk - Colleague",
          img: "https://i.postimg.cc/zfZ9SfTy/Emile.jpg",
        },
        {
          message:
            "Carla is the perfect example of a leader. She has an exceptional learning agility and her integrity is to be admired. Carla has always gone above and beyond to achieve anything she puts her mind to.  I would personally recommend her , as she would add exceptional value to any workplace she enters.",
          person: "Fatima Galant - Colleague",
          img: "https://i.postimg.cc/52ZZvMSm/Copy-of-Fatima-1.jpg",
        },
        {
          message:
            "Carla is your go-to person when you're stuck with anything work related or in your personal life. Carla is a really awesome web developer. Her insight of both design and user experience really makes her such valuable team player. She indeed is an asset to any company or project.I feel honored to have worked beside her on many projects. Anything she creates always shows her passion for programming.",
          person: "Ricardo Moses - Colleague",
          img: "https://i.postimg.cc/Wp8wv0Wv/Ricardo-2.jpg",
        },
        {
          message:
            "Carla's approach to her work is outstanding. On a personal level, she is someone you can easily connect with. She is open and ready to help with any task or project. I love seeing her creative side come to life and she is a pleasure to have in any team",
          person: "Zoe van der Scyff",
          img: "https://i.postimg.cc/4yHvHD8t/Zoe-1.jpg",
        },
      ],
    };
  },

  components: { ResumeCard, TestCard },
};
</script>
<style>
p {
  color: var(--color3);
  text-align: justify;
  text-justify: inter-word;
}

.test-card {
  background-color: var(--background-color);
}
.test-card:hover {
  transform: scale();
  box-shadow: #75dab4 2px 1px 8px;
}

.experiences {
  display: flex;
  flex-direction: column;
}
.experiences .resume-card {
  width: 50%;
  padding: 10px;
  color: var(--color1);
}
.experiences .resume-card:nth-child(odd) * {
  text-align: end;
}
.experiences .resume-card:nth-child(even) {
  align-self: flex-end;
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 4rem;
  }
}
</style>
