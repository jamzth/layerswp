/**
* Slider Widget JS file
*
* This file contains functions relating to the Slider Widget
 *
 * @package Layers
 * @since Layers 1.0.0
 * Contents
 * 1 - Sortable items
 * 2 - Slide Removal & Additions
 * 3 - Slide Title Update
 * 4 - Curreny Slide Focussing
 *
 * Author: Obox Themes
 * Author URI: http://www.oboxthemes.com/
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

jQuery(document).ready(function($){

	/**
	* 4 - Curreny Slide Focussing
	*/
	$(document).on( 'focus click' , 'ul[id^="slide_list_"] li a.layers-accordion-title', function(e){

		// Set focus slide
		$widget = $(this).closest( '.widget' );
		$li = $(this).parent();

		if( undefined !== $li.data('guid') ){
			$slide_index = $li.index();
			$slide_guid = $li.data('guid');
			layers_set_slide_index( $widget, $slide_index, $slide_guid );
		}
	});

	function layers_set_slide_index( $widget, $slide_index, $slide_guid ){
		if( undefined !== $widget ){
			$widget.find( 'input[data-focus-slide="true"]' ).val( $slide_index );
		}
	}

}); //jQuery