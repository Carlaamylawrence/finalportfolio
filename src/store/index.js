import { createStore } from "vuex";

export default createStore({
  state: {
    projects: null,
    testimonials: null,
    project: null,
  },
  getters: {},
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setProject: (state, project) => {
      state.project = project;
    },
  },
  actions: {
    getProjects: async (context) => {
      fetch("http://localhost:3000/projects")
        .then((res) => res.json())
        .then((data) => context.commit("setProjects", data))
        .catch((err) => console.log(err.message));
    },
    getProject: async (context, id) => {
      fetch("http://localhost:3000/projects/" + id)
        .then((response) => response.json())
        .then((json) => context.commit("setProject", json));
    },
  },
  modules: {},
});
