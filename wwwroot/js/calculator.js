
function calc() {
    var assignmentsScore;
    var groupProjectsScore;
    var quizzesScore;
    var examsScore;
    var intexScore;
    var finalGrade;
    var letterGrade;

    assignmentsScore = parseFloat(document.getElementById("assignments").value);
    groupProjectsScore = parseFloat(document.getElementById("groupProjects").value);
    quizzesScore = parseFloat(document.getElementById("quizzes").value);
    examsScore = parseFloat(document.getElementById("exams").value);
    intexScore = parseFloat(document.getElementById("intex").value);
    finalGrade = assignmentsScore * 0.5 + groupProjectsScore * 0.1 + quizzesScore * 0.1 + examsScore * 0.2 + intexScore * 0.1;
    Math.round(finalGrade);

    if (finalGrade >= 94) { letterGrade = "A"; }
    else if (finalGrade >= 90 && finalGrade < 94) { letterGrade = "A-"; }
    else if (finalGrade >= 87 && finalGrade < 90) { letterGrade = "B+"; }
    else if (finalGrade >= 84 && finalGrade < 87) { letterGrade = "B"; }
    else if (finalGrade >= 80 && finalGrade < 84) { letterGrade = "B-"; }
    else if (finalGrade >= 77 && finalGrade < 80) { letterGrade = "C+"; }
    else if (finalGrade >= 74 && finalGrade < 77) { letterGrade = "C"; }
    else if (finalGrade >= 70 && finalGrade < 74) { letterGrade = "C-"; }
    else if (finalGrade >= 67 && finalGrade < 70) { letterGrade = "D+"; }
    else if (finalGrade >= 64 && finalGrade < 67) { letterGrade = "D"; }
    else if (finalGrade >= 60 && finalGrade < 64) { letterGrade = "D-"; }
    else { letterGrade = "E"; }

    alert("Your final numeric grade is " + finalGrade + " and your final letter grade is " + letterGrade + ".")
}








