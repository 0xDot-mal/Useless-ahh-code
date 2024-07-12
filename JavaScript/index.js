var numb;
numb = 10;
function JavaInjection() {
    var _a;
    document.getElementById('title').textContent = "Get hacked";
    (_a = document.getElementById("text")) === null || _a === void 0 ? void 0 : _a.textContent = "Ez lol";
}

if (numb < 10) {
    JavaInjection();
} else {
    window.alert("Bruh you know what I'm trying to do huh?");
}
