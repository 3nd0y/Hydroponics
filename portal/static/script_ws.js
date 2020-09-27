var HOST = location.origin.replace(/^http/, 'ws')
var ws = new WebSocket(HOST);

ws.onopen = function() {
   ws.send('{"name":"hola"}');
}

ws.onclose = function() {
  alert(' websocket closed.. ');
}

function send(){
  let param = {
    ssid:"", 
    pwd: "", 
    host: "", 
    token: ""
  };
  param["ssid"] = document.getElementById('ssid').value;
  param["pwd"] = document.getElementById('pwd').value;
  param["host"] = document.getElementById('host').value;
  param["token"] = document.getElementById('token').value;
  // let ssid = document.getElementById('ssid').value;
  console.log(param);
    ws.send(JSON.stringify(param));
}


ws.onmessage = function (event) {
  // el.innerHTML = 'Server time: ' + event.data;
  console.log(event.data);
};

function enterFalse(event){
  if (event.keyCode == 13){
    send();
    event.stopPropagation();
    return false;
  }
}