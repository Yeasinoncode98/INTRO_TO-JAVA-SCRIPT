//Problem-04: Same Same But Different  😕

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// const a1 = { data: [2, 5, 6] }; ;
// const a2 = [2, 5, 6];

// console.log(isSame(a1, a2));
