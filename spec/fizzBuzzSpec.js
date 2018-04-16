describe("testing tests", function() {
    it("it adds the arguments", function() {
        var a = adder(2,3)
      expect(a).toEqual(5);
    });
  });

  describe("fizzbuzz", function() {
    it("changes numbers divisible by 3 to fizz", function() {
        var a = fizzbuzz(3);
        var b = fizzbuzz(6);
        expect(a).toEqual('fizz');
        expect(b).toEqual('fizz');
    });

    it("changes numbers divisible by 5 to buzz", function(){
        var c = fizzbuzz(5);
        var d = fizzbuzz(10);
        expect(c).toEqual('buzz');
        expect(d).toEqual('buzz');
    });

    it("returns the number if it is not divisible by either", function(){
        var e = fizzbuzz(4);
        var f = fizzbuzz(13);
        expect(e).toEqual(4);
        expect(f).toEqual(13);
    });

    it("returns fizzbuzz if divisible by both", function(){
        var e = fizzbuzz(15);
        var f = fizzbuzz(30);
        expect(e).toEqual('fizzbuzz');
        expect(f).toEqual('fizzbuzz');
    });
  });


  
//   array.each { |e| e + 1 } 

//   array.each function(e) {
//       e + 1;
//     }

  