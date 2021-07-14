<!DOCTYPE html>
<html>
<head>
    <title>Регистрация на чемпионат</title>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Exo+2:300,400,500,500i,600,600i,700,700i,800&amp;display=swap&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<main>
    <form method="post" name="reg_champ" action="">
        <div class="reg_form_border">
            <div class="reg_form_title">Заявка участника</div><div class="center q">"Открытый отборочный тур XXIII Чемпионата Украины СПУ "«Simply divine»  г. Херсон"</div>


            <div class="part-one">
                <div class="reg_form_line_main_title">Персональная информация</div>

                <div class="reg_form_line">
                    <div class="reg_form_line_input">
                        <input type="text" name="sur_name" value="" placeholder="Фамилия">
                    </div>
                </div>


                <div class="reg_form_line">
                    <div class="reg_form_line_input">
                        <input type="text" name="name" value="" placeholder="Имя">
                    </div>
                </div>


                <div class="reg_form_line">
                    <div class="reg_form_line_input">
                        <input type="text" name="city" value="" placeholder="Город">
                    </div>
                </div>



                <div class="reg_form_line_main_title">Контактная информация</div>

                <div class="reg_form_line">
                    <div class="reg_form_line_input">
                        <input type="text" name="phone" class="reg_phone" onclick="this.selectionStart = 4;this.selectionEnd = 4;" value="" placeholder="Телефон">
                    </div>
                </div>


                <div class="reg_form_line">
                    <div class="reg_form_line_input">
                        <input type="text" name="mail" value="" placeholder="E-mail">
                    </div>
                </div>




                <div class="reg_form_line_main_title">Разное</div>


                <div class="reg_form_line">
                    <div class="reg_form_line_input">
                        <input type="text" name="studycenter" value="" placeholder="Учебный центр, ФИО тренера">
                    </div>
                </div>



                <div class="reg_form_line">
                    <div class="reg_form_line_input" style="margin:0px 0px 0px 20px;">
                        <div class="reg_form_line_sub_title">Вы участвуете в команде?</div>
                        <div class="webazex-row">
                            <div class="webazex-row__item">
                                <input type="radio" name="reg_in_team" id="reg_in_team_1" value="1"><label for="reg_in_team_1" class="label_radio"> &nbsp;&nbsp; </label><label for="reg_in_team_1">Да </label>
                            </div>
                            <div class="webazex-row__item">
                                <input type="radio" name="reg_in_team" id="reg_in_team_0" value="0"><label for="reg_in_team_0" class="label_radio"> &nbsp;&nbsp; </label><label for="reg_in_team_0">Нет </label>
                            </div>

                        </div>




                    </div>
                </div>
            </div>

            <div class="nominate part-two">
                <div class="reg_form_line_main_title">Номинации и категории</div>
                <div class="reg_form_line">
                    <div class="reg_form_line_input">
                        <select class="nominate-select" id="nominations">
                            <option value="0">Номинация</option>
                            <optgroup label="Парикмахерское искусство"
                            ></optgroup>
                            <optgroup label="Мужские мастера">
                                <option value="4">Авангард (ОМС)</option>
                                <option value="6">Авторская мужская салонная прическа</option>
                                <option value="11">Авторская мужская стрижка BARBER EXPERT в стиле FADE</option>
                                <option value="283">Дизайн и оформление бороды</option>
                                <option value="16">Мужская повседневная стрижка и укладка</option>
                                <option value="9">Мужской модный образ. Street style (уличная мода).</option>
                                <option value="1">Техническая мужская прическа на коротких волосах. 2 вида работ: креативная прическа, классическая стрижка и укладка (ОМС)</option>
                                <option value="14">Хайр тату выстриг по тушовке</option>
                            </optgroup>
                            <optgroup label="Женские мастера">
                                <option value="293">Женская коммерческая стрижка на длинных волосах. NEW</option>
                                <option value="43">Женский модный образ. Full Fashion Look </option>
                                <option value="27">Коктейльная прическа с элементами плетения</option>
                                <option value="40">Коммерческая салонная стрижка</option>
                                <option value="18">Модная женская прическа на длинных волосах. 2 вида работ: дневная прическа, модная вечерняя прическа (ОМС)</option>
                                <option value="37">Модная женская укладка «Голливудская волна» NEW </option>
                                <option value="45">Модная женская укладка «Стильный хвост» </option>
                                <option value="50">Окрашивание Expert Blond (чистый блонд)</option>
                                <option value="291">Прическа для HAIR SHOW. Тема «Украинский этно стиль». NEW</option>
                                <option value="310">Прическа для HAIRSHOW. Тема “Украинский этно стиль”. NEW</option>
                                <option value="21">Свадбеная прическа. 2 вида работ: Престиж-прическа для гала вечера, престиж прическа для новобрачной (ОМС).</option>
                                <option value="52">Свадебная прическа NEW</option>
                                <option value="31">Современная салонная прическа Тема «Светская жизнь»</option>
                                <option value="292">Современные текстуры. NEW</option>
                                <option value="47">Стильное окрашивание </option>
                                <option value="24" class="opt-section">
										<span class="opt-title 24">
											Техническая женская прическа на коротких волосах. 2 зачета:
										</span>
                                    <br>
                                    <span class="opt-item 24-1">
											1-й  зачет - Креативная прическа (Ladies Creative Style)
										</span>
                                    <br>
                                    <span class="opt-item 24-2">
											2-й зачет – Вечерняя прическа (LadiesHair By Night) (ОМС).
										</span>
                                </option>
                                <option value="35">Фантазийная прическа с элементами постижерных изделий. Тема свободная</option>
                            </optgroup>
                            <optgroup label="Для студентов">
                                <option value="59">Женская коммерческая стрижка на длинных волосах</option>
                                <option value="63">Коктельная прическа с элементами плетения</option>
                                <option value="304">Коммерческая салонная стрижка</option>
                                <option value="65">Модная женская укладка «Голливудская волна» NEW </option>
                                <option value="61">Свадебная современная прическа</option>
                                <option value="57">Современная салонная прическа Тема «Светская жизнь»</option>
                                <option value="305">Современные текстуры</option>
                                <option value="306">Стильное окрашивание</option>
                            </optgroup>
                            <optgroup label="Ногтевая эстетика">
                                <option value="119">Time Record French</option>
                                <option value="121">Аэрография на ногтях. Тема: «Модный принт»</option>
                                <option value="165">Заочно - 3-D Дизайн на одном типсе</option>
                                <option value="150">Заочно - Mix Media (в коробочках). Тема свободная</option>
                                <option value="161">Заочно - Аэрография в коробочках. Тема «Красота миров»</option>
                                <option value="175">Заочно - Гелевый дизайн на 5 типсах. Тема «Абстракция»</option>
                                <option value="179">Заочно - Дизайн на педикюрных типсах. Тема: «Салонный Стильный педикюр»</option>
                                <option value="177">Заочно - Инкрустация</option>
                                <option value="187">Заочно - Креативный образ. Тема свободная</option>
                                <option value="163">Заочно - Номинация «Декорирование предмета». Тема «Сделано в Украине»</option>
                                <option value="157">Заочно - Постер. Тема «Кадр для Instagram»</option>
                                <option value="159">Заочно - Постер. Тема СВОБОДНАЯ</option>
                                <option value="152">Заочно - Роспись плоской кистью (в коробочках). Тема «Свободная»</option>
                                <option value="170">Заочно - Салонная лепка</option>
                                <option value="185">Заочно - Свадебный образ. Тема «Букет невесты»</option>
                                <option value="181">Заочно - Фантазийное моделирование на манекен – руке. Тема свободная</option>
                                <option value="183">Заочно - Художественная роспись (в коробочках). Тема «Гости из будущего»</option>
                                <option value="94">Идеальный градиент гелями-лаками</option>
                                <option value="135">Моделирование ногтей «Салонный миндаль Glass French», Салонный миндаль «Хрустальный френч»</option>
                                <option value="131">Моделирование ногтей «Современный миндаль» + декоративный френч</option>
                                <option value="70">Салонное моделирование ногтей (любая технология и материал на выбор мастера)</option>
                                <option value="145">Салонное моделирование ногтей без опила #безопила Классический миндаль</option>
                                <option value="90">Современный СТИЛЕТ</option>
                                <option value="104">Создание идеальной поверхности ногтевой пластины soak-off гелями во флаконе</option>
                                <option value="85">Художественная роспись на типсах. Тема «Акварельная графика»</option>
                            </optgroup>
                            <optgroup label="Макияж">
                                <option value="252">Боди-арт</option>
                                <option value="271">Заочно - Постер «Коммерческий макияж»</option>
                                <option value="274">Заочно - Постер «Креативный макияж»</option>
                                <option value="277">Заочно - Фейс-чарт «Коммерческий макияж»</option>
                                <option value="279">Заочно - Фейс-чарт «Креативный макияж»</option>
                                <option value="263">Креативный макияж</option>
                                <option value="257">Макияж «Color Smoky Eyes»</option>
                                <option value="268">Макияж «Elegant age»</option>
                                <option value="260">Макияж «New Look»</option>
                                <option value="254">Макияж «Smoky Eyes» классический</option>
                                <option value="266">Мужской макияж</option>
                                <option value="249">Подиумный макияж</option>
                                <option value="243">Свадебный коммерческий макияж</option>
                                <option value="246">Свадебный креативный макияж</option>
                            </optgroup>
                            <optgroup label="Моделирование бровей">
                                <option value="281">Брови за 30 минут по правилам ОМС</option>
                                <option value="229">Классическое моделирование бровей</option>
                                <option value="236">Ламинирование бровей. Fashion Brow designer</option>
                                <option value="234">Мужское оформление бровей</option>
                            </optgroup>
                        </select>
                    </div>
                </div>



                <div class="reg_form_line">
                    <div class="reg_form_line_input" id="nomination_categories">

                    </div>
                </div>
                <div style="display:none;">
                    <div class="reg_form_line_input" id="nomination_categories_tmp">
                        <select disabled="">
                            <option value="0">Категория</option>
                            <option value="0">Для выбора категории - выберите номинацию</option>
                        </select>
                    </div>
                </div>

                <div class="reg_form_line_sub_title_mini">
                    <span>* Для выбора категории - выберите номинацию</span>
                    <div class="container-content">
                        <div class="container-content__l">
                            <div class="reg_form_line_sub_title">Для выбора, или добавления номинации и категории, нажмите кнопку Выбрать!</div>

                            <div class="reg_form_button">Выбрать</div>
                        </div>
                        <div class="container-content__r">
                            <div class="r__col">
                                <div class="reg_form_line_sub_title">Выбранные Вами номинации:</div>
                                <div class="rezult"></div>
                                <textarea name="nominates" hidden="hidden" id="nominates"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="want_to_button">Зарегистрироваться</button>

            </div>
        </div>
    </form>
</main>
<script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>
<script src="js.js"></script>
</body>
</html>
<?php
$data = array(
    'fname' => $_POST['sur_name'],
    'lname' => $_POST['name'],
    'city' => $_POST['city'],
    'phone' => $_POST['phone'],
    'mail' =>$_POST['mail'],
    'teatch_center' => $_POST['studycenter'],
    'team' => $_POST['reg_in_team'],
    'n_c' => $_POST['nominates']
);
$letter = '<table cellspacing="0" cellpadding="0" border="0" width="600">
		<tr>
			<td height="50px">
				<h2 align="center" color="gold" style="font-size: 20px;">Регистрация на чемпионат</h2>
			</td>
		</tr>
		<tr>
			<td>
				<h2 align="left" color="gold" style="font-size: 20px;">Персональная информация</h2>
			</td>
		</tr>
		<tr>
			<td>Фамилия: </td><td>&nbsp;'.$data['fname'].'</td>
		</tr>
		<tr>
			<td>Имя: </td><td>&nbsp;'.$data['lname'].'</td>
		</tr>
		<tr>
			<td>Город: </td><td>&nbsp;'.$data['city'].'</td>
		</tr>
		<tr>
			<td>
				<h2 align="left" color="gold" style="font-size: 20px;">Контактная информация</h2>
			</td>
		</tr>
		<tr>
			<td>Телефон: </td><td>&nbsp;'.$data['phone'].'</td>
		</tr>
		<tr>
			<td>Почта: </td><td>&nbsp;'.$data['mail'].'</td>
		</tr>
		<tr>
			<td>
				<h2 align="left" color="gold" style="font-size: 20px;">Разное</h2>
			</td>
		</tr>
		<tr>
			<td>Учебный центр и ФИО тренера: </td><td>&nbsp;'.$data['teatch_center'].'</td>
		</tr>
		<tr>
			<td>Командный состав: </td><td>&nbsp;'.$data['team'].'</td>
		</tr>
		<tr>
			<td>
				<h2 align="left" color="gold" style="font-size: 20px;">Номинации и категории</h2>
			</td>
		</tr>
		<tr>
			<td>Номинации и категории: </td><td>&nbsp;'.$data['teatch_center'].'</td>
		</tr>
	</table>';
$from = "support@webazex.com";


$message = "PHP mail works just fine";

$headers = "From:" . $from;
if(mail("info@simply-divine.com.ua", "Регистрация участника", $letter)) {
    echo "okok";
}else{
    echo("false");
};
$_POST = array();
?>