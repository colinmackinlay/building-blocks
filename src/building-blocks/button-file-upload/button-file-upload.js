$('[data-select="file-upload"]').change(function (e) {
    // Get the field name
    fieldName = $(this).attr('data-field');
    // Show selected filename in readonly 'input' field
    $('input[name='+fieldName+']').val($(this)[0].files[0]['name']);
    // enable the upload submit button
    $('button[name='+fieldName+"-submit"+']').prop('disabled', false);
});

