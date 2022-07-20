<template>
  <!-- RESUME -->
  <div id="timeline" class="container mt-5 p-5">
    <h2>EDUCATION AND WORK EXPERIENCE</h2>
    <ResumeCard
      v-for="resume of experience"
      :key="resume.title"
      :resume="resume"
    />
  </div>

  <!-- TESTIMONIALS -->
  <div id="testimonials" class="container mt-5 p-5">
    <div
      class="section-title d-flex flex-column justify-content-center align-items-center mb-2"
    >
      <h1>TESTIMONIALS</h1>
      <h3>WHAT OTHERS HAVE SAID ABOUT ME</h3>
    </div>
    <div id="card-holder" class="row justify-content-evenly">
      <div class="card col-md-3 p-3">
        <div class="testimonial image d-flex justify-content-center pb-2">
          <img
            src="https://i.postimg.cc/TwGvGPPz/2021-team-jason-wandrag.jpg"
            class="rounded-circle"
            style="width: 150px"
            alt="jason"
          />
        </div>

        <p>
          "In the short time that I have known Carla, she has continuously
          surprised and impressed me. Carla is a natural born leader and has
          quickly become someone that her peers look up to. Carla is also very
          dedicated, both to her colleagues as well as her studies. Carla has
          proven to be an absolute powerhouse of talent and I cannot wait to see
          the heights to which she soars!"
        </p>
        <h5 class="fst-italic d-flex justify-content-end">
          Jason Wandrag - Lecturer
        </h5>
      </div>
      <div class="card col-md-3 p-3">
        <div class="testimonial image d-flex justify-content-center pb-2">
          <img
            src="https://i.postimg.cc/bw27tnSX/Jesse-2.jpg"
            class="rounded-circle"
            style="width: 150px"
            alt="jesse"
          />
        </div>

        <p class="text-light">
          "Carla Amy Lawrence is an excellent web developer. Carla is clearly
          focused on self progression, she is definitely not the type of person
          to associate her self with anything mediocre. Her kind personality
          combined with her determined work ethic makes her an absolute pleasure
          to have around in the work environment"
        </p>
        <h5 class="fst-italic d-flex justify-content-end">
          Jesse Spence - Colleague
        </h5>
      </div>
      <div class="card col-md-3 p-3">
        <div class="testimonial image d-flex justify-content-center pb-2">
          <img
            src="https://i.postimg.cc/zfZ9SfTy/Emile.jpg"
            class="rounded-circle"
            style="width: 150px"
            alt="emile"
          />
        </div>

        <p>
          "Carla, busting with potential, great initiative and a great
          personality with a can do spirt. When responsibly comes her way she
          takes charge. Being elected as a team rep she has shown prowess in
          working in a team and communicating effectively to plan projects and
          events. A insider with a outside perspective, with those skills she
          would be a asset to any team and with her work ethic and drive she's
          assured for success"
        </p>
        <h5 class="fst-italic d-flex justify-content-end">
          Emile Van Wyk - Colleague
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
import ResumeCard from "../components/ResumeCard.vue";
export default {
  data() {
    return {
      experience: [
        {
          header: "MARCH 2022 -CURRENT",
          title: "Life Choices Academy",
          role: "Fullstack web developer intern",
          description:
            "an organisation that aims to rectify inequality to disadvantaged youth by empowering them through a six month web development bootcamp",
          heading: "What I learnt:",
          list: [
            "Learnt Front-end styling frameworks and manipulations",
            "Styling with CSS and Bootsrap, Coding webpages using HTML. ",
          ],
        },
        {
          header: "Feb 2017-November 2021",
          title: "The University of the Western Cape",
          role: "BSc BIOTECHNOLOGY GRADUATE",
          description:
            "Both theory and practical based learning about the wonderful world at a microscpic level.",
          heading: "Modules taken:",
          list: [
            "Biochemistry, Microbiology and Bioinformatics",
            "Mathematics and Statistics",
            "Plant, food and Industrical Biotechnology",
          ],
        },
        {
          header: "JUNE 2020 - OCTOBER 2020",
          title: "Amazon",
          role: "CUSTOMER SERVICE AGENT",
          description:
            "I worked for a massive global eCommerce website within the customer service branch",
          heading: "My Responsibilities:",
          list: [
            "Solved customer queries expeditiously",
            "Empathetic listener and persuasive speaker towards customers",
            "Commended by management for efficiency and professionalism ",
          ],
        },
        {
          header: "JUNE 2016-JANUARY 2020",
          title: "Khanyisa Real Sytems",
          role: "TEMP RECEPTIONIST",
          description:
            "A software developer house based in Rondebosch where I worked in a relief role when needed.",
          heading: "What I learnt:",
          list: [
            "Managed a switchboard and mailing system",
            "Filing of invoices",
            "Stock control and product logistics",
          ],
        },
      ],
    };
  },

  components: { ResumeCard },
};
</script>
<style scoped>
body {
  background-color: black;
}
p {
  color: white;
  text-align: justify;
  text-justify: inter-word;
}
h5 {
  color: #75dab4;
  font-family: "Fjalla One", sans-serif;
}
.card {
  background-color: black;
}
.card:hover {
  transform: scale();
  box-shadow: #75dab4 2px 1px 8px;
}
</style>
