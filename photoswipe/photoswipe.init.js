jQuery(document).ready(function(){

 //   var myPhotoSwipe = jQuery(".gallery a").photoSwipe( );
 
    //pregutenberg
    var nativeGalleryThumbnails = jQuery("a:has(img)").filter(  function() { return /(jpe?g|png|gif)$/i.test(jQuery(this).attr('href')) });
 nativeGalleryThumbnails.addClass("singleGallery");     
    
    // gutenberg
//    var gutenbergThumbnails = jQuery("blocks-gallery-item img") ;
 //gutenbergThumbnails.addClass("singleGallery");   
 var myPhotoSwipe = jQuery("a.singleGallery").photoSwipe( );
 
});
