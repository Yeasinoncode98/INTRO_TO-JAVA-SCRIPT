function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let totalScore = 0;
  let passCount = 0;
  let failCount = 0;

  for (const mark of marks) {
    totalScore = totalScore + mark;
    if (mark >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }

  let avg = totalScore / marks.length;

  let round = Math.round(avg);

  if (isNaN(avg)) {
    round = 0;
  } else {
    round = Math.round(avg);
  }

  return {
    finalScore: round,
    pass: passCount,
    fail: failCount,
  };
}
