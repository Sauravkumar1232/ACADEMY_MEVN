<template>
  <div class="sidebar">
    <div class="title">Simple Sidebar</div>
    <div class="menu-items">
      <router-link
        to="/course/Create"
        active-class="active"
        exact
        class="side-btn"
      >
        <div class="link-container">Create Course</div>
      </router-link>

      <!-- <router-link
        to="/course/Create"
        active-class="active"
        exact
        class="side-btn"
      >
        <div class="link-container">Course Edit</div> 
      </router-link> -->

      <router-link
        to="/course/list"
        active-class="active"
        exact
        class="side-btn"
      >
        <div class="link-container">Course List</div>
      </router-link>
      <router-link
        to="/branch/create"
        active-class="active"
        exact
        class="side-btn"
      >
        <div class="link-container">Create Branch</div>
      </router-link>
      <router-link
        to="/branch/list"
        active-class="active"
        exact
        class="side-btn"
      >
        <div class="link-container">Branch List</div>
      </router-link>
      <router-link
        to="/subject/create"
        active-class="active"
        exact
        class="side-btn"
      >
        <div class="link-container">Subject Create</div>
      </router-link>

      <router-link
        to="/subject/list"
        active-class="active"
        exact
        class="side-btn"
      >
        <div class="link-container">Subject List</div>
      </router-link>

      <router-link
        to="/subjectMapping/Create"
        active-class="active"
        exact
        class="side-btn"
      >
        <div class="link-container">Subject Mapping Create</div>
      </router-link>

      <router-link
        to="/subjectMapping/list"
        active-class="active"
        exact
        class="side-btn"
      >
        <div class="link-container">Subject Mapping List</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  color: white;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: -50px;
  margin-left: 6px;
}

.menu-items > * {
  margin-top: 20px;
}

.side-btn {
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: transparent;
}

.side-btn:focus {
  outline: none;
}

.side-btn.active {
  position: relative;
  background-color: white;
  color: teal;
  font-weight: 600;
  margin-left: 10px;
  border-radius: 30px 0 0 30px;
}

.side-btn.active::before {
  top: -30px;
}

.side-btn.active::after {
  bottom: -30px;
}

.side-btn.active::before,
.side-btn.active::after {
  position: absolute;
  content: "";
  right: 0;
  height: 30px;
  width: 30px;
  background-color: white;
}

.side-btn.active .link-container::before {
  top: -60px;
}

.side-btn.active .link-container::after {
  bottom: -60px;
  z-index: 99;
}

.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
  position: absolute;
  content: "";
  right: 0px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: teal;
}
</style>
