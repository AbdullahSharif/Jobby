export default function checkImageUrl(url){
    if(!url) return false;
    
    if(url.length > 1) return true
    const pattern = new RegExp('^https:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
    return pattern.test(url);


}