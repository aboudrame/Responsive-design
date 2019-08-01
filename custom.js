$(function () {
    var mockup = {
        init: function () {
            mockup.sync();
            mockup.Webinarcountdown();
            mockup.bluebtn();
        },

        sync: function () {

            $('.checkbox > input').off('click').on('click', function () {
                //Always hide these 2 on clicks
                $('.custom_alert').hide(3000);
                $('.custom_ajax').hide(3000);

                if ( $(this).attr('checked') === 'checked' ) {
                    $('.checkbox > input')
                            .removeAttr('checked')
                            .prop('checked', false );
                }
                else {
                    $('.checkbox > input')
                            .attr('checked', 'checked')
                            .prop('checked', true);
                }
            });

        },

        Webinarcountdown: function () {
            var LoadDateTime = new Date();
            var FiveDayLater = LoadDateTime.getDate() + 5; //The fift day ahead
            var WebinarDate = new Date(        //define new date object on the webinar day
                LoadDateTime.getFullYear(),
                LoadDateTime.getMonth(),
                FiveDayLater
            );

            var msWebinarDate = new Date(WebinarDate);
            var webinarDAY = msWebinarDate.getMonth() + "/" + 
                              msWebinarDate.getDate()  + "/" +
                              msWebinarDate.getFullYear();
            var webinarTime = ("0" + msWebinarDate.getHours()).slice(-2) + ":" +
                              ("0" + msWebinarDate.getMinutes()).slice(-2) + ":" +
                              ("0" + msWebinarDate.getSeconds()).slice(-2)

            $('.webinar-date').html( webinarDAY + ' at ' + webinarTime);
            
            //Refresh the current time every second and extract days, hours, minutes and seconds
            setInterval (function () {
                var LoadDateTimeDesc = new Date();
                var msLoadDateTimeDesc = LoadDateTimeDesc.getTime();

                var msDistance =  msWebinarDate - msLoadDateTimeDesc ;
                var seconds = Math.floor((msDistance % (1000 * 60)) / 1000); 
                var minutes = Math.floor((msDistance % (1000 * 60 * 60)) / (1000 * 60));
                var hours = Math.floor((msDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var days = Math.floor(msDistance / (1000 * 60 * 60 * 24)); 

                //set the value for display
                    $('.days').text(days);
                    $('.hours').text(hours);
                    $('.minutes').text(minutes);
                    $('.seconds').text(seconds);

                    }, 1000);

        },

        bluebtn: function () {
            $('.custom_alert').hide();

            $('.blue-button').off('click').on('click', function () {
               var el = $(this).prev('div').find($('input'));
                
                
               if ( $(el).attr('checked') ) {
                   $('.custom_alert').hide(3000);

                   $.ajax({
                       url: "https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/",
                       method: "GET",
                       dataType: "json",
                       async: true,
                       crossDomain: true,
                       success: function (result) {

                           var jsonparse = JSON.parse(result.body);

                           for (x in jsonparse) {
                               if (x == "submitok") {
                                    $(".custom_ajax")
                                        .html(jsonparse[x])
                                        .show(3000);
                               }
                           };
                       }
                   });
                
               }
               else {
                   $('.custom_alert').show(3000);
                   
               }
            });
        }

    };

    mockup.init();

});