import https from 'https';
const checkUrl = (url) => {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve(res.statusCode === 200);
    }).on('error', () => resolve(false)).end();
  });
};
const baseUrl = 'https://ik.imagekit.io/Nouskun/Dimple/Home/';
const check = async () => {
  const urls = ['OB2449469_right_4.png', 'OB2449469_right_5.png', 'OB2449469_right_6.png', 'Make_it_rotate.mp4'];
  for (let u of urls) {
    let ok = await checkUrl(baseUrl + u);
    console.log(u + ": " + ok);
  }
}
check();
