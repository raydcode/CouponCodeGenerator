const btn = document.querySelector('.btn');
const coupon = document.getElementById('coupon');
const msg = document.querySelector('.msg');
const loader = document.getElementById('loader');

const couponGenertor = () => {
  const randomString = Math.floor(Math.random() * 1000).toString();

  if (randomString.length > 2) {
    const couponString = `CTC-${randomString}`;
    coupon.value = couponString;
  }
  coupon.style.fontWeight = 'bold';
  coupon.style.fontSize = '15';
};

const loading = () => {
  loader.style.display = 'none';
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  coupon.select();
  document.execCommand('copy');
  loader.style.display = 'block';
  btn.textContent = 'Copied';
  btn.disabled = true;
  msg.textContent = `Your Next New Coupon  will be generated in 3sec `;
  setTimeout(() => {
    btn.textContent = 'Copy';
    couponGenertor();
    loading();
    msg.textContent = '';
    btn.disabled = false;
  }, 3000);
});

loading();

couponGenertor();
