function truncate(str, maxlength) {
  typeof maxlength === "number";
  if (str.length < maxlength) {
    return str;
  }  else {
    return str.slice(0, (maxlength - 1)) + "…";
  }
}
