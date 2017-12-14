export class Gallery {
    constructor (node, data) {
        this.node=node 
        this.index = 0
        this.elements = {}
        
        this.setframework()
        this.setlist_dot(data)
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
            <img class=gallery__images src=""/> 
          </li>`
        )
      }
    }

    static get states_elements () {
      return {
        dotSelected: 'gallery__dots--selected',
        imageSelected: 'gallery___style-dots-images--selected'
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

    setlist_dot (data) {
         const dot_html=Gallery.templates.list_dot
         const array_dots_html= new Array(data.length);
         const dots_html=array_dots_html.fill(dot_html).join('')
         this.elements.dotsContainer.innerHTML = dots_html
         this.elements.dots = this.elements.dotsContainer.querySelectorAll('.gallery__dots')
         this.elements.dots[this.index].classList.add(Gallery.states_elements.dotSelected)
    }

    setlist_image (data) {
        const image_html=Gallery.list_image().list_image
        const array_images_html=new Array(data.length)
        const images_html=array_images_html.fill(image_html).join('')
        this.elements.imagesContainer.innerHTML = images_html
        this.elements.image=this.node.querySelectorAll('.gallery__images')
        this.elements.image.forEach( (element,index)=> {
          this.elements.image[index].src=data[index].url
        })
        this.elements.image[this.index].classList.add(Gallery.states_elements.imageSelected)
  }

  setEvents () {
    this.elements.dotsContainer.addEventListener('click', this.dotDriver.bind(this))
    // this.elements.rightBtn.addEventListener('click', this.goNext.bind(this))
    // this.elements.leftBtn.addEventListener('click', this.goPrevious.bind(this))
    // this.node.addEventListener('keydown', this.keydownHandler.bind(this))
  }

  dotDriver (event) {
    const clickedElement = event.target
    const tag_clicked = clickedElement.nodeName
    const nodelistToArray= Array.apply(null, this.elements.dots)
    if(tag_clicked=='BUTTON'){
      const index = nodelistToArray.indexOf(clickedElement)
      this.changeImage_gallery(index)
     }
  }

  
    
    
}

