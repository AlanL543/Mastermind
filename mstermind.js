let pions=["blue", "white", "fuchsia", "green", "orange", "purple", "red", "yellow"];
let petits_pions=["blanc", "noir"];
let propositionCombinaison = ["", "", "", ""];
let colonne = 0;
let lignes = 0;

function initChoice(){
  console.log("il est 11h48");
  $('.couleur span').on('dragstart', function(event){
    let dragevent = event.originalEvent || event;
    console.log($(dragevent.target).find('svg').attr('fill'));
    dragevent.dataTransfer.setData("text", $(dragevent.target).find('svg').attr('fill'));
  });

  $('#cellules td').on('dragover',function(event){
    event.preventDefault();
  });

  $('#cellules td').on('drop',function(event){
    let dragevent = event.originalEvent || event;
    event.preventDefault();
    let data = dragevent.dataTransfer.getData("text");
    let elm=$('<svg height="10" width="10" style="display: block"></svg>');
    elm.attr('fill', data);
    event.target.append(elm);
  });
}

$(function(){
  initChoice();
});
