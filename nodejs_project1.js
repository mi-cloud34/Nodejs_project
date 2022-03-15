
//Daire alanı r yapıcap  A=r*r*PI

let daireAlanHesapla = (r) => {
	return Math.PI * (r ** 2)
}

const arg = process.argv.slice(2)
let r = arg[0]

if(r && r>0) {
	console.log(`Yarıçapı ${r} olan dairenin alanı: ${daireAlanHesapla(r)}`)
} 
