/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block


// Update Notes: Edit This to Display the Most Eye Catching Story When Clicked in News Teaser, The Latest, Regional Markets News


    // NEWS TEASER

    $('.topnewsteaser').click(function(){
       
        window.location.href = "stories/bumbledrop";
       
    });




// The Latest


    $('#thelateststories1').click(function(){

        $('#tab1').hide();

        $('#disneyq3earnings').show();

        $('html, body').scrollTop(0);
    });


    $('#thelateststories2').click(function(){

        $('#tab1').hide();

        $('#bumbledrop').show();

        $('html, body').scrollTop(0);
    });


    $('#thelateststories3').click(function(){

        $('#tab1').hide();

        $('#disneyq3earnings').show();

        $('html, body').scrollTop(0);
    });


    $('#thelateststories4').click(function(){

        $('#tab1').hide();

        $('#disneyq3earnings').show();

        $('html, body').scrollTop(0);
    });



// Top Picks



    $('#toppicksstories1').click(function(){

        $('#tab1').hide();

        $('#bumbledrop').show();

        $('html, body').scrollTop(0);
    });



// Regional Markets News


    // US/North America News


    $('#usnewsstories1').click(function(){

        $('#tab1').hide();

        $('#disneyq3earnings').show();

        $('html, body').scrollTop(0);
    });

    $('#usnewsstories2').click(function(){

        $('#tab1').hide();

        $('#bumbledrop').show();

        $('html, body').scrollTop(0);
    });

    $('#usnewsstories3').click(function(){

        $('#tab1').hide();

        $('#disneyq3earnings').show();

        $('html, body').scrollTop(0);
    });


    // Global Markets

    $('#globalnewsstories1').click(function(){

        $('#tab1').hide();

        $('#disneyq3earnings').show();

        $('html, body').scrollTop(0);
    });

    $('#globalnewsstories2').click(function(){

        $('#tab1').hide();

        $('#disneyq3earnings').show();

        $('html, body').scrollTop(0);
    });

    $('#globalnewsstories3').click(function(){

        $('#tab1').hide();

        $('#disneyq3earnings').show();

        $('html, body').scrollTop(0);
    });








// Update Notes: When you add a story, add it (1) to the NEWS section, (2) to its appropriate subcatagory, (3) to the relevant
// homepage sections, such as The Latest or Regional Markets News


    // STORIES

        // NEWS

    $('#newsstory3').click(function(){

        $('#tab2').hide();

        $('#bumbledrop').show();

        $('html, body').scrollTop(0);
    });

    $('#newsstory2').click(function(){

        $('#tab2').hide();

        $('#disneyq3earnings').show();

        $('html, body').scrollTop(0);
    });

    $('#newsstory1').click(function(){

        $('#tab2').hide();

        $('#spiritmerger').show();

        $('html, body').scrollTop(0);
    });


        // MARKETS


    $('#marketsstory2').click(function(){

        $('#subtab1').hide();

        $('#bumbledrop').show();

        $('html, body').scrollTop(0);
    });

    $('#marketsstory1').click(function(){

        $('#subtab1').hide();

        $('#disneyq3earnings').show();

        $('html, body').scrollTop(0);
    });



        // BUSINESS



        // ECONOMICS


    $('#spiritmerger').hide();

    $('#economicsstory1').click(function(){

        $('#subtab3').hide();

        $('#spiritmerger').show();

        $('html, body').scrollTop(0);
    });















// Tab 1 - Home

   // Subscription Email Collection

    $('.subscribe').click(function(){
         
         var email = $('.emailinput').val();
            if(email) {
               
               $.ajax({
                  url: 'https://script.google.com/macros/s/AKfycbzqEj2dpy_qsRGywNb6w3Q96rBALK7GMvJNkFY5_eVOGfNmUt8XPMaMIv1j7EmA2xx_/exec', // Replace with your Google Apps Script web app URL
                  type: 'POST',
                  data: {
                     email: email
                  },
               success: function(response) {
                  console.log('Email added:', response);
                  $('.emailinput').val('');

                  $('.thankyou').toggle();

               },
               error: function(error) {
                  console.error('Error:', error);
               }
            });

      } else {
         console.log('Please enter an email address.');
      }

    });

    $('.subscribe').click(function(){

    $('.newslettersubscribe').css('height', '700px');

    });




// Tab 2 - News








// Tab 3 - About

    $('#linkedinimg').click(function() {

        window.open('https://www.linkedin.com/in/aidan-williams-5a4976224/', '_blank');

    });







// Tab 4 - Subscribe

    $('.expandable-item').click(function() {
        var $this = $(this);
        if (!$this.hasClass('expanded')) {
            $this.addClass('expanded');

            // Hide down arrow when expanded
            var $arrowDown = $this.find('.arrow .down');
            $arrowDown.hide();
        }
    });

    // Prevent default behavior for anchor links inside .expandable-item
    $('.expandable-item a').click(function(event) {
        event.stopPropagation();
    });


    $('.tabsubscribe').click(function(){
         
         var email = $('.newsletteremailinput').val();
            if(email) {
               
               $.ajax({
                  url: 'https://script.google.com/macros/s/AKfycbzqEj2dpy_qsRGywNb6w3Q96rBALK7GMvJNkFY5_eVOGfNmUt8XPMaMIv1j7EmA2xx_/exec', // Replace with your Google Apps Script web app URL
                  type: 'POST',
                  data: {
                     email: email
                  },
               success: function(response) {
                  console.log('Email added:', response);
                  $('.newsletteremailinput').val('');

                  $('.newsletterthankyou').toggle();

               },
               error: function(error) {
                  console.error('Error:', error);
               }
            });

      } else {
         console.log('Please enter an email address.');

      }

    });

    $('.tabsubscribe').click(function() {

    $('.newslettersubscribe').css('height', '1410px');

    });






    let clickCount = 0;

    $('.expandable-item').click(function() {
        if (clickCount < 3) {
            clickCount++;

            let newHeight;
            if (clickCount === 1) {
                newHeight = '950px';
            } else if (clickCount === 2) {
                newHeight = '1150px';
            } else if (clickCount === 3) {
                newHeight = '1410px';
            }

            $('.newslettersubscribe').css('height', newHeight);
        }
    });


































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
        $('.stories').hide();
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
