//Все элементы с классом test.
$('.test').css('color', 'red');
//Все <h2> с классом test.
$('h2.test').css('color', 'red')
//Все абзацы которые следуют сразу за абзацами.
$('p~p').css('color', 'red')
//Все <li>, которые следуют сразу за <li> с классом www.
$('li.www~li').css('color', 'blue')
//Все <i> внутри <h2>.
$('h2 i').css('color', 'red')
//Все <i> непосредственно внутри <h2>.
$('h2').children('i').css('color', 'red')
/*
    Или
    $('h2>i').css('color', 'red')
 */
//Все <h2> НЕ с классом test.
$('h2').not('.test').css('color', 'red')
//Все заголовки НЕ с классом test.
$(':header').not('.test').css('color', 'red')
//Все заголовки, которые следуют сразу за заголовками.
$(':header ~ :header').css("color", "red")
//Все заголовки с классом test, которые следуют сразу за заголовками с классом test.
$(':header.test ~ :header.test').css("color", "red")