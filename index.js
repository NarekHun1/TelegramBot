const TelegramApi = require('node-telegram-bot-api')
const {mediaGroup} = require('./media')
const mediaTvGroup = require('./mediaTv')
const { vip1, vip2, vip3, vip4, vip5 } = require('./mediaJrvej')

const token = '7127459687:AAH7ki_cxPruQSAe9h2cSkCiHTTrDBIZ_8s'

const bot = new TelegramApi(token, {polling: true})



    const hotelOptions =  {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Baqos Hotel S27',callback_data: 'hotel-1'}],
                [{text: 'Jrvejh Hotel S27',callback_data: 'hotel-2'}],
            ],

        })
    }
const hotelBaqos =  {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Rooms',callback_data: 'roomsBaqos'}],
            [{text: 'TV',callback_data: 'tvBaqos'}],
            [{text: 'Price',callback_data: 'priceBaqos'}],
            [{text: 'Address',callback_data: 'AddressBaqos'}],
            [{text: 'Location',callback_data: 'LocationBaqos'}],
            [{text: 'phone number',callback_data: 'phone number Baqos'}],
        ],

    })
}
const hotelJrvej =  {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Rooms',callback_data: 'roomsJrvej'}],
            [{text: 'TV',callback_data: 'tvJrvej'}],
            [{text: 'Price',callback_data: 'priceJrvej'}],
            [{text: 'Address',callback_data: 'AddressJrvej'}],
            [{text: 'Location',callback_data: 'LocationJrvej'}],
            [{text: 'phone number',callback_data: 'phone number Jrvej'}],
        ],

    })
}
const roomOptions =  {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'room-1',callback_data: 'room-1'}],
            [{text: 'room-2',callback_data: 'room-2'}],
        ],

    })
}
const room2Options =  {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Vip 1',callback_data: 'room1'}],
            [{text: 'Vip 2',callback_data: 'room2'}],
            [{text: 'Vip 3',callback_data: 'room3'}],
            [{text: 'Vip 4',callback_data: 'room4'}],
            [{text: 'Vip 5',callback_data: 'room5'}],
        ],

    })
}

const start = () => {
    bot.setMyCommands([
        {command: '/start',description: 'that is first command' },
        {command: '/info',description: 'that is information for that hotel' },
    ])


    const latitude = 40.153969;
    const longitude = 44.485013;
    const yandexLink = `https://yandex.ru/maps/?rtext=~${latitude}%2C${longitude}`;



    bot.on('message', async msg => {

        const text = msg.text
        const chatId = msg.chat.id

        try {
            if (text === '/start'){
                await bot.sendMessage(chatId,'welcome to HotelErevan');
                return   bot.sendMessage(chatId , 'select a hotel', {...hotelOptions})
            }
        }catch (e) {
            console.log(e)
        }

        try {
            if (text === '/info') {
                await bot.sendMessage(chatId, 'for that bot yo can see and reserv rooms in hotel ')
            }
        }catch (e) {
            console.log(e)
        }

    })


    bot.on('callback_query',  async function  onCallbackQuery(callbackQuery)  {

        const hotel = callbackQuery.data
        const chatId = callbackQuery.message.chat.id

        try {
            if (hotel === 'hotel-1') {
                await bot.sendMessage(chatId, 'we cen select room or call as', {...hotelBaqos})
            }
        }catch (e) {
            console.log(e)
        }

        try {
            if (hotel === 'hotel-2') {
                await bot.sendMessage(chatId, 'we cen select room or call as', {...hotelJrvej})
            }

        }catch (e) {
            console.log(e)
        }

    })


    bot.on('callback_query',async function (callbackQuery)  {


        const phone = '+37498725222'

        const connect = ` <a href="https://wa.me/${phone}?text=hi">WatsApp</a>`;

        const hotel = callbackQuery.data
        const chatId = callbackQuery.message.chat.id

        try {
            if (hotel === 'roomsBaqos'){
                await bot.sendMessage(chatId,'select room', {...roomOptions})
            }
        }catch (e) {
            console.log(e)
        }


        try {
            if (hotel === 'tvBaqos') {
                await bot.sendMediaGroup(chatId, mediaTvGroup,{})
            }
        }catch (e) {
            console.log(e)
        }

        try {
            if (hotel === 'priceBaqos'){
                await bot.sendMessage(chatId,'2 hour 10000AMd')
            }
        }catch (e) {
            console.log(e)
        }

        try {
            if (hotel === 'AddressBaqos'){
                await bot.sendMessage(chatId, connect, {parse_mode: "HTML"} )
            }
        }catch (e) {
            console.log(e)
        }

        try {
            if (hotel === 'LocationBaqos') {
                await bot.sendMessage(chatId,`Tap here to navigate: [Open Yandex Navigator](${yandexLink})`,{
                    parse_mode: 'Markdown'
                })
            }
        }catch (e) {
            console.log(e)
        }

        try {
            if (hotel === 'phone number Baqos') {
                await bot.sendMessage(chatId,'we can call as : +37494051474')
            }
        }catch (e) {
            console.log(e)
        }
    })

    bot.on('callback_query',async function (callbackQuery) {
        const hotel = callbackQuery.data
        const chatId = callbackQuery.message.chat.id

        const phone = '+37498725222'

        const connect = ` <a href="https://wa.me/${phone}?text=hi">WatsApp</a>`;

        try {
            if (hotel === 'roomsJrvej') {
                await bot.sendMessage(chatId, 'select room', {...room2Options})
            }
        } catch (e) {
            console.log(e)
        }

        try {
            if (hotel === 'tvJrvej') {
                await bot.sendMediaGroup(chatId, mediaTvGroup,{})
            }
        }catch (e) {
            console.log(e)
        }

        try {
            if (hotel === 'priceJrvej'){
                await bot.sendMessage(chatId,'2 hour 10000AMd')
            }
        }catch (e) {
            console.log(e)
        }

        try {
            if (hotel === 'AddressJrvej'){
                await bot.sendMessage(chatId, connect, {parse_mode: "HTML"} )
            }
        }catch (e) {
            console.log(e)
        }

        try {
            if (hotel === 'LocationJrvej') {
                await bot.sendMessage(chatId,`Tap here to navigate: [Open Yandex Navigator](${yandexLink})`,{
                    parse_mode: 'Markdown'
                })
            }
        }catch (e) {
            console.log(e)
        }

        try {
            if (hotel === 'phone number Jrvej') {
                await bot.sendMessage(chatId,'we can call as : +37494051474')
            }
        }catch (e) {
            console.log(e)
        }


    })

    bot.on('callback_query',async function (callbackQuery) {

        const rooms = callbackQuery.data
        const chatId = callbackQuery.message.chat.id

        try {
            if (rooms === 'room-1'){
                await bot.sendMediaGroup(chatId, mediaGroup,{})
            }
        }catch (e){
            console.log(e)
        }

        try {
            if (rooms === 'room-2'){
                await bot.sendMediaGroup(chatId, mediaGroup,{})
            }
        }catch (e) {
            console.log(e)
        }

    })

    bot.on('callback_query',async function (callbackQuery) {
        const rooms = callbackQuery.data
        const chatId = callbackQuery.message.chat.id

        try {
            if (rooms === 'room1'){
                await bot.sendMediaGroup(chatId, vip1,{})
            }
        }catch (e){
            console.log(e)
        }

        try {
            if (rooms === 'room2'){
                await bot.sendMediaGroup(chatId, vip2,{})
            }
        }catch (e){
            console.log(e)
        }
        try {
            if (rooms === 'room3'){
                await bot.sendMediaGroup(chatId, vip3,{})
            }
        }catch (e){
            console.log(e)
        }
        try {
            if (rooms === 'room4'){
                await bot.sendMediaGroup(chatId, vip4,{})
            }
        }catch (e){
            console.log(e)
        }
        try {
            if (rooms === 'room5'){
                await bot.sendMediaGroup(chatId, vip5,{})
            }
        }catch (e){
            console.log(e)
        }
    })
}

start()


