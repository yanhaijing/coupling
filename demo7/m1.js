(function (root) {
    var m1 = {
        init: function (inputcb) {
            var me = this;
            document.querySelector('.m1 input').addEventListener('input', function () {
                me.m1input = this.value;
                inputcb(me.m1input);
            });
        },
        update: function (str) {
            document.querySelector('.m1 span').innerHTML = str;
        }
    };

    root.m1 = m1;
}(window));
