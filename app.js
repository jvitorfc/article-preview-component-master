let $card__btn = document.querySelector('.card__btn')
let $card__profile = document.querySelector('.card__profile')
let $card__share = document.querySelector('.card__share')
let $card__image = document.querySelector('.card__image')
let $card__image__mobile = document.querySelector('.card__image--mobile')

$card__btn.addEventListener('click', () => {
	if ($card__share.classList.contains('invisibility')) {
		$card__share.classList.remove('invisibility')
		$card__profile.classList.add('invisibility')
	}
})

document.querySelector('.card__image--mobile').style.maxWidth = '875px'

function myFunction(x) {
	if (x.matches) {
		$card__image__mobile.classList.remove('invisibility')
		$card__image.classList.add('invisibility')
	} else {
		$card__image.classList.remove('invisibility')
		$card__image__mobile.classList.add('invisibility')
	}
}

var x = window.matchMedia('(max-width: 875px)')
myFunction(x) // Call listener function at run time
x.addListener(myFunction)
