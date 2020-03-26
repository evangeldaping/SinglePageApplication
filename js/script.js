// script for loading currencies, images in product.json and html pages
var default_content = "";
var currencyCode = "";

$(document).ready(function(){

	loadCurrencies();
	checkURL();
	$('ul li a').click(function (e){
			checkURL(this.hash);
	});

	//filling in the default content
	default_content = $('#pageContent').html();


	setInterval("checkURL()",250);

});

var lasturl="";


function checkURL(hash)
{
	if(!hash) hash=window.location.hash;

	if(hash != lasturl)
	{
		lasturl=hash;
		// FIX - if we've used the history buttons to return to the homepage,
		// fill the pageContent with the default_content
		if(hash=="")
		$('#pageContent').html(default_content);

		else{
		 if(hash=="#products")
		 	loadProducts();
		 else
		   loadPage(hash);
		}
	}
}

// loads contents of html pages
function loadPage(url)
{
	url=url.replace('#page','');

	$('#loading').css('visibility','visible');

	$.ajax({
		type: "POST",
		url: "load_page.php",
		data: 'page=' + url,
		dataType: "html",
		success: function(msg){

			if(parseInt(msg)!=0)
			{
				$('#pageContent').html(msg);
				$('#loading').css('visibility','hidden');
			}
		}

	});

}

// loads contents of products.json
function loadProducts() {
  $('#loading').css('visibility','visible');
  var jsonURL = "products.json";
  $.getJSON(jsonURL, function (json)
  {
	var imgList= "<ul class=\"products\">";
	$.each(json.products, function (i, product) {



		imgList += '<li id="productImage" style=\" background-color: #000033; border-radius: 15px 15px 15px 15px; height: 175px;\"><a href= #page' + product.price + ' \ onclick="sessionStorage.setItem(\'basePrice\', \'' + this.price + '\')"> <img src = "' + product.imgPath + '"> <h3 style=\"color: white; text-align: center;\">' + product.name + '</br>' +'</h3></a>' 
		+ '<p id = "' + this.id + '" style=\"padding-top: 10px;\">' + this.price + '</p></li>';
	});
	
	imgList+='</ul>'
   $('#pageContent').html(imgList);
   $('#loading').css('visibility','hidden');
   refreshPrice();
  
  });
}

// end of script for loading currencies, images in products.json and html pages

//-------------------------------------------------------------------------------------------------------

// script for loading currencies

function loadCurrencies() {

	//loading img visible
	$('#loading').css('visibility','visible');

	//read the currencyConversion.json
	var jsonURL = "currencyConversion.json";

	var mycurrencyList = "";
	$.getJSON(jsonURL,function(json){
		$.each(json.currencies, function(i, currency){
			mycurrencyList += '<option value = "'+currency.code+'" selected>'+currency.name+'</option>';
		});

		$('#currencylist').html(mycurrencyList);

		//make loading img invisible
		$('#loading').css('visibility','hidden');
		
		$('#currencylist').trigger("change");

	});

	$('#currencylist').change(function(){
		//get the selection //code: SGD (name:Singapore Dollars)
		currencyCode = $(this).children("option:selected").val();

		//set it in cookie
		setCookies(currencyCode);	
	});	
}	

// end of script for loading currencies

//-------------------------------------------------------------------------------------------------------

// script for setting cookie

function setCookies(currencyCode){

	//CC SGD
	//CR 1.00
	//read JSON file for Curencies
	var jsonURL = "currencyConversion.json";

	//loop through each currency and
	//currencyCode mathches inputparam currencyCode
	//get the conversion rate.

	$.getJSON(jsonURL, function(json){
		$.each(json.currencies, function(i, currency){
			if (currencyCode === currency.code) {
				setCookie("CC", currency.country);
				setCookie("CR", currency.conversion);
				refreshPrice();
			}
		});
	});
}

function setCookie(name, value) {
	//Form a cookie string
	var date = new Date();
	date.setTime(date.getTime() + (1*24*60*60*1000));
	var expires = "expires" + date.toGMTString();

	var myCookie = name + "=" +value+ ";" + expires + "; path = /";
	document.cookie = myCookie;
}

// end of script for setting cookie

//-------------------------------------------------------------------------------------------------------

// script for refreshing the price

function refreshPrice() {
	hash = window.location.hash;
	var basePrice;
	var newPrice;

	var exchangeRate = readCookie('CR'); // read the conversion rate from cookie

	if (hash == "#products") {
		var jsonURL = "products.json";
		$.getJSON(jsonURL, function(json) {
			$.each(json.products, function() {
				basePrice = this.price;
				newPrice = basePrice * exchangeRate; // calculate the new price
				$('#' + this.id).html(currencyCode + ' ' + newPrice.toFixed(1)); // refresh price tag
			})			
		})
	} 
	// else {
	// 			basePrice = sessionStorage.getTime('basePrice');
	// 			newPrice = basePrice * exchangeRate;
	// 			$('#' + this.id).html(currencyCode + ' ' + newPrice);
	// 		}
}

// end of script for refreshing the price

//-------------------------------------------------------------------------------------------------------

//script for reading the cookie

function readCookie(conversionRate) {
	var allcookies = document.cookie;

	var name = ""; value = "";

	//get all the cookies pairs in an array
	cookiearray = allcookies.split(';');

	//now take key value pairs out of this array
	for (var i = 0; i < cookiearray.length; i++) {
		var cookieItem = cookiearray[i];

		name = cookieItem.split('=')[0].trim();
		//unescape to characters
		value = unescape(cookieItem.split('=')[1]);

		if (name === conversionRate) {
			return value;
		}
	}
}

// end of script for reading the cookie

//-------------------------------------------------------------------------------------------------------

// script for tooltip
  $( function() {
	$( document ).tooltip();
  } );
// end of script for tooltip

//-------------------------------------------------------------------------------------------------------

// script that allow only numbers in price text box
function isNumberKey(evt)
  {
	 var charCode = (evt.which) ? evt.which : event.keyCode
	 if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;

	 return true;
  }
// end of script that allow only numbers in price text box

//-------------------------------------------------------------------------------------------------------

// script for loading page when clicking the button and making the background color of it to green
$(function(){
   $("#tabs a").click(function(){
	   $("#tabs li").removeClass("on");
	   $(this).parent("li").addClass("on");
       var page = this.hash.substr(1);
        $.get(page+".php",function(gothtml){
            $("#pageContent").html(gothtml);
        });
   }); 
});        
// script for loading page when clicking the button and making the background color of it to green	

//-------------------------------------------------------------------------------------------------------

// script for page effects
  $( function() {
	// run the currently selected effect
	function runEffect() {
	  // get effect type from
	  var selectedEffect = $( "#effectTypes" ).val();

	  // Most effect types need no options passed by default
	  var options = {};
	  // some effects have required parameters
	  if ( selectedEffect === "scale" ) {
		options = { percent: 50 };
	  } else if ( selectedEffect === "size" ) {
		options = { to: { width: 200, height: 60 } };
	  }

	  // Run the effect
	  $( "#pageContent" ).hide( selectedEffect, options, 2000, callback );
	};

	// Callback function to bring a hidden box back
	function callback() {
	  setTimeout(function() {
		$( "#pageContent" ).removeAttr( "style" ).hide().fadeIn();
	  }, 100 );
	};

	// Set effect from select menu value
	$( "#tabs a" ).on( "click", function() {
	  runEffect();
	});
  } );
 // end of script for page effects

//-------------------------------------------------------------------------------------------------------
	
// script for container box
 $(function() {

	// for page effects menu
	$("#toggle").click(function() {
	   ($("#effects").dialog("isOpen") == false) ? $("#effects").dialog("open") : $("").dialog("close") ;
	});
	$("#effects").dialog({autoOpen: false});

 });
// end of script for container box