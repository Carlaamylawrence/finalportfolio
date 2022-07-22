<template>
  <nav id="navbar" :class="{ active: isActive }">
    <ul class="nav-links">
      <li class="nav-link" @click="toggleNav()" ><router-link to="/" >HOME</router-link></li>
      <li class="nav-link" @click="toggleNav()" ><router-link to="/about">ABOUT</router-link></li>
      <li class="nav-link" @click="toggleNav()" ><router-link to="/resume">RESUME</router-link></li>
      <li class="nav-link" @click="toggleNav()" >
        <router-link to="/projects">PROJECTS</router-link>
      </li>
      <li class="nav-link" @click="toggleNav()" >
        <router-link to="/contact">CONTACT</router-link>
      </li>
      <li class>
        <i
          class="dark d-flex align-items-center mt-3 fa-solid fa-moon"
          @click="changeTheme" 
          
        ></i>
      </li>
    </ul>
  </nav>
 <i id="toggler" @click="toggleNav()" class="fa-solid fa-bars"></i>
</template>
<script>
setInterval(() => {
  if (window.scrollY != 0) {
    //user scrolled to the top of the page
    document.querySelector("#navbar").classList.add("solid");
  } else {
    document.querySelector("#navbar").classList.remove("solid");
  }
}, 100);
export default {
  data() {
    return {
      isActive: false,
      dark: false,
      color: "#fffefe",
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
    changeTheme() {
      let cssVariables = document.querySelector(":root");
      this.dark = !this.dark;
      if (this.dark) {
        cssVariables.style.setProperty("--background-color", "#222");
        cssVariables.style.setProperty("--color1", "#fffefe");
        cssVariables.style.setProperty("--color3", "#fffefe");
      } else {
        cssVariables.style.setProperty("--background-color", "#fffefe");
        cssVariables.style.setProperty("--color1", "#222");
        cssVariables.style.setProperty("--color3", "#222");
      }
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
  background-color: rgba(255, 255, 255, 0.5);
  /* background-color: var(--background-color); */
  z-index: 200;
  transition: all 0.3s linear;
}
#navbar.solid {
  background-color: rgba(255, 255, 255, 1);
}
nav {
  background-color: rgba(255, 255, 255, 0.5);
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style-type: none;
  font-family: "Fjalla One", sans-serif;
}

.nav-link a {
  color: var(--color2);
  text-decoration: none;
  text-shadow: #cbe8ec 1px 2px;
  font-size: 2rem;
}

.nav-link a:hover,
.dark:hover {
  color: #cbe8ec;
}

.dark {
  border: none;
  font-size:2rem;
  color: var(--color1);
}

#toggler {
  position: fixed;
  top: 20px;
  right: 20px;
  display: none;
  color:var(--color2);
}

@media screen and (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    height: 130vh;
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
  #navbar.active,
  nav {
    background-color: black;
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
