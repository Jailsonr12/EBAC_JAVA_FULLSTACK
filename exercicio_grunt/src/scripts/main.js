const helloElement = document.getElementById("hello");
const welcomeElement = document.getElementById("welcome");
let index = 0;

const messages = [
    { hello: "Hello, World!", welcome: "Welcome!" },
    { hello: "¡Hola, Mundo!", welcome: "¡Bienvenido!" },
    { hello: "Bonjour, le Monde!", welcome: "Bienvenue!" },
    { hello: "Hallo, Welt!", welcome: "Willkommen!" },
    { hello: "Ciao, Mondo!", welcome: "Benvenuto!" },
    { hello: "Hallo, Wereld!", welcome: "Welkom!" },
    { hello: "Привет, мир!", welcome: "Добро пожаловать!" },
    { hello: "你好，世界！", welcome: "欢迎！" },
    { hello: "こんにちは、世界！", welcome: "ようこそ！" },
    { hello: "안녕하세요, 세계!", welcome: "환영합니다!" },
    { hello: "مرحباً، العالم!", welcome: "أهلاً وسهلاً!" },
    { hello: "नमस्ते, दुनिया!", welcome: "स्वागत है!" },
    { hello: "Hej, Världen!", welcome: "Välkommen!" },
    { hello: "Hej, Verden!", welcome: "Velkommen!" },
    { hello: "Hei, Verden!", welcome: "Velkommen!" },
    { hello: "Hei, Maailma!", welcome: "Tervetuloa!" },
    { hello: "Γειά σας, Κόσμος!", welcome: "Καλώς ήρθατε!" },
    { hello: "Merhaba, Dünya!", welcome: "Hoş geldiniz!" },
    { hello: "Witaj, świecie!", welcome: "Witaj!" },
    { hello: "Ahoj, světe!", welcome: "Vítejte!" },
    { hello: "Helló, Világ!", welcome: "Üdvözöljük!" },
    { hello: "Bună, Lume!", welcome: "Bine ați venit!" },
    { hello: "สวัสดี, โลก!", welcome: "ยินดีต้อนรับ!" },
    { hello: "Xin chào, Thế giới!", welcome: "Chào mừng!" },
    { hello: "שלום, עולם!", welcome: "ברוך הבא!" },
    { hello: "Halo, Dunia!", welcome: "Selamat datang!" },
    { hello: "Halo, Dunia!", welcome: "Selamat datang!" },
    { hello: "হ্যালো, বিশ্ব!", welcome: "স্বাগতম!" },
    { hello: "Привіт, Світ!", welcome: "Ласкаво просимо!" },
    { hello: "Habari, Dunia!", welcome: "Karibu!" },
];

setInterval(function () {
    helloElement.innerText = messages[index].hello;
    welcomeElement.innerText = messages[index].welcome;

    index = (index + 1) % messages.length;
}, 1000);
