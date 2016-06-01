jQuery(function($) {
    $('nav#nav a.action').each(function() {
        var $navItem = $(this);
        var $target = $($navItem.attr('data-target')).find('.content-group');
        $navItem.click(function() {
            $target.collapse('show');
        });
    });

    $('.content-group').on('show.bs.collapse', function() {
        var $action = $(this);
        $action.find('[role="requestTrigger"].collapsed').removeClass('collapsed');
        $action.find('[role="request"]').css('height', 'auto').addClass('in');
    });

    $('.content-group [role="request"]').on('show.bs.collapse', function(event) {
        event.stopPropagation();
    });
});
