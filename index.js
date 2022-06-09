
// daj mi random broj do 100 i pospremi ga u varijablu zamisljeni
var zamisljeni = Math.floor(Math.random() * 101);

// osoba može pogoditi iz prve pa daj mi stavi broj 1 u varijablu broj_pogodaka, ako slučajno pogodi iz prve :)
var brojpogodaka = 1;


function pogodi() {

  // uzmi broj koji je osoba unijela i spremi ga u varijablu uneseni     
  var uneseni = parseInt(document.getElementById("unos").value);

  document.getElementById('pokazi_paragraf').style.display = 'block';

  // u ifalici provjeri uneseni broj, usporedi ga sa zamišljenim i ispiši poruke
  if ((uneseni > 100) || (uneseni < 0)) {
    console.log("Zamislio sam broj između 0 i 100, pa ti sve unose broja izvan tog dosega neću brojati u pokušaje... ");
  }
  else if (uneseni > zamisljeni) {
    brojpogodaka++;
    console.log("uneseni broj je veći od zamišljenog");
  }
  else if (uneseni < zamisljeni) {
    brojpogodaka++;
    console.log("uneseni broj je manji od zamišljenog")
  }
  else if (uneseni == zamisljeni) {
    console.log(`čestitam, pogodio si ga iz ${brojpogodaka} puta`);
    console.log("zamišljeni broj je " + zamisljeni);
  }
  else { 
    console.log("nisi unio broj") 
  }
}



