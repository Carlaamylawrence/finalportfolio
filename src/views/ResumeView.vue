<template>
  <div class="container mt-5 p-5">
    <h2>EDUCATION AND WORK EXPERIENCE</h2>
    <ResumeCard
      v-for="resume of experience"
      :key="resume.title"
      :resume="resume"
    />
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
<style>
body {
  background-color: black;
}
</style>
