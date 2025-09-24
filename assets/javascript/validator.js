jQuery.validator.addMethod(
    "ir_phone",
    function (value, element) {
        return this.optional(element) || value.startsWith("09");
    },
    "مقدار ورودی صحیح نمی‌باشد"
);

jQuery.validator.addMethod(
    "persianOnly",
    function (value, element) {
        return this.optional(element) || /^[\u0600-\u06FF\s]+$/.test(value);
    },
    "مقدار ورودی صحیح نمی‌باشد"
);

const validator = $("#send-message").validate({
    rules: {
        name: {
            persianOnly: true,
            required: true,
        },
        phone: {
            ir_phone: true,
            required: true,
            minlength: 11,
            maxlength: 11,
        },
        message: {
            minlength: 5,
            required: true,
        },
    },
    messages: {
        name: {
            required: "لطفا نام خود را وارد کنید",
        },
        phone: {
            required: "لطفا شماره تماس خود را وارد کنید",
            minlength: "شماره تماس باید حداقل 11 رقم باشد",
            maxlength: "شماره تماس باید حداکثر 11 رقم باشد",
        },
        message: {
            required: "لطفا پیام خود را وارد کنید",
            minlength: "پیام باید حداقل ۵ کاراکتر باشد",
        },
    },

    errorPlacement: function (error, element) {
        error.addClass("text-danger");
        error.insertAfter(element);
    },
});
