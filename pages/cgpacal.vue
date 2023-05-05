<template>
  <PageTitle>CGPA Calculator</PageTitle>
  <form>
    <PageTitle v-if="!level" class="text-xl font-medium text-blue-700"
      >First Semester level {{ semesterDisplay * 100 }}
    </PageTitle>
    <PageTitle v-if="level" class="text-xl font-medium text-blue-700"
      >Second semester level {{ semesterDisplay * 100 }}
    </PageTitle>
    <div class="mx-24 mt-8 space-y-2">
      <div class="border-b border-gray-900/10 pb-4">
        <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
        <div>
          <div class="mb-2">Years of course</div>
          <div class="grid grid-cols-5">
            <TextInput
              class="col-span-3 bg-gray-100"
              v-on:blur="Disabled"
              type="number"
              min="1"
              max="10"
              v-model="years"
              :disabled="!inputDisabled"
            ></TextInput>
            <Button class="col-span-1 col-start-4" type="button" @click="undo"
              >Change Year</Button
            >
          </div>
        </div>
      </div>

      <CgpaHeading></CgpaHeading>
      <CgpaAdd
        ref="cgpaAdd"
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
          <div class="mt-2">GPA : {{ gpa }}</div>
        </div>
        <div class="sm:col-span-2">
          <div class="mt-2">CGPA : {{ cgpa }}</div>
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
        <AddButton
          type="button"
          @click="undo"
          class="m-5 bg-green-500 p-2 font-semibold text-white"
        >
          Undo
        </AddButton>
      </div>
      <div
        v-if="nextSemester"
        class="grid grid-cols-4 content-center gap-4 p-2 font-semibold"
      >
        <div>
          <AddButton
            class="bg-blue-300 p-1"
            type="button"
            @click="nextSemesterCal"
            >Calculate For next Semester
          </AddButton>
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
const inputDisabled = ref(true);
const level = ref(false);
const years = ref(1);
const semester = ref(1);
const semesterDisplay = ref(1);
let count = 0;
const numberOfCourses = ref(1);
let allCourses = reactive({});
const addCourse = (course, index) => {
  allCourses[index] = course;
};
const gpa = ref(0);
const cgpa = ref(0);
const total = ref(0);
const allTotal = {
  calgrade: [],
  total: [],
};
const cgpaAdd = ref(null);
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
function sum(arr) {
  let r = 0;
  for (let x in arr) {
    r = r + arr[x];
  }
  return r;
}
function calculate() {
  gpa.value = 0;
  total.value = 0;
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
  gpa.value = (calGrade / coursesLoad).toFixed(2);
  total.value = coursesLoad;

  //  adding cgpa to object checking if user have calculated and is trying to calculate again
  if (count == 0) {
    allTotal.calgrade.push(calGrade);
    allTotal.total.push(coursesLoad);
    count++;
  } else {
    allTotal.calgrade.pop();
    allTotal.total.pop();
    allTotal.calgrade.push(calGrade);
    allTotal.total.push(coursesLoad);
  }

  cgpa.value = (sum(allTotal.calgrade) / sum(allTotal.total)).toFixed(2);
  nextSemester.value = true;
}
function undo() {
  nextSemester.value = false;
  inputDisabled.value = true;
  semester.value = 1;
  count = 0;
  years.value = 1;
  numberOfCourses.value = 1;
  gpa.value = 0;
  cgpa.value = 0;
  total.value = 0;
  allTotal.calgrade = [];
  allTotal.total = [];
  allCourses = {};
  semesterDisplay.value = 1;
  cgpaAdd.value[0].clearCourseInfo();
}
function nextSemesterCal() {
  if (semester.value != years.value * 2) {
    nextSemester.value = false;
    semester.value++;
    count = 0;
    numberOfCourses.value = 1;
    gpa.value = 0;
    cgpa.value = 0;
    total.value = 0;
    allCourses = {};
    level.value = !level.value;
    if (semester.value % 2 == 1) {
      semesterDisplay.value++;
    }
    cgpaAdd.value[0].clearCourseInfo();
  }
  // console.log(cgpaAdd.value[0]);
  // else{
  //   // evaluate();
  // }
}
// function evaluate()
function Disabled() {
  inputDisabled.value = false;
}
</script>
