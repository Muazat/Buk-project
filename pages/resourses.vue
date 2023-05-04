<template>
  <PageTitle>CGPA Calculator</PageTitle>
  <form>
    <div class="mx-24 mt-8 space-y-2">
      <div class="border-b border-gray-900/10 pb-4">
        <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
        <div>
          <div class="mb-2">Years of course</div>
          <TextInput
            class="bg-gray-100"
            type="number"
            v-model="years"
          ></TextInput>
        </div>
      </div>

      <CgpaHeading></CgpaHeading>
      <CgpaAdd
        @updated="addCourse"
        v-for="i in numberOfCourses"
        :index="i"
        :key="i"
      ></CgpaAdd>

      <div
        class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 font-semibold sm:grid-cols-6"
      >
        <div class="sm:col-span-2">
          <div class="mt-2">TOTAL UNITS : {{ total }}</div>
        </div>
        <div class="sm:col-span-2">
          <div class="mt-2">GPA : {{ cgpa }}</div>
        </div>
        <div class="sm:col-span-2">
          <div class="mt-2">CGPA : {{ years }}</div>
        </div>
      </div>
      <!-- <h1>{{ years }}</h1> -->
      <div class="border-b border-gray-900/10 pb-4"></div>
      <div class="w-4/5 md:w-2/3">
        <AddButton
          type="button"
          @click="numberOfCourses++"
          class="m-5 bg-green-500 p-2 font-semibold text-white"
        >
          Add
        </AddButton>
        <AddButton
          type="button"
          @click="calculate"
          class="m-5 bg-green-500 p-2 font-semibold text-white"
        >
          Calculate
        </AddButton>
        <AddButton class="m-5 bg-green-500 p-2 font-semibold text-white">
          Undo
        </AddButton>
      </div>
      <div
        v-if="nextSemester"
        class="grid grid-cols-4 content-center gap-4 p-2 font-semibold"
      >
        <div>
          <AddButton class="bg-blue-300 p-1" type="button" @click=""
            >Calculate For next Semester</AddButton
          >
        </div>
        <div>
          <AddButton class="bg-blue-300 p-1" type="button" @click=""
            >Evaluate performance</AddButton
          >
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
const nextSemester = ref(false);
const years = ref("");
const numberOfCourses = ref(1);
const allCourses = reactive({});
const addCourse = (course, index) => {
  allCourses[index] = course;
};
const cgpa = ref(0);
let total = 0;
function convert(g) {
  if (g == "A") {
    return 5;
  } else if (g == "B") {
    return 4;
  } else if (g == "C") {
    return 3;
  } else if (g == "D") {
    return 2;
  } else {
    return 1;
  }
}
function calculate() {
  cgpa.value, (total = 0);
  let calGrade = 0;
  let coursesLoad = 0;
  for (const key in allCourses) {
    if (!allCourses[key].showAdd) {
      continue;
    }
    coursesLoad = coursesLoad + +allCourses[key].creditUnit;
    calGrade =
      calGrade + convert(allCourses[key].grade) * +allCourses[key].creditUnit;
  }
  cgpa.value = (calGrade / coursesLoad).toFixed(2);
  total = coursesLoad;
  nextSemester.value = true;
}
</script>
