import './css/App.css';
import Lib from './../lib';

class App {
  constructor(){

    Lib.defaultOptions.template = `
      <div class="cryo-default-style">
        <div style="font-weight: bold">PLEASE WAIT!</div>
        <div style="margin-top: 10px">{{text}}</div>
      </div>
    `

    document.querySelector("#demo-freeze-5-seconds").addEventListener("click", function(){
      Lib.freeze();
      setTimeout(() => {
        Lib.unfreeze();
      }, 5000);
    });

    document.querySelector("#demo-freeze-forever").addEventListener("click", function(){
      Lib.defaultOptions.template = `
        <div>{{text}}</div>
      `

      Lib.freeze({
        text: "Unfortunately, you need to refresh the page to unfreeze :("
      });
    });

    document.querySelector("#demo-freeze-div").addEventListener("click", function(){
      Lib.freeze({
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
        Lib.freeze({
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
      Lib.unfreeze("#to-freeze-demo");
    });

  }
}

export default App;
