function onLoad(){
    var pronoun = ["the", "our", "her"];
    var adj = ["naughty","deadly", "disgusting"];
    var noun = ["dog","jackass","necromancer","Obama"];
    
    
    function PrintAll(){
        for (var e in pronoun){
            for (var r in adj){
                for (var k in noun){
                    
                    
                    var domainName = (pronoun[e] + adj[r] + noun[k] + ".com");
                    var start = document.getElementsByTagName("BODY")[0];
                    var next = document.createElement("P");
                    var last = document.createTextNode(domainName);
                    next.appendChild(last);
                    start.appendChild(next);
                }
            }
        }
    }
    
    
    PrintAll();
    
}

onLoad()