const https = require('https');

const checkUrl = (url) => {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve(res.statusCode === 200);
    }).on('error', () => resolve(false)).end();
  });
};

const baseUrl = 'https://ik.imagekit.io/Nouskun/Dimple/Tech%20flat/';
const images = [
  "Untitled_Artwork_zxttne.png", "Untitled_Artwork_copy_orlf4h.png", "Untitled_Artwork_13_oeadog.png",
  "Untitled_Artwork_copy_3_snpkms.png", "Untitled_Artwork_copy_2_m3nh3f.png", "Untitled_Artwork_14_rmc7yi.png",
  "Untitled_Artwork_10_copy_giwjye.png", "Untitled_Artwork_12_vbnnm8.png", "Untitled_Artwork_12_copy_zyhl2s.png",
  "Untitled_Artwork_11_lb1yak.png", "Untitled_Artwork_11_copy_wjceaf.png", "Untitled_Artwork_10_w1igd8.png",
  "Untitled_Artwork_9_c2ecgw.png", "Untitled_Artwork_8_copy_2_bstyyj.png", "Untitled_Artwork_9_copy_n0zyzm.png",
  "Untitled_Artwork_8_tcj74r.png", "Untitled_Artwork_8_copy_npxjgr.png", "Untitled_Artwork_7_copy_2_gisjki.png",
  "Untitled_Artwork_7_hteuan.png", "Untitled_Artwork_6_yxwcol.png", "Untitled_Artwork_6_copy_fpbtla.png",
  "Untitled_Artwork_7_copy_ep1mtt.png", "Untitled_Artwork_5_udv24c.png", "Untitled_Artwork_6_copy_2_wy9nfo.png",
  "Untitled_Artwork_5_copy_2_xauawk.png", "Untitled_Artwork_5_copy_j0il7j.png", "Untitled_Artwork_4_mvlc2o.png",
  "Untitled_Artwork_4_copy_wsve90.png", "Untitled_Artwork_3_copy_twn1ef.png", "Untitled_Artwork_2_wlidio.png",
  "Untitled_Artwork_1_awvyfp.png", "Untitled_Artwork_1_copy_ipi2jm.png", "Untitled_Artwork_3_pwvjs8.png",
  "Untitled_Artwork_2_copy_ap9f6b.png", "Untitled_Artwork_1_copy_2_huxodn.png"
];

async function run() {
  for (let img of images) {
    // try different variations
    const variants = [
      img, // original
      img.replace(/_[^_]+\.png$/, '.png'), // remove suffix
      img.replace(/_[^_]+\.png$/, '.png').replace(/_copy/g, ' copy'), // remove suffix and replace _copy with ' copy'
      img.replace(/_[^_]+\.png$/, '.png').replace(/_copy/g, '-copy'), // remove suffix and replace _copy with '-copy'
    ];
    
    let found = false;
    for (let variant of variants) {
      if (await checkUrl(baseUrl + encodeURIComponent(variant))) {
        console.log(`FOUND: ${variant} (from ${img})`);
        found = true;
        break;
      }
    }
    if (!found) {
      console.log(`NOT FOUND for: ${img}`);
    }
  }
}
run();
