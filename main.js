$(document).ready(function() {
    var table = $('#example').DataTable();
    $('#example thead th').each( function () {
        var title = $('#example thead th').eq( $(this).index() ).text();
        $(this).html( '<input type="text" placeholder='+title+' />' );
    } ); 
    // Apply the search
    table.columns().every( function () {
        var that = this;
        $( 'input', this.header() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        });
         $('input', table.columns().header()).on('click', function(e) {
        e.stopPropagation();
    });
     $('input', table.columns().header()).on('keypress', function(e) {
         var key = e.which;
         if(key == 13)  // the enter key code
            {
             e.stopPropagation();
            }
        });
    });
});
