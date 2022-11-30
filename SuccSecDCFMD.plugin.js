/**
 * @name FakedMuteDeaf
 * @version 1
 * @description Enable than disable the plugin and magic happens! Found by many people but not fixed by Discord.
 * @author nyx
 * @source https://github.com/Nyxiie
 */
class FakedMuteDeaf {
    start() {        
        var text = new TextDecoder("utf-8");

WebSocket.prototype.original = WebSocket.prototype.send;
WebSocket.prototype.send = function(data) {
    if (Object.prototype.toString.call(data) === "[object ArrayBuffer]") {
        if (text.decode(data).includes("self_deaf")) {
            data = data.replace(
                '"self_mute":false',
                'NahNotToday');
        }
    }
    WebSocket.prototype.original.apply(this, [data]);
}
window.BdApi.alert("success",`Disable the Plugin , magic does itself!`);
    }
    stop() {
    }
}
