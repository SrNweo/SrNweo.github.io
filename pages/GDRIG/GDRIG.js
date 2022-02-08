const btn = document.getElementById("btn");

btn.addEventListener("click", createNI);

function createNI() {

    console.clear();

    var1 = "https://gdbrowser.com/icon/icon";

    var2 = Math.floor(Math.random() * (0 - 7)) + 8;

    let icondata = ["148", "51", "43", "35", "35", "26", "17"];

    let iconname = ["cube", "ship", "ball", "ufo", "wave", "robot", "spider"];

    var3 = Math.floor(
        Math.random() * (0 - icondata[var2 - 1]) + icondata[var2 - 1] + 1
    );

    var3 = -var3;

    var1 = var1 + "?icon=" + var3 + "&form=" + iconname[var2 - 1] + "&col1=";

    let color = ["a", "b", "c", "d", "e", "f"];

    function Color() {
        var2 = "6";

        var3 = "";

        var4 = "";

        var5 = "";

        var6 = "";

        while (var2 > 0) {
            var4 = Math.floor(Math.random() * (0 + 101));

            if (var4 <= 50) {
                var3 = Math.floor(Math.random() * (0 + 9));

                var6 = var6 + var3;
            } else {
                var5 = Math.floor(Math.random() * (0 + 6));

                var5 = color[var5];

                var6 = var6 + var5;
            }

            var2--;
        }

        console.log(var6);
    }

    Color();

    var1 = var1 + var6 + "&col2=";

    Color();

    var1 = var1 + var6;

    if (Math.floor(Math.random() * (0 + 2)) == 1) {
        var1 = var1 + "&glow=1";
    }

    console.log(var1);

    document.getElementById("result").src = var1;
}