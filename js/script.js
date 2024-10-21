/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block


   // NEWS TEASER
   
   $('.topnewsteaser').click(function(){
      
        window.location.href = "/stories/business/southwestdeal";
      
   });
   
   // THE LATEST

   
   $('#thelateststories1').click(function(){
      
        window.location.href = "/stories/markets/hangsengdrop";
      
   });
   
   $('#thelateststories2').click(function(){
      
        window.location.href = "/stories/markets/eurozonerise";
      
   });
   
   $('#thelateststories3').click(function(){
      
        window.location.href = "/stories/business/southwestdeal";
      
   });

   $('#thelateststories4').click(function(){
      
        window.location.href = "/stories/markets/dicksearnings";
      
   });
   
   // TOP PICKS
   
   $('#toppicksstories1').click(function(){
      
        window.location.href = "/stories/business/motelsixbuy";
      
   });
   
   // US / NORTH AMERICA NEWS
   


   $('#usnewsstories1').click(function(){
      
        window.location.href = "/stories/markets/disneyq3earnings";
      
   });

   $('#usnewsstories2').click(function(){
      
        window.location.href = "/stories/markets/trumpmedia";
      
   });

   $('#usnewsstories3').click(function(){
      
        window.location.href = "/stories/markets/dicksearnings";
      
   });

   $('#globalnewsstories1').click(function(){
      
        window.location.href = "/stories/markets/chinaq2slump/";
      
   });

   $('#globalnewsstories2').click(function(){
      
        window.location.href = "/stories/markets/eurozonerise/";
      
   });

   $('#globalnewsstories3').click(function(){
      
        window.location.href = "/stories/markets/hangsengdrop";
      
   });


   // STORIES

      // News

    $('#newsstory13').click(function(){

        window.location.href = '/stories/business/southwestdeal/';
         
    });

    $('#newsstory12').click(function(){

        window.location.href = '/stories/markets/hangsengdrop/';
         
    });
   
    $('#newsstory11').click(function(){

        window.location.href = '/stories/markets/eurozonerise/';
         
    });

    $('#newsstory10').click(function(){

        window.location.href = '/stories/business/motelsixbuy/';
         
    });
   
    $('#newsstory9').click(function(){

        window.location.href = '/stories/markets/chinaq2slump/';
         
    });

    $('#newsstory8').click(function(){

        window.location.href = '/stories/markets/trumpmedia/';
         
    });
   
    $('#newsstory7').click(function(){

        window.location.href = '/stories/markets/dicksearnings/';
         
    });
   
    $('#newsstory6').click(function(){

        window.location.href = '/stories/markets/hangsengrise/';
         
    });

    $('#newsstory5').click(function(){

        window.location.href = '/stories/economics/starmerspeech/';
         
    });

    $('#newsstory4').click(function(){

        window.location.href = '/stories/markets/sterlingstrengthen/';
         
    });

    $('#newsstory3').click(function(){

        window.location.href = '/stories/markets/s2bumbledrop/';
         
    });

    $('#newsstory2').click(function(){

        window.location.href = '/stories/markets/disneyq3earnings/';
       
    });

    $('#newsstory1').click(function(){

        window.location.href = '/stories/business/spiritmerger/';
       
    });


   
      // Markets

    $('#marketsstory9').click(function(){

        window.location.href = '/stories/markets/hangsengdrop/';
      
    });

    $('#marketsstory8').click(function(){

        window.location.href = '/stories/markets/eurozonerise/';
      
    });
   
    $('#marketsstory7').click(function(){

        window.location.href = '/stories/markets/chinaq2slump/';
      
    });

    $('#marketsstory6').click(function(){

        window.location.href = '/stories/markets/trumpmedia/';
      
    });
   
    $('#marketsstory6').click(function(){

        window.location.href = '/stories/markets/trumpmedia/';
      
    });
   
    $('#marketsstory5').click(function(){

        window.location.href = '/stories/markets/dicksearnings/';
      
    });

    $('#marketsstory4').click(function(){

        window.location.href = '/stories/markets/hangsengrise/';
      
    });

    $('#marketsstory3').click(function(){

        window.location.href = '/stories/markets/sterlingstrengthen/';
      
    });

    $('#marketsstory2').click(function(){

        window.location.href = '/stories/markets/s2bumbledrop/';
      
    });

    $('#marketsstory1').click(function(){

        window.location.href = '/stories/markets/disneyq3earnings/';
       
    });

   

      // Business

    $('#businessstory3').click(function(){

        window.location.href = '/stories/business/southwestdeal/';
       
    });

    $('#businessstory2').click(function(){

        window.location.href = '/stories/business/motelsixbuy/';
       
    });

    $('#businessstory1').click(function(){

        window.location.href = '/stories/business/spiritmerger/';
       
    });

   
      // Economics

    $('#economicsstory1').click(function(){

        window.location.href = '/stories/economics/starmerspeech/';
         
    });


      

   

   

   

   

   
   
   









// General Code (Dont Mess With It)

   // HOME

   

   $('#tab1').click(function(){

      window.location.href = "/";

   });

   

   
   
   

      // NEWS (+ Dropdown Menu)

   $('#tab2').click(function(){
        if ($(window).width() > 1087) {
            $('.dropdown-content').toggle(); // Toggle visibility of #news-dropdown
        } else {
            window.location.href = '/tabs/news/'; // Redirect to the stories/news folder
        }
    });

   $('.dropdown-content').hide();

   function checkWidth() {
        if ($(window).width() < 1087) { 
            $('.dropdown-content').hide(); 
        }
   }

   $(window).resize(function() {
      
        checkWidth();
   });

   

   

   

   


   

      // ABOUT

   $('#tab3').click(function(){

      window.location.href = "/tabs/about/";

   });

   $('#linkedinimg').click(function() {

      window.open('https://www.linkedin.com/in/aidan-williams-5a4976224/', '_blank');

   });

      // SUBSCRIBE

   $('#tab4').click(function(){

      window.location.href = "/tabs/subscribe/";

   });

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

      // MARKETS

   $('#subtab1').click(function(){

      window.location.href = "/subtabs/markets/";

   });

   $('#subtab2').click(function(){

      window.location.href = "/subtabs/business/";

   });

   $('#subtab3').click(function(){

      window.location.href = "/subtabs/economics/";

   });

   
   
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


   // TABS

    $('#news-btn-two').click(function(){

       window.location.href = "/tabs/news/";

    });

    $('#home-btn-two').click(function(){

       window.location.href = "/";

    });

    $('#about-btn-two').click(function(){

       window.location.href = "/tabs/about/";

    });

    $('#subscribe-btn-two').click(function(){

       window.location.href = "/tabs/subscribe/";

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
   



}); //end document.ready block
