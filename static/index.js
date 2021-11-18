var oScript = document.createElement("script");
oScript.type = "text/javascript";
oScript.src = "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
document.getElementsByTagName("head")[0].appendChild(oScript);

var clickTimedht = document.querySelector("#timedht");
var clickRecord = document.querySelector("#record");

clickTimedht.addEventListener("click", function() {
            $.ajax({
                type: 'GET',
                url:'/insertdb',
                datatype:'json',
                success: function(data) {
                    alert(data)

                    var time = new Date()
                    var tdata = "<tr>"
                    obj = JSON.parse(data)

                    tdata += "<th>1</th>"
                    tdata += "<th>"+time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate()+"</th>"
                    tdata += "<th>"+time.getHours()+":"+time.getMinutes()+"</th>"
                    tdata += "<th>"+obj.temp+"*C</th>"
                    tdata += "<th>"+obj.hum+"%</th>"
                    tdata += "</tr>"
                    document.getElementById("table").innerHTML = tdata
                }
        });
});

clickRecord.addEventListener("click", function() {
            $.ajax({
                type: 'GET',
                url: '/selectdb',
                datatype:'json',
                success: function(data) {
                    var tabledata = ""
                    for(var i in data) {
                        obj = JSON.parse(data[i][1])
                        tabledata += "<tr>"
                        tabledata += "<th>"+data[i][0]+"</th>"
                        tabledata += "<th>"+obj.yeardate+"</th>"
                        tabledata += "<th>"+obj.time+"</th>"
                        tabledata += "<th>"+obj.temper+"*C</th>"
                        tabledata += "<th>"+obj.hum+"%</th>"
                        tabledata += "</tr>"
                    }

                    document.getElementById("table").innerHTML = tabledata
                }
            });
});
