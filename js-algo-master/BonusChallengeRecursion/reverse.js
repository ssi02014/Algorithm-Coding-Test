function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'

/*
   = emosewa
reverse("awesome")
  reverse("wesome") + a
    reverse("esome") + w
      reverse("some") + e
        reverse("ome") + s
          reverse("me") + o
            reverse("e") + m
              =  e
*/
