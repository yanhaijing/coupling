(function (root) {
    var m2 = {
        init: function () {
            this.m1input = '';

            document.querySelector('.m2 input').addEventListener('input', function () {
                root.m1.m2input = this.value;
                m1.update();
            });
        },
        update: function () {
            document.querySelector('.m2 span').innerHTML = this.m1input;
        }
    };

    root.m2 = m2;
}(window));
