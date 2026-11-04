 
 class StarsShower extends HTMLElement {
   
      connectedCallback() {


          this.mediaQuery = window.matchMedia("(min-width: 768px)");


          if (this.mediaQuery.matches) {
            while (this.firstChild) {
              this.removeChild(this.firstChild);
            }

            const starCount = Math.min(parseInt(this.dataset.count) || 50, 100);

            for (let i = 0; i < starCount; i++) {
              const star = document.createElement('div');
              star.className = 'star-element';


              const size = Math.random() * 3 + 2;
              star.style.width = `${size}px`;
              star.style.height = `${size}px`;

              const opacity  = Math.random()
              switch (opacity){
                case opacity < 0.3:
                  star.style.opacity = 0.2;
                  break;
                case opacity < 0.4:
                  star.style.opacity = 0.3;
                  break;
                case opacity < 0.5:
                  star.style.opacity = 0.4;
                  break;
                case opacity < 0.6:
                  star.style.opacity = 0.5;
                  break;
                case opacity > 0.7:
                  star.style.opacity = 0.9;
                  break;
              }
        
              star.style.top = `${Math.random() * 100}%`;

              
              star.style.animationDuration = `${Math.random() * 4 + 2}s`;

          
              star.style.animationDelay = `${Math.random() * 3}s`;
              

              this.appendChild(star);

            }
        }

      }

      disconnectedCallback() {
         
          if (this.mediaQuery.matches) {

            while (this.firstChild) {
              this.removeChild(this.firstChild);
            }
          }
      }

  }
if (!customElements.get('stars-shower')) {
    customElements.define('stars-shower', StarsShower);
}


