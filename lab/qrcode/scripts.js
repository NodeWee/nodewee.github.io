
var isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]',

	guiValuePairs = [
		["size", "px"],
		["minversion", ""],
		["quiet", "modules"],
		["radius", "%"],
		["fontsize", "%"],
		["imagesize", "%"]
	],

	updateGui = function () {

		for (var idx in guiValuePairs) {

			var pair = guiValuePairs[idx],
				$label = $('label[for="' + pair[0] + '"]');

			$label.text($label.text().replace(/:.*/, ': ' + $('#' + pair[0]).val() + pair[1]));
		}
	},

	updateQrCode = function () {

		var options = {
				render: $("#render").val(),
				ecLevel: $("#eclevel").val(),
				minVersion: parseInt($("#minversion").val(), 10),
				color: $("#color").val(),
				bgColor: $("#bg-color").val(),
				text: utf16to8($("#text").val()),
				size: parseInt($("#size").val(), 10),
				radius: parseInt($("#radius").val(), 10) * 0.01,
				quiet: parseInt($("#quiet").val(), 10),

				mode: parseInt($("#mode").val(), 10),

				label: $("#label").val(),
				labelsize: parseInt($("#fontsize").val(), 10) * 0.01,
				fontname: $("#font").val(),
				fontcolor: $("#fontcolor").val(),

				image: $("#img-buffer")[0],
				imagesize: parseInt($("#imagesize").val(), 10) * 0.01
			};

		$("#container").empty().qrcode(options);
	},

	update = function () {

		updateGui();
		updateQrCode();
	},

	onImageInput = function () {

		var input = $("#image")[0];

		if (input.files && input.files[0]) {

			var reader = new FileReader();

			reader.onload = function (event) {
				$("#img-buffer").attr("src", event.target.result);
				$("#mode").val("4");
				setTimeout(update, 250);
			};
			reader.readAsDataURL(input.files[0]);
		}
	},

	download = function (event) {

		var data = $("#container canvas")[0].toDataURL('image/png');
		$("#download").attr("href", data);
	};


$(function () {

	if (isOpera) {
		$('html').addClass('opera');
		$('#radius').prop('disabled', true);
	}

	$("#download").on("click", download);
	$("#image").on('change', onImageInput);
	$("input, textarea, select").on("input change", update);
	$(window).load(update);
	update();
});

function utf16to8(str) {    
     var out, i, len, c;    
     out = "";    
     len = str.length;    
     for(i = 0; i < len; i++) {    
     c = str.charCodeAt(i);    
     if ((c >= 0x0001) && (c <= 0x007F)) {    
         out += str.charAt(i);    
     } else if (c > 0x07FF) {    
         out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));    
         out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));    
         out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));    
     } else {    
         out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));    
         out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));    
     }    
     }    
     return out;    
 };