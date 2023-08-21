const contactFormApp = Vue.createApp({
  mounted() {
    console.log('contact form');
    const $validationOptions = {
      trigger: 'focusout',
      excluded: ':hidden',
      errorsWrapper: '<span></span>',
      errorTemplate: '',
    };

    $('#ContactForm').parsley($validationOptions)
      .on('field:error', (data) => {
        console.error(`-- Validation Error --\nFieldname: ${data.$element[0].name}`);
      });
  }
});

contactFormApp.config.compilerOptions.delimiters = ['[[', ']]'];
contactFormApp.mount('.contact-form');
