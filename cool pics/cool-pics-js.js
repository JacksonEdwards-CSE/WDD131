const gallery = document.querySelector('#content')
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(event) { 

    console.log(event.target.src)

    let imageSrc = event.target.src;

    console.log(imageSrc)

    if (imageSrc === undefined){return};

    modalImage.src = imageSrc.replace("-sm", "-full");

    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});