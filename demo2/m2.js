(function (root) {
    var m2 = {
        init: function () {
            document.querySelector('.m2 input').addEventListener('input', function () {
                root.data.m2input = this.value;
                m1.update();
            });
        },
        update: function () {
            document.querySelector('.m2 span').innerHTML = root.data.m1input;
        }
    };

    root.m2 = m2;
}(window));
