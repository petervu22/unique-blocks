<--!
<script type="text/javascript">
jQuery(function($) {
    function narrowScreen() {
            $("[id*='block-quicklinks']").insertAfter("[id*='hero']");

}
    function wideScreen() {
            $("[id*='block-quicklinks']").insertAfter('#block-globalcustomcss');
    }

    $(document).ready(function() {
        w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        var targetWidth = 1025;
        if (w >= targetWidth) {
            wideScreen();
        } else {
            narrowScreen();
        }
    });

    $(window).resize(function() {
        if ($(this).width() < 1025) {
            narrowScreen();
        } else {
            wideScreen();
        }

    });
});
</script>