const solution = (s, skip, index) => {
  const alpha = Array.from({ length: 26 }, (_, idx) =>
    String.fromCharCode(97 + idx)
  );
  const skippedAlpha = alpha.filter((alpha) => !skip.includes(alpha));
  let result = "";

  for (const char of s) {
    const newIdx = skippedAlpha.indexOf(char) + index;
    const finalIdx = newIdx % skippedAlpha.length;

    result += skippedAlpha[finalIdx];
  }

  return result;
};
