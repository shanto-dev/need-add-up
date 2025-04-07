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

})(jQuery);