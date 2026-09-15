
import byuiCourse from "./course.mjs";
// Below is put in squiggly brackets because it is a named export. The brackets are not required for a simgle import (so for imports
// that only have one thing to export, ie only one function), but are recommended for clarity.
// this function is not the default export of the module. Although it could be converted to such, that is unneceessary.
import { setSectionSelection } from "./sections.mjs";
// So below, because we are exporting two functions, we have to have the squiggly brackets and they have to have a comma dividing them.
import { setTitle, renderSections } from "./output.mjs";




document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum);
  // we added the below line, which was originally in the big file inside of the list of students.
  // what it does is call the renderSection function and gives it the needed input to make a section.
  renderSections(byuiCourse.sections);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum, false);
  renderSections(byuiCourse.sections);
});

setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);