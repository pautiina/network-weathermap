// Extra stuff to patch the old editor javascript to work with the newer midway editor backend
// We pulled all the PHP (but a few variable substitutions) out of the old editor page, so this
// replaces some of that with client-side equivalents.

// Ultimately, the editor will fetch only data from the server, and present it using client-side
// templates and other this-decade technology. For now, escaping from the code+html mess of the
// original editor is an OK start.

jQuery(document).ready(initJS16);

function update_fontlist(fonts) {
    jQuery.each(fonts, function (index, value) {
        // slot in the list of fonts in each of the select boxes where they are expected
        var newitem = jQuery("<option />").attr("value", value).text(value);
        jQuery(".fontlist").append(newitem);
    });
}


function update_map_properties(properties) {

    var mapping = {
        'map_title': 'title',
        'map_legend': 'map_legendtext',
        'map_stamp': 'map_stamp',
        'map_linkdefaultwidth': 'link_width',
        'map_linkdefaultbwin': 'link_defaultbwin',
        'map_linkdefaultbwout': 'link_defaultbwout',
        'map_width': 'map_width',
        'map_height': 'map_height',
        'map_pngfile': 'map_pngfile',
        'map_htmlfile': 'map_htmlfile'
    };

    for (var field in mapping) {
        if (mapping.hasOwnProperty(field)) {
            jQuery('#' + field).val(properties[mapping[field]]);
        }
    }

    // TODO - figure out the extra logic to possibly add the extra image
    // jQuery('#map_bgfile').value();


}

function update_imagelists(images) {
    jQuery.each(images, function (index, value) {
        // slot in the list of images in:
        //    node icon selectbox
        //    map background image
        var newitem = jQuery("<option />").attr("value", value).text(value);
        jQuery(".imlist").append(newitem);
    });
}

function initJS16() {

    update_imagelists(imlist);
    update_fontlist(fontlist);
    update_map_properties(global_settings);


    // TODO: set the selected settings for each font in mapstyle
    // mapstyle_linklabels
    // mapstyle_htmlstyle
    // mapstyle_arrowstyle
    // mapstyle_nodefont
    // mapstyle_linkfont
    // mapstyle_legendfont

}
