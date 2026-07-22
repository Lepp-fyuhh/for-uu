// =======================
// Ambil semua halaman
// =======================

const pages = document.querySelectorAll(".page");

function nextPage(id) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

}

// =======================
// Jawaban Salah
// =======================

function wrongAnswer(){

    const btn = document.getElementById("wrongBtn");

    btn.classList.add("destroy");

    setTimeout(()=>{

        btn.innerHTML = "❌ Jawaban Salah";

        btn.style.opacity = "1";
        btn.style.transform = "none";
        btn.classList.remove("destroy");

        btn.style.background = "#ff3b3b";

    },900);

}

// =======================
// Surat
// =======================

const message =
`Hai...

Terima kasih ya sudah membuka website kecil ini.

Website ini sengaja dibuat khusus buat kamu.

Semoga harimu selalu menyenangkan.

Teruslah jadi orang baik.

Dan...

Terima kasih sudah mau meluangkan waktu untuk membuka website ini.

- JOHANLEPP ❤️`;

function showLetter(){
 document.getElementById("openBtn").disabled = true; 

    const text = document.getElementById("typing");

    text.innerHTML="";

    let i=0;

    const typing = setInterval(()=>{

        text.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){

            clearInterval(typing);

        }

    },35);

}

// =======================
// Background bunga
// =======================

const container = document.getElementById("flowers");

for(let i=0;i<45;i++){

    const flower = document.createElement("div");

    flower.className="flower";

    flower.innerHTML=Math.random()>0.5 ? "🌸" : "🌺";

    flower.style.left=Math.random()*100+"vw";

    flower.style.animationDuration=(6+Math.random()*6)+"s";

    flower.style.animationDelay=Math.random()*5+"s";

    flower.style.fontSize=(20+Math.random()*20)+"px";

    container.appendChild(flower);

}