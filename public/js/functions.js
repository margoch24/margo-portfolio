const switchTheme = () => {
    document.getElementById('switch-theme').addEventListener('change', function() {
        const isDark = this.checked;
        const body = document.querySelector("body");
        if (!isDark) {
            return body.classList.add("light-mode")
        }

        body.classList.remove("light-mode")
    });
}