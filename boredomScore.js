// kata link: codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript
function boredom(staff) {
  const score = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };
  const staffScore = Object.keys(staff).reduce(
    (a, b) => a + score[staff[b]],
    0
  );
  if (staffScore <= 80) return "kill me now";
  else if (staffScore <= 100) return "i can handle this";
  else return "party time!!";
}
