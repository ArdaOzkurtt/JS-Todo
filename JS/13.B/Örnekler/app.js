// 13. Bölüm



// const student = {
//     name: "arda",
//     age: 17,
//     langs: ["html", "css", "javascript"],
//     work: function () {
//         console.log("öğrenci çalışıyor");
//     },
//     blabla: true,
//     blabla2: null,
//     blabla3: undefined
// }

// console.log(student);
// console.log(typeof student.langs);



// Bir sınıftaki öğrencileri tanımlamak için tüm veritipleri, arrayler ve function'lar olan bir obje oluşturunuz.
// -------------------------------------------------------------------------------------------------------------------



// const text = document.querySelector(".text").innerHTML;

// // const wordCount = text.split(" ").length;
// // const wordCount = text.length;

// console.log(wordCount);

// const paragraph = document.querySelector(".text").textContent.toLowerCase();
// const vowelCount = paragraph.match(/[aeıioöuü]/g).length;

// console.log(`Paragraftaki sesli harf sayısı: ${vowelCount}`);



// Lorem ipsum ile üretilen bir paragraftaki ["Kelime sayısı", "Harf sayısını", "Sesli harf sayısını"] bulunuz.
// -------------------------------------------------------------------------------------------------------------------



// const text = document.querySelector(".text");

// text.innerHTML = text.innerHTML.replaceAll(" ", "-");



// Lorem ipsum ile üretilen bir paragrafta kelimeler arasına boşluk değil '-' işaretini koyarak console ekranında gösteriniz.
// -------------------------------------------------------------------------------------------------------------------



// JS Ödevleri-1



// function tikla() {
//     const metin = document.getElementById("metin");
//     metin.style.color = "red";
//     metin.style.fontFamily = "Arial";
// }



// 1-Yukarıdaki Butona tıklayınca paragraf içindeki yazının rengi,tipi değişsin.
// -------------------------------------------------------------------------------------------------------------------



// function degerlerial() {
//     const ad = document.getElementsByName("ad")[0].value;
//     const soyad = document.getElementsByName("soyad")[0].value;
//     alert("Ad: " + ad + "\nSoyad: " + soyad);
// }



// 2- Yukarıdaki butona tıklayınca alert kutusunda textboxlara girilen veriler gösterilsin.
// -------------------------------------------------------------------------------------------------------------------



// function ozelliklerial() {
//     const a_etiketi = document.getElementById("baglanti");
//     const a_type = a_etiketi.type;
//     const a_hreflang = a_etiketi.hreflang;
//     const a_target = a_etiketi.target;
//     const a_href = a_etiketi.href;
//     console.log("a etiketi özellikleri:");
//     console.log("type: " + a_type);
//     console.log("hreflang: " + a_hreflang);
//     console.log("target: " + a_target);
//     console.log("href: " + a_href);
// }



// 3-Yukarıdaki butona tıklayınca a etketinin type,hreflang,target,href özelliklerini consoleda göstersin.
// -------------------------------------------------------------------------------------------------------------------



// const paragraph = document.getElementById("text");
// const originalText = paragraph.textContent;
// paragraph.innerHTML = originalText.replace(/\b\w{5}\b/g, '<span style="color: red;">$&</span>');

// const paragraph = document.getElementById("text");
// const originalText = paragraph.textContent;
// const words = originalText.split(" ");
// let newText = "";
// for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (word.length === 5) {
//         word = '<span style="color: red;">' + word + '</span>';
//     }
//     newText += word + " ";
// }
// paragraph.innerHTML = newText;


// 4-Bir paragrafta 5 harfli kelimeleri DOM ile kırmızı renkte yazdırın.
// -------------------------------------------------------------------------------------------------------------------
