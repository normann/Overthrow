(function( w ){
	if( !"querySelector" in w.document ){
		return;
	}

	var scrolls = w.document.querySelectorAll( ".overthrow-enabled .sidescroll-nextprev" );

	for( var i = 0; i < scrolls.length; i++ ){
		var thisScroll = scrolls[ i ].querySelector( ".overthrow" ),
			nextPrev = w.document.createElement( "div" ),
			handledRecently = false;

		nextPrev.className = "sidescroll-nextprev-links";

		nextPrev.innerHTML = "<a href='#' class='sidescroll-prev'>Previous</a><a href='#' class='sidescroll-next'>Next</a>";

		nextPrev.addEventListener( "click", handleClick, false );
		nextPrev.addEventListener( "touchend", handleClick, false );

		function handleClick( e ){
			e.preventDefault();
			if( !handledRecently ){
				handledRecently = true;
				setTimeout( function(){ handledRecently = false; }, 300 );
				overthrow.toss( thisScroll, { left: ( e.target.className.indexOf( "next" ) > 0 ? "+" : "-" ) + thisScroll.offsetWidth } );
			}
		}

		scrolls[ i ].insertBefore( nextPrev, thisScroll )


	}

}( this ));