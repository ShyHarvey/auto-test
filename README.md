# Тестовое задание 
Задача для верстальщика (фронта)
Создать компонент "форма обратной связи" 
Предварительно, до начала работ, зафиксировать "прогнозируемое" время на выполнение работы, по результату выполнения, зафиксировать фактически затраченное время.
1. Форма содержит следующие поля: "номер телефона", "имя" и "сообщение"
2. Шаблон заполнения поля "номер телефона" представляется как стандартная маска +7 (999) 999-99-99
3. Номер телефона проходит валидацию при отправки, и приводится к виду +79999999999  - подготовить данные к отправки ajax в формате json 
4. Поля "Имя" и "Сообщение" проверяются на заполнение и валидируются на наличие спец. символов. 
5. Предусмотреть вывод информации об: 
А. Отправка формы успешно/ошибка 
Б. Поле заполнено не верно 
В. Поле заполнено верно 
6. Форма должна выводится на странице в виде модального окна, вызов по кнопке
7. Результат работы формы: вывод файла anyName.json клиенту(пользователю отправившему форму)
