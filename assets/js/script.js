const steps = {
  1: {
    title: "Kirim Project Kamu",
    desc: "Kamu cukup kirim project Laravel / CodeIgniter kamu melalui WhatsApp tanpa ribet.",
    list: [
      "Tanpa setup hosting",
      "Tanpa config database",
      "Support Laravel & CI",
    ],
    image: "img/step1.jpg",
  },
  2: {
    title: "Kami Deploy untuk Kamu",
    desc: "Tim kami akan handle semua proses mulai dari upload, database, hingga konfigurasi server.",
    list: [
      "Setup hosting & domain",
      "Konfigurasi database",
      "Fix error jika ada",
    ],
    image: "img/step2.jpg",
  },
  3: {
    title: "Website Langsung Online",
    desc: "Website kamu siap diakses dosen dengan link yang bisa langsung dibuka.",
    list: [
      "Link siap kirim ke dosen",
      "Akses cepat & stabil",
      "Bisa revisi jika diperlukan",
    ],
    image: "img/step3.jpg",
  },
};

const stepItems = document.querySelectorAll(".step-item");

stepItems.forEach((item) => {
  item.addEventListener("click", () => {
    const step = item.getAttribute("data-step");

    // Update active class
    stepItems.forEach((i) => i.classList.remove("active-step"));
    item.classList.add("active-step");

    // Update content
    document.getElementById("stepBadge").innerText = "Step " + step;
    document.getElementById("stepTitle").innerText = steps[step].title;
    document.getElementById("stepDesc").innerText = steps[step].desc;

    // Update list
    const list = document.getElementById("stepList");
    list.innerHTML = "";
    steps[step].list.forEach((li) => {
      list.innerHTML += `<li>✔ ${li}</li>`;
    });

    // Update image
    document.getElementById("stepImage").src = steps[step].image;
  });
});
