var modal = document.getElementById('modal');
var modalTitle = document.getElementById('modalTitle');
var modalBody = document.getElementById('modalBody');
var openModalBtn = document.getElementById('openModal');
var closeModalBtn = document.getElementById('closeModal');
var modalOpen = false; //boolean variable to control the state of modal

//Tabbing is restricted to the modal
window.addEventListener('keypress', restrictModalFocus);
window.addEventListener('keydown', escapeCloseModal);
	
//Open Modal
openModalBtn.addEventListener('click', function(e) {
	e.stopPropagation();
	openModal();
	setupTabIndex();
	restrictModalFocus(this);
});

//Close Modal
closeModalBtn.addEventListener('click', function(e) {
	e.stopPropagation();
	closeModal();
});	

//Functions
function setupTabIndex() {
	modal.setAttribute('tabindex', '0');
	modalTitle.setAttribute('tabindex', '0');
	modalBody.setAttribute('tabindex', '0');		
	modal.focus();		
}

function restrictModalFocus(e) {
	document.addEventListener('focus', function(e) {
		if (modalOpen && !modal.contains(e.target)) {
			e.stopPropagation();
			modal.focus();
		}
	}, true);
}

function escapeCloseModal (e) {
	if (!e.keyCode || e.keyCode === 27) {
		closeModal();
	}
}	

function openModal() {
	modal.style.display = 'block';
	document.body.classList.add('scroll-lock');
	modalOpen = true;
}

function closeModal() {
	modal.style.display = 'none';
	document.body.classList.remove('scroll-lock');		
	modalOpen = false;
}
