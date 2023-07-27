function getUniqueNames(list1, list2) {
  const uniqueNamesInList1 = [];
  const uniqueNamesInList2 = [];
  const commonNames = [];

  for (const name of list1) {
    if (!list2.includes(name)) {
      uniqueNamesInList1.push(name);
    } else {
      commonNames.push(name);
    }
  }

  for (const name of list2) {
    if (!list1.includes(name)) {
      uniqueNamesInList2.push(name);
    }
  }

  return {
    uniqueNamesInList1,
    uniqueNamesInList2,
    commonNames
  };
}

const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

const { uniqueNamesInList1, uniqueNamesInList2, commonNames } = getUniqueNames(list1, list2);

console.log('Unique names in List1 not in List2:', uniqueNamesInList1);
console.log('Unique names in List2 not in List1:', uniqueNamesInList2);
console.log('Common names in both List1 and List2:', commonNames);
