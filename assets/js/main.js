(function ($) {
    'use strict';

    /**==========================
     *01. Brand Slider 
    ===========================*/
    var bramdSwiper = new Swiper('.brand_carousel', {
        loop: true,
        autoplay: {
            delay: 2200,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            480: {
                spaceBetween: 15,
                slidesPerView: 2
            },
            576: {
                spaceBetween: 15,
                slidesPerView: 2
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 3,
                autoplay: false,
                loop: false,
            },
            992: {
                spaceBetween: 20,
                slidesPerView: 4,
                autoplay: false,
                loop: false,
            },
            1300: {
                spaceBetween: 30,
                slidesPerView: 5,
                autoplay: false,
                loop: false,
            }
        }
    });

    /**==========================
     *02. FunFact 
    ===========================*/
    $(".countfact").appear();
    $(document.body).on("appear", ".countfact", function (e, $affected) {
        $affected.each(function () {
            var $this = $(this);
            if (!$this.hasClass("appeared")) {
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.attr("data-count")
                }, {
                    duration: 3000,
                    easing: "swing",
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '<span class="count-span">' + "$1" + "</span>" + "$2");
                            }
                        }
                        if ($this.hasClass("hasFraction")) {
                            var num = Math.abs(this.Counter);
                            num = num.toFixed(1).toString();
                        }
                        $(".counter", $this).html(num);
                    },
                });
                $this.addClass("appeared");
            }
        });
    });

    /**==========================
     *03. Step Form 
    ===========================*/
    $(document).ready(function () {
        var currentStep = 1;

        function updateActiveStep() {
            $('.step-circle').removeClass('active');
            $('.step-circle').eq(currentStep - 1).addClass('active');

            $('.step').hide();
            $(".step-" + currentStep).show();

            if (currentStep === 3) {
                $('.purchase_form_area').addClass('activeStep3');
            } else {
                $('.purchase_form_area').removeClass('activeStep3');
            }
            validateStep();
        }

        function validateStep() {
            let isValid = true;

            $(".step-" + currentStep + " :input[required]").each(function () {
                if (!$(this).val()) {
                    isValid = false;
                    return false; // Exit loop on the first invalid field
                }
            });

            $(".next-step").prop('disabled', !isValid);
        }

        // Next button click handler
        $(".next-step").click(function () {
            if (currentStep < 3) {
                currentStep++;
                updateActiveStep();
            }
        });

        // Previous button click handler
        $(".prev-step").click(function () {
            if (currentStep > 1) {
                currentStep--;
                updateActiveStep();
            }
        });

        // Validate the first step on page load
        updateActiveStep();

        // Trigger validation on input change
        $(document).on("input", ":input", validateStep);
    });

    /**==========================
     *04. Form Data submit 
    ===========================*/
    // Package 1 
    $('form.sign_up1Form').each(function () {
        var $form = $(this);
        var $btn = $form.find('.btn');
        var $packageName = 'Facebook Ads';

        $btn.on('click', function () {
            var dataId = $(this).data('id');

            if (dataId == 1) {
                var $fname = $form.find('[name="fname"]').val();
                var $lname = $form.find('[name="lname"]').val();
                var $email = $form.find('[name="email"]').val();
                var $phone = $form.find('[name="phone"]').val();

                $.ajax({
                    url: './formdata.php?action=first_step',
                    type: "post", 
                    data: {
                        fname: $fname,
                        lname: $lname,
                        email: $email,
                        phone: $phone,
                        packageName: $packageName,
                    },
                    success: (data) => {
                        // console.log(data);
                    }
                })

            } else if (dataId == 2) {
                var $bsnsname = $form.find('[name="bsnsname"]').val();
                var $location = $form.find('[name="Location"]').val();
                var $advtslocation = $form.find('[name="advtslocation"]').val();
                var $binstime = $form.find('[name="binstime"]').val();
                var $ymessage = $form.find('[name="ymessage"]').val();

                $.ajax({
                    url: './formdata.php?action=second_step',
                    type: "post", 
                    data: {
                        businessName: $bsnsname,
                        location: $location,
                        advertisingLocation: $advtslocation,
                        YearsInBusiness: $binstime,
                        Message: $ymessage,
                        packageName: $packageName,
                    },
                    success: (data) => {
                        // console.log(data);
                    }
                })
            } else if (dataId == 3) {
                
            }
        });
    });
    
    // Package 2
    $('form.sign_up2Form').each(function () {
        var $form = $(this);
        var $btn = $form.find('.btn');
        var $packageName = 'Google Ads';

        $btn.on('click', function () {
            var dataId = $(this).data('id');

            if (dataId == 1) {
                var $fname = $form.find('[name="fname"]').val();
                var $lname = $form.find('[name="lname"]').val();
                var $email = $form.find('[name="email"]').val();
                var $phone = $form.find('[name="phone"]').val();

                $.ajax({
                    url: './formdata.php?action=first_step',
                    type: "post", 
                    data: {
                        fname: $fname,
                        lname: $lname,
                        email: $email,
                        phone: $phone,
                        packageName: $packageName,
                    },
                    success: (data) => {
                        // console.log(data);
                    }
                })

            } else if (dataId == 2) {
                var $bsnsname = $form.find('[name="bsnsname"]').val();
                var $location = $form.find('[name="Location"]').val();
                var $advtslocation = $form.find('[name="advtslocation"]').val();
                var $binstime = $form.find('[name="binstime"]').val();
                var $ymessage = $form.find('[name="ymessage"]').val();

                $.ajax({
                    url: './formdata.php?action=second_step',
                    type: "post", 
                    data: {
                        businessName: $bsnsname,
                        location: $location,
                        advertisingLocation: $advtslocation,
                        YearsInBusiness: $binstime,
                        Message: $ymessage,
                        packageName: $packageName,
                    },
                    success: (data) => {
                        // console.log(data);
                    }
                })
            } else if (dataId == 3) {
                console.log('Condition for data-id=3');
            }
        });
    });
    
    // Package 3
    $('form.sign_up3Form').each(function () {
        var $form = $(this);
        var $btn = $form.find('.btn');
        var $packageName = 'SEO';

        $btn.on('click', function () {
            var dataId = $(this).data('id');

            if (dataId == 1) {
                var $fname = $form.find('[name="fname"]').val();
                var $lname = $form.find('[name="lname"]').val();
                var $email = $form.find('[name="email"]').val();
                var $phone = $form.find('[name="phone"]').val();

                $.ajax({
                    url: './formdata.php?action=first_step',
                    type: "post", 
                    data: {
                        fname: $fname,
                        lname: $lname,
                        email: $email,
                        phone: $phone,
                        packageName: $packageName,
                    },
                    success: (data) => {
                        // console.log(data);
                    }
                })

            } else if (dataId == 2) {
                var $bsnsname = $form.find('[name="bsnsname"]').val();
                var $location = $form.find('[name="Location"]').val();
                var $advtslocation = $form.find('[name="advtslocation"]').val();
                var $binstime = $form.find('[name="binstime"]').val();
                var $ymessage = $form.find('[name="ymessage"]').val();

                $.ajax({
                    url: './formdata.php?action=second_step',
                    type: "post", 
                    data: {
                        businessName: $bsnsname,
                        location: $location,
                        advertisingLocation: $advtslocation,
                        YearsInBusiness: $binstime,
                        Message: $ymessage,
                        packageName: $packageName,
                    },
                    success: (data) => {
                        // console.log(data);
                    }
                })
            } else if (dataId == 3) {
                console.log('Condition for data-id=3');
            }
        });
    });

    // pricing show more 
    $(".showMore").click(function () {
        var $ul = $(this).closest("div").prev("ul"); // Find the closest previous <ul>
    
        if ($ul.hasClass("show_height")) {
            $(this).text("Show Less");
        } else {
            $(this).text("Show More");
        }
    
        $ul.toggleClass("show_height"); // Toggle the class on the closest <ul>
    });

    // backtotop
    function backtotop() {
        $(window).scroll(function () {
           if ($(this).scrollTop() > 50) {
              $('#backtotop').addClass('activate');
           } else {
              $('#backtotop').removeClass('activate');
           }
        });
        $('#backtotop').on('click', function () {
           $("html, body").animate({ scrollTop: 0 }, 600);
           return false;
        });
     }
    backtotop();
    
    // Mibile Popup Menu 
    var navMenu_btn = $('.navMenu_btn');

            navMenu_btn.on('click', function (e) {
                e.preventDefault();
                $('.popup_mbMenu_sec').toggleClass('active');
            });

            $('.popup_mbMenu_overlay').on('click', function () {
                $('.popup_mbMenu_sec').removeClass('active');
            });

            $('.popup_mbMenu_closer').on('click', function () {
                $('.popup_mbMenu_sec').removeClass('active');
            });

            $(".mobile_mainMenu li.menu-item-has-children a").click(function () {
                var link = $(this);
                var closest_ul = link.closest("ul");
                var parallel_active_links = closest_ul.find(".active")
                var closest_li = link.closest("li");
                var link_status = closest_li.hasClass("active");
                var count = 0;

                closest_ul.find("ul").slideUp(function () {
                    if (++count == closest_ul.find("ul").length) {
                        parallel_active_links.removeClass("active");
                        parallel_active_links.children("ul").removeClass("show-dropdown");
                    }
                });

                if (!link_status) {
                    closest_li.children("ul").slideDown().addClass("show-dropdown");
                    closest_li.parent().parent("li.active").find('ul').find("li.active").removeClass("active");
                    link.parent().addClass("active");
                }
            });

})(jQuery);