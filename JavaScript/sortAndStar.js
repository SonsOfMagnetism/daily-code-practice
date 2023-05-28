function twoSort(s) {
    // Sort the array alphabetically
    s.sort();
  
    // Get the first string from the sorted array
    const firstString = s[0];
  
    // Insert "***" between each letter of the first string
    const formattedString = firstString.split('').join('***');
  
    return formattedString;
  }
  
  // Example usage:
  const strings = ["mike", "check", "one", "two"];
  const result = twoSort(strings);
  console.log(result);