prompt.get('input', function (err, result) {

   let input = result.input; // "5,2 4 7 12 9"
   let input_data = input.split(','); // ['5', '2 4 7 12 9']
   let n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
   let arr = input_data[1].split(' '); // Daxil edilmiş massiv. Nümunə - ['2', '4', '7', '12', '9']
   let sum = 0;
   for(i=0; i<arr.length; i++){
   sum = sum + arr[i]
   }
   console.log(sum)
});
