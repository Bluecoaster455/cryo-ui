export class CryoInstance {

  /**
   * @type HTMLElement
   */
  $element = undefined;
  
  /**
   * @type HTMLElement
   */
  $ref = undefined;
  
  /**
   * @type string
   */
  text = ""

  /**
   * @type string|HTMLElement
   */
  template = "";

  constructor($element) {
    this.$element = $element;
  }

  /**
   * Freeze the element
   */
  freeze() {
    let fixed = false;
    if(this.$element.tagName.toLowerCase() === "body"){
      fixed = true;
    }

    let template = this.template;
    let content = "";
    if(template instanceof HTMLElement){
      content = template.outerHTML;
    } else {
      content = template.replace("{{text}}", this.text);
    }

    let wrapper = `
      <div class="cryo-wrapper ${fixed ? 'fixed' : ''}">
        ${content}
      </div>
    `;

    let element = document.createElement("div");
    element.innerHTML = wrapper.trim();
    element = element.firstChild;

    let divelement = this.$element.appendChild(element);
    this.$element.classList.add("cryo-freeze")
    this.$ref = divelement;
  }

  /**
   * Unfreeze the element
   */
  unfreeze() {
    this.$element.classList.remove("cryo-freeze")
    this.$ref.remove();
  }

}