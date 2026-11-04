/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...


//Scroll to subscribe form after submit
function subscribeFiledAutoScrollTo(){
 
 const hash = window.location.hash;
 const subscribeElelemntForm = document.querySelector('#footersubscribe')
  if (hash === '#footersubscribe' && subscribeElelemntForm) {
    setTimeout(() => {
      const el = document.querySelector('#footersubscribe');
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.pageYOffset,
          behavior: 'smooth'
        });
      }
    }, 300);
  }
}

function defaultSelectedVariant(){
  const productPage = document.querySelector('body.template-product')
  const getVarianBUtton = document.querySelector('.product-form__swatch__item--button.best-value')
  const urlParams = new URLSearchParams(window.location.search);



  if(getVarianBUtton && productPage){
    if (!urlParams.has('variant')) {
      getVarianBUtton.querySelector('label').click()
    }
    
  }

}

//Run after loaded DOM
document.addEventListener("DOMContentLoaded", function(event){
    
    subscribeFiledAutoScrollTo()

    defaultSelectedVariant()
})
