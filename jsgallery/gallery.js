export class Gallery {
    constructor (node, data) {
        this.node=node 
        this.index = 0
        this.elements = {}
        
        this.setframework()
        this.setDots_dynamically(data)
        this.setlist_image(data) 
        this.setEvents()
    }

    static get templates () {
        return{
          framework:(
            `<div class=gallery>
              <ul class=gallery__container-images>
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
              <button class=gallery__dots></button>
            </li>`
          )
        }
    }

    static list_image () {
      return {
        list_image:(
          `<li class=gallery__style-dots-images>
            <img class=gallery__images src="https://my.ifdesign.de/upload/award_img_309/oex_large/176468_01_01_Ferrari_FXX_K.jpg"/> 
          </li>`
        )
      }
    }

    setframework() {
        this.node.innerHTML = Gallery.templates.framework
        this.node.tabIndex = 0
        this.elements.dotsContainer = this.node.querySelector('.gallery__container-dots')  
        this.elements.imagesContainer = this.node.querySelector('.gallery__container-images')
        //this.elements.leftBtn = this.node.querySelector('.gallery__arrow--left')
        //this.elements.rightBtn = this.node.querySelector('.gallery__arrow--right') 
    }

    setDots_dynamically (data) {
         var dot_html=Gallery.templates.list_dot
         var array_dots_html= new Array(data.length);
         const dots_html=array_dots_html.fill(dot_html).join('')
         this.elements.dotsContainer.innerHTML = dots_html
         this.elements.dots = this.elements.dotsContainer.querySelectorAll('button.gallery__dots')
    }

    setlist_image (data) {
        var image_html=Gallery.list_image().list_image
        var array_images_html=new Array(data.length)
        const images_html=array_images_html.fill(image_html).join('')
        this.elements.imagesContainer.innerHTML = images_html
  }


  setEvents () {
    this.elements.dotsContainer.addEventListener('click', this.dotHandler.bind(this))
    // this.elements.rightBtn.addEventListener('click', this.goNext.bind(this))
    // this.elements.leftBtn.addEventListener('click', this.goPrevious.bind(this))
    // this.node.addEventListener('keydown', this.keydownHandler.bind(this))
  }

  dotHandler (event) {
    const clickedElement = event.target
    const tag_clicked = clickedElement.nodeName
    const nodelistToArray= Array.apply(null, this.elements.dots);

    if(tag_clicked=='BUTTON'){
      const index = nodelistToArray.indexOf(clickedElement)
      console.log(index)
     }
  }

  
    
    
}

