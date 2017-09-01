<template>

  <div>
    <div class="box-row">
      <div class="box-column box-blue box-center">
        <i class="material-icons icon-large">person_outline</i>
      </div>
      <div class="box-column box-white">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue turpis. Duis at rhoncus urna. Curabitur laoreet lorem ut arcu euismod lobortis. Suspendisse in euismod sem. Etiam vel efficitur enim. Aenean id lobortis libero. Proin sagittis non mauris in commodo. Phasellus tempus, mauris eget mollis efficitur, mauris ligula consequat orci, sed ullamcorper eros nisl non tortor. Fusce et sodales urna. Nunc eu velit sem.
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
          <li>
            <span>Email</span>&nbsp;ncrumryan@gmail.com
          </li>
        </ul>
      </div>
    </div>

    <div class="box-row">
      <div class="box-column box-white">
        <h2>My Skills</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue turpis. Duis at rhoncus urna. Curabitur laoreet lorem ut arcu euismod lobortis. Suspendisse in euismod sem. Etiam vel efficitur enim. Aenean id lobortis libero. Proin sagittis non mauris in commodo. Phasellus tempus, mauris eget mollis efficitur, mauris ligula consequat orci, sed ullamcorper eros nisl non tortor. Fusce et sodales urna. Nunc eu velit sem.
        </p>
        <ul class="attribute-list">
          <li>
            <span>Frontend</span>&nbsp;React, Vue, HTML5, CSS3
          </li>
          <li>
            <span>Backend</span>&nbsp;Java, NodeJS, Express/Koa/Hapi, Python
          </li>
          <li>
            <span>Data</span>&nbsp;Solr, Mysql/MariaDB/Oracle, MongoDB
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
              <li>
                <h4><i class="material-icons">date_range</i> 2016 - Present</h4>
                <h2><span>Broadleaf Commerce:</span> Senior Software Engineer</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec congue risus. In non nulla lacus. Maecenas eros sapien, eleifend quis augue eu, pellentesque tincidunt tellus
                </p>
              </li>

              <li>
                <h4><i class="material-icons">date_range</i> 2015 - 2016</h4>
                <h2><span>Broadleaf Commerce:</span> Software Engineer</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec congue risus. In non nulla lacus. Maecenas eros sapien, eleifend quis augue eu, pellentesque tincidunt tellus
                </p>
              </li>

              <li>
                <h4><i class="material-icons">date_range</i> 2013 - 2015</h4>
                <h2><span>College Works:</span> General Manager</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec congue risus. In non nulla lacus. Maecenas eros sapien, eleifend quis augue eu, pellentesque tincidunt tellus
                </p>
              </li>
            </ul>
          </div>
          <div class="column">
            <h2 class="qualifications-title">Education</h2>
            <ul class="qualifications">
              <li>
                <h4><i class="material-icons">date_range</i> 2011 - 2015</h4>
                <h2>University of Texas at Austin:<span> Computer Science</span></h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec congue risus. In non nulla lacus. Maecenas eros sapien, eleifend quis augue eu, pellentesque tincidunt tellus
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
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
    max-height: 30vw;

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
      max-height: 50vw;
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

</style>
