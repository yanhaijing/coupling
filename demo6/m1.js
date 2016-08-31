(function (root) {
    var m1 = {
        init: function () {
            var me = this;
            document.querySelector('.m1 input').addEventListener('input', function () {
                me.m1input = this.value;
                m2.update(me.m1input);
            });
        },
        update: function (str) {
            document.querySelector('.m1 span').innerHTML = str;
        }
    };

    root.m1 = m1;
}(window));
