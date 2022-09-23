const palindromes = function(string) {
    processedString = string.toLowerCase();
    return (
      processedString
        .split("")
        .reverse()
        .join("") == processedString
    );
  };

// Do not edit below this line
module.exports = palindromes;
