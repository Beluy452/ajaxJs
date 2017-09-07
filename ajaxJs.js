var form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (event) {
        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/libs/send.php");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    form.reset();
                } else {
                    console.error('error');
                }
            }
        };
        xhr.send(formData);
        event.preventDefault();
    });
}