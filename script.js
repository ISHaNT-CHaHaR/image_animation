$(window).scroll(function(){
                       let scroll= $(window).scrollTop();
                           $(".animation img").css({
                               width:(100 + scroll/10)+"%"
                           })
                   })


                   $('.move').backgroundMove({
                        movementStrength:'50'});