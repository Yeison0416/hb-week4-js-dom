export class Gallery {
    constructor (node) {
        this.node=node  
  
        this.layout()
    }

    

    static get templates () {
        return {
          shell: (
            `<div class=gallery__container>
            <div class=container-arrows>
                <button class=container-arrows__arrow ></button>
                <button class=container-arrows__arrow--left ></button>
            </div>
                <ul class=container-dots>
                    <li class=container-dots__li>
                         <button class=container-dots__dots></button>
                    </li>
                    <li class=container-dots__li>
                         <button class=container-dots__dots></button>
                    </li>
                    <li class=container-dots__li>
                         <button class=container-dots__dots></button>
                    </li>
                    <li class=container-dots__li>
                         <button class=container-dots__dots></button>
                    </li>
                    <li class=container-dots__li>
                         <button class=container-dots__dots></button>
                    </li>
                    <li class=container-dots__li>
                         <button class=container-dots__dots></button>
                    </li>
                    <li class=container-dots__li>
                         <button class=container-dots__dots></button>
                    </li>
                    <li class=container-dots__li> 
                         <button class=container-dots__dots></button>
                   </li>
                </ul>
         </div>`
          )
        }
    }

    layout() {
        this.node.innerHTML = Gallery.templates.shell
        this.node.tabIndex = 0
    }
    
    
}

