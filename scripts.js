const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

//start
updateBigCup();

// select index of each cup clicked
smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

//check if next cup is highligted(has 'full' class)
function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }

  // add remove 'full' class for last cup
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  //end
    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

// fills big cup by clicking on small cups
    if (fullCups === 0) {
        precentage.style.visibility = 'hidden'
        precentage.style.height = 0
    } else {
        precentage.style.visibility = 'visible'
        precentage.style.height = `${fullCups / totalCups * 330}px`
        precentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
