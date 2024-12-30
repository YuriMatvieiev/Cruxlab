function countValidPasswords(input) {
  const lines = input.trim().split("\n");

  return lines.reduce((validCount, line) => {
    const match = line.match(/(\w) (\d+)-(\d+): (\w+)/);
    if (!match) return validCount;

    const [_, char, min, max, password] = match;
    const cases = [...password].filter((c) => c === char).length;

    return cases >= min && cases <= max ? validCount + 1 : validCount;
  }, 0);
}

const input = `
    a 1-5: abcdj
    z 2-4: asfalseiruqwo
    b 3-6: bhhkkbbjjjb
  `;

console.log("Валідних паролів: " + countValidPasswords(input));
