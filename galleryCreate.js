import array from './gallery.items.js'

// ref
 const galleryCreateRef = document.querySelector('.js-gallery');
 const modal = document.querySelector('.lightbox');
 const imgModalRef = modal.querySelector('.lightbox__image');
 const buttunClouse = modal.querySelector('.lightbox__button');
//create card li
   const createCard = cardImg => {
    const createCardImg = document.createElement('li');
    createCardImg.classList.add('gallery__item');

    const createARef = document.createElement('a');
    createARef.classList.add('gallery__link');
    createARef.href = cardImg.original;

    const creatImgRef = document.createElement('img');
    creatImgRef.classList.add('gallery__image');
    creatImgRef.alt = cardImg.description;
    creatImgRef.src = cardImg.preview;

    creatImgRef.setAttribute('data-source', cardImg.original)
    createARef.append(creatImgRef);
    createCardImg.append(createARef);

    return createCardImg;
   }
   const cardLi =  array.map(img => createCard(img));
   galleryCreateRef.append(...cardLi);
   
// open modal
   galleryCreateRef.addEventListener('click', onCardCklick)
   buttunClouse.addEventListener('click', clouseModal)
  
   function onCardCklick(event){
      event.preventDefault();
      const imgName = event.target.nodeName;
      const imgDatasetSourceRef = event.target.dataset.source;
      if ( imgName !== 'IMG'){
         return;
      }
      modal.classList.add('is-open');
      imgModalRef.src = imgDatasetSourceRef;
 }
 //clouse modal
 function clouseModal () {
    modal.classList.remove('is-open')
    imgModalRef.src = " ";   
 }



