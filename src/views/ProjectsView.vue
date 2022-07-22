<template>
  <div class="container mt-5 p-5">
    <div
      class="projectDisplay row d-flex flex-wrap justify-content-center"
      v-if="filteredProjects"
    >
      <div class="heading d-flex justify-content-center">
        <div class="section-title">
          <h1 class="main-title">PROJECTS</h1>
          <h4 class="subtitle">A GLIMPSE AT MY WORK</h4>
        </div>
      </div>
      <div class="filter d-flex justify-content-center">
        <form>
          <div
            class="radio-toolbar d-flex flex-wrap justify-content-center align-items-center"
          >
            <input v-model="stack" type="radio" id="all" value="all" /><label
              for="all"
              >ALL</label
            >

            <input v-model="stack" type="radio" id="CSS" value="CSS" /><label
              for="CSS"
              >CSS</label
            >
            <input v-model="stack" type="radio" id="JS" value="JS" />
            <label for="JS">JAVASCRIPT</label>
            <input v-model="stack" type="radio" id="VUE" value="Vue" />
            <label for="VUE">VUE</label>
          </div>
        </form>
      </div>
      <div class="onMobile">
        <h4>CLICK ON A PROJECT FOR DETAILS</h4>
      </div>

      <ProjectCard
        v-for="project of filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>
<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
  props: ["id"],
  computed: {
    filteredProjects() {
      return this.projects.filter((project) => {
        let isMatch = true;
        if (this.stack !== "all" && project.stack !== this.stack)
          isMatch = false;
        return isMatch;
      });
    },
  },
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Property Website",
          desc: "This app was created for users to view, sort and filter through property listings. It also allows for the admin to add, edit and delete listings",
          stack: "JS",
          objective: "CRUD javascript functions",
          img: "https://i.postimg.cc/3NPfg5nC/Property.png",
          img_alt: "propertywebsite",
          github: "https://github.com/Carlaamylawrence/realEstate",
          live: "https://findmeahouze.netlify.app",
        },
        {
          id: 2,
          title: "To-do List app",
          desc: "I developed this app for users to create, sort and delete tasks as they are completed",
          stack: "JS",
          objective: "CRUD javascript functions",
          img: "https://i.postimg.cc/4dx0G1Yt/Todo.png",
          img_alt: "todowebsite",
          github: "https://github.com/Carlaamylawrence/TODOLIST",
          live: "https://getitdonetodoapp.netlify.app",
        },
        {
          id: 3,
          title: "BMI Calculator app",
          desc: "This app allows for users to calculate their bmi by inputing their height(cm) and weight(kg)",
          stack: "JS",
          objective: "MATH javascript functions",
          img: "https://i.postimg.cc/fRYpfy43/bmiapp.png",
          img_alt: "bmiapp",
          github: "https://github.com/Carlaamylawrence/BMI-draft",
          live: "https://freebmichecker.netlify.app",
        },
        {
          id: 4,
          title: "Calculator app",
          desc: "A user friendly calculator app for basic mathematic sums with a text color change feature",
          stack: "JS",
          objective: "MATH javascript functions",
          img: "https://i.postimg.cc/N0YVJtYd/calculator-app.png",
          img_alt: "calculatorapp",
          github: "https://github.com/Carlaamylawrence/Calculator",
          live: "https://retrocalculator.netlify.app",
        },
        {
          id: 5,
          title: "Temperature Convertor app",
          desc: "This user friendly app is able to convert Farenheit to celsius degreess and vice versa",
          stack: "JS",
          objective: "MATH javascript functions",
          img: "https://i.postimg.cc/cJmzPzL0/tempapp.png",
          img_alt: "tempapp",
          github: "https://github.com/Carlaamylawrence/tempconverter",
          live: "https://freetempconverter.netlify.app",
        },
        {
          id: 6,
          title: "Kanye West Quote App",
          desc: "Experimental build fetching an API and dsiplaying it on the screen",
          stack: "JS",
          objective: "Fetching an API",
          img: "https://i.postimg.cc/VstX1Sny/kanye.png",
          img_alt: "yeezyapp",
          github: "https://github.com/Carlaamylawrence/Yeezysaid",
          live: "https://yeezyoncesaid.netlify.app",
        },
        {
          id: 7,
          title: "eCommerce app",
          desc: "This user friendly app focuses on filtering an API and being able to add an item",
          stack: "JS",
          objective: "Filtering and sorting",
          img: "https://i.postimg.cc/qRPny0fZ/Capture.png",
          img_alt: "storeapp",
          github: "https://github.com/Carlaamylawrence/fakestore",
          live: "https://thisisafakestore.netlify.app",
        },
        {
          id: 8,
          title: "Gym landing page",
          desc: "A single landing page for a gym that incorporates Bootstrap for styling",
          stack: "CSS",
          objective: "Web design",
          img: "https://i.postimg.cc/FzfndsgH/gymweb.png",
          img_alt: "gympwebsite",
          github: "https://github.com/Carlaamylawrence/gym",
          live: "https://hugegym.netlify.app",
        },
        {
          id: 9,
          title: "Online book library",
          desc: "A digital library for users to create, edit and download pdf versions of books",
          stack: "Vue",
          objective: "Using VueX store",
          img: "https://i.postimg.cc/7LkRMdZr/Screenshot-2022-07-22-133214.png",
          img_alt: "bookdom",
          github:
            "https://github.com/AbuBakrKhan24/BookShop/tree/Abu-new-stuff",
          live: "",
        },
      ],
      stack: "all",
    };
  },
};
</script>
<style>
.radio-toolbar label {
  display: inline-block;
  background-color: --color1;
  color: var(--color3);
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #444;
  border-radius: 4px;
  margin: 1rem;
}
.radio-toolbar label:hover {
  background-color: var(--color2);

  border: 1px solid var(--color2);
}
.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}
.onMobile {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}
@media only screen and (max-width: 600px) {
  .onMobile {
    opacity: 1;
  }
}
</style>
