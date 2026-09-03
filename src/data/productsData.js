import crib1 from '../assets/Кроватка.svg'
import crib2 from '../assets/Кроватка2.jpg'
import crib3 from '../assets/Кроватка3.jpg'

import stroller1 from '../assets/Коляска.svg'
import stroller2 from '../assets/Коляска2.svg'
import stroller3 from '../assets/Коляска3.svg'

import carSeat1 from '../assets/Автокресло.svg'
import carSeat2 from '../assets/Автокресло2.jpg'
import carSeat3 from '../assets/Автокресло3.jpg'

import clothes1 from '../assets/Одежда.svg'
import clothes2 from '../assets/Одежда2.jpg'
import clothes3 from '../assets/Одежда3.jpg'

const feeding1 = 'https://cdn-frutonyanya-ru.website.yandexcloud.net/iblock/178/178e83d4876a1be2c35170bb16683a24/2e251a979b201866bb46bffd23fe09ca.webp'
const feeding2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKArSP6kqifvyNPa1dwmeJXkJhmq4QNiq_BNL3Ta4Z-7v1jqyDR3x-2Rs_&s=10'
const feeding3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPvmNZB4fmDeca0oIFJo4SeLxpdA1fU-_r7NYUMmriw&s=10'

const hygiene1 = 'https://mymarket.am/files/resizes/products/797/--svoboda-_pr4658.700x700.jpg'
const hygiene2 = 'https://gw-catalog.ru/wp-content/uploads/totty_baby_shampoo_for_beloved_babies_03650-scaled.jpg'
const hygiene3 = 'https://hozsklad.ua/images/products/MCS-11300-SIN.jpg'

const toy1 = 'https://kidiq.ru/cache/front/shop/products/113/224893/600x700.jpg'
const toy2 = 'https://basket-09.wbbasket.ru/vol1286/part128639/128639470/images/big/1.webp'
const toy3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7EfbXY5bLuhAH8Kw7vvRQiuDtlA0hrpmOcEsVhqdQeQ&s=10'

export const catalogs = [
    {
        title:'Кроватки',
        id:'cribs',
        data:[
            {id:1,title:'Кроватка Riko Basic, Польша',price:52000,oldPrice:122000,image:crib1},
            {id:2,title:'Кроватка детская Sweet Baby Lucia',price:48500,oldPrice:62000,image:crib2},
            {id:3,title:'Кроватка трансформер Forest Classic',price:68000,oldPrice:85000,image:crib3},
            {id:4,title:'Кроватка детская Nuovita Nido',price:57000,oldPrice:null,image:crib1},
            {id:5,title:'Кроватка деревянная Papaloni Luna',price:73500,oldPrice:89000,image:crib2},
            {id:6,title:'Кроватка детская Erbesi Elite',price:92000,oldPrice:115000,image:crib3},
            {id:7,title:'Кроватка-маятник Forest Kids',price:44500,oldPrice:58000,image:crib1},
            {id:8,title:'Кроватка трансформер Comfort Baby',price:84000,oldPrice:105000,image:crib2},
            {id:9,title:'Кроватка детская Micuna Nature',price:69000,oldPrice:null,image:crib3},
            {id:10,title:'Кроватка с ящиком Bambini Classic',price:54000,oldPrice:67000,image:crib1},
            {id:11,title:'Кроватка детская Riko Premium',price:61000,oldPrice:78000,image:crib2},
            {id:12,title:'Кроватка детская Erbesi Jolie',price:88000,oldPrice:110000,image:crib3},
            {id:13,title:'Кроватка-маятник Sweet Dream',price:47000,oldPrice:59000,image:crib1},
            {id:14,title:'Кроватка детская Happy Baby Sleepy',price:39500,oldPrice:null,image:crib2},
            {id:15,title:'Кроватка трансформер Baby Comfort',price:76000,oldPrice:92000,image:crib3},
            {id:16,title:'Кроватка деревянная Premium Wood',price:98000,oldPrice:125000,image:crib1},
            {id:17,title:'Кроватка детская Forest Home',price:53000,oldPrice:65000,image:crib2},
            {id:18,title:'Кроватка с маятником Baby Dream',price:72000,oldPrice:90000,image:crib3}
        ]
    },
    {
        title:'Коляски',
        id:'strollers',
        data:[
            {id:101,title:'Коляска Riko Basic 2 в 1',price:62000,oldPrice:78000,image:stroller1},
            {id:102,title:'Коляска Cybex Priam Lux',price:152000,oldPrice:185000,image:stroller2},
            {id:103,title:'Коляска прогулочная Happy Baby',price:38000,oldPrice:null,image:stroller3},
            {id:104,title:'Коляска Anex m/type 2 в 1',price:98000,oldPrice:null,image:stroller1},
                    {id:105,title:'Коляска Tutis Uno Plus',price:87000,oldPrice:105000,image:stroller2},
                    {id:106,title:'Коляска Inglesina Aptica',price:112000,oldPrice:135000,image:stroller3},
                    {id:107,title:'Коляска прогулочная Chicco Lite',price:27500,oldPrice:34000,image:stroller1},
                    {id:108,title:'Коляска Rant Flex',price:41000,oldPrice:50000,image:stroller2},
                    {id:109,title:'Коляска Joie Versatrax',price:63000,oldPrice:null,image:stroller3},
                    {id:110,title:'Коляска трансформер Baby Design',price:72000,oldPrice:89000,image:stroller1},
                    {id:111,title:'Коляска детская Camarelo Zeo',price:79000,oldPrice:95000,image:stroller2},
                    {id:112,title:'Коляска прогулочная Peg Perego',price:58000,oldPrice:70000,image:stroller3}

        ]
    },
    {
        title:'Автокресла',
        id:'car-seats',
        data:[
            {id:201,title:'Автокресло Welldon Safe Ride',price:32000,oldPrice:41000,image:carSeat1},
            {id:202,title:'Автокресло Cybex Solution T',price:58000,oldPrice:72000,image:carSeat2},
            {id:203,title:'Автокресло Happy Baby Passenger',price:24500,oldPrice:null,image:carSeat3},
            {id:204,title:'Автокресло Britax Römer Dualfix',price:85000,oldPrice:null,image:carSeat2},
                    {id:205,title:'Автокресло Happy Baby Passenger',price:34000,oldPrice:42000,image:carSeat1},
                    {id:206,title:'Автокресло Chicco Seat4Fix',price:69000,oldPrice:82000,image:carSeat3},
                    {id:207,title:'Автокресло Rant Master',price:29500,oldPrice:37000,image:carSeat2},
                    {id:208,title:'Автокресло Maxi-Cosi Pearl',price:94000,oldPrice:112000,image:carSeat1},
                    {id:209,title:'Автокресло Nuna Todl Next',price:118000,oldPrice:null,image:carSeat3},
                    {id:210,title:'Автокресло Babyton Safety',price:24000,oldPrice:30000,image:carSeat2},
                    {id:211,title:'Автокресло Lionelo Bastiaan',price:54000,oldPrice:65000,image:carSeat1},
                    {id:212,title:'Автокресло Recaro Salia',price:103000,oldPrice:125000,image:carSeat3}

        ]
    },
    {
        title:'Одежда',
        id:'clothes',
        data:[
            {id:301,title:'Комплект детской одежды Cotton Baby',price:4200,oldPrice:5600,image:clothes1},
            {id:302,title:'Детский комбинезон Soft Bunny',price:5800,oldPrice:7200,image:clothes2},
            {id:303,title:'Костюм для малыша Little Star',price:4900,oldPrice:null,image:clothes3},
            {id:304,title:'Костюм спортивный Baby Sport',price:7300,oldPrice:9000,image:clothes3},
                    {id:305,title:'Детская куртка Autumn Kids',price:12000,oldPrice:15000,image:clothes1},
                    {id:306,title:'Комплект для новорождённого Soft Baby',price:6800,oldPrice:8500,image:clothes2},
                    {id:307,title:'Детский свитер Warm Bear',price:4900,oldPrice:6200,image:clothes3},
                    {id:308,title:'Джинсы детские Mini Style',price:4500,oldPrice:null,image:clothes1},
                    {id:309,title:'Футболка детская Happy Day',price:2500,oldPrice:3200,image:clothes2},
                    {id:310,title:'Детский костюм Classic Baby',price:8900,oldPrice:11000,image:clothes3},
                    {id:311,title:'Пижама детская Sweet Dream',price:3900,oldPrice:5000,image:clothes1},
                    {id:312,title:'Детская толстовка Little Hero',price:5600,oldPrice:7000,image:clothes2}

        ]
    },
    {
        title:'Кормление',
        id:'feeding',
        data:[
            {id:401,title:'Стульчик для кормления Happy Baby',price:18000,oldPrice:23000,image:feeding1},
            {id:402,title:'Набор детской посуды Baby Care',price:3200,oldPrice:4500,image:feeding2},
            {id:403,title:'Бутылочка антиколиковая Avent',price:1800,oldPrice:null,image:feeding3},
            {id:404,title:'Поильник детский Soft Cup',price:1400,oldPrice:null,image:feeding1},
                    {id:405,title:'Подогреватель бутылочек Baby Warm',price:7500,oldPrice:9200,image:feeding2},
                    {id:406,title:'Стерилизатор детских бутылочек',price:9800,oldPrice:12000,image:feeding3},
                    {id:407,title:'Силиконовая ложка Baby Spoon',price:900,oldPrice:1200,image:feeding1},
                    {id:408,title:'Нагрудник силиконовый Easy Feed',price:1300,oldPrice:1800,image:feeding2},
                    {id:409,title:'Тарелка на присоске Baby Plate',price:2100,oldPrice:null,image:feeding3},
                    {id:410,title:'Контейнер для хранения питания',price:1600,oldPrice:2200,image:feeding1},
                    {id:411,title:'Детский набор для кормления',price:4500,oldPrice:5800,image:feeding2},
                    {id:412,title:'Блендер-пароварка Baby Cook',price:18500,oldPrice:22000,image:feeding3}

        ]
    },
    {
        title:'Гигиена и уход',
        id:'hygiene',
        data:[
            {id:501,title:'Набор для ухода за малышом Baby Care',price:4200,oldPrice:5500,image:hygiene1},
            {id:502,title:'Детская ванночка Happy Baby',price:7800,oldPrice:9800,image:hygiene2},
            {id:503,title:'Набор детских полотенец Soft Kids',price:3500,oldPrice:null,image:hygiene3},
            {id:504,title:'Горшок детский Comfort Potty',price:3600,oldPrice:4500,image:hygiene2},
                    {id:505,title:'Термометр для воды Baby Care',price:1900,oldPrice:2500,image:hygiene1},
                    {id:506,title:'Маникюрный набор для малыша',price:2400,oldPrice:3200,image:hygiene3},
                    {id:507,title:'Детская щётка и расчёска',price:1200,oldPrice:1600,image:hygiene2},
                    {id:508,title:'Набор для купания Baby Spa',price:5800,oldPrice:null,image:hygiene1},
                    {id:509,title:'Подставка для купания малыша',price:6900,oldPrice:8500,image:hygiene3},
                    {id:510,title:'Детский шампунь Soft Care',price:1100,oldPrice:1500,image:hygiene2},
                    {id:511,title:'Набор детских полотенец',price:3900,oldPrice:5000,image:hygiene1},
                    {id:512,title:'Увлажнитель воздуха Baby Air',price:14500,oldPrice:18000,image:hygiene3}

        ]
    },
    {
        title:'Умные игрушки',
        id:'smart-toys',
        data:[
            {id:601,title:'Интерактивный робот Smart Friend',price:14500,oldPrice:18000,image:toy1},
            {id:602,title:'Развивающая игрушка Baby Brain',price:6800,oldPrice:8500,image:toy2},
            {id:603,title:'Интерактивная книжка Learning Kids',price:5200,oldPrice:null,image:toy3},
            {id:604,title:'Обучающий робот Alphabet Bot',price:21000,oldPrice:26000,image:toy3},
                    {id:605,title:'Музыкальная игрушка Smart Piano',price:6800,oldPrice:8500,image:toy1},
                    {id:606,title:'Интерактивный динозавр Dino Tech',price:17000,oldPrice:21000,image:toy2},
                    {id:607,title:'Обучающий конструктор Logic Kids',price:7500,oldPrice:9500,image:toy3},
                    {id:608,title:'Детская камера Smart Photo',price:9800,oldPrice:null,image:toy1},
                    {id:609,title:'Интерактивная книга Learning Book',price:5400,oldPrice:6800,image:toy2},
                    {id:610,title:'Умный конструктор Robot Build',price:23500,oldPrice:28000,image:toy3},
                    {id:611,title:'Музыкальный развивающий куб',price:6200,oldPrice:7800,image:toy1},
                    {id:612,title:'Интерактивный питомец Smart Pet',price:15500,oldPrice:19000,image:toy2}

        ]
    }
]