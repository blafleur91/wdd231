const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const coursesContainer = document.querySelector(".courses");

function displayCourses(courseList) {
    // this will remove course cards, loop through the courseList, create a card, put the course information into the card, add the card to the page, 
    // and calculate total credits.

    document.querySelectorAll(".course-card").forEach(card => card.remove());
    document.querySelectorAll(".total").forEach(total => total.remove());

    courseList.forEach(course => {
        const card = document.createElement("div");

        card.classList.add("course-card");
        card.innerHTML = `
        <h3>${course.subject} ${course.number}</h3>
        <p>${course.title}</p>
        `;

        if (course.completed) {
            card.classList.add("complete");
            // the below line of code is basically just doing appendChild without all the extra stuff to write out.
            card.innerHTML += `<p>✓ Completed</p>`;
        }

        coursesContainer.appendChild(card);

    });

    // explanation from chat GPT in my own words: reduce in its most simple terminology takes items from an array and turns them into one final value, ie takes 2+2+2 into 6
    // However, it can be anything, from string, number, object, even to another array.
    // the below command is saying to make a variable that takes the array being input, and reduce it. it takes two parameters, in this instance total and course. course
    // represents the item from the array, and total is the running total, the stuff getting reduced to one value.
    // the 0 at the end means that it is the starting value. In the addition part, it is saying to take the total value and add the item from the array.
    // the .credits is specifying to pull from the credits part of the item in the array.
    const totalCredits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    const total = document.createElement("p");
    total.classList.add("total");
    total.textContent = `The total credits for courses listed above is ${totalCredits}`;
    coursesContainer.appendChild(total);
    
}

displayCourses(courses);

// these querySelectors will run the above function with different criteria.
document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#cse").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
});

document.querySelector("#wdd").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
});

