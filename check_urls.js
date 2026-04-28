const urls = [
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00632.JPG",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00640.JPG",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4596.MOV",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_4587.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/IMG_6710.HEIC",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00643.JPG",
  "https://ik.imagekit.io/Nouskun/Dimple/organic%20struc/DSC00647.JPG"
];

async function check() {
  for (const url of urls) {
    const res = await fetch(url, { method: 'HEAD' });
    console.log(res.status, url);
  }
}
check();
