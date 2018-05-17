global.navigator = {};

["jsbn", "prng4", "rng", "rsa", "base64"].forEach(function (module) {
    eval.call(
        global,
        require("fs").readFileSync(
            "node_modules/" + module + ".js",
            { encoding: "UTF-8" }
        )
    );
});

var exponent = process.argv[2];
var modulus = process.argv[3];

process.stdin.setEncoding("UTF-8");
process.stdin.on("data", function (data) {
    var password = data.replace(/\n/, '');
    var rsa = new RSAKey();
    rsa.setPublic(modulus, parseInt(exponent, 10).toString(16));

    process.stdout.write(
        linebrk(
            hex2b64(
                rsa.encrypt("airstation_pass=" + password)
            ),
            64
        )
    );
});
