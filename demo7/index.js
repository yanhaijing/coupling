(function (root) {
    var m1 = root.m1;
    var m2 = root.m2;

    m1.init(function (str) {
        m2.update(str);
    });

    m2.init(function (str) {
        m1.update(str);
    });
}(window));
