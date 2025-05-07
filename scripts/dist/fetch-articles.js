"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: require('path').resolve(process.cwd(), '.env') });
var Parser = require('rss-parser');
var fs = require("fs");
var path = require("path");
var parser = new Parser();
var FEEDS = [
    process.env.HABR_RSS,
    process.env.VC_RSS,
    process.env.LIFEHACKER_RSS,
    process.env.DEVTO_RSS,
];
var TAGS = [
    'ремонт', 'материалы', 'советы', 'дизайн', 'тренды', 'интерьер', 'строительство', 'дом', 'планирование', 'экономия', 'бюджет', 'веб-дизайн', 'IT', 'разработка', 'энергоэффективность', 'стены', 'кухня', 'ошибки', 'подрядчик', 'ванная', 'умный дом', 'технологии', 'безопасность', 'окна', 'выбор'
];
var ARTICLES_DIR = path.join(process.cwd(), 'app', 'blog', 'articles');
var PLACEHOLDER_IMAGE = '/images/placeholder.jpg';
var ARTICLES_JSON = path.join(process.cwd(), 'public', 'articles.json');
// Словарь переводов тегов для Unsplash
var TAGS_EN = {
    'ремонт': 'renovation',
    'материалы': 'materials',
    'советы': 'advice',
    'дизайн': 'design',
    'тренды': 'trends',
    'интерьер': 'interior',
    'строительство': 'construction',
    'дом': 'house',
    'планирование': 'planning',
    'экономия': 'saving',
    'бюджет': 'budget',
    'веб-дизайн': 'web design',
    'IT': 'IT',
    'разработка': 'development',
    'энергоэффективность': 'energy efficiency',
    'стены': 'walls',
    'кухня': 'kitchen',
    'ошибки': 'mistakes',
    'подрядчик': 'contractor',
    'ванная': 'bathroom',
    'умный дом': 'smart home',
    'технологии': 'technology',
    'безопасность': 'security',
    'окна': 'windows',
    'выбор': 'choice',
};
// Шаблоны заголовков и описаний по тегам
var TEMPLATES = {
    'ремонт': { title: 'Практические советы по ремонту', description: 'Узнайте, как сделать ремонт быстро, качественно и с минимальными затратами.' },
    'материалы': { title: 'Выбор материалов для вашего дома', description: 'Рекомендации по выбору современных и надёжных материалов для ремонта и строительства.' },
    'советы': { title: 'Лучшие советы по ремонту и строительству', description: 'Полезные советы и лайфхаки для вашего дома и ремонта.' },
    'дизайн': { title: 'Тренды в дизайне интерьера', description: 'Актуальные идеи и вдохновение для стильного оформления вашего пространства.' },
    'тренды': { title: 'Свежие тренды в ремонте и дизайне', description: 'Будьте в курсе последних тенденций в мире ремонта и дизайна.' },
    'интерьер': { title: 'Идеи для интерьера', description: 'Как сделать интерьер уютным, современным и функциональным.' },
    'строительство': { title: 'Строительство дома: с чего начать', description: 'Пошаговые рекомендации для успешного строительства вашего дома.' },
    'дом': { title: 'Современный дом: комфорт и технологии', description: 'Всё о создании комфортного и технологичного дома.' },
    'планирование': { title: 'Планирование ремонта и строительства', description: 'Как грамотно спланировать ремонт или строительство, чтобы избежать ошибок.' },
    'экономия': { title: 'Экономим на ремонте без потери качества', description: 'Советы по оптимизации бюджета и снижению расходов на ремонт.' },
    'бюджет': { title: 'Как уложиться в бюджет при ремонте', description: 'Планирование и контроль расходов на каждом этапе ремонта.' },
    'веб-дизайн': { title: 'Веб-дизайн: современные подходы', description: 'Тренды и лучшие практики в веб-дизайне и разработке.' },
    'IT': { title: 'IT-решения для дома и бизнеса', description: 'Инновационные технологии и IT-услуги для вашего комфорта.' },
    'разработка': { title: 'Разработка: советы и инструменты', description: 'Полезные материалы для начинающих и опытных разработчиков.' },
    'энергоэффективность': { title: 'Энергоэффективность в доме', description: 'Как сделать дом более экономичным и экологичным.' },
    'стены': { title: 'Отделка и декор стен', description: 'Лучшие материалы и идеи для оформления стен.' },
    'кухня': { title: 'Дизайн и ремонт кухни', description: 'Практические советы по обустройству и ремонту кухни.' },
    'ошибки': { title: 'Типичные ошибки при ремонте', description: 'Чего стоит избегать, чтобы ремонт прошёл успешно.' },
    'подрядчик': { title: 'Как выбрать подрядчика', description: 'На что обратить внимание при выборе строительной компании.' },
    'ванная': { title: 'Современная ванная: идеи и решения', description: 'Как сделать ванную комнату стильной и функциональной.' },
    'умный дом': { title: 'Умный дом: технологии для жизни', description: 'Какие системы стоит внедрить для комфорта и безопасности.' },
    'технологии': { title: 'Технологии в строительстве и ремонте', description: 'Современные решения для вашего дома.' },
    'безопасность': { title: 'Безопасность дома и семьи', description: 'Лучшие способы защитить свой дом и близких.' },
    'окна': { title: 'Выбор окон для квартиры и дома', description: 'Плюсы и минусы разных видов окон, советы по выбору.' },
    'выбор': { title: 'Как сделать правильный выбор', description: 'Рекомендации по выбору материалов, подрядчиков и решений.' },
};
var UNIVERSAL_PLACEHOLDER = '/images/placeholder.jpg';
// Ключевые слова для фото на loremflickr
var FLICKR_TAGS = {
    'ванная': 'bathroom,interior,home',
    'кухня': 'kitchen,food,interior',
    'безопасность': 'security,home,technology',
    'выбор': 'choice,decision,home',
    'окна': 'window,home,interior',
    'технологии': 'technology,smart,home',
    'умный дом': 'smart,home,technology',
    'ремонт': 'renovation,repair,home',
    'материалы': 'materials,building,home',
    'советы': 'advice,home,idea',
    'дизайн': 'design,interior,home',
    'тренды': 'trends,design,home',
    'интерьер': 'interior,design,home',
    'строительство': 'construction,building,home',
    'дом': 'house,home,interior',
    'планирование': 'planning,home,project',
    'экономия': 'saving,budget,home',
    'бюджет': 'budget,finance,home',
    'веб-дизайн': 'web,design,technology',
    'IT': 'IT,technology,web',
    'разработка': 'development,code,technology',
    'энергоэффективность': 'energy,eco,home',
    'стены': 'wall,interior,home',
    'ошибки': 'mistake,problem,home',
    'подрядчик': 'contractor,worker,building',
};
// Пример открытых RSS-источников по тематикам (можно расширять)
var RSS_SOURCES = {
    'ремонт': [
        'https://ivd.ru/rss/all.xml',
        'https://remont-blog.ru/feed/',
        'https://stroyday.ru/feed/'
    ],
    'дизайн': [
        'https://ivd.ru/rss/all.xml',
        'https://roomble.com/feed/'
    ],
    'технологии': [
        'https://habr.com/ru/rss/all/all/?fl=ru',
        'https://vc.ru/rss'
    ],
    // ... добавить для других тегов
};
// Генерация простого текста для fallback-статей
function generateContent(tag) {
    switch (tag) {
        case 'ванная':
            return "\u0412\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430 \u2014 \u044D\u0442\u043E \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u0435\u0441\u0442\u043E \u0434\u043B\u044F \u0433\u0438\u0433\u0438\u0435\u043D\u044B, \u043D\u043E \u0438 \u0437\u043E\u043D\u0430 \u043E\u0442\u0434\u044B\u0445\u0430. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u0435\u0442\u043B\u044B\u0435 \u043E\u0442\u0442\u0435\u043D\u043A\u0438, \u0447\u0442\u043E\u0431\u044B \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E. \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0448\u043A\u0430\u0444\u0447\u0438\u043A\u0438 \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438 \u043D\u0435 \u0437\u0430\u0431\u044B\u0432\u0430\u0439\u0442\u0435 \u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u0438.\n\n\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u0430\u043D\u043D\u0443\u044E \u0441\u0442\u0438\u043B\u044C\u043D\u043E\u0439 \u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0435\u0447\u043D\u043E\u0439. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0432\u043B\u0430\u0433\u043E\u0441\u0442\u043E\u0439\u043A\u0438\u0435 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u044F \u0438 \u0443\u0434\u043E\u0431\u043D\u0443\u044E \u0441\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0443. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0430\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B \u0434\u043B\u044F \u0443\u044E\u0442\u0430: \u043A\u043E\u0432\u0440\u0438\u043A, \u0437\u0435\u0440\u043A\u0430\u043B\u043E \u0441 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u043E\u0439, \u043F\u043E\u043B\u043E\u0447\u043A\u0438 \u0434\u043B\u044F \u043C\u0435\u043B\u043E\u0447\u0435\u0439.";
        case 'кухня':
            return "\u041A\u0443\u0445\u043D\u044F \u2014 \u0441\u0435\u0440\u0434\u0446\u0435 \u0434\u043E\u043C\u0430. \u041F\u043B\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 \u0440\u0430\u0431\u043E\u0447\u0443\u044E \u0437\u043E\u043D\u0443 \u0442\u0430\u043A, \u0447\u0442\u043E\u0431\u044B \u0432\u0441\u0451 \u0431\u044B\u043B\u043E \u043F\u043E\u0434 \u0440\u0443\u043A\u043E\u0439. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0434\u043B\u044F \u0441\u0442\u043E\u043B\u0435\u0448\u043D\u0438\u0446 \u0438 \u0444\u0430\u0440\u0442\u0443\u043A\u0430.\n\n\u0414\u043B\u044F \u0443\u044E\u0442\u0430 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B: \u0441\u0432\u0435\u0442\u0438\u043B\u044C\u043D\u0438\u043A\u0438, \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F, \u0442\u0435\u043A\u0441\u0442\u0438\u043B\u044C. \u041D\u0435 \u0437\u0430\u0431\u044B\u0432\u0430\u0439\u0442\u0435 \u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u043C \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0438 \u0438 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u0438.";
        // ... (добавить для других тегов по аналогии)
        default:
            return "\u042D\u0442\u0430 \u0441\u0442\u0430\u0442\u044C\u044F \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u0434\u0435\u0438 \u043F\u043E \u0442\u0435\u043C\u0435 \u00AB".concat(tag, "\u00BB. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F\u043C \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432, \u0447\u0442\u043E\u0431\u044B \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u0430\u0448 \u0434\u043E\u043C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0435\u0435 \u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u0435\u0435.");
    }
}
function fetchAndSaveArticles() {
    return __awaiter(this, void 0, void 0, function () {
        var articlesJsonArr, _i, FEEDS_1, feedUrl, feed, _loop_1, _a, _b, item, e_1, now, TEN_HOURS, _loop_2, _c, TAGS_1, tag;
        var _d, _e, _f, _g, _h, _j, _k, _l;
        return __generator(this, function (_m) {
            switch (_m.label) {
                case 0:
                    articlesJsonArr = [];
                    if (fs.existsSync(ARTICLES_JSON)) {
                        try {
                            articlesJsonArr = JSON.parse(fs.readFileSync(ARTICLES_JSON, 'utf-8'));
                        }
                        catch (_o) { }
                    }
                    console.log('FEEDS:', FEEDS);
                    _i = 0, FEEDS_1 = FEEDS;
                    _m.label = 1;
                case 1:
                    if (!(_i < FEEDS_1.length)) return [3 /*break*/, 6];
                    feedUrl = FEEDS_1[_i];
                    if (!feedUrl) {
                        console.log('Пустой feedUrl, пропуск');
                        return [3 /*break*/, 5];
                    }
                    _m.label = 2;
                case 2:
                    _m.trys.push([2, 4, , 5]);
                    console.log('Парсим ленту:', feedUrl);
                    return [4 /*yield*/, parser.parseURL(feedUrl)];
                case 3:
                    feed = _m.sent();
                    console.log('Найдено статей:', feed.items.length);
                    _loop_1 = function (item) {
                        var text = (item.title + ' ' + (item.contentSnippet || '')).toLowerCase();
                        var tags = TAGS.filter(function (tag) { return text.includes(tag.toLowerCase()); });
                        if (tags.length === 0) {
                            console.log('Пропуск статьи без тегов:', item.title);
                            return "continue";
                        }
                        var fileName = "".concat(((_d = item.isoDate) === null || _d === void 0 ? void 0 : _d.slice(0, 10)) || Date.now(), "-").concat((item.title || '').toLowerCase().replace(/[^a-zа-я0-9]+/gi, '-'), ".mdx");
                        var filePath = path.join(ARTICLES_DIR, fileName);
                        var mdx = "---\ntitle: \"".concat((_e = item.title) === null || _e === void 0 ? void 0 : _e.replace(/"/g, ''), "\"\ndescription: \"").concat((_f = item.contentSnippet) === null || _f === void 0 ? void 0 : _f.replace(/"/g, '').slice(0, 200), "\"\ndate: \"").concat(item.isoDate || new Date().toISOString(), "\"\nauthor: \"").concat(item.creator || item.author || 'Unknown', "\"\ntags: [").concat(tags.map(function (t) { return "\"".concat(t, "\""); }).join(', '), "]\ntime_to_read: ").concat(Math.max(1, Math.round(((((_g = item.contentSnippet) === null || _g === void 0 ? void 0 : _g.split(' ').length) || 100) / 180))), "\nimage: \"").concat(((_h = item.enclosure) === null || _h === void 0 ? void 0 : _h.url) || PLACEHOLDER_IMAGE, "\"\n---\n\n").concat(item.contentSnippet || '', "\n");
                        fs.mkdirSync(ARTICLES_DIR, { recursive: true });
                        fs.writeFileSync(filePath, mdx, 'utf-8');
                        // Добавляем в articles.json
                        var description = ((item.title || '') + '\n' + (item.contentSnippet || '')).trim();
                        var articleObj = {
                            title: item.title || '',
                            date: item.isoDate || new Date().toISOString(),
                            tags: tags,
                            image: ((_j = item.enclosure) === null || _j === void 0 ? void 0 : _j.url) || PLACEHOLDER_IMAGE,
                            description: description,
                            published: true
                        };
                        articlesJsonArr.unshift(articleObj);
                        console.log('Добавлено в articles.json:', articleObj);
                    };
                    for (_a = 0, _b = feed.items.slice(0, 1); _a < _b.length; _a++) {
                        item = _b[_a];
                        _loop_1(item);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _m.sent();
                    console.log('Ошибка при парсинге ленты', feedUrl, e_1);
                    return [3 /*break*/, 5];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6:
                    now = Date.now();
                    TEN_HOURS = 10 * 60 * 60 * 1000;
                    _loop_2 = function (tag) {
                        var hasFresh, imported, _p, _q, rss, feed, _r, _s, item, text, articleObj, e_2, t, flickrTag, services, image, articleObj;
                        return __generator(this, function (_t) {
                            switch (_t.label) {
                                case 0:
                                    hasFresh = articlesJsonArr.some(function (a) { return a.tags && a.tags.includes(tag) && (now - new Date(a.date).getTime() < TEN_HOURS); });
                                    if (!!hasFresh) return [3 /*break*/, 8];
                                    imported = false;
                                    if (!RSS_SOURCES[tag]) return [3 /*break*/, 7];
                                    _p = 0, _q = RSS_SOURCES[tag];
                                    _t.label = 1;
                                case 1:
                                    if (!(_p < _q.length)) return [3 /*break*/, 7];
                                    rss = _q[_p];
                                    _t.label = 2;
                                case 2:
                                    _t.trys.push([2, 4, , 5]);
                                    return [4 /*yield*/, parser.parseURL(rss)];
                                case 3:
                                    feed = _t.sent();
                                    for (_r = 0, _s = feed.items; _r < _s.length; _r++) {
                                        item = _s[_r];
                                        text = (item.title + ' ' + (item.contentSnippet || '')).toLowerCase();
                                        if (text.includes(tag.toLowerCase())) {
                                            articleObj = {
                                                title: item.title || '',
                                                date: item.isoDate || new Date().toISOString(),
                                                tags: [tag],
                                                image: ((_k = item.enclosure) === null || _k === void 0 ? void 0 : _k.url) || "https://loremflickr.com/800/600/".concat(encodeURIComponent(tag), ",home?random=").concat(Math.floor(Math.random() * 100000)),
                                                description: ((_l = item.contentSnippet) === null || _l === void 0 ? void 0 : _l.slice(0, 200)) || '',
                                                content: item.contentSnippet || '',
                                                published: true
                                            };
                                            articlesJsonArr.unshift(articleObj);
                                            imported = true;
                                            console.log('Импортирована реальная статья по тегу:', tag);
                                            break;
                                        }
                                    }
                                    return [3 /*break*/, 5];
                                case 4:
                                    e_2 = _t.sent();
                                    return [3 /*break*/, 5];
                                case 5:
                                    if (imported)
                                        return [3 /*break*/, 7];
                                    _t.label = 6;
                                case 6:
                                    _p++;
                                    return [3 /*break*/, 1];
                                case 7:
                                    // 2. Если не нашли — генерируем fallback
                                    if (!imported) {
                                        t = TEMPLATES[tag] || { title: "\u041D\u043E\u0432\u044B\u0435 \u0438\u0434\u0435\u0438 \u0438 \u0441\u043E\u0432\u0435\u0442\u044B \u043F\u043E \u0442\u0435\u043C\u0435: ".concat(tag), description: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0442\u0430\u0442\u044C\u044F \u0438 \u0441\u0432\u0435\u0436\u0438\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u0442\u0435\u043C\u0435 \u00AB".concat(tag, "\u00BB.") };
                                        flickrTag = FLICKR_TAGS[tag] || 'home,interior';
                                        services = [
                                            "https://loremflickr.com/800/600/".concat(encodeURIComponent(flickrTag), "?random=").concat(Math.floor(Math.random() * 100000)),
                                            "https://picsum.photos/800/600?random=".concat(Math.floor(Math.random() * 100000))
                                        ];
                                        image = services[Math.floor(Math.random() * services.length)];
                                        articleObj = {
                                            title: t.title,
                                            date: new Date().toISOString(),
                                            tags: [tag],
                                            image: image,
                                            description: t.description,
                                            content: generateContent(tag),
                                            published: true
                                        };
                                        articlesJsonArr.unshift(articleObj);
                                        console.log('Добавлен fallback по тегу:', tag);
                                    }
                                    _t.label = 8;
                                case 8: return [2 /*return*/];
                            }
                        });
                    };
                    _c = 0, TAGS_1 = TAGS;
                    _m.label = 7;
                case 7:
                    if (!(_c < TAGS_1.length)) return [3 /*break*/, 10];
                    tag = TAGS_1[_c];
                    return [5 /*yield**/, _loop_2(tag)];
                case 8:
                    _m.sent();
                    _m.label = 9;
                case 9:
                    _c++;
                    return [3 /*break*/, 7];
                case 10:
                    fs.writeFileSync(ARTICLES_JSON, JSON.stringify(articlesJsonArr, null, 2), 'utf-8');
                    console.log('Итоговое количество статей в articles.json:', articlesJsonArr.length);
                    return [2 /*return*/];
            }
        });
    });
}
fetchAndSaveArticles();
