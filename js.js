

window.addEventListener("load", function () {
    var MyValidateForm = document.getElementById('MyValidateForm');
        MyArray = Array.from(MyValidateForm.elements);
        MyCheckbox = document.getElementById('agree');


    function validateForm(event){
        event.preventDefault();
        var ArrayPassword = [];
        // Присвоить переменные для сравнения паролей!
        MyArray.forEach(function(element){

        var MyElementType = element.type;

            if (MyElementType === 'text' || MyElementType === 'password'){
                if (element.value !== '') {
                    element.style.borderColor = 'green';
                } else {
                    element.style.borderColor = 'red';
                }

                if (MyElementType === 'password'){
                    console.log(element);
                    ArrayPassword.push(element);
                }
            }
        });
        if (ArrayPassword[0].value === ArrayPassword[1].value){
            if(ArrayPassword[0].value !== '') {
                ArrayPassword[0].style.borderColor = 'green';
            }
            if(ArrayPassword[1].value !== '') {
                ArrayPassword[1].style.borderColor = 'green';
            }

        } else {
            ArrayPassword[0].style.borderColor = 'red';
            ArrayPassword[1].style.borderColor = 'red';
        }

    }  //'submit'

    MyCheckbox.addEventListener('click', function(e){
        var Check = e.target.checked;
            Sub = document.getElementById('sub');
        if( Check === true){
            Sub.removeAttribute('disabled');
            MyValidateForm.addEventListener('submit', validateForm);
        } else {
            Sub.setAttribute('disabled', true);
            MyValidateForm.removeEventListener('submit', validateForm);
        }
    });

});
// var Iterable = Array.from( i );
//
// var MyForm = document.forms.ValidateForm;
// MyForm.forEach( function (e){
//
//
// });
/*
1. При отправке формы запускается валидация
2. Присваеваем форме переменную
3. В данной переменной находится все инпуты формы
4. Переобразовать переменную с формой в массив
5. Запустить перебор в котором выбрать инпуты у которых тип будет текст или пароль
6. В переборе в котором выбраны инпуты запустить функции валидации
7. Функция
    принимает - елемент формы
    делает - проверку по type на text и password и value на пустое оно или нет.
    возвращает - если поле не пустое то подсвечиваем зеленым, если поле пусоте то подсвечиваем красным
8. Функция
    - получаем оба поля
    - получаем их значения
    - сравниваем оба значения
    - если значения совподают то подсвечиваем
зеленым иначе красным
9. выбрать чекбокс
10. навешиваем обработчик по клику с вторым
значением имя функции
11. По клику получаем значение чекбокса по ивент таргет
12. Если чекбокс checked === true
        навешиваем обработчик по клику
        отключаем дисейбл
    если checked === false
        убираем обработчик remove.addEventListener
        включаем дисейбл
13. если хоть одна форма не проходит валидацию то мы вызываем event.preventDefault()



*/
