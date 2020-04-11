function minWindow(s, t) {
  let map = {};
  t.split('').forEach(c => map[c] = (map[c] || 0) + 1);

  let count = t.length;  
  let l = 0;
  let r = 0;

  let start = 0;
  let minLen = Infinity;

  while (r < s.length) {
    if (map[s[r++]]-- > 0) count--;

    while (count === 0) {   
      if (r - l < minLen) {
        minLen = r - l;
        start = l;
      }

      if (map[s[l++]]++ === 0) count++; 
    }
  }

  return minLen === Infinity ? '' : s.substr(start, minLen);
}

console.log(minWindow("ahffaksfajeeubsne", "jefaa"));