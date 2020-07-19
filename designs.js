//this is the function that adds the canvas according to the user input
const cells=document.getElementsByClassName('cell');
function makeGrid(x,y)
{
   const table = document.getElementById("pixelCanvas");
  let grid="";
  for (let i =0 ; i <x; i++)
   {
      grid=grid+'<tr>'
      for (let j=0 ; j<y;j++)
           {
           grid=grid+'<td class="cell"></td>'
           }
      grid=grid+'</tr>'
    }
    table.innerHTML=grid;

}
//this is the function that adds the click event to the cells of canvas
//also it defines the color of the cells according to the input of the user
 function clickEvent()
 {
   const color = document.getElementById('colorPicker');

   for(let i=0;i<cells.length;i++){
     cells[i].addEventListener('click',function(event){const clicked=event.target;
         clicked.style.backgroundColor=color.value;})
 }
}
//function to undo selection by double clicking the cell
 function dbclick(){
 for(let i=0;i<cells.length;i++){
  cells[i].addEventListener('dblclick',function(event){const dclick=event.target;
        dclick.style.backgroundColor='transparent';})
 }
 }
//this is the function that defines the height and width of canvas
//and it is the submission function that calls the makeGrid and clickEvent functions
 function sub()
 { const height =document.getElementById('inputHeight').value;
   const width =document.getElementById('inputWidth').value;
   makeGrid(height,width);
   clickEvent();
   dbclick();
 }
//this is the Event Listener that targets the button and calls the submission function
document.getElementById('but').addEventListener('click',function(){sub();})
