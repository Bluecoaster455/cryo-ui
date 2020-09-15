import './scss/styles.scss';
import CryoUI from './../lib';

export class Demo {
  constructor(){

    CryoUI.defaultOptions.template = `
      <div class="cryo-default-style">
        <div style="font-weight: bold">PLEASE WAIT!</div>
        <div style="margin-top: 10px">{{text}}</div>
      </div>
    `

    document.querySelector("#demo-freeze-5-seconds").addEventListener("click", function(){
      CryoUI.freeze();
      setTimeout(() => {
        CryoUI.unfreeze();
      }, 5000);
    });
  }
}