// Premier module
module("Chiffres décimaux");
test( "1 retourne I", function() {
  equal( convert(1), "I","Passed!" );
});
test( "2 retourne II", function() {
  equal( convert(2), "II", "Passed!" );
});
test("3 retourne III", function() {
    equal(convert(3), "III", "Passed!");
});
test("4 retourne IV", function() {
    equal(convert(4), "IV", "Passed!");
});
test( "5 retourne V", function(){
  equal( convert(5), "V", "Passed!" );
});
test( "6 retourne VI", function(){
  equal( convert(6), "VI", "Passed!" );
});
test("8 return VIII", function() {
   equal(convert(8), "VIII", "Passed!");
});
test("9 retourne IX", function() {
    equal(convert(9), "IX", "Passed!");
});

// Second module
module("Nombres décimaux");
test("10 retourne X", function() {
    equal(convert(10), "X", "Passed!");
});
test("12 retourne XII", function() {
    equal(convert(12), "XII", "Passed!");
});
test("14 retourne XIV", function() {
    equal(convert(14), "XIV", "Passed!");
});
test("19 retourne XIX", function() {
    equal(convert(19), "XIX", "Passed!");
});
test("100 retourne C", function() {
    equal(convert(100), "C", "Passed!");
});
test("449 retourne CDXLIX", function() {
    equal(convert(449), "CDXLIX", "Passed!");
});
test("1000 retourne M", function() {
    equal(convert(1000), "M", "Passed!");
});


