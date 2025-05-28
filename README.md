# ⏰ About My Clock Website

This project is a **simple digital clock** built with HTML, CSS, and Vanilla JavaScript. It displays the current time — hours, minutes, and seconds — and updates live every second, all without reloading the page.

---

## 📂 Project Files

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clock</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="clock_base">
        <div class="time_lape">
            <ul>
                <li class="hour"></li>
            </ul>
            <ul>
                <h1>:</h1>
                <li class="minute"></li>
            </ul>
            <ul>
                <h1>:</h1>
                <li class="second"></li>
            </ul>
        </div>
    </div>
</body>
</html>
```

---

**style.css**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background: linear-gradient(135deg, #1f1c2c, #928dab);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.clock_base {
    background: rgba(0, 0, 0, 0.7);
    padding: 30px 50px;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
    max-width: 90%;
    width: 400px;
    overflow-x: auto;
}

.time_lape {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
}

.time_lape ul {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin: 0 5px;
}

.time_lape ul h1 {
    font-weight: bold;
    font-size: 50px;
    margin: 0 5px;
    color: #ffffffaa;
}

.time_lape ul li {
    list-style: none;
    font-size: 60px;
    margin: 0 5px;
    color: #fff;
    text-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff;
    transition: all 0.3s ease-in-out;
}

.clock_base:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.8);
}

@media (max-width: 600px) {
    .clock_base {
        padding: 20px 30px;
        width: 90%;
    }

    .time_lape ul li {
        font-size: 40px;
    }

    .time_lape ul h1 {
        font-size: 40px;
    }
}
```

---

**script.js**

```js
function updateTime() {
    const currentDate = new Date();
    document.querySelector(".hour").innerHTML = currentDate.getHours().toString().padStart(2, '0');
    document.querySelector(".minute").innerHTML = currentDate.getMinutes().toString().padStart(2, '0');
    document.querySelector(".second").innerHTML = currentDate.getSeconds().toString().padStart(2, '0');
}

updateTime();
setInterval(updateTime, 1000);
```

---

✅ This project gives you a cool, minimal digital clock you can run right in your browser!
