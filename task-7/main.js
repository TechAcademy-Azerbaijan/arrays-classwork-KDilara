const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
   
    var input = result.input; // "5,2 4 7 12 9"
    var input_data = input.split(','); // ['5', '2 4 7 12 9']
    var n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
    var arr = input_data[1].split(' '); // Daxil edilmiş massiv. Nümunə - ['2', '4', '7', '12', '9']
    let arr2 = [];
      for(i=0; i<arr.length; i++){
      if( arr[i] %2 !=0 ){
        arr2.push(arr[i])
      }
    
      }
      console.log(arr2)
});
