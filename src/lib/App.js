import { CryoInstance } from './CryoInstance';
import deepmerge from 'deepmerge';
import './css/App.css';

class Cryo {
  instances = {};

  defaultOptions = {
    selector: "body",
    text: "Loading...",
    template: `
      <div class="cryo-default-style">
        {{text}}
      </div>
    `
  };

  inited = false;

  /**
   * Check if the element in question is frozen by a cryo instance.
   * @param {HTMLElement} element 
   * @returns {boolean} Is Frozen
   */
  isElementFrozen(element) {
    if(!element.classList.contains("cryo-freeze")){
      let parent = element.parentElement;
      return parent !== null ? this.isElementFrozen(parent) : false;
    }
    return true;
  }

  /**
   * Freeze an element!
   * @param {Object} options 
   */
  freeze(options){
    if(options === undefined) options = {};
    let settings = deepmerge(this.defaultOptions, options);
    let $element = document.querySelector(settings.selector);
    let instance = new CryoInstance($element);
    instance.text = settings.text;
    instance.template = settings.template;
    this.unfreeze(settings.selector);
    instance.freeze();
    this.instances[settings.selector] = instance;

    if(!this.inited){
      this.init();
    }

    return instance;
  }

  /**
   * Unfreeze an element from a given selector of an element that is already frozen.
   * @param {string} selector 
   */
  unfreeze(selector){
    if(selector === undefined){
      for (const ix in this.instances) {
        this.instances[ix].unfreeze();
      }
    }
    else{
      let instance = this.instances[selector];
      if(instance !== undefined){
        instance.unfreeze();
      }
    }
  }

  init(){
    let that = this;

    var fct = function(ev){
      let element = ev.target;
      if(that.isElementFrozen(element)){
        ev.stopPropagation();
        ev.preventDefault();
      }
    }

    document.body.addEventListener("keypress", fct)
    document.body.addEventListener("keydown", fct)
    document.body.addEventListener("keyup", fct)
    document.body.addEventListener("dblclick", fct)
    document.body.addEventListener("mousedown", fct)
  }

}

export default Cryo;