import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza';
  small: number = 0;
  medium: number = 1;
  large: number = 0;
  adult: number = 1;
  children: number = 0;
  total: number = 200;
  postive=true;
  nagative=true;
  clickMinus(val) {
    let tempTotal=0;
    switch (val) {
      case 'small':
      tempTotal=this.total-200;
        if (this.small != 0 && tempTotal >=200 ) {
          this.small = this.small - 1;
          this.total -= 150;
          this.children -=1;
          tempTotal=0;
        }else{
          this.negativeFalse();
        }
        break;
      case 'medium':
         
        tempTotal=this.total - 200; ;
        if (this.medium != 0 &&  tempTotal >=200 ) {
          this.adult--;
          this.medium = this.medium - 1;
          this.total -= 200;
          tempTotal=0;
        }else{
          this.negativeFalse();
        }
        break;
      case 'large':
      tempTotal=this.total- 300;
      let tempAdult=this.adult-2;
        if (this.large != 0 &&   tempTotal >=200 && tempAdult >= 0 ) {

          this.large = this.large - 1;
          this.adult -=2 ;
          this.total -= 300;
          tempTotal=0;
          tempAdult=0;
        } else{
          this.negativeFalse();
        } 
       
        break;
      case 'adult':
        if (this.adult != 0) {
          this.adult = this.adult - 1;
        }
        break;
      case 'children':
        if (this.children != 0) {
          this.children = this.children - 1;
        }
        break;



      default:
      // code block
    }
  }
  clickPositive(val) {
    let tempTotal = 0;
    let tempSmall = 0;
    let tempMeduim = 0;

    switch (val) {
      case 'small':
        tempTotal = this.total + 150;

        if (tempTotal <= 1000) {
           tempSmall = this.small;
           tempMeduim = this.medium;
          tempSmall +=1;
          if(tempSmall >1){
              tempMeduim = tempMeduim+1
              if(tempMeduim > 1){
                this.large=this.large+1;
                this.small=0;
                this.medium=0;
                tempMeduim=0;
                tempSmall=0;

              }else{
                this.medium=this.medium+1;
                this.small=0;
                tempMeduim=0;
                tempSmall=0;

              }
          }else{
            this.small += 1;
            tempMeduim=0;
            tempSmall=0;
          }
          this.children +=  1;
          this.total += 150;
          tempTotal = 0;
        }else{
          this.postiveFalse();
        }

        break;
      case 'medium':
        tempTotal = this.total +  200;
        tempMeduim = this.medium;
        tempMeduim += 1;
        if(tempMeduim > 1){
          this.large=this.large+1;
          this.medium=0;
                tempMeduim=0;
                 
        }else{
          this.medium = this.medium + 1;
          tempMeduim=0;
        }
        // tempTotal
        // console.log(tempTotal)
        if (tempTotal <= 1000) {
          this.total  +=  200;
          this.adult  +=  1;


          tempTotal = 0;
        }else{
          this.postiveFalse();
   
        }
        break;
      case 'large':
        tempTotal = this.total + 300;
        if (tempTotal <= 1000) {
          this.total +=  300;
          this.adult +=  2;

          this.large +=  1;

          tempTotal = 0;
        }else{
          this.postiveFalse();
         
        }
        break;
      case 'adult':
        //  console.log(tempTotal);/
        tempTotal = this.total + 150;
        if (tempTotal < 1000) {
          this.clickPositive("medium");

        }else{
          this.postiveFalse();
        }



        break;
      case 'children':
        tempTotal = this.total + 150;
        if (tempTotal < 1000) {
           this.clickPositive("small");
         }else{
          this.postiveFalse();
          
        }
        break;
      default:
      // code block
    }
  }
  postiveFalse(){
    console.log(this.total)
    if(this.total >= 1000){
      this.postive=false;

    }
  }
  negativeFalse(){
    console.log("nagative",this.total)
    if(this.total <= 200){
      console.log("nagative1",this.total)
      this.nagative=false;
      this.postive=true;

    }else{
      this.postive=true;

    }
  }
}
