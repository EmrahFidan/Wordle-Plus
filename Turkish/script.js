const navList = document.querySelectorAll(".nav li");
const sections = document.querySelectorAll(".section");

navList.forEach((li, index) => {
  const a = li.querySelector("a");
  a.addEventListener("click", function (event) {
    event.preventDefault();

    // Tüm sekmeleri gizle
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    // Tıklanan sekmeyi etkinleştir
    sections[index].classList.add("active");

    // Tüm bağlantılardan 'active' sınıfını kaldırın
    navList.forEach((navItem) => {
      navItem.querySelector("a").classList.remove("active");
    });

    // Tıklanan bağlantıya 'active' sınıfını ekleyin
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const customModal = document.getElementById("custom-modal");
  const closeButton = document.querySelector(".close-button");
  const modalMessage = document.getElementById("modal-message");
  const checkButton = document.querySelector(".check-button");
  const guessInput = document.querySelector(".guess-text");
  const boxes = document.querySelectorAll(".box");
  const keys = document.querySelectorAll(".key");
  const maxWordLength = 5;
  const wordList = [
    "Acemi",
    "Aktif",
    "Anime",
    "Arife",
    "Arşiv",
    "Bahar",
    "Bahis",
    "Bekçi",
    "Beyin",
    "Burun",
    "Biber",
    "Bilge",
    "Birey",
    "Bitki",
    "Cebir",
    "Ceviz",
    "Ciddi",
    "Cihaz",
    "Cimri",
    "Çelik",
    "Çiçek",
    "Çizgi",
    "Daire",
    "Demir",
    "Dergi",
    "Deniz",
    "Dikey",
    "Dilek",
    "Emzik",
    "Erime",
    "Espri",
    "Fakir",
    "Fikir",
    "Fiyat",
    "Geçiş",
    "Gelin",
    "Giriş",
    "Gizem",
    "Haciz",
    "Hakim",
    "İddia",
    "İftar",
    "İkram",
    "İncir",
    "İpucu",
    "İptal",
    "Kesin",
    "Kibar",
    "Kilit",
    "Kiraz",
    "Lider",
    "Limon",
    "Midye",
    "Mimar",
    "Müzik",
    "Nakit",
    "Nikah",
    "Niyet",
    "Optik",
    "Otizm",
    "Öneri",
    "Parti",
    "Pilav",
    "Rakip",
    "Resim",
    "Sahil",
    "Seçim",
    "Sevgi",
    "Silah",
    "Şahin",
    "Şehir",
    "Şirin",
    "Takip",
    "Taksi",
    "Terzi",
    "Vahşi",
    "Virüs",
    "Yeşil",
    "Yeşil",
    "Zenci",
    "Zihin",
    "Zemin",
  ];

  let currentWordIndex = 0;
  let targetWord = getRandomWord();

  function openModal(message) {
    modalMessage.textContent = message;
    customModal.style.display = "block";
  }

  function closeModal() {
    customModal.style.display = "none";
  }

  closeButton.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex].toUpperCase();
  }

  function disableCheckButton() {
    checkButton.disabled = true;
    guessInput.disabled = true;
  }

  function enableCheckButton() {
    checkButton.disabled = false;
    guessInput.disabled = false;
  }

  checkButton.addEventListener("click", function () {
    const guessedWord = guessInput.value.trim().toUpperCase();

    if (
      guessedWord.length === maxWordLength &&
      currentWordIndex < boxes.length
    ) {
      guessInput.value = "";

      for (
        let i = currentWordIndex;
        i < currentWordIndex + maxWordLength;
        i++
      ) {
        if (i < boxes.length) {
          boxes[i].textContent = guessedWord[i - currentWordIndex];
        } else {
          break;
        }
      }

      currentWordIndex += maxWordLength;

      let correctLetters = 0;
      for (let i = 0; i < guessedWord.length; i++) {
        const boxIndex = i + currentWordIndex - maxWordLength;
        const guessedLetter = guessedWord[i];

        if (guessedLetter === targetWord[i]) {
          boxes[boxIndex].style.border = "1px solid #1bfd9c";
          keys.forEach((key) => {
            if (key.textContent === guessedLetter) {
              key.classList.remove("key", "yellow-key");
              key.classList.add("green-key");
            }
          });
          correctLetters++;
        } else if (targetWord.includes(guessedLetter)) {
          boxes[boxIndex].style.border = "1px solid #dddf00";
          keys.forEach((key) => {
            if (key.textContent === guessedLetter) {
              key.classList.remove("key");
              key.classList.add("yellow-key");
            }
          });
        } else {
          boxes[boxIndex].style.border = "1px solid #db222a";
          keys.forEach((key) => {
            if (key.textContent === guessedLetter) {
              key.classList.remove("key", "yellow-key");
              key.classList.add("red-key");
            }
          });
        }
      }
      if (guessedWord === targetWord) {
        // Correct guess
        disableCheckButton();
        openModal("Congratulations, you won! 🏆");
      } else if (currentWordIndex >= boxes.length) {
        // All boxes filled
        disableCheckButton();
        openModal("Sorry, you lost. 🤕 The right word: " + targetWord);
      }
    }
  });

  // "Enter" tuşuna basıldığında "CHECK" düğmesini tıklama
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !checkButton.disabled) {
      checkButton.click();
    }
  });

  // Tuşlara tıklama işlevi ekleme
  keys.forEach((key) => {
    key.addEventListener("click", function () {
      if (!checkButton.disabled) {
        guessInput.value += key.textContent;
      }
    });
  });

  // LEVEL - 2

  const customModal2 = document.getElementById("custom-modal-2");
  const closeButton2 = document.querySelector(".close-button-2");
  const modalMessage2 = document.getElementById("modal-message-2");
  const checkButton2 = document.querySelector(".check-button-2");
  const guessInput2 = document.querySelector(".guess-text-2");
  const boxes2 = document.querySelectorAll(".box-2");
  const keys2 = document.querySelectorAll(".key-2");
  const maxWordLength2 = 4;
  const wordList2 = [
    "Abla",
    "Açık",
    "Adam",
    "Aday",
    "Afet",
    "Ağaç",
    "Ağır",
    "Alev",
    "Amca",
    "Argo",
    "Arsa",
    "Asit",
    "Ayak",
    "Ayıp",
    "Ayna",
    "Baba",
    "Baca",
    "Bank",
    "Bela",
    "Boru",
    "Büyü",
    "Cadı",
    "Cuma",
    "Çakı",
    "Çita",
    "Dana",
    "Dava",
    "Deri",
    "Dişi",
    "Ecel",
    "Elma",
    "Eşit",
    "Evli",
    "Faiz",
    "Fare",
    "Fena",
    "Genç",
    "Gemi",
    "Golf",
    "Gram",
    "Halk",
    "Hata",
    "İade",
    "İşçi",
    "icat",
    "idam",
    "imza",
    "jüri",
    "kafa",
    "kaos",
    "kapı",
    "koku",
    "kuzu",
    "lira",
    "lise",
    "maaş",
    "masa",
    "mont",
    "müze",
    "neşe",
    "nötr",
    "odak",
    "omuz",
    "oyun",
    "oruç",
    "öfke",
    "ölüm",
    "pena",
    "pota",
    "rüya",
    "risk",
    "saat",
    "sarı",
    "smaç",
    "site",
    "süre",
    "şiir",
    "şive",
    "tüyo",
    "tabu",
    "uzay",
    "uçak",
    "üzüm",
    "veda",
    "vize",
    "yoga",
    "zarf",
    "zevk",
  ];

  let currentWordIndex2 = 0;
  let targetWord2 = getRandomWord2();

  function openModal2(message2) {
    modalMessage2.textContent = message2;
    customModal2.style.display = "block";
  }

  function closeModal2() {
    customModal2.style.display = "none";
  }

  closeButton2.addEventListener("click", closeModal2);

  document.addEventListener("keydown", function (event2) {
    if (event2.key === "Escape") {
      closeModal2();
    }
  });

  function getRandomWord2() {
    const randomIndex2 = Math.floor(Math.random() * wordList2.length);
    return wordList2[randomIndex2].toUpperCase();
  }

  function disableCheckButton2() {
    checkButton2.disabled = true;
    guessInput2.disabled = true;
  }

  function enableCheckButton2() {
    checkButton2.disabled = false;
    guessInput2.disabled = false;
  }

  checkButton2.addEventListener("click", function () {
    const guessedWord2 = guessInput2.value.trim().toUpperCase();

    if (
      guessedWord2.length === maxWordLength2 &&
      currentWordIndex2 < boxes2.length
    ) {
      guessInput2.value = "";

      for (
        let i = currentWordIndex2;
        i < currentWordIndex2 + maxWordLength2;
        i++
      ) {
        if (i < boxes2.length) {
          boxes2[i].textContent = guessedWord2[i - currentWordIndex2];
        } else {
          break;
        }
      }

      currentWordIndex2 += maxWordLength2;

      let correctLetters2 = 0;
      for (let i = 0; i < guessedWord2.length; i++) {
        const boxIndex2 = i + currentWordIndex2 - maxWordLength2;
        const guessedLetter2 = guessedWord2[i];

        if (guessedLetter2 === targetWord2[i]) {
          boxes2[boxIndex2].style.border = "1px solid #1bfd9c";
          keys2.forEach((key2) => {
            if (key2.textContent === guessedLetter2) {
              key2.classList.remove("key-2", "yellow-key");
              key2.classList.add("green-key");
            }
          });
          correctLetters2++;
        } else if (targetWord2.includes(guessedLetter2)) {
          boxes2[boxIndex2].style.border = "1px solid #dddf00";
          keys2.forEach((key2) => {
            if (key2.textContent === guessedLetter2) {
              key2.classList.remove("key-2");
              key2.classList.add("yellow-key");
            }
          });
        } else {
          boxes2[boxIndex2].style.border = "1px solid #db222a";
          keys2.forEach((key2) => {
            if (key2.textContent === guessedLetter2) {
              key2.classList.remove("key-2", "yellow-key");
              key2.classList.add("red-key");
            }
          });
        }
      }
      if (guessedWord2 === targetWord2) {
        // Correct guess
        disableCheckButton2();
        openModal2("Congratulations, you won! 🏆");
      } else if (currentWordIndex2 >= boxes2.length) {
        // All boxes filled
        disableCheckButton2();
        openModal2("Sorry, you lost. 🤕 The right word: " + targetWord2);
      }
    }
  });

  // "Enter" tuşuna basıldığında "CHECK" düğmesini tıklama
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !checkButton2.disabled) {
      checkButton2.click();
    }
  });

  // Tuşlara tıklama işlevi ekleme
  keys2.forEach((key2) => {
    key2.addEventListener("click", function () {
      if (!checkButton2.disabled) {
        guessInput2.value += key2.textContent;
      }
    });
  });

  // LEVEL - 3

  const customModal3 = document.getElementById("custom-modal-3");
  const closeButton3 = document.querySelector(".close-button-3");
  const modalMessage3 = document.getElementById("modal-message-3");
  const checkButton3 = document.querySelector(".check-button-3");
  const guessInput3 = document.querySelector(".guess-text-3");
  const boxes3 = document.querySelectorAll(".box-3");
  const keys3 = document.querySelectorAll(".key-3");
  const maxWordLength3 = 6;
  const wordList3 = [
    "pijama",
    "eşofman",
    "gömlek",
    "balina",
    "maymun",
    "yarasa",
    "görmek",
    "sevmek",
    "gelmek",
    "aramak",
    "dürüst",
    "sessiz",
    "çaylak",
    "sağlam",
    "kapalı",
    "korkak",
    "tembel",
    "geveze",
    "işaret",
    "merhum",
    "hizmet",
    "yastık",
    "yorgan",
    "kıymet",
    "cetvel",
    "yaprak",
    "makale",
    "cennet",
    "sağlık",
    "dürbuün",
    "sevinç",
    "forvet",
    "kaleci",
    "çakmak",
    "çağdaş",
    "dakika",
    "faktör",
    "galeri",
    "hafıza",
    "ılımlı",
    "ibadet",
    "jakuzi",
    "kabile",
    "lahana",
    "madeni",
    "nankör",
    "odunlu",
    "ödenek",
    "pahalı",
    "rahibe",
    "sabıka",
    "şakacı",
    "tablet",
    "ufacık",
    "üretim",
    "vampir",
    "yağmur",
    "zabıta",
  ];

  let currentWordIndex3 = 0;
  let targetWord3 = getRandomWord3();

  function openModal3(message3) {
    modalMessage3.textContent = message3;
    customModal3.style.display = "block";
  }

  function closeModal3() {
    customModal3.style.display = "none";
  }

  closeButton3.addEventListener("click", closeModal3);

  document.addEventListener("keydown", function (event3) {
    if (event3.key === "Escape") {
      closeModal3();
    }
  });

  function getRandomWord3() {
    const randomIndex3 = Math.floor(Math.random() * wordList3.length);
    return wordList3[randomIndex3].toUpperCase();
  }

  function disableCheckButton3() {
    checkButton3.disabled = true;
    guessInput3.disabled = true;
  }

  function enableCheckButton3() {
    checkButton3.disabled = false;
    guessInput3.disabled = false;
  }

  checkButton3.addEventListener("click", function () {
    const guessedWord3 = guessInput3.value.trim().toUpperCase();

    if (
      guessedWord3.length === maxWordLength3 &&
      currentWordIndex3 < boxes3.length
    ) {
      guessInput3.value = "";

      for (
        let i = currentWordIndex3;
        i < currentWordIndex3 + maxWordLength3;
        i++
      ) {
        if (i < boxes3.length) {
          boxes3[i].textContent = guessedWord3[i - currentWordIndex3];
        } else {
          break;
        }
      }

      currentWordIndex3 += maxWordLength3;

      let correctLetters3 = 0;
      for (let i = 0; i < guessedWord3.length; i++) {
        const boxIndex3 = i + currentWordIndex3 - maxWordLength3;
        const guessedLetter3 = guessedWord3[i];

        if (guessedLetter3 === targetWord3[i]) {
          boxes3[boxIndex3].style.border = "1px solid #1bfd9c";
          keys3.forEach((key3) => {
            if (key3.textContent === guessedLetter3) {
              key3.classList.remove("key-3", "yellow-key");
              key3.classList.add("green-key");
            }
          });
          correctLetters3++;
        } else if (targetWord3.includes(guessedLetter3)) {
          boxes3[boxIndex3].style.border = "1px solid #dddf00";
          keys3.forEach((key3) => {
            if (key3.textContent === guessedLetter3) {
              key3.classList.remove("key-3");
              key3.classList.add("yellow-key");
            }
          });
        } else {
          boxes3[boxIndex3].style.border = "1px solid #db222a";
          keys3.forEach((key3) => {
            if (key3.textContent === guessedLetter3) {
              key3.classList.remove("key-3", "yellow-key");
              key3.classList.add("red-key");
            }
          });
        }
      }
      if (guessedWord3 === targetWord3) {
        // Correct guess
        disableCheckButton3();
        openModal3("Congratulations, you won! 🏆");
      } else if (currentWordIndex3 >= boxes3.length) {
        // All boxes filled
        disableCheckButton3();
        openModal3("Sorry, you lost. 🤕 The right word: " + targetWord3);
      }
    }
  });

  // "Enter" tuşuna basıldığında "CHECK" düğmesini tıklama
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !checkButton3.disabled) {
      checkButton3.click();
    }
  });

  // Tuşlara tıklama işlevi ekleme
  keys3.forEach((key3) => {
    key3.addEventListener("click", function () {
      if (!checkButton3.disabled) {
        guessInput3.value += key3.textContent;
      }
    });
  });

  // LEVEL - 4

  const customModal4 = document.getElementById("custom-modal-4");
  const closeButton4 = document.querySelector(".close-button-4");
  const modalMessage4 = document.getElementById("modal-message-4");
  const checkButton4 = document.querySelector(".check-button-4");
  const guessInput4 = document.querySelector(".guess-text-4");
  const boxes4 = document.querySelectorAll(".box-4");
  const keys4 = document.querySelectorAll(".key-4");
  const maxWordLength4 = 7;
  const wordList4 = [
    "Boşanma",
    "Sevinme",
    "Mobilya",
    "örümcek",
    "karınca",
    "penguen",
    "makarna",
    "domates",
    "ıspanak",
    "şeftali",
    "sayısal",
    "faydalı",
    "mübarek",
    "detaylı",
    "saygılı",
    "utangaç",
    "malatya",
    "selanik",
    "antalya",
    "saldırı",
    "öğrenci",
    "gürültü",
    "yetenek",
    "tiyatro",
    "tapınak",
    "bağlama",
    "acıkmak",
    "ağırlık",
    "bacanak",
    "babacan",
    "canavar",
    "çabucak",
    "enginar",
    "ebebeyn",
    "dağılım",
    "dengeli",
    "fabrika",
    "haberci",
    "ıhlamur",
    "gelişim",
    "ihtiyar",
    "jeoloji",
    "kabarık",
    "laiklik",
    "madalya",
    "nakarat",
    "obezite",
    "ödetmek",
    "öğürmek",
    "padişah",
    "rafadan",
    "seyehat",
    "sabırlı",
    "sanatçı",
    "şemsiye",
    "şırınga",
    "traktör",
    "telefon",
    "üzülmek",
    "uöurtma",
    "vadesiz",
    "vanilya",
    "yabancı",
    "yadigar",
    "ziyafet",
    "zararlı",
  ];

  let currentWordIndex4 = 0;
  let targetWord4 = getRandomWord4();

  function openModal4(message4) {
    modalMessage4.textContent = message4;
    customModal4.style.display = "block";
  }

  function closeModal4() {
    customModal4.style.display = "none";
  }

  closeButton4.addEventListener("click", closeModal4);

  document.addEventListener("keydown", function (event4) {
    if (event4.key === "Escape") {
      closeModal4();
    }
  });

  function getRandomWord4() {
    const randomIndex4 = Math.floor(Math.random() * wordList4.length);
    return wordList4[randomIndex4].toUpperCase();
  }

  function disableCheckButton4() {
    checkButton4.disabled = true;
    guessInput4.disabled = true;
  }

  function enableCheckButton4() {
    checkButton4.disabled = false;
    guessInput4.disabled = false;
  }

  checkButton4.addEventListener("click", function () {
    const guessedWord4 = guessInput4.value.trim().toUpperCase();

    if (
      guessedWord4.length === maxWordLength4 &&
      currentWordIndex4 < boxes4.length
    ) {
      guessInput4.value = "";

      for (
        let i = currentWordIndex4;
        i < currentWordIndex4 + maxWordLength4;
        i++
      ) {
        if (i < boxes4.length) {
          boxes4[i].textContent = guessedWord4[i - currentWordIndex4];
        } else {
          break;
        }
      }

      currentWordIndex4 += maxWordLength4;

      let correctLetters4 = 0;
      for (let i = 0; i < guessedWord4.length; i++) {
        const boxIndex4 = i + currentWordIndex4 - maxWordLength4;
        const guessedLetter4 = guessedWord4[i];

        if (guessedLetter4 === targetWord4[i]) {
          boxes4[boxIndex4].style.border = "1px solid #1bfd9c";
          keys4.forEach((key4) => {
            if (key4.textContent === guessedLetter4) {
              key4.classList.remove("key-4", "yellow-key");
              key4.classList.add("green-key");
            }
          });
          correctLetters4++;
        } else if (targetWord4.includes(guessedLetter4)) {
          boxes4[boxIndex4].style.border = "1px solid #dddf00";
          keys4.forEach((key4) => {
            if (key4.textContent === guessedLetter4) {
              key4.classList.remove("key-4");
              key4.classList.add("yellow-key");
            }
          });
        } else {
          boxes4[boxIndex4].style.border = "1px solid #db222a";
          keys4.forEach((key4) => {
            if (key4.textContent === guessedLetter4) {
              key4.classList.remove("key-4", "yellow-key");
              key4.classList.add("red-key");
            }
          });
        }
      }
      if (guessedWord4 === targetWord4) {
        // Correct guess
        disableCheckButton4();
        openModal4("Congratulations, you won! 🏆");
      } else if (currentWordIndex4 >= boxes4.length) {
        // All boxes filled
        disableCheckButton4();
        openModal4("Sorry, you lost. 🤕 The right word: " + targetWord4);
      }
    }
  });

  // "Enter" tuşuna basıldığında "CHECK" düğmesini tıklama
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !checkButton4.disabled) {
      checkButton4.click();
    }
  });

  // Tuşlara tıklama işlevi ekleme
  keys4.forEach((key4) => {
    key4.addEventListener("click", function () {
      if (!checkButton4.disabled) {
        guessInput4.value += key4.textContent;
      }
    });
  });
});
