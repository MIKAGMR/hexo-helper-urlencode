hexo.extend.helper.register('urlEncode', function( url ){
  encodedUrl = encodeURIComponent( url );
  return encodedUrl;
});