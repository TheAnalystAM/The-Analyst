/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block


   // NEWS TEASER
   
   $('.topnewsteaser').click(function(){
      
        window.location.href = "/stories/economics/spiritmerger";
      
   });
   
   // THE LATEST
   
   $('#thelateststories1').click(function(){
      
        window.location.href = "/stories/markets/disneyq3earnings";
      
   });
   
   $('#thelateststories2').click(function(){
      
        window.location.href = "/stories/markets/s2bumbledrop";
      
   });
   
   $('#thelateststories3').click(function(){
      
        window.location.href = "/stories/markets/s2bumbledrop";
      
   });
   
   $('#thelateststories4').click(function(){
      
        window.location.href = "/stories/markets/s2bumbledrop";
      
   });
   
   // TOP PICKS
   
   $('#toppicksstories1').click(function(){
      
        window.location.href = "/stories/markets/s2bumbledrop";
      
   });
   
   // US / NORTH AMERICA NEWS

   $('#usnewsstories1').click(function(){
      
        window.location.href = "/stories/markets/s2bumbledrop";
      
   });

   $('#usnewsstories2').click(function(){
      
        window.location.href = "/stories/markets/disneyq3earnings";
      
   });

   $('#usnewsstories1').click(function(){
      
        window.location.href = "/stories/markets/s2bumbledrop";
      
   });

   $('#globalnewsstories1').click(function(){
      
        window.location.href = "/stories/economics/spiritmerger";
      
   });

   $('#globalnewsstories2').click(function(){
      
        window.location.href = "/stories/markets/s2bumbledrop";
      
   });

   $('#globalnewsstories3').click(function(){
      
        window.location.href = "/stories/markets/disneyq3earnings";
      
   });

   

   

   

   

   
   
   









// General Content

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


   

      // ABOUT

   $('#tab3').click(function(){

      window.location.href = "/tabs/about/";

   });

      // SUBSCRIBE

   $('#tab4').click(function(){

      window.location.href = "/tabs/subscribe/";

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
