let bill = document.querySelector(".input_cal");
let billnumero = parseInt(bill.value);
let persona = document.querySelector(".input__personas");
let personanumero = parseInt(persona.value);
let botones = document.querySelectorAll(".btn");

let tipamount = document.querySelector(".cant__resultado");

let totalamount = document.querySelector(".total__resultado");

let error = document.querySelector(".err");

let porcentaje = 5;
botones.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		botones.forEach((btn) => {
			btn.classList.remove("activo");
		});
		btn.classList.add("activo");
		porcentaje = parseInt(e.target.innerText.slice(0, -1));
		calcularpropina();
	});
});

//actualizar bill

bill.addEventListener("input", () => {
	billnumero = parseFloat(bill.value);
	calcularpropina();
});
//actualizando custom
let custom = document.querySelector(".input__custom");
custom.addEventListener("click", () => {
botones.forEach((btn) => {
	btn.classList.remove("activo");
});
});

custom.addEventListener("input", () => {
	
	porcentaje = parseInt(custom.value);
	if (isNaN(porcentaje || porcentaje === 0)) {
	} else {
		calcularpropina();
	}
});

//actualizar persona

personas.addEventListener("input", () => {
	personanumero = parseFloat(persona.value);

	if (personanumero === 0 || !personanumero) {
		persona.style.borderColor = "red";
		error.style.display = "inline";
	} else {
		persona.style.borderColor = "hsl(172, 67%, 45%)";
		error.style.display = "none";
		calcularpropina();
	}
});
 
let reset = document.querySelector(".btn__reset");
reset.addEventListener('click', ()=>{
	bill.value = 0,
	billnumero = 0,
    persona.value = 0,
	personanumero = 0,
	custom.value = "custom"
	calcularpropina();
});

function calcularpropina() {
	//calcular tip amout
	tipamount.innerText = `$${(
		(billnumero * porcentaje) /
		100 /
		personanumero
	).toFixed(2)}`;
	//calcular total
	totalamount.innerText = `$${(
		((billnumero * porcentaje) / 100 + billnumero) /
		personanumero
	).toFixed(2)}`;
}
