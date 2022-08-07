const menu = [
  {
    id: 1,
    title: "Churro",
    category: "Tatlılar",
    price: 29.99,
    img:"https://cdn.yemek.com/mnresize/1250/833/uploads/2021/11/churros-tarifi.jpg",
    desc: `Nutella, magnolia kreması.`,
  },
  {
    id: 2,
    title: "Beyaz Çikolatalı Brownie",
    category: "Tatlılar",
    price: 32.99,
    img:"https://st3.myideasoft.com/idea/ga/88/myassets/products/094/beyaz-cikolarali-browni-emirgan-sutis-1080x1080.jpg?revision=1591605585",
    desc: `Dondurma ile ılık servis edilir. `,
  },
  {
    id: 3,
    title: "Çikolatalı Sufle Kek",
    category: "Tatlılar",
    price: 30.99,
    img:"https://cdn.ye-mek.net/App_UI/Img/out/420/2020/05/sufle-resimli-yemek-tarifi(16).jpg",
    desc: `Dondurma ile ılık servis edilir.`,
  },
  {
    id: 4,
    title: "Apple Crumble",
    category: "Tatlılar",
    price: 28.99,
    img:"https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/apple-crumble-leyla.jpg",
    desc: `Elma, ceviz, toz tarçın, kuru üzüm. `,
  },
  {
    id: 5,
    title: "Nutellalı Tava Kurabiye",
    category: "Tatlılar",
    price: 19.99,
    img:"https://i.pinimg.com/originals/a1/0b/4d/a10b4d9e162b07a358a4af82db324d25.jpg",
    desc: `Dondurma ile ılık servis edilir. `,
  },
  {
    id: 6,
    title: "Cheesecake Lotus",
    category: "Tatlılar",
    price: 33.99,
    img:"https://i.pinimg.com/originals/85/05/1e/85051e4c58f35bdb12d4ef994dabc7d0.jpg",
    desc: ``,
  },
  {
    id: 7,
    title: "Dondurma",
    category: "Tatlılar",
    price: 5.99,
    img:"https://www.diyetkolik.com/site_media/media/nutrition_images/meyveli-dondurma.jpg",
    desc: `/top `,
  },
  {
    id: 8,
    title: "Meyve Tabağı",
    category: "Tatlılar",
    price: 15.99,
    img:"https://www.gulyurt.com.tr/yuklemeler/2021/01/meyve-tabagi-rs-scaled.jpg",
    desc: `.`,
  },
  {
    id: 9,
    title: "Lotus Magnolia",
    category: "Magnolia",
    price: 29.99,
    img:"https://cdn.ye-mek.net/App_UI/Img/out/650/2021/10/lotuslu-magnolia-resimli-yemek-tarifi(15).jpg",
    desc: `.`,
  },
  {
    id: 10,
    title: "Magnolia",
    category: "Magnolia",
    price: 29.99,
    img:"https://img.acunn.com/uploads/icerikler/2021/12/27/magnolia-tarifi196763154261ca1d0b51865.jpg",
    desc: `Red velvet, muz, çilek, oreo, nutella seçenekleriyle...`,
  },


];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn btn-outline-info btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");


  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo img-thumbnail"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();