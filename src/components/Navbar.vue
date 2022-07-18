<template>
  <nav id="nabar">
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
</template>
<script>
export default {};
</script>
<style>
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color5);
  padding: 20px;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style-type: none;
}

.nav-link a {
  color: var(--color1);
  text-decoration: none;
  text-shadow: #cbe8ec 2px;
}

.nav-link a:hover {
  color: var(--color3);
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
  }

  #navbar.active {
    top: 0;
  }
  .wrapper {
    display: none;
  }

  #toggler {
    display: block;
  }
}
</style>
