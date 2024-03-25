const calc = () => {
    let bpay = parseInt(document.getElementById("basicpay").value);
    let hpay = parseInt(document.getElementById("hra").value = bpay * (10 / 100));
    let dpay = parseInt(document.getElementById("da").value = bpay * (5 / 100));
    let tpay = parseInt(document.getElementById("travpay").value = bpay * (15 / 100));
    let ppay = parseInt(document.getElementById("pf").value = bpay * (15 / 100));

    let gpay = parseInt(document.getElementById("gpay").value = bpay + hpay + dpay + tpay + ppay);
    let npay = parseInt(document.getElementById("npay").value = gpay - ppay);
}
document.getElementById("basicpay").addEventListener("keyup", calc)

const display = () => {
    let bpay = document.getElementById("basicpay").value;
    let hpay = document.getElementById("hra").value;
    let dpay = document.getElementById("da").value;
    let tpay = document.getElementById("travpay").value;
    let ppay = document.getElementById("pf").value;
    let gpay = document.getElementById("gpay").value;
    let npay = document.getElementById("npay").value;

    document.getElementById("one").innerHTML = bpay;
    document.getElementById("two").innerHTML = hpay;
    document.getElementById("three").innerHTML = dpay;
    document.getElementById("four").innerHTML = tpay;
    document.getElementById("five").innerHTML = ppay;
    document.getElementById("six").innerHTML = gpay;
    document.getElementById("seven").innerHTML = npay;
}
document.getElementById("btn").addEventListener("click", display)
