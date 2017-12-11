export class Gallery {
    constructor (node, data) {
        this.node=node 
        this.index = 0
        this.elements = {} 
  
        this.setframework()
        this.setUI(data)
    }

    static get templates () {
        return{
          framework:(
            `<div class=gallery>
              <ul class=gallery>
              </ul>
              <div class=gallery__container-arrows>
                  <button class=gallery__arrow-light ></button>
                  <button class=gallery__arrow-left></button>
              </div>
              <ul class=gallery__container-dots>
              </ul>
            </div>` 
          ),

          list_dot:(
            `<li class=gallery__style-dots-images>
              <img class=gallery__images src="https://s3-media3.fl.yelpcdn.com/bphoto/TJz-bzyjl3yHODjPuQ7-CQ/o.jpg"/> 
            </li>`
          ),

          list_image:(
            `<li class=gallery__style-dots-images>
              <button class=gallery__dots></button>
            </li>`
          )
        }
    }

    setframework() {
        this.node.innerHTML = Gallery.templates.framework
        this.node.tabIndex = 0
        this.elements.dotsContainer = this.node.querySelector('.gallery__container-dots')
        console.log(this.elements.dotsContainer) 
        //this.elements.imagesContainer = this.node.querySelector('.gallery__images-container')
        //this.elements.leftBtn = this.node.querySelector('.gallery__arrow--left')
        //this.elements.rightBtn = this.node.querySelector('.gallery__arrow--right') 
    }

     setUI (data) {
         this.setDots(data)
    }

    setDots (data) {
         const dotsHTML = data.map(Gallery.templates.list_dots).join('')
         this.elements.dotsContainer.innerHTML = dotsHTML
    }
    
    
}

