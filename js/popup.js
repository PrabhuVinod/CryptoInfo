//document.addEventListener('DOMContentLoaded', documentEvents  , false);

$(document).ready( function () {




 $.ajax({
  url: "https://coinbin.org/coins",
  type: "GET",
      dataType: "json", 
      crossDomain: true,  
  success: function(result){
        
        $('.loader').remove();


        var all_coins = [];
        var all_obj = result.coins;

for(var coin in all_obj) {

   //console.log(JSON.stringify(all_obj[coin]));
   var coin_obj = all_obj[coin];
   var coin_arr = [];
   coin_arr.push(coin_obj.rank);
   var sym_name = coin_obj.name.split('  ');
   coin_arr.push(sym_name[0]);
   coin_arr.push(sym_name[1]);
   coin_arr.push('$ '+coin_obj.usd);

   all_coins.push(coin_arr);

console.log("IN"+all_coins);

}

console.log("OUT"+all_coins);

$('#table_id').DataTable({
  "info": false,
  data: all_coins,
  "pagingType": "simple",
  columns: [
            { title: "Rank" },
            { title: "Symbol" },
            { title: "Name" },
            { title: "Price" }
        ]
});
  $('.dataTables_length').remove();



    }});


    
  
} );