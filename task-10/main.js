const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

   let input = result.input; // "5,2 4 7 12 9"
   let input_data = input.split(','); // ['5', '2 4 7 12 9']
   let n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
   let arr = input_data[1].split(' '); // Daxil edilmiş massiv. Nümunə - ['2', '4', '7', '12', '9']
   let max = 0;
   let second = 0;
   for (i = 0; i < arr.length; i++) {
     if (arr[i] > max) {
       max = arr[i];
     }
    
   }
   for (i = 0; i < arr.length; i++) {
     if (arr[i] > second && arr[i]!=max) {
       second = arr[i];
     }
    
   }
   console.log(second+max)
});
