<template>

  <div>
    <div class="box-row">
      <div class="box-column box-blue box-center">
        <i class="material-icons icon-large">person_outline</i>
      </div>
      <div class="box-column box-white">
        <h2>About Me</h2>
        <p>
          Hi, I am Nick. I was born in the suburbs of Arlington, Texas.
          I went to college at the University of Texas at Austin, and fell in love with living a big city.
          When I graduated with my Bachelor's in Computer Science in 2015,
          I decided to stick around and found a job working at a fast-paced
          startup, Broadleaf Commerce, building software for Fortune 500 companies.
          While I love to code, I also enjoy listening to music, going for hikes,
          and traveling the world.
        </p>
        <ul class="attribute-list">
          <li>
            <span>Name</span>&nbsp;Nicholas Crum
          </li>
          <li>
            <span>Age</span>&nbsp;24 Years
          </li>
          <li>
            <span>Experience</span>&nbsp;+2 Years
          </li>
        </ul>
      </div>
    </div>

    <div class="box-row">
      <div class="box-column box-white">
        <h2>My Skills</h2>
        <p>
          I love to write code. It doesn't matter what language or what project
          I'm working on; I will likely enjoy it.
          I consider myself a full-stack developer, as my day-to-day
          involves writing code for everything from the frontend to the backend.
          Most of my experience is in building enterprise e-Commerce software
          systems and web applications for large companies.
        </p>
        <ul class="attribute-list">
          <li>
            <span>Frontend</span>&nbsp;React, Vue, HTML5, CSS3
          </li>
          <li>
            <span>Backend</span>&nbsp;Java, NodeJS, Express/Koa/Hapi, Python
          </li>
          <li>
            <span>Data</span>&nbsp;Solr, MySql/MariaDB/Oracle, MongoDB
          </li>
        </ul>
      </div>
      <div class="box-column box-blue box-center">
        <i class="material-icons icon-large">insert_chart</i>
      </div>
    </div>

    <div class="box-row">
      <div class="box-column box-nomax box-white box-blue-bordered">
        <h1>Experience & Education</h1>
        <div class="row">
          <div class="column">
            <h2 class="qualifications-title">Work Experience</h2>
            <ul class="qualifications">
              <li v-for="workQualification in workQualifications">
                <h4><i class="material-icons">date_range</i>&nbsp;{{workQualification.dateRange}}</h4>
                <h2><span>{{workQualification.organization}}:</span>&nbsp;{{workQualification.title}}</h2>
                <p>
                  {{workQualification.description}}
                </p>
              </li>
            </ul>
          </div>
          <div class="column">
            <h2 class="qualifications-title">Education</h2>
            <ul class="qualifications">
              <li v-for="educationQualification in educationQualifications">
                <h4><i class="material-icons">date_range</i>&nbsp;{{educationQualification.dateRange}}</h4>
                <h2><span>{{educationQualification.organization}}:</span>&nbsp;{{educationQualification.title}}</h2>
                <p>
                  {{educationQualification.description}}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="box-row">
      <div class="box-column box-blue">
        <div class="floating-form-container">
          <form @submit="submitContact">
            <h1>Contact Me</h1>

            <div class="form-group">
              <label>Email</label>
              <input type="text" v-model.trim="contact.email" />
            </div>

            <div class="form-group">
              <label>Subject</label>
              <input type="text" v-model.trim="contact.subject" />
            </div>

            <div class="form-group">
              <label>Body</label>
              <textarea rows="5" v-model.trim="contact.body" />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/api/API';

export default {
  name: 'home',
  data() {
    return {
      contact: {},
      qualifications: [],
    };
  },
  computed: {
    workQualifications() {
      return this.qualifications.filter(q => q.type === 'WORK');
    },
    educationQualifications() {
      return this.qualifications.filter(q => q.type === 'EDUCATION');
    },
  },
  mounted() {
    API.fetchQualifications()
    .then((qualifications) => {
      this.qualifications = qualifications;
    });
  },
  methods: {
    submitContact(e) {
      e.preventDefault();
      API.submitContact(this.contact);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

i.icon-large {
  font-size: 250px;
}

.box-row {
  align-items: center;
  align-content: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }

  .box-column {
    flex: 1 1 50%;
    min-height: 30vw;

    align-items: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    padding: 5em;
    text-align: left;

    @media (max-width: 900px) {
      padding: 3em 4.5em 0;
      flex: 1 1 100%;
      min-height: 50vw;
    }

    &.box-center {
      justify-content: center;
    }

    &.box-nomax {
      max-height: none;

      @media (max-width: 900px) {
        max-height: none;
      }
    }
  }
}

.box-white {
  background-color: #ffffff;
  color: #000000;

  @media (max-width: 900px) {
    order: 2;
  }
}

.box-blue {
  background-color: #00aeef;
  color: #ffffff;

  @media (max-width: 900px) {
    order: 1
  }
}

.box-blue-bordered {
  border-top: 2em solid #000;
  border-bottom: 2em solid #000;
}

.row {
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  width: 100%;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }

  .column {
    flex: 1 1 50%;
    display: flex;
    align-items: flex-start;
    flex-flow: column nowrap;

    @media (max-width: 900px) {
      flex: 1 1 100%;
    }
  }
}

ul.attribute-list {
  font-size: 18px;
  list-style: none;
  margin-right: auto;
  padding: 0;
  text-align: left;

  li {
    color: #00aeef;
    padding-bottom: 5px;

    span {
      color: #000000;
      display: inline-block;
      width: 160px;
    }
  }
}

h2.qualifications-title {
  border-bottom: 4px solid #00aeef;
  padding-bottom: 0.4em;
}

ul.qualifications {
  font-size: 18px;
  list-style: none;
  margin-right: auto;
  margin-left: 0;
  padding: 1em;
  text-align: left;

  li {

    h4 {
      margin: 0;

      i {
        vertical-align: bottom;
      }
    }

    h2 {
      span {
        color: #00aeef;
      }

      margin-bottom: 0;
    }

    p {
      color: #777777;
    }
  }
}

.floating-form-container {
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  min-width: 500px;
  margin-bottom: 50px;

  h1 {
    color: #000;
    text-align: center;
  }

  form {
    padding: 30px;
  }
}

.form-group {
  margin: 0 0 5px 0;

  label {
    display: block;
    padding: 10px 0 0;
    color: #00aeef;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  input[type="text"], textarea {
    background-color: #f0f0f0;
    border: none;
    box-sizing: border-box;
    color: lighten(#00aeef, 10%);
    font-weight: 300;
    font-size: 1.5em;
    resize: none;
    padding: 10px;
    width: 100%;

    &:focus {
      outline: 0;
    }
  }
}

button[type="submit"] {
  background-color: #00aeef;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  position: relative;
  padding: 12px 30px;
  margin: 10px 1px;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0;
  outline: none;

  &:active {
    background-color: darken(#00aeef, 5%);
  }

  &:hover {
    box-shadow: 0 14px 26px -12px rgba(#00aeef, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(#00aeef, 0.2);
  }
}

</style>
