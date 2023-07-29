// the parameter 'number' is the amount of digits you want your password to be

export default function passwordGenerator(number: number) {
    var password = "";
    for (var i = 1; i <= number; i++) {
        var n = Math.floor(Math.random() * 9);
        var nString = n.toString();
        password += nString;
    }
    return +password;
}
