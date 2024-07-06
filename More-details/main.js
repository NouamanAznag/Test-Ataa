document.addEventListener("DOMContentLoaded", function () {
  // إدارة المنتجات العادية
  const products = document.querySelectorAll('.product');
  const ShowMoreBtn = document.getElementById('ShowMoreBtn');
  const ShowLessBtn = document.getElementById('ShowLessBtn');
  let visibleProducts = 12; // عدد المنتجات التي تريد عرضها في البداية

  // عرض البطاقات الأولى حسب العدد المحدد
  for (let i = 0; i < visibleProducts; i++) {
    products[i].classList.add('active');
  }

  // إضافة معالج الحدث لزر "Show more"
  ShowMoreBtn.addEventListener('click', function () {
    visibleProducts += 300; // زيادة عدد البطاقات التي سيتم عرضها

    // عرض البطاقات حتى العدد المحدد
    for (let i = 0; i < visibleProducts && i < products.length; i++) {
      products[i].classList.add('active');
    }

    // إخفاء زر "Show more" إذا تجاوزنا عدد البطاقات المتاحة
    if (visibleProducts >= products.length) {
      ShowMoreBtn.style.display = 'none';
    }

    // إظهار زر "Show less"
    ShowLessBtn.style.display = 'inline-block';
  });

  // إضافة معالج الحدث لزر "Show less"
  ShowLessBtn.addEventListener('click', function () {
    visibleProducts = 12; // عودة إلى العرض الأصلي

    // إخفاء البطاقات التي تجاوزت العرض المحدد
    for (let i = visibleProducts; i < products.length; i++) {
      products[i].classList.remove('active');
    }

    // عرض زر "Show more" مجدداً
    ShowMoreBtn.style.display = 'inline-block';

    // إخفاء زر "Show less"
    ShowLessBtn.style.display = 'none';
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // إدارة المنتجات العادية
  const products = document.querySelectorAll('.school-product');
  const ShowMoreBtn1 = document.getElementById('ShowMoreBtn1');
  const ShowLessBtn1 = document.getElementById('ShowLessBtn1');
  let visibleProducts = 12; // عدد المنتجات التي تريد عرضها في البداية

  // عرض البطاقات الأولى حسب العدد المحدد
  for (let i = 0; i < visibleProducts; i++) {
    products[i].classList.add('active');
  }

  // إضافة معالج الحدث لزر "Show more"
  ShowMoreBtn1.addEventListener('click', function () {
    visibleProducts += 300; // زيادة عدد البطاقات التي سيتم عرضها

    // عرض البطاقات حتى العدد المحدد
    for (let i = 0; i < visibleProducts && i < products.length; i++) {
      products[i].classList.add('active');
    }

    // إخفاء زر "Show more" إذا تجاوزنا عدد البطاقات المتاحة
    if (visibleProducts >= products.length) {
      ShowMoreBtn1.style.display = 'none';
    }

    // إظهار زر "Show less"
    ShowLessBtn1.style.display = 'inline-block';
  });

  // إضافة معالج الحدث لزر "Show less"
  ShowLessBtn1.addEventListener('click', function () {
    visibleProducts = 12; // عودة إلى العرض الأصلي

    // إخفاء البطاقات التي تجاوزت العرض المحدد
    for (let i = visibleProducts; i < products.length; i++) {
      products[i].classList.remove('active');
    }

    // عرض زر "Show more" مجدداً
    ShowMoreBtn1.style.display = 'inline-block';

    // إخفاء زر "Show less"
    ShowLessBtn1.style.display = 'none';
  });
});

