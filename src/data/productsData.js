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
filters:[
{id:'brand',title:'Бренд',options:['Riko','Sweet Baby','Forest','Nuovita','Papaloni','Erbesi','Micuna','Bambini','Happy Baby']},
{id:'color',title:'Цвет',options:['Белый','Слоновая кость','Натуральный','Серый','Бежевый']},
{id:'material',title:'Материал',options:['Береза','Сосна','МДФ','Дуб','Бук']},
{id:'pendulum',title:'Маятник',options:['Нет','Универсальный','Поперечный','Продольный']},
{id:'hasDrawer',title:'Ящик',options:[true,false],labels:{true:'Есть',false:'Нет'}}
],
data:[
{id:1,title:'Кроватка Riko Basic, Польша',price:52000,oldPrice:122000,image:crib1,brand:'Riko',color:'Белый',material:'Береза',pendulum:'Поперечный',hasDrawer:true,isNew:true},
{id:2,title:'Кроватка детская Sweet Baby Lucia',price:48500,oldPrice:62000,image:crib2,brand:'Sweet Baby',color:'Слоновая кость',material:'Сосна',pendulum:'Универсальный',hasDrawer:false,isNew:false},
{id:3,title:'Кроватка трансформер Forest Classic',price:68000,oldPrice:85000,image:crib3,brand:'Forest',color:'Натуральный',material:'Дуб',pendulum:'Продольный',hasDrawer:true,isNew:true},
{id:4,title:'Кроватка детская Nuovita Nido',price:57000,oldPrice:null,image:crib1,brand:'Nuovita',color:'Белый',material:'МДФ',pendulum:'Нет',hasDrawer:false,isNew:false},
{id:5,title:'Кроватка деревянная Papaloni Luna',price:73500,oldPrice:89000,image:crib2,brand:'Papaloni',color:'Бежевый',material:'Бук',pendulum:'Поперечный',hasDrawer:true,isNew:false},
{id:6,title:'Кроватка детская Erbesi Elite',price:92000,oldPrice:115000,image:crib3,brand:'Erbesi',color:'Слоновая кость',material:'МДФ',pendulum:'Нет',hasDrawer:true,isNew:true},
{id:7,title:'Кроватка-маятник Forest Kids',price:44500,oldPrice:58000,image:crib1,brand:'Forest',color:'Серый',material:'Береза',pendulum:'Универсальный',hasDrawer:false,isNew:false},
{id:8,title:'Кроватка трансформер Comfort Baby',price:84000,oldPrice:105000,image:crib2,brand:'Happy Baby',color:'Белый',material:'Сосна',pendulum:'Продольный',hasDrawer:true,isNew:false},
{id:9,title:'Кроватка детская Micuna Nature',price:69000,oldPrice:null,image:crib3,brand:'Micuna',color:'Натуральный',material:'Дуб',pendulum:'Нет',hasDrawer:false,isNew:true},
{id:10,title:'Кроватка с ящиком Bambini Classic',price:54000,oldPrice:67000,image:crib1,brand:'Bambini',color:'Белый',material:'МДФ',pendulum:'Поперечный',hasDrawer:true,isNew:false},
{id:11,title:'Кроватка детская Riko Premium',price:61000,oldPrice:78000,image:crib2,brand:'Riko',color:'Бежевый',material:'Береза',pendulum:'Универсальный',hasDrawer:false,isNew:true},
{id:12,title:'Кроватка детская Erbesi Jolie',price:88000,oldPrice:110000,image:crib3,brand:'Erbesi',color:'Слоновая кость',material:'МДФ',pendulum:'Нет',hasDrawer:true,isNew:false},
{id:13,title:'Кроватка-маятник Sweet Dream',price:47000,oldPrice:59000,image:crib1,brand:'Sweet Baby',color:'Белый',material:'Сосна',pendulum:'Поперечный',hasDrawer:false,isNew:true},
{id:14,title:'Кроватка детская Happy Baby Sleepy',price:39500,oldPrice:null,image:crib2,brand:'Happy Baby',color:'Серый',material:'МДФ',pendulum:'Нет',hasDrawer:false,isNew:false},
{id:15,title:'Кроватка трансформер Baby Comfort',price:76000,oldPrice:92000,image:crib3,brand:'Happy Baby',color:'Натуральный',material:'Дуб',pendulum:'Продольный',hasDrawer:true,isNew:true},
{id:16,title:'Кроватка деревянная Premium Wood',price:98000,oldPrice:125000,image:crib1,brand:'Papaloni',color:'Бежевый',material:'Бук',pendulum:'Универсальный',hasDrawer:true,isNew:false},
{id:17,title:'Кроватка детская Forest Home',price:53000,oldPrice:65000,image:crib2,brand:'Forest',color:'Белый',material:'Сосна',pendulum:'Нет',hasDrawer:false,isNew:false},
{id:18,title:'Кроватка с маятником Baby Dream',price:72000,oldPrice:90000,image:crib3,brand:'Sweet Baby',color:'Слоновая кость',material:'Береза',pendulum:'Продольный',hasDrawer:true,isNew:true}
]
},
{
title:'Коляски',
id:'strollers',
filters:[
{id:'brand',title:'Бренд',options:['Riko','Cybex','Happy Baby','Anex','Tutis','Inglesina','Chicco','Rant','Joie','Peg Perego']},
{id:'color',title:'Цвет',options:['Черный','Серый','Бежевый','Синий','Зеленый']},
{id:'type',title:'Тип',options:['2 в 1','Прогулочная','Трансформер']},
{id:'wheels',title:'Количество колёс',options:['3','4']}
],
data:[
{id:101,title:'Коляска Riko Basic 2 в 1',price:62000,oldPrice:78000,image:stroller1,brand:'Riko',color:'Серый',type:'2 в 1',wheels:'4',isNew:true},
{id:102,title:'Коляска Cybex Priam Lux',price:152000,oldPrice:185000,image:stroller2,brand:'Cybex',color:'Черный',type:'Прогулочная',wheels:'4',isNew:false},
{id:103,title:'Коляска прогулочная Happy Baby',price:38000,oldPrice:null,image:stroller3,brand:'Happy Baby',color:'Бежевый',type:'Прогулочная',wheels:'4',isNew:true},
{id:104,title:'Коляска Anex m/type 2 в 1',price:98000,oldPrice:null,image:stroller1,brand:'Anex',color:'Зеленый',type:'2 в 1',wheels:'4',isNew:false},
{id:105,title:'Коляска Tutis Uno Plus',price:87000,oldPrice:105000,image:stroller2,brand:'Tutis',color:'Серый',type:'2 в 1',wheels:'4',isNew:true},
{id:106,title:'Коляска Inglesina Aptica',price:112000,oldPrice:135000,image:stroller3,brand:'Inglesina',color:'Синий',type:'2 в 1',wheels:'4',isNew:false},
{id:107,title:'Коляска прогулочная Chicco Lite',price:27500,oldPrice:34000,image:stroller1,brand:'Chicco',color:'Черный',type:'Прогулочная',wheels:'4',isNew:false},
{id:108,title:'Коляска Rant Flex',price:41000,oldPrice:50000,image:stroller2,brand:'Rant',color:'Бежевый',type:'Прогулочная',wheels:'3',isNew:true},
{id:109,title:'Коляска Joie Versatrax',price:63000,oldPrice:null,image:stroller3,brand:'Joie',color:'Серый',type:'Прогулочная',wheels:'4',isNew:false},
{id:110,title:'Коляска трансформер Baby Design',price:72000,oldPrice:89000,image:stroller1,brand:'Happy Baby',color:'Зеленый',type:'Трансформер',wheels:'4',isNew:true},
{id:111,title:'Коляска детская Camarelo Zeo',price:79000,oldPrice:95000,image:stroller2,brand:'Riko',color:'Синий',type:'2 в 1',wheels:'4',isNew:false},
{id:112,title:'Коляска прогулочная Peg Perego',price:58000,oldPrice:70000,image:stroller3,brand:'Peg Perego',color:'Черный',type:'Прогулочная',wheels:'3',isNew:true}
]
},
{
title:'Автокресла',
id:'car-seats',
filters:[
{id:'brand',title:'Бренд',options:['Welldon','Cybex','Happy Baby','Britax Römer','Chicco','Rant','Maxi-Cosi','Nuna','Babyton','Lionelo','Recaro']},
{id:'color',title:'Цвет',options:['Черный','Серый','Бежевый','Синий']},
{id:'group',title:'Возрастная группа',options:['0+','0–18 кг','9–18 кг','9–36 кг','15–36 кг']},
{id:'isofix',title:'Крепление',options:['ISOFIX','Ремень автомобиля']}
],
data:[
{id:201,title:'Автокресло Welldon Safe Ride',price:32000,oldPrice:41000,image:carSeat1,brand:'Welldon',color:'Черный',group:'9–36 кг',isofix:'ISOFIX',isNew:true},
{id:202,title:'Автокресло Cybex Solution T',price:58000,oldPrice:72000,image:carSeat2,brand:'Cybex',color:'Серый',group:'15–36 кг',isofix:'ISOFIX',isNew:false},
{id:203,title:'Автокресло Happy Baby Passenger',price:24500,oldPrice:null,image:carSeat3,brand:'Happy Baby',color:'Бежевый',group:'0–18 кг',isofix:'Ремень автомобиля',isNew:true},
{id:204,title:'Автокресло Britax Römer Dualfix',price:85000,oldPrice:null,image:carSeat2,brand:'Britax Römer',color:'Черный',group:'0–18 кг',isofix:'ISOFIX',isNew:false},
{id:205,title:'Автокресло Happy Baby Passenger Plus',price:34000,oldPrice:42000,image:carSeat1,brand:'Happy Baby',color:'Синий',group:'9–18 кг',isofix:'Ремень автомобиля',isNew:false},
{id:206,title:'Автокресло Chicco Seat4Fix',price:69000,oldPrice:82000,image:carSeat3,brand:'Chicco',color:'Серый',group:'0–18 кг',isofix:'ISOFIX',isNew:true},
{id:207,title:'Автокресло Rant Master',price:29500,oldPrice:37000,image:carSeat2,brand:'Rant',color:'Черный',group:'9–36 кг',isofix:'Ремень автомобиля',isNew:false},
{id:208,title:'Автокресло Maxi-Cosi Pearl',price:94000,oldPrice:112000,image:carSeat1,brand:'Maxi-Cosi',color:'Бежевый',group:'9–18 кг',isofix:'ISOFIX',isNew:true},
{id:209,title:'Автокресло Nuna Todl Next',price:118000,oldPrice:null,image:carSeat3,brand:'Nuna',color:'Черный',group:'0–18 кг',isofix:'ISOFIX',isNew:false},
{id:210,title:'Автокресло Babyton Safety',price:24000,oldPrice:30000,image:carSeat2,brand:'Babyton',color:'Синий',group:'9–36 кг',isofix:'Ремень автомобиля',isNew:true},
{id:211,title:'Автокресло Lionelo Bastiaan',price:54000,oldPrice:65000,image:carSeat1,brand:'Lionelo',color:'Серый',group:'0–18 кг',isofix:'ISOFIX',isNew:false},
{id:212,title:'Автокресло Recaro Salia',price:103000,oldPrice:125000,image:carSeat3,brand:'Recaro',color:'Черный',group:'0–18 кг',isofix:'ISOFIX',isNew:true}
]
},
{
title:'Одежда',
id:'clothes',
filters:[
{id:'brand',title:'Бренд',options:['Cotton Baby','Soft Bunny','Little Star','Baby Sport','Autumn Kids','Soft Baby','Warm Bear','Mini Style','Happy Day','Classic Baby','Sweet Dream','Little Hero']},
{id:'color',title:'Цвет',options:['Белый','Бежевый','Синий','Розовый','Серый','Зеленый']},
{id:'size',title:'Размер',options:['56','62','68','74','80','86','92']},
{id:'material',title:'Материал',options:['Хлопок','Флис','Трикотаж','Джинс']}
],
data:[
{id:301,title:'Комплект детской одежды Cotton Baby',price:4200,oldPrice:5600,image:clothes1,brand:'Cotton Baby',color:'Белый',size:'62',material:'Хлопок',isNew:true},
{id:302,title:'Детский комбинезон Soft Bunny',price:5800,oldPrice:7200,image:clothes2,brand:'Soft Bunny',color:'Розовый',size:'68',material:'Флис',isNew:false},
{id:303,title:'Костюм для малыша Little Star',price:4900,oldPrice:null,image:clothes3,brand:'Little Star',color:'Бежевый',size:'74',material:'Трикотаж',isNew:true},
{id:304,title:'Костюм спортивный Baby Sport',price:7300,oldPrice:9000,image:clothes3,brand:'Baby Sport',color:'Синий',size:'80',material:'Трикотаж',isNew:false},
{id:305,title:'Детская куртка Autumn Kids',price:12000,oldPrice:15000,image:clothes1,brand:'Autumn Kids',color:'Зеленый',size:'86',material:'Флис',isNew:true},
{id:306,title:'Комплект для новорождённого Soft Baby',price:6800,oldPrice:8500,image:clothes2,brand:'Soft Baby',color:'Белый',size:'56',material:'Хлопок',isNew:false},
{id:307,title:'Детский свитер Warm Bear',price:4900,oldPrice:6200,image:clothes3,brand:'Warm Bear',color:'Серый',size:'80',material:'Трикотаж',isNew:true},
{id:308,title:'Джинсы детские Mini Style',price:4500,oldPrice:null,image:clothes1,brand:'Mini Style',color:'Синий',size:'86',material:'Джинс',isNew:false},
{id:309,title:'Футболка детская Happy Day',price:2500,oldPrice:3200,image:clothes2,brand:'Happy Day',color:'Белый',size:'74',material:'Хлопок',isNew:true},
{id:310,title:'Детский костюм Classic Baby',price:8900,oldPrice:11000,image:clothes3,brand:'Classic Baby',color:'Бежевый',size:'92',material:'Трикотаж',isNew:false},
{id:311,title:'Пижама детская Sweet Dream',price:3900,oldPrice:5000,image:clothes1,brand:'Sweet Dream',color:'Розовый',size:'68',material:'Хлопок',isNew:true},
{id:312,title:'Детская толстовка Little Hero',price:5600,oldPrice:7000,image:clothes2,brand:'Little Hero',color:'Серый',size:'80',material:'Флис',isNew:false}
]
},
{
title:'Кормление',
id:'feeding',
filters:[
{id:'brand',title:'Бренд',options:['Happy Baby','Baby Care','Avent','Baby Warm','Easy Feed','Baby Cook']},
{id:'material',title:'Материал',options:['Пластик','Силикон','Стекло','Металл']},
{id:'age',title:'Возраст',options:['0+','4+ мес','6+ мес','12+ мес']},
{id:'type',title:'Тип товара',options:['Стульчик','Посуда','Бутылочка','Поильник','Подогреватель','Стерилизатор','Ложка','Нагрудник','Тарелка','Контейнер','Блендер']}
],
data:[
{id:401,title:'Стульчик для кормления Happy Baby',price:18000,oldPrice:23000,image:feeding1,brand:'Happy Baby',material:'Пластик',age:'6+ мес',type:'Стульчик',isNew:true},
{id:402,title:'Набор детской посуды Baby Care',price:3200,oldPrice:4500,image:feeding2,brand:'Baby Care',material:'Пластик',age:'6+ мес',type:'Посуда',isNew:false},
{id:403,title:'Бутылочка антиколиковая Avent',price:1800,oldPrice:null,image:feeding3,brand:'Avent',material:'Стекло',age:'0+',type:'Бутылочка',isNew:true},
{id:404,title:'Поильник детский Soft Cup',price:1400,oldPrice:null,image:feeding1,brand:'Baby Care',material:'Пластик',age:'6+ мес',type:'Поильник',isNew:false},
{id:405,title:'Подогреватель бутылочек Baby Warm',price:7500,oldPrice:9200,image:feeding2,brand:'Baby Warm',material:'Пластик',age:'0+',type:'Подогреватель',isNew:true},
{id:406,title:'Стерилизатор детских бутылочек',price:9800,oldPrice:12000,image:feeding3,brand:'Baby Care',material:'Пластик',age:'0+',type:'Стерилизатор',isNew:false},
{id:407,title:'Силиконовая ложка Baby Spoon',price:900,oldPrice:1200,image:feeding1,brand:'Baby Care',material:'Силикон',age:'4+ мес',type:'Ложка',isNew:true},
{id:408,title:'Нагрудник силиконовый Easy Feed',price:1300,oldPrice:1800,image:feeding2,brand:'Easy Feed',material:'Силикон',age:'6+ мес',type:'Нагрудник',isNew:false},
{id:409,title:'Тарелка на присоске Baby Plate',price:2100,oldPrice:null,image:feeding3,brand:'Baby Care',material:'Пластик',age:'6+ мес',type:'Тарелка',isNew:true},
{id:410,title:'Контейнер для хранения питания',price:1600,oldPrice:2200,image:feeding1,brand:'Baby Care',material:'Пластик',age:'6+ мес',type:'Контейнер',isNew:false},
{id:411,title:'Детский набор для кормления',price:4500,oldPrice:5800,image:feeding2,brand:'Baby Care',material:'Силикон',age:'6+ мес',type:'Посуда',isNew:true},
{id:412,title:'Блендер-пароварка Baby Cook',price:18500,oldPrice:22000,image:feeding3,brand:'Baby Cook',material:'Пластик',age:'6+ мес',type:'Блендер',isNew:false}
]
},
{
title:'Гигиена и уход',
id:'hygiene',
filters:[
{id:'brand',title:'Бренд',options:['Baby Care','Happy Baby','Soft Kids','Comfort Potty','Baby Spa','Soft Care','Baby Air']},
{id:'type',title:'Тип товара',options:['Набор','Ванночка','Полотенце','Горшок','Термометр','Щётка','Шампунь','Увлажнитель']},
{id:'age',title:'Возраст',options:['0+','6+ мес','12+ мес']},
{id:'material',title:'Материал',options:['Пластик','Хлопок','Силикон','Ткань']}
],
data:[
{id:501,title:'Набор для ухода за малышом Baby Care',price:4200,oldPrice:5500,image:hygiene1,brand:'Baby Care',type:'Набор',age:'0+',material:'Пластик',isNew:true},
{id:502,title:'Детская ванночка Happy Baby',price:7800,oldPrice:9800,image:hygiene2,brand:'Happy Baby',type:'Ванночка',age:'0+',material:'Пластик',isNew:false},
{id:503,title:'Набор детских полотенец Soft Kids',price:3500,oldPrice:null,image:hygiene3,brand:'Soft Kids',type:'Полотенце',age:'0+',material:'Хлопок',isNew:true},
{id:504,title:'Горшок детский Comfort Potty',price:3600,oldPrice:4500,image:hygiene2,brand:'Comfort Potty',type:'Горшок',age:'12+ мес',material:'Пластик',isNew:false},
{id:505,title:'Термометр для воды Baby Care',price:1900,oldPrice:2500,image:hygiene1,brand:'Baby Care',type:'Термометр',age:'0+',material:'Пластик',isNew:true},
{id:506,title:'Маникюрный набор для малыша',price:2400,oldPrice:3200,image:hygiene3,brand:'Baby Care',type:'Набор',age:'0+',material:'Металл',isNew:false},
{id:507,title:'Детская щётка и расчёска',price:1200,oldPrice:1600,image:hygiene2,brand:'Baby Care',type:'Щётка',age:'0+',material:'Пластик',isNew:true},
{id:508,title:'Набор для купания Baby Spa',price:5800,oldPrice:null,image:hygiene1,brand:'Baby Spa',type:'Набор',age:'0+',material:'Силикон',isNew:false},
{id:509,title:'Подставка для купания малыша',price:6900,oldPrice:8500,image:hygiene3,brand:'Happy Baby',type:'Ванночка',age:'0+',material:'Пластик',isNew:true},
{id:510,title:'Детский шампунь Soft Care',price:1100,oldPrice:1500,image:hygiene2,brand:'Soft Care',type:'Шампунь',age:'0+',material:'Ткань',isNew:false},
{id:511,title:'Набор детских полотенец',price:3900,oldPrice:5000,image:hygiene1,brand:'Soft Kids',type:'Полотенце',age:'0+',material:'Хлопок',isNew:true},
{id:512,title:'Увлажнитель воздуха Baby Air',price:14500,oldPrice:18000,image:hygiene3,brand:'Baby Air',type:'Увлажнитель',age:'0+',material:'Пластик',isNew:false}
]
},
{
title:'Умные игрушки',
id:'smart-toys',
filters:[
{id:'brand',title:'Бренд',options:['Smart Friend','Baby Brain','Learning Kids','Alphabet Bot','Smart Piano','Dino Tech','Logic Kids','Smart Photo','Learning Book','Robot Build','Smart Pet']},
{id:'age',title:'Возраст',options:['1+','2+','3+','4+','5+','6+']},
{id:'type',title:'Тип игрушки',options:['Робот','Развивающая','Книжка','Музыкальная','Динозавр','Конструктор','Камера','Питомец']},
{id:'material',title:'Материал',options:['Пластик','Дерево','Текстиль']}
],
data:[
{id:601,title:'Интерактивный робот Smart Friend',price:14500,oldPrice:18000,image:toy1,brand:'Smart Friend',age:'3+',type:'Робот',material:'Пластик',isNew:true},
{id:602,title:'Развивающая игрушка Baby Brain',price:6800,oldPrice:8500,image:toy2,brand:'Baby Brain',age:'1+',type:'Развивающая',material:'Текстиль',isNew:false},
{id:603,title:'Интерактивная книжка Learning Kids',price:5200,oldPrice:null,image:toy3,brand:'Learning Kids',age:'2+',type:'Книжка',material:'Пластик',isNew:true},
{id:604,title:'Обучающий робот Alphabet Bot',price:21000,oldPrice:26000,image:toy3,brand:'Alphabet Bot',age:'4+',type:'Робот',material:'Пластик',isNew:false},
{id:605,title:'Музыкальная игрушка Smart Piano',price:6800,oldPrice:8500,image:toy1,brand:'Smart Piano',age:'2+',type:'Музыкальная',material:'Пластик',isNew:true},
{id:606,title:'Интерактивный динозавр Dino Tech',price:17000,oldPrice:21000,image:toy2,brand:'Dino Tech',age:'3+',type:'Динозавр',material:'Пластик',isNew:false},
{id:607,title:'Обучающий конструктор Logic Kids',price:7500,oldPrice:9500,image:toy3,brand:'Logic Kids',age:'5+',type:'Конструктор',material:'Дерево',isNew:true},
{id:608,title:'Детская камера Smart Photo',price:9800,oldPrice:null,image:toy1,brand:'Smart Photo',age:'4+',type:'Камера',material:'Пластик',isNew:false},
{id:609,title:'Интерактивная книга Learning Book',price:5400,oldPrice:6800,image:toy2,brand:'Learning Book',age:'3+',type:'Книжка',material:'Пластик',isNew:true},
{id:610,title:'Умный конструктор Robot Build',price:23500,oldPrice:28000,image:toy3,brand:'Robot Build',age:'6+',type:'Конструктор',material:'Пластик',isNew:false},
{id:611,title:'Музыкальный развивающий куб',price:6200,oldPrice:7800,image:toy1,brand:'Baby Brain',age:'1+',type:'Музыкальная',material:'Дерево',isNew:true},
{id:612,title:'Интерактивный питомец Smart Pet',price:15500,oldPrice:19000,image:toy2,brand:'Smart Pet',age:'4+',type:'Питомец',material:'Текстиль',isNew:false}
]
}
]