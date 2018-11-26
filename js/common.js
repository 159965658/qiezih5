/**
 * Created by wen on 2018/11/21.
 */

var html = document.getElementsByTagName('html')[0];
if(html){
    var w = window.innerWidth;
    var fontSize = (w>1242?1242:w)/1242 * 100;
    html.style.fontSize = fontSize + 'px';
}
window.onload = function(){
    window.onresize = function(){
        var w = window.innerWidth;
        var fontSize = (w>1242?1242:w)/1242 * 100;
        html.style.fontSize = fontSize + 'px';
    }
}