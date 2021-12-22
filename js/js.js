btn.addEventListener("click", function getResult (){
    p = Number(c.value) * Number(pc.value) / 100 * Number(kd.value) / Number(dg.value);
    res.innerHTML = p;
})