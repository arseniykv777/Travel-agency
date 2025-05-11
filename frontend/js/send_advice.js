$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();

        const re_na = /^[a-zA-Zа-яА-ЯёЁ0-9s.,!?]*$/u;
        const re_em = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
        let isValid = true;

        if (!name || !re_na.test(name)) {
            $('#name').css('border-color', 'red');
            isValid = false;
        } else $('#name').css('border-color', 'green');

        if (!email || !re_em.test(email)) {
            $('#email').css('border-color', 'red');
            isValid = false;
        } else $('#email').css('border-color', 'green');
           
        if (!isValid) return;
 
        (async function() {
            try {
                const formdata = $(event.target).serialize();
                const res = await fetch('../backend/send_advice.php', {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded'
                    },
                    body : formdata
                });
                const data = await res.json();
                
                if (data && data.success) {
                    $('#form_button').text('Отправлено!');
                } else if (data && data.error) {
                    $('#form_button').text('Ошибка!');
                }

                setTimeout(() => {
                    $('#form_button').text('Отправить заявку');
                    $('input').css('border-color', 'rgb(133, 133, 133)');
                    $('input').val('');
                }, 5000);
            } catch (e) {
                console.error(`Ошибка: ${e}`);
            }
        })();
    })
})