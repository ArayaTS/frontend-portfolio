// ดึงปุ่ม Hamburger และ แถบ Navbar มาจาก HTML
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// สั่งว่า "เมื่อคลิกปุ่ม ให้เพิ่ม/ลบ คลาส active ที่ Navbar"
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// UX ทริค: เมื่อผู้ใช้เลื่อนหน้าจอ (Scroll) ให้ปิดเมนูอัตโนมัติ
window.onscroll = () => {
    navbar.classList.remove('active');
};