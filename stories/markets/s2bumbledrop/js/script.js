/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block











// General Content


    // TABS

    var isDropdownVisible = false;
    $('#news-dropdown').hide();

    function openTab(tabName) {
        if ($(window).width() > 1087) {
            $('.tabcontent').not('#news-dropdown').hide();
            $('.tablinks').not('#news-btn').removeClass('active');
            $('#' + tabName).show();
            $('.tablinks[data-tab="' + tabName + '"]').addClass('active');
        } else {
            $('.tabcontent').hide();
            $('.tablinks').removeClass('active');
            $('#' + tabName).show();
            $('.tablinks[data-tab="' + tabName + '"]').addClass('active');
        }
        // Hide .stories elements
    }

    $('.tablinks').not('#news-btn').click(function() {
        var tabName = $(this).data('tab');
        openTab(tabName);

        // Reset dropdown visibility state
        isDropdownVisible = false;
        $('#news-dropdown').hide();
    });

    $('#news-btn').click(function() {
        if ($(window).width() > 1087) {
            if (isDropdownVisible) {
                $('#news-dropdown').hide();
            } else {
                $('#news-dropdown').show();
            }
            isDropdownVisible = !isDropdownVisible;
        } else {
            openTab('tab2'); // Assuming 'Tab2' is the ID for the news content
        }
    });

    $('#news-dropdown .tablinks').click(function() {
        var tabId = $(this).attr('data-tab');
        $('#news-dropdown .tabcontent').removeClass('active');
        $('#' + tabId).addClass('active');
        $('#news-dropdown').hide();
        isDropdownVisible = false; // Reset the dropdown visibility state
        // Hide .stories elements
        $('.stories').hide();
    });

    $(window).resize(function() {
        if ($(window).width() <= 1152) {
            $('#news-dropdown').hide();
            isDropdownVisible = false;
        }
    });

    // Open Tab1 by default
    openTab('tab1');

    // OVERLAY


    $('#openMenu').click(function() {
        $('.menu').addClass('show');
        $('.overlay').addClass('show');
        $('#openMenu').hide();
        $('#closeMenu').show();
    });

    $('#closeMenu, .overlay').click(function() {
        $('.menu').removeClass('show');
        $('.overlay').removeClass('show');
        $('#closeMenu').hide();
        $('#openMenu').show();
    });

    $('.tablinks').click(function() {
        $('.menu').removeClass('show');
        $('.overlay').removeClass('show');
        $('#closeMenu').hide();
        $('#openMenu').show();
    });

    $('#news-btn-two').click(function(){
        $('.tabcontent').hide();
        $('#tab2').show(); // CHANGE THIS TO UNHIDE STORY OF THE WEEK!!

        $('html, body').scrollTop(0);
    });





    // Overlay


























}); //end document.ready block
