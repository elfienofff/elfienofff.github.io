let films = [{
        name: "Aatrox",
        complexity: "2 / 3",
        role: "Топ",
        type: "Физический урон",
        image: 'aatrox.jpg',
        lore: "В давние времена, задолго до того, как пустыня поглотила империю, могучий чемпион Шуримы предстал перед солнечным диском, чтобы стать аватаром ныне забытого небесного божества. Он стал вознесшимся, и крылья его сияли золотом рассвета, и доспехи блистали подобно созвездию из другого мира, даря людям надежду."
    },
    {
        name: "Ahri",
        complexity: "2/3",
        role: "Мид",
        type: "Магический урон",
        image: 'ahri.jpg',
        lore: "Темне фентезі, Історичне фентезі"
    },
    {
        name: "Akali",
        complexity: "2/3",
        role: "Мид",
        type: "Магический урон ",
        image: 'akali.jfif',
        lore: "Пригоди, Фентезі"
    },
    {
        name: "Alistar",
        complexity: "1/3",
        role: "Сапорт",
        type: "Магический урон",
        image: 'alistar.jpg',
        lore: "Пригоди, Гумористичне фентезі"
    },
    {
        name: "Amumu",
        complexity: "2/3",
        role: "Мид",
        type: "Магический урон",
        image: 'ahri.jpg',
        lore: "Темне фентезі, Історичне фентезі"
    },
    {
        name: "Akali",
        complexity: "2/3",
        role: "Мид",
        type: "Магический урон ",
        image: 'akali.jfif',
        lore: "Пригоди, Фентезі"
    },
    {
        name: "Alistar",
        complexity: "1/3",
        role: "Сапорт",
        type: "Магический урон",
        image: 'alistar.jpg',
        lore: "Пригоди, Гумористичне фентезі"
    },
]
let app = {
    data() {
        return {
            films: films,
            searchString: '',
            curentIndex: -1,
            modalNum: -1,
            showPage: false,
        }
    },
    computed: {
        myFilter() {
            let search = this.searchString; //скорочуємо змінну
            if (!search) { //якщо змінна пуста
                return this.films; //показуємо всі фільми
            }
            search = search.trim().toLowerCase(); //обрізаємо пробіли і малі букви робимо

            return this.films.filter( //запускаємо фільтр
                item => { //кожен асоціативний масивчик (один фільм)
                    if (item.name.toLowerCase().indexOf(search) != -1) {
                        return item; //фільми, що підходять
                    }
                })
        }
    },
    methods: {
        showDetailse(index) {
            this.curentIndex = index;
        },
        hideDetails() {
            this.curentIndex = -1;
        },
        showModalWindow(index) {
            this.modalNum = index;
        },
        hideModalWindow() {
            this.modalNum = -1;
        },
        preLoader() {
            setTimeout(
                () => {
                    this.showPage = true;
                }, 1000)
        }
    },
    mounted() {
        this.preLoader();
    },
}
Vue.createApp(app).mount("#film-app")

// let a = 'Привіт усім';
// console.log(a.indexOf('клас') );

// subString