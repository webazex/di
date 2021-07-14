$(document).ready(function(){
	
	function selectCategories(nominateId) {
		let content = '';
		switch(nominateId){
			case "0": $('#nomination_categories').html('<p class="red-alert">Не выбрана номинация</p>'); break;
			case "4": case "14": case "43": case "45": case "50": case "291": case "310": case "292": case "35": case "43": case "119": case "150":
				case "161": case "175": case "179": case "177": case "187": case "163": case "157": case "159": case "185": case "181": case "252":
			case "274": case "277": case "279": case "266": case "281": case "236": case "234": case "9":
				$('#nomination_categories').html('<p class="info-alert no-categories">Для данной номинации не предусмотрены категории</p>'); break;

			case "246": case "243": case "249": case "254": case "268": case "260": case "257": case"263": case "271":
				var categories = ['<option value="001"><div class="categories-item">юниоры</div></option>', '<option value="002"><div class="categories-item">мастера</div></option>', '<option value="003"><div class="categories-item">студенты</div></option>'];
				$.each(categories, function (index, value) {
					content += value;
				});
				var categoriesList ='<select class="categories-list">'+content+'</select>';
				$('#nomination_categories').html(categoriesList);
				break;
			case "6": case "11": case "1": case "18": case "21": case "24": case "104": case"283":
				var categories = ['<option value="011"><div class="categories-item">студенты</div></option>', '<option value="012"><div class="categories-item">юниоры</div></option>'];
				$.each(categories, function (index, value) {
					content += value;
				});
				var categoriesList ='<select class="categories-list">'+content+'</select>';
				$('#nomination_categories').html(categoriesList);
				break;
			case "59": case "65": case "61": case "57": case "305": case "306": case "16":
				var categories = ['<option value="021"><div class="categories-item">студенты</div></option>'];
				$.each(categories, function (index, value) {
					content += value;
				});
				var categoriesList ='<select class="categories-list">'+content+'</select>';
				$('#nomination_categories').html(categoriesList);
				break;
			case "293": case "40": case "52": case "47": case "304":
				var categories = ['<option value="031"><div class="categories-item">юниоры</div></option>', '<option value="032"><div class="categories-item">мастера</div></option>', '<option value="033"><div class="categories-item">тренера</div></option>'];
				$.each(categories, function (index, value) {
					content += value;
				});
				var categoriesList ='<select class="categories-list">'+content+'</select>';
				$('#nomination_categories').html(categoriesList);
				break;
			case "27": case "31": case "63":
				var categories = ['<option value="041"><div class="categories-item">студенты</div></option>', '<option value="042"><div class="categories-item">юниоры</div></option>', '<option value="043"><div class="categories-item">мастера</div></option>', '<option value="043"><div class="categories-item">тренера</div></option>'];
				$.each(categories, function (index, value) {
					content += value;
				});
				var categoriesList ='<select class="categories-list">'+content+'</select>';
				$('#nomination_categories').html(categoriesList);
				break;
			case "229":
				var categories = ['<option value="051"><div class="categories-item">юниоры</div></option>', '<option value="052"><div class="categories-item">мастера</div></option>', '<option value="053"><div class="categories-item">профи</div></option>', '<option value="054"><div class="categories-item">эксперты</div></option>'];
				$.each(categories, function (index, value) {
					content += value;
				});
				var categoriesList ='<select class="categories-list">'+content+'</select>';
				$('#nomination_categories').html(categoriesList);
				break;
			case "152": case "121": case "165": case "170": case "183": case "94": case "135": case "70": case "145": case"85":
				var categories = ['<option value="061"><div class="categories-item">студенты</div></option>', '<option value="062"><div class="categories-item">юниоры</div></option>', '<option value="063"><div class="categories-item">мастера</div></option>', '<option value="064"><div class="categories-item">профи</div></option>'];
				$.each(categories, function (index, value) {
					content += value;
				});
				var categoriesList ='<select class="categories-list">'+content+'</select>';
				$('#nomination_categories').html(categoriesList);
				break;
			case "131": case "90":
				var categories = ['<option value="071"><div class="categories-item">профи</div></option>', '<option value="072"><div class="categories-item">юниоры</div></option>', '<option value="073"><div class="categories-item">мастера</div></option>'];
				$.each(categories, function (index, value) {
					content += value;
				});
				var categoriesList ='<select class="categories-list">'+content+'</select>';
				$('#nomination_categories').html(categoriesList);
				break;
			case "37":
				var categories = ['<option value="081"><div class="categories-item">студенты</div></option>', '<option value="082"><div class="categories-item">мастера</div></option>'];
				$.each(categories, function (index, value) {
					content += value;
				});
				var categoriesList ='<select class="categories-list">'+content+'</select>';
				$('#nomination_categories').html(categoriesList);
				break;
			default: $('#nomination_categories').html('<p class="red-alert">Незарегистрированная номинация!</p>');
		}
	}
	//console.log("OnChange");
	$('select#nominations').change(function(){
		var nominateId = $('select#nominations').val();
		selectCategories(nominateId);
	});
	let textareaContent = [];
	$('.reg_form_button').click(function () {
		let category = $('.categories-list option:selected').text();
		let nomination = $("#nominations option:selected").text();
		$('.rezult').append('<div class="list__item"><span class="n">'+nomination+'</span><span class="c">'+category+'</span><img src="q.png" width="10" height="10" class="img"></div>');
		textareaContent.push(nomination +' => '+ category);
		$('#nominates').val(textareaContent);
	});
	$('.rezult').on('click', 'img', function() {
		let c = $(this).siblings('.c').text();
		let n = $(this).siblings('.n').text();
		let t = n+' => '+c;
		let i = $.inArray( t, textareaContent);
		textareaContent[i] = '';
    	$(this).parent().remove();
		$('#nominates').val(textareaContent);
  });
});