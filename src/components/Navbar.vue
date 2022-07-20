<template>
  <nav id="navbar" :class="{ active: isActive }">
    <ul class="nav-links">
      <li class="nav-link"><router-link to="/">HOME</router-link></li>
      <li class="nav-link"><router-link to="/about">ABOUT</router-link></li>
      <li class="nav-link"><router-link to="/resume">RESUME</router-link></li>
      <li class="nav-link">
        <router-link to="/projects">PROJECTS</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/contact">CONTACT</router-link>
      </li>
    </ul>
  </nav>
  <button id="toggler" @click="toggleNav()">menu</button>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style>
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
  z-index: 2;
}
nav {
  background-color: black;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style-type: none;
  font-family: "Fjalla One", sans-serif;
}

.nav-link a {
  color: white;
  text-decoration: none;
  text-shadow: #cbe8ec 2px;
  font-size: 2rem;
}

.nav-link a:hover {
  color: #cbe8ec;
}

#toggler {
  position: fixed;
  top: 20px;
  right: 20px;
  display: none;
}

@media screen and (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    height: 100vh;
    align-items: center;
    z-index: 10;
  }

  #navbar {
    top: -110vh;
    transition: all 0.3s linear;
    z-index: 50;
  }

  #navbar.active {
    top: 0;
  }
  .wrapper {
    display: none;
  }

  #toggler {
    display: block;
    z-index: 100;
  }
}
</style>
