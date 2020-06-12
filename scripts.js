
$(function () {
    $('.hamburger-menu').on('click', function(){
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');

    });





    $('#map g').click(function(){
        var title= $(this).attr('mytitle');
        $('#map g').removeClass('selected');
        $(this).addClass('selected');


        $('#region_name').html(title);

  



    });

    
    $('#khulna').click(function(){
        
        
        $('#bangladesh_region').removeClass('selected_region');
        $('#dhaka_region').removeClass('selected_region');
        $('#barishal_region').removeClass('selected_region');
        $('#sylhet_region').removeClass('selected_region');
        $('#chitagong_region').removeClass('selected_region');
        $('#rajshahi_region').removeClass('selected_region');
        $('#rangpur_region').removeClass('selected_region');
        $('#mymensing_region').removeClass('selected_region');
        $('#khulna_region').addClass('selected_region');

    });
    $('#dhaka').click(function(){

        $('#bangladesh_region').removeClass('selected_region');
        $('#barishal_region').removeClass('selected_region');
        $('#khulna_region').removeClass('selected_region');
        $('#sylhet_region').removeClass('selected_region');
        $('#chitagong_region').removeClass('selected_region');
        $('#rajshahi_region').removeClass('selected_region');
        $('#rangpur_region').removeClass('selected_region');
        $('#mymensing_region').removeClass('selected_region');
        $('#dhaka_region').addClass('selected_region');

    });
    $('#barishal').click(function(){
        
        $('#bangladesh_region').removeClass('selected_region');
        $('#dhaka_region').removeClass('selected_region');
        $('#khulna_region').removeClass('selected_region');
        $('#sylhet_region').removeClass('selected_region');
        $('#chitagong_region').removeClass('selected_region');
        $('#rajshahi_region').removeClass('selected_region');
        $('#rangpur_region').removeClass('selected_region');
        $('#mymensing_region').removeClass('selected_region');
        $('#barishal_region').addClass('selected_region');

    });

    $('#chitagong').click(function(){
        
        
        $('#bangladesh_region').removeClass('selected_region');
        $('#dhaka_region').removeClass('selected_region');
        $('#barishal_region').removeClass('selected_region');
        $('#sylhet_region').removeClass('selected_region');
        $('#khulna_region').removeClass('selected_region');
        $('#rajshahi_region').removeClass('selected_region');
        $('#rangpur_region').removeClass('selected_region');
        $('#mymensing_region').removeClass('selected_region');
        $('#chitagong_region').addClass('selected_region');

    });

    $('#rajshahi').click(function(){
        
        
        $('#bangladesh_region').removeClass('selected_region');
        $('#dhaka_region').removeClass('selected_region');
        $('#barishal_region').removeClass('selected_region');
        $('#sylhet_region').removeClass('selected_region');
        $('#khulna_region').removeClass('selected_region');
        $('#chitagong_region').removeClass('selected_region');
        $('#rangpur_region').removeClass('selected_region');
        $('#mymensing_region').removeClass('selected_region');
        $('#rajshahi_region').addClass('selected_region');

    });


    $('#rangpur').click(function(){
        
        
        $('#bangladesh_region').removeClass('selected_region');
        $('#dhaka_region').removeClass('selected_region');
        $('#barishal_region').removeClass('selected_region');
        $('#sylhet_region').removeClass('selected_region');
        $('#chitagong_region').removeClass('selected_region');
        $('#rajshahi_region').removeClass('selected_region');
        $('#khulna_region').removeClass('selected_region');
        $('#mymensing_region').removeClass('selected_region');
        $('#rangpur_region').addClass('selected_region');

    });

    $('#sylhet').click(function(){
        
        
        $('#bangladesh_region').removeClass('selected_region');
        $('#dhaka_region').removeClass('selected_region');
        $('#barishal_region').removeClass('selected_region');
        $('#khulna_region').removeClass('selected_region');
        $('#chitagong_region').removeClass('selected_region');
        $('#rajshahi_region').removeClass('selected_region');
        $('#rangpur_region').removeClass('selected_region');
        $('#mymensing_region').removeClass('selected_region');
        $('#sylhet_region').addClass('selected_region');

    });


    $('#mymensing').click(function(){
        
        
        $('#bangladesh_region').removeClass('selected_region');
        $('#dhaka_region').removeClass('selected_region');
        $('#barishal_region').removeClass('selected_region');
        $('#sylhet_region').removeClass('selected_region');
        $('#chitagong_region').removeClass('selected_region');
        $('#rajshahi_region').removeClass('selected_region');
        $('#rangpur_region').removeClass('selected_region');
        $('#khulna_region').removeClass('selected_region');
        $('#mymensing_region').addClass('selected_region');

    });
    




    $('.bars li .bar').each(function(key, bar){
        var percentage =$(this).data('percentage');
        $(this).animate({
            'height':percentage +'%'
        },1000);
    })



    






});
