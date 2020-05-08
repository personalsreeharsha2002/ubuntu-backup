var myt=[];
//  localStorage.clear();
if( localStorage.getItem("myt"))
{
    myt=JSON.parse(localStorage.getItem("myt"));
    for(i in myt)
    {
        var tab=document.getElementById("tab");
        var row=tab.insertRow(1);
        var cell;
        cell=row.insertCell(0);
        cell.innerHTML=myt[i]["name"];
         cell=row.insertCell(1);
        cell.innerHTML=myt[i]["skill"];
         cell=row.insertCell(2);
        cell.innerHTML=myt[i]["level"];
         cell=row.insertCell(3);
        cell.innerHTML=myt[i]["comment"];
    }
}
function mytab()
{
    var name=document.getElementById("name").value;
    var skill=document.getElementById("skill").value;
    var level=document.getElementById("level").value;
    var comment=document.getElementById("comment").value;
    var tab=document.getElementById("tab")
    var row=tab.insertRow(1);
    var cell;   
    cell=row.insertCell(0);
        cell.innerHTML=name;
         cell=row.insertCell(1);
        cell.innerHTML=skill;
         cell=row.insertCell(2);
        cell.innerHTML=level;
         cell=row.insertCell(3);
        cell.innerHTML=comment;
        myt.push(
            {
                name :name,
                skill :skill,
                level :level,
                comment :comment,

            }
        );
        localStorage.setItem("myt",JSON.stringify(myt));
}