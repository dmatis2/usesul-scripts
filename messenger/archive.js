document.querySelectorAll('[aria-label="Možnosti konverzácie"]').forEach(x=>{
	x.click();
	let el = [...document.querySelectorAll('._54nh')].filter(x => x.innerText === "Archivovať")
	el[0].click()
})
