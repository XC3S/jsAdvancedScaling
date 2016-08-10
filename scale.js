(function($){
	$(document).ready(processScaling);
	$(window).resize(processScaling);

	function processScaling(){
		/**
		 * new attribute aspect-radio
		 * calutaes the height based on the width of a element
		 */

		$("[aspect-radio]").each(function(){
			var $e = $(this);
			var $r = parseFloat($e.attr("aspect-radio"));
			$e.height($e.width() / $r + "px");
		});

		/**
		 * set the size and the possition of a iframe based on 4points relative to the parent
		 */
		$("[x1][x2][y1][y2]").each(function(){
		
		}); 

		/*
		 * scales the iframe size to the parent while keeping the resulution of the frame 
		 */

		$("[snap-frame][width]").each(function(){
			var $e = $(this);
			var $p = $e.parent();

			var scale = $p.width() / $e.attr("width");

			$e.css({
				'-webkit-transform' : 'scale(' + scale + ')',
				'-moz-transform'    : 'scale(' + scale + ')',
				'-ms-transform'     : 'scale(' + scale + ')',
				'-o-transform'      : 'scale(' + scale + ')',
				'transform'         : 'scale(' + scale + ')'
			});    
		});		


		/* ideas

			same-height-as="ID"
			same-width-as="ID"

		*/ 
	}


})(jQuery);