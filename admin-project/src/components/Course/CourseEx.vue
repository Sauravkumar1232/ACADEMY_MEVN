<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/cdbootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/cdbootstrap/css/cdb.min.css"
      />
      <!-- <script src="https://cdn.jsdelivr.net/npm/cdbootstrap/js/bootstrap.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/cdbootstrap/js/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/cdbootstrap/js/cdb.min.js"></script>
     -->
    </head>
    <body>
      <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
          >&times;</a
        >
        <a href="/course/Create">Create Course</a>
        <a href="/course/list">Course List</a>
        <a href="/branch/list">Branch List</a>

        <a href="/branch/create">create branch</a>

        <a href="#"></a>
        <a href="#">Contact</a>
      </div>

      <div id="main">
        <button class="openbtn" @click="openNav()">&#9776; Open Sidebar</button>
        <h2>Collapsed Sidebar</h2>
        <p>Content...</p>
      </div>
    </body>
  </html>
</template>

<script>
// import { CSidebar } from "@coreui/vue";

export default {
  data() {},
  methods: {
    openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      var x = document.getElementById("mySidebar");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      var x = document.getElementById("mySidebar");
      if (x.style.display === "none") {
        x.style.display = "block";
        // x.style.animation - duration-1s;
      } else {
        x.style.display = "none";
      }
    },
  },
};
</script>

<style scoped>
/* The sidebar menu */
.sidebar {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation-name: example, example2;

  /* animation-name: example2; */

  animation-duration: 5s;

  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 10.25s; /* 0.5 second transition effect to slide in the sidebar */
}

@keyframes example {
  0% {
    background-color: red;
    right: 2000px;
    left: 2000px;
  }
  25% {
    background-color: rgb(255, 251, 0);
    /* top: -2000px; */
    left: 00px;
  }
  50% {
    background-color: blue;
    left: 0;
    top: 0px;
  }
  75% {
    background-color: rgb(0, 196, 65);
    left: 0;
    top: 0px;
  }
  100% {
    background-color: rgb(196, 118, 0);
    left: 0;
    top: 0px;
  }
}

@keyframes example2 {
  0% {
    background-color: red;
    right: 00px;
    top: 2000px;
  }
  25% {
    background-color: rgb(255, 251, 0);
    /* top: -2000px; */
    left: 00px;
  }
  50% {
    background-color: blue;
    left: 0;
    top: 0px;
  }
  75% {
    background-color: rgb(0, 196, 65);
    left: 0;
    top: 0px;
  }
  100% {
    background-color: rgb(196, 118, 0);
    left: 0;
    top: 0px;
  }
}
/* The sidebar links */
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* The button used to open the sidebar */
.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s; /* If you want a transition effect */
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}
</style>
