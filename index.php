<!DOCTYPE HTMl>
<html lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <meta name="description" 
	    	  content="This is Index Page where it contains the main content page where all the contents of every pages to be displayed one at a time inside it once corresponding button for each page is click without refreshing the page.
	    		
	    	  And also a select tag of currencies for converting price and a dropdown menu in button Page1 named Effects is included just for general animation to all pages.">

		<title>A simple AJAX website with jQuery</title>

		<link rel="stylesheet" type="text/css" href="css/demo.css" />
		<link rel="stylesheet" type="text/css" href="css/menu.css">
		<link rel="stylesheet" href="css/jquery-ui.css">
		
	    
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/function.js"></script>	    
	    <script type="text/javascript" src="js/jquery-3.4.0.min.js"></script>
		<script type="text/javascript" src = "js/jquery-1.10.2.js"></script>
		<script type="text/javascript" src="js/jquery-ui.min.js"></script>
		<script src="js/jquery-ui.js"></script>
		<script src="js/script.js"></script>

		<style type="text/css">
			#productImage a:hover{
				opacity: 0.8;
				color: orange;
			}
		</style>

	</head>

	<body>
		<div id="rounded">

			<script type="text/javascript">alert('welcome abc, you are now logged in!')</script>

			<img src="img/top_bg.gif" alt="top" />

			<div id="main" class="container">

				<h1>A simple AJAX driven jQuery website</h1>
				
				<marquee><h2>Because simpler is better</h2></marquee>		

				<ul id="tabs">
					<ul id="main-menu">				
						<li class="parent">
							<a href="#page1">Page 1</a>
							<ul class="sub-menu">	
								<li style="width: 80px; cursor: pointer;"><a id = "toggle">Effects</a></li>
							</ul>
						</li>				
					</ul>
	
					<li><a href="#page2">Page 2</a></li>
					<li><a href="#page3">Page 3</a></li>
					<li><a href="#page4">Page 4</a></li>
					<li><a href="#products">Products</a></li>
				
					<li><img id="loading" src="img/ajax_load.gif" alt="loading" /></li>              
				</ul>

				<select id="currencylist" style="cursor: pointer;" title="Products Country Currency"><!-- this is where the loadCurrencies() be displayed --></select>		
				

				<div class="clear"> </div>

				<div id="dvProdList"> </div>					
				
				<div id="pageContent" class="ui-widget-content ui-corner-all">
					<div style="margin-left:50px; margin-right: 180px;">
						Welcome to the main content page for The Rich Internet Application Case Study

					<br><br>

					<a onclick="alert('No page to be displayed at the meantime');" target="_blank" title="ABC Learning Center">
						<div style="cursor: pointer; margin-left:150px; background-color:#F7F7F7;">
							<img src="img/ABClogo.png" width="300" height="250" align="center">
						</div>
					</a>

					<br>
					
						Check it out. Have a nice stay!
					</div>
				</div>
			</div>


			<div class="clear"></div>

			<img src="img/bottom_bg.gif" alt="bottom" />
		</div>

		<a style="margin:0 auto; color: white; font-size: 20px; text-decoration:none;" ><p>Single Page Application</p></a>


		<div id = "effects" style="text-align: left;" title="Effects">
			<h3 style="background-color:#123456; color: white;">Page Effects</h3>

			<br>
		    
		    <div>
		   		<select name="effects" id="effectTypes">
					<option value="blind">Blind                </option>
					<option value="bounce">Bounce              </option>
					<option value="clip" selected>Clip         </option>
					<option value="drop">Drop                  </option>
					<option value="explode">Explode            </option>
					<option value="fade">Fade                  </option>
					<option value="fold">Fold                  </option>
					<option value="highlight">Highlight        </option>
					<option value="puff" >Puff                 </option>
					<option value="pulsate">Pulsate            </option>
					<option value="scale">Scale                </option>
					<option value="shake">Shake                </option>
					<option value="size">Size                  </option>
					<option value="slide">Slide                </option>
				</select>
		    </div>	
		</div>    
	</body>
</html>