export default function renderPage() {
    const page = document.querySelector('.page');
    const promo = document.createElement('div');
    promo.classList = 'promo';

    promo.innerHTML = `
        <div class="promo__information">
            <div class="promo__title">Попробуй методику интервального повторения с нашим приложением!</div>
            <div class="promo__description">
                <p>Для заучивания слов все новые слова, которые учит пользователь сохраняются как userWords.</p>
                <pre>
Объект userWord выглядит слудующим образом:
    wordId: word.id,
    word: {
        'difficulty': 'normal',
            'optional': {
              status: 'new',
              lastRepeatDate: currentDate,
              difficultyCoef: 0,
              repeatCount: 0,
              daysLeftToRepeat: 0,
              errorsCount: 0,
            }
    }
                </pre>
                <p>
                    <em>difficulty</em> - сложность слова. Существует 3 уровня сложности: 
                    легкие слова - easy, слова средней сложности - normal, сложные слова - hard. 
                    При создании слова устанавливается начальная сложность, но уже в процессе изучения сложность перезаписывается новым значением, 
                    которое установит пользователь в процессе изучения слова.
                </p>
                <p>
                    status - отображает  на какой стадии изучения находится слово. Существует 4 вида статусов: 
                    new - новое слово(еще не изученное на тренировке), repeat - изученное слово, которое нужно повторять, 
                    delete - даленное слово(данный статус пустанавливается, когда пользователь удалит слово из изучения в процессе тренировки), 
                    tricky - "приставучее слово" - слово повышенной сложности, которое пользователь никак не может запомнить. 
                    Данный статус устанавливается, если пользователь во время тренировки отмеити слово как "сложное", нажав соответствующую кнопку. 
                    Или если уровень сложности слова hard и  пользователь 5 раз допускает ошибки при написании слова.
                </p>
                <p>lastRepeatDate - дата, когда слово повторяли в последний раз.</p>
                <p>
                    difficultyCoef - коэффициент сложности или коэффициет частоты повторения. 
                    Представляет собой фиксированное значение. Данный коэффициент зависит от сложности слова. 
                    Для легких слов - коэффициент равен 3, для слов средней сложности - 2, для сложных слов - 1.
                </p>
                <p>repeatCount - счетчик, отвечающий за количество повторений слова. Увеличивается с каждым повторением слова на 1.</p>
                <p>
                    daysLeftToRepeat - указывает сколько дней осталось до повторения слова. 
                    Данный параметр равен произведению коэффициента сложности (коэффициета частоты повторения) и количеству повторений слова. 
                    Таким образом, плавно увеличивается время повторения слова. 
                    Например, слово "house" имеет среднюю сложность, коэффициент сложности 2. 
                    Когда слово повторяется первый раз? Коэффициент сложности 2 умножается на счетчик количества повторений 1. 
                    Получается, что первый раз слово нужно будет повторить через 2 дня после его изучения. 
                    Когда слово повторяется второй раз? Коэффициент сложности 2 умножается на счетчик количества повторений 2. 
                    Таким образом второй раз слово нужно повторить через 4 дня после первого повторения и так далее.</p>
                <p>
                    errorsCount - вспомогательное поле. Оно используется для подсчета количества ошибок. 
                    Если количество ошибок будет больше либо равно 5, то слово поменяет статус на "tricky".
                </p>
                <p>
                    В процессе изучения слова пользователь, введя слова верно, может указать его сложность, нажав одну из четырех кнопок: 
                    снова, легко, нормально, сложно.
                    Легко, нормально и сложно устанавливают сложность слова в соответствии с нажванием кнопки.
                    Нажатие кнопки "снова" приводит к повторному появлению слова на данной тренировке. Сложность слова устанавливается как "hard". 
                    Повторные слова текущей тренировки не влияют на общее количество карточек в день.
                </p>
                <p>
                    Если в процессе изучения слова, пользователь не ввел слово, а нажал кнопку "Показать ответ", то 
                    сложность слова устанавливается как "hard".</p>
                <p>
                    Для слов, сложность которых во время тренировки устанавливается как "hard", 
                    также меняется поле errorsCount(увеличивается на 1). 
                </p>
                <p>
                    Параметр daysLeftToRepeat каждый день уменьшается на 1 для всех слов со статусом repeat. 
                    Таким образом происходит обновление данных о словах.
                    Для тренировки отбираются новые слова и слова, которые нужно повторить. 
                    Новые слова предварительно создаются со статусом new, 
                    а слова для повторения находятся по статусу и значению поля daysLeftToRepeat. 
                    Cтатус слова для повторения может быть repeat или hard, daysLeftToRepeat 0.
                </p>
            </div>
        </div>
        <div class="promo__media">
            <div class="promo__video">тут видос, видосики</div>
        </div>`
    
    page.append(promo);

    // const description = document.createElement('p');
    // description.textContent = 'Для заучивания слов все новые слова, которые учит пользователь сохраняются как userWords.';

    // const 

    // const promoDescription = document.querySelector('.promo__description');
    // promoDescription.append(description);
}