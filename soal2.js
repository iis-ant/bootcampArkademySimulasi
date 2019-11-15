function username(username) {
  var user = /^[a-z]{5,}$/;
  return user.test(username);
}

function password(password) {
  var pass = /^([0-9]{2,2})([@|&])([A-Z]{4,4})$/;
  return pass.test(password);
}

console.log(password("29@PASS"));
console.log(password("234&Agan"));
console.log(username("arkademy"));
console.log(username("Arkademy"));
