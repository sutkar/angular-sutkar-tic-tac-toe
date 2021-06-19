import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  content=document.getElementById("mainGrid").innerHTML;
  name = 'Angular';
  
player=1;


    clicked(blockNo){
    //console.log(blockNo);
console.log(this.content);
  if(this.player == 1){
document.getElementById(blockNo).className='circle center';
this.player=2;
  }else{
  document.getElementById(blockNo).className='cross center';
  this.player=1;
}

  }

  reset(){
    console.log(this.content);
document.getElementById("mainGrid").innerHTML=this.content;
  }
}
