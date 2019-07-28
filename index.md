<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<style type="text/css">
     body {
        background-color: #FFF;
        font-family: arial, sans-serif;
     }

    .Text-Light-Blue {color: #71a1be; }
    .Text-Medium-Blue { color: #005282; }
    .Text-Dark-Blue { color: #05263a; }

    .Background-Light-Blue {background-color: #71a1be; }
    .Background-Medium-Blue {Background-color: #005282; max-width: 60%; margin: auto; padding: 10px;  border-radius: 10px; margin: 20px auto;}
    .Background-Dark-Blue {background-color: #05263a; }

    .Background-Pink { background-color: #f58c99;}
    .align-center {text-align: center;   }
    .best-selling {max-width: 75% ; background-color: #71a1be !important; margin: auto !important; } 
    .summary {max-width: 80%; margin: 0 auto; font-size: 1.5em; }
    .checkbox-container p {display: inline-block; }
    .checkbox {width: 20px;}
    .Text-bold {font-weight: bold;}
    .Text-white {color: #FFF;}
    .calendar-container {display: flex;}
    .calendar {margin-right: 10px}
    .calendar-text {width: 100%;}
    .paddingTop25 {padding-top: 25px;}
    .calendar img {width: 100%; max-width: 80px}
    .padding25-40-40-40 {padding: 25px 40px 40px 40px }
    .profile-container { display: flex; margin-top: 20px;}
    .profile-container div {width: 50%; padding-top: 20px;}
    .Open-questions {background-color: #E8E8E8; color: #000; padding: 20px;}
    .Open-questions .cbox {width: 35px; display: inline-block;}
    .Open-questions .questions {display: inline-block; width: calc(100% - 70px)}
    .warning, .claim {padding: 10px; margin: 0}
    .warning {margin-top: 10px;}
    .warning img {width: 30px; background-color: initial; }
    .cbox, .cbox img {background-color: #E8E8E8;}
    
    @media only screen and (max-width: 768px) {
     .calendar-container {
         display: block;                 
        }
     .calendar-container > div {
         padding-bottom: 20px;
         margin: 0;
     }

     .paddingLR20 {
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
     }

    .marginLR20 {
        margin-left: 20px;
        margin-right: 20px; 
    }

     .Register {
        max-width: initial;
     }

    .profile-container {
        display: block;
    }

    .profile-container > div {
        margin: 0 auto;
        width: initial;
    }

    .Yes-reserve-spot {
        max-width: initial;
    }

    .profile {
        padding-bottom: 20px;
    }

    .Open-questions > .cbox {
        vertical-align: top;
    }
    }
    
    
    }

</style>

<script type="text/javascript">
$(function () {
    var mockup = {
        init: function () {
            mockup.sync();
            mockup.Webinarcountdown();
            mockup.bluebtn();
        },

        sync: function () {

            $('.checkbox > input').off('click').on('click', function () {
                $('.custom_alert').hide();
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
                       success: function (result) {
                            // var d = $.parseJSON(JSON.stringify(result));
                            // var x = $.parseJSON(JSON.stringify(d.body)); to be continue
                            $(".custom_ajax").html("Congratulations! Your spot is reserved");
                
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

</script>

<div class="row">
<div class="col-12">
<p class="align-center">Best-Selling Author and Gold Expert <br>
Jim Rickards’ Presents…</p>
</div>
 <p class="align-center">
     <hr class="best-selling">
</p>
<div class="col-12 align-center summary Text-bold">
<p>“In just days a Never-Before- Seen Gold Anomaly 
Will Create a Totally New Class of Penny Gold Stocks... <br>
I’ve Enlisted One of the World’s Top Geologists 
to Help Me Reveal... Live on Camera… What This 
Coming <span class="Text-Light-Blue">Gold Mega-Catalyst</span> Is And How You Could Make 
as Much as <span class="Text-Light-Blue"> $101,000 in Profit</span>.”
</p>
</div>

<div class="align-center" style="padding-top: 0px; margin-top: 0;">
    <div class="checkbox" style="display: inline-block"><input type="checkbox" name="sync" ></div>
    <div style="display: inline-block; Text-white">I would like to receive a free newsletter</div>
    <div class="custom_alert" style="color: red;">Please check to receive a free newsletter BEFORE registering</div>
    <div class="custom_ajax" style="color: green; font-weight: bold;"> </div>
</div>

<div class="align-center Background-Medium-Blue Text-white Register marginLR20 Text-bold blue-button">
Register for this FREE <br> 
live Webinar Here!
</div>

<div class="calendar-container">
    <div class="col-md-4 calendar Background-Light-Blue align-center padding25-40-40-40">
        <img src="RGS_Hotlist_0617_Calendar.png" />
        <div class="Text-white"> <span class="Text-bold">May 29 </span><br> 5 PM EDT</div>
    </div>
    <div class="col-md-8 calendar-text align-center paddingTop25 Background-Light-Blue Text-white paddingLR20">
        TIME LEFT UNTIL THE WEBINAR STARTS... <br>
        <span class="countdown"> </span>
        <table  border="0" cellspacing="0" cellpadding ="0" class="countdown" style="color: #000; display: inline;" >
        <tr>
            <th>Days</th><th>Hours</th><th>Minutes</th><th>Seconds</th>
        </tr>
        <tr>
            <td class="days"></td><td class="hours"></td><td class="minutes"></td><td class="seconds"></td>
        </tr>
        </table>
    </div>
</div>

<div class="profile-container Background-Dark-Blue">
<div class="profile align-center" >
<p style="text-align: center; max-width: 200px; margin: auto;"><img src="RGS_Hotlist_0617_JimRickards.png"/></p>
<span class="Text-white">Presented by best-selling author and gold expert… </span><br>
<span class="Text-white Text-bold"> JAMES G. RICKARDS </span>
</div>

<div class="Open-questions">
<p class="align-center Text-bold">I’m going to show you…</p>


<p class="cbox"> <img src="RGS_Hotlist_0617_CheckmarkBox.png" /></p>
<p class="questions" >
How a class of “off-limit” gold stocks could become fair game and shoot up in price…
</p>

<p class="cbox"> <img src="RGS_Hotlist_0617_CheckmarkBox.png" /></p>
<p  class="questions">
Why just as many gold stocks could be CRUSHED. But this isn’t a bad thing. In fact, it’s going to open up a unique opportunity not seen in years…
</p>

<p class="cbox"> <img src="RGS_Hotlist_0617_CheckmarkBox.png" /></p>
<p  class="questions">
How it could compound an announcement from the Federal Reserve next week that could send physical gold prices much higher…
</p>

<p class="cbox"> <img src="RGS_Hotlist_0617_CheckmarkBox.png" /></p>
<p  class="questions">
Why you’ll hear predictions of doom for the gold market (it’s important you understand the truth and know the real profit opportunity that’s being set up)...
</p>

<p class="cbox"> <img src="RGS_Hotlist_0617_CheckmarkBox.png" /></p>
<p  class="questions">
Why we may see confirmation that gold will make a run at $2,000 sooner than anyone thinks...
</p>
</div> <!-- Open-questions -->
</div> <!-- profile-container-->
<div class="Background-Pink warning align-center" style="display: flex; justify-content: center;" > 
<div>
<img src="RGS_Hotlist_0617_Warning.png" />
</div>
<div style="padding: 5px 25px;" class="Text-white">
WARNING: SPACE IS LIMITED & THESE LIVE TRAININGS ALWAYS FILL UP
</div>
</div>

<p class="claim Background-Dark-Blue align-center Text-white" style="margin-bottom: 0;">
    Claim your spot below before it's too late!
</p>
<p style="padding: 0; margin: 0 auto; text-align: center; max-width: 150px;">
    <img src="Triangle.gif" />
</p>

<div class="align-center" style="padding-top: 0px; margin-top: 0;">
    <div class="checkbox" style="display: inline-block"><input type="checkbox" name="sync" ></div>
    <div style="display: inline-block; Text-white">I would like to receive a free newsletter</div>
    <div class="custom_alert" style="color: red;">Please check to receive a free newsletter BEFORE registering!</div>
    <div class="custom_ajax" style="color: green; font-weight: bold;"> </div>
 </div>

<div class="align-center Background-Medium-Blue Text-white Yes-reserve-spot marginLR20 blue-button">
YES! Reserve My Spot Now! >>
</div>
</div>
