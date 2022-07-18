<template>
  <section id="contact">
    <div class="container-fluid p-5">
      <div class="contact container-fluid shadow-sm m-4 p-5 pb-5">
        <div class="row d-flex flex-wrap justify-content-between">
          <div class="col-lg-6">
            <h3>SAY HELLO</h3>
          </div>
          <div class="col-lg-3">
            <h5>LOCATION</h5>
            <p>Cape Town, South AFrica</p>
          </div>
          <div class="col-lg-3">
            <h5>REACH ME</h5>
            <p>076 719 4703</p>
          </div>
        </div>
        <div class="row d-flex flex-wrap">
          <div class="col-lg-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26466.67435590388!2d18.453872446775385!3d-33.98394620995498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc42c52081a7cb%3A0x79fbdc90a0e82eac!2sClaremont%2C%20Cape%20Town%2C%207708!5e0!3m2!1sen!2sza!4v1652185087093!5m2!1sen!2sza"
              style="border: 0; width: 100%; height: 100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="col-lg-7 p-3">
            <div class="form">
              <form action="https://formspree.io/f/xyyolkwj" method="POST">
                <div class="form-floating mb-3">
                  <input
                    type="fullName"
                    class="form-control"
                    id="floatingName"
                    placeholder="FullName"
                    name="floatingName"
                  />
                  <label for="floatingName">Full Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="tel"
                    class="form-control"
                    id="floatingTel"
                    placeholder="Number"
                    name="floatingTel"
                  />
                  <label for="floatingPassword">Contact Number</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="floatingInput"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <textarea
                    class="form-control"
                    placeholder="Leaveacommenthere"
                    id="floatingTextarea"
                    name="floatingTextarea"
                  ></textarea>
                  <label for="floatingTextarea">Message</label>
                </div>
                <button type="submit" class="btn btn-outline-dark blue">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style></style>
