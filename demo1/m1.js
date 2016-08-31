(function (root) {
    var m1 = {
        init: function () {
            this.m2input = '';

            document.querySelector('.m1 input').addEventListener('input', function () {
                root.m2.m1input = this.value;
                m2.update();
            });
        },
        update: function () {
            document.querySelector('.m1 span').innerHTML = this.m2input;
        }
    };

    root.m1 = m1;
}(window));
