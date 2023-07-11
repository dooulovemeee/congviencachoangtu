const listNavitem = document.querySelectorAll('.nav-item')

listNavitem.forEach(function(item){
  item.addEventListener('click' , function(e){
     console.log(e);
     const listActiveNav = document.querySelectorAll('.nav-active')
     listActiveNav.forEach(function(itemActive){
        itemActive.classList.remove('nav-active')
     });
     e.currentTarget.classList.add('nav-active')
  });    
});

function toggleNavbar() {
	const navbar = document.querySelector('#mainNavbar');
	navbar.classList.toggle('sidebar-small');
};

const productCards = document.querySelectorAll('.product-card')
productCards.forEach(function(product){
   const buttonPreview = product.querySelector('.icon-preview');
   const mainImg = product.querySelector('.main-img');
   const url = mainImg.getAttribute('src');
   buttonPreview.addEventListener('click',function(e){
      document.querySelector('#fullSizePreviewImg').setAttribute('src', url)
   })
});