import './css/App.css';
import Lib from './../lib';

class Cryo {
  constructor(){

    let cryo = new Lib();

    cryo.defaultOptions.template = `
      <div class="cryo-default-style">
        <div style="font-weight: bold">PLEASE WAIT!</div>
        <div style="margin-top: 10px">{{text}}</div>
      </div>
    `

    document.querySelector("#demo-freeze-5-seconds").addEventListener("click", function(){
      cryo.freeze();
      setTimeout(() => {
        cryo.unfreeze();
      }, 5000);
    });

    document.querySelector("#demo-freeze-forever").addEventListener("click", function(){
      cryo.defaultOptions.template = `
        <div>{{text}}</div>
      `

      cryo.freeze({
        text: "Unfortunately, you need to refresh the page to unfreeze :("
      });
    });

    document.querySelector("#demo-freeze-div").addEventListener("click", function(){
      cryo.freeze({
        selector: "#to-freeze-demo",
        template: `
        <div class="cryo-default-style-2">
          {{text}}
        </div>
        `,
        text: `This element is now frozen! Click the "Unfreeze box" button to unfreeze it!`
      });
    });

    document.querySelector("#demo-freeze-div-delay").addEventListener("click", function(){
      setTimeout(() => {
        cryo.freeze({
          selector: "#to-freeze-demo",
          template: `
          <div class="cryo-default-style">
            {{text}}
          </div>
          `,
          text: `This element is now frozen! Click the "Unfreeze" button to unfreeze it!`
        });
      }, 2000);
    });

    document.querySelector("#demo-unfreeze-div").addEventListener("click", function(){
      cryo.unfreeze("#to-freeze-demo");
    });

  }
}

export default Cryo;
