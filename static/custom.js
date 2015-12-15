/**
 * Created by syariefa on 12/6/15.
 */


$(document).ready(function(){

    var offset = 0;
    var top = right = 10;
    var lebarBrowser = $(window).width();
    var mobile_max = 768;
    var tablet_max = 991;
    var samping_komputer = $('div#samping_komputer');
    var samping_tablet = $('div#samping_tablet');

    var menuSamping_tablet = $('#menu_samping_tablet');
    var samping_tablet_width = samping_tablet.width();

    var menuSamping_komputer = $('#menu_samping_komputer');
    var samping_komputer_width = samping_komputer.width();

    //menuSamping_tablet.hide();
    //menuSamping_komputer.hide();

    /*$('div#menu_samping_komputer').sticky(
        {
            context: '#konten'
        }
    );*/

    $('div#samping_tablet a.item').popup();
    $('div.ui.card').popup({
        inline: true
    });
    $('a.tentang').click(function(e){
        e.preventDefault();
        $('div#modal-aplikasi').modal('setting', 'closable', false).modal('show');
    });
    $('a.stkk').click(function(e){
        e.preventDefault();
        $('div#modal-stkk').modal('setting', 'closable', false).modal('show');
    });

    if(lebarBrowser < mobile_max)
    {
        menuSamping_tablet.hide();
        menuSamping_komputer.show();
        samping_komputer.addClass('stackable')
            .removeClass('left vertical pointing').css('height', '');
        $('body').css('max-height', '320px');
    }

    else if(lebarBrowser >= mobile_max && lebarBrowser <= tablet_max)
    {
        menuSamping_tablet.show();
        menuSamping_komputer.hide();
    }

    else if(lebarBrowser > tablet_max)
    {
        menuSamping_komputer.show();
        samping_komputer.removeClass('stackable')
            .addClass('left vertical pointing').css('height', '100%');
        menuSamping_tablet.hide();
    }

    if(menuSamping_tablet.is(':visible'))
    {
        $('div#konten').css('margin-left', samping_tablet_width+offset+'px')
                        .css('margin-top', top+'px').css('margin-right', right+'px');
    }

    else if(menuSamping_komputer.is(':visible'))
    {
        if(samping_komputer.hasClass('stackable'))
        {
            top = samping_komputer.height() + 12;
        }

        $('div#konten').css('margin-left', samping_komputer_width+offset+'px')
                        .css('margin-top', top+'px').css('margin-right', right+'px');
    }

    $(window).resize(function(){

        var lebar = $(window).width();

        if(lebar < mobile_max)
        {
            menuSamping_tablet.hide();
            menuSamping_komputer.show();
            $('div#samping_komputer').addClass('stackable')
                .removeClass('left vertical pointing').css('height', '');
            $('body').css('max-height', '320px');
        }

        else if(lebar >= mobile_max && lebar <= tablet_max)
        {
            menuSamping_tablet.show();
            menuSamping_komputer.hide();
            $('body').css('max-height', '100%');
        }

        else if(lebar > tablet_max)
        {
            menuSamping_komputer.show();
            $('div#samping_komputer').removeClass('stackable')
                .addClass('left vertical pointing').css('height', '100%');
            menuSamping_tablet.hide();
            $('body').css('max-height', '100%');
        }

        if(menuSamping_tablet.is(':visible'))
        {
            var top = 10;
            $('div#konten').css('margin-left', samping_tablet_width+offset+'px')
                            .css('margin-top', top+'px').css('margin-right', right+'px');
        }

        if(menuSamping_komputer.is(':visible'))
        {
            var samping_komputer = $('div#samping_komputer');

            if(samping_komputer.hasClass('stackable'))
            {
                top = samping_komputer.height();
            }

            else
            {
                top = 10;
            }

            $('div#konten').css('margin-left', samping_komputer_width+offset+'px')
                            .css('margin-top', top+'px').css('margin-right', right+'px');
        }
    });

});