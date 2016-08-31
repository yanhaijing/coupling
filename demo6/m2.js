(function (root) {
    var m2 = {
        init: function () {
            var me = this;
            document.querySelector('.m2 input').addEventListener('input', function () {
                me.m2input = this.value;
                m1.update(me.m2input);
            });
        },
        update: function (str) {
            document.querySelector('.m2 span').innerHTML = str;
        }
    };

    root.m2 = m2;
}(window));
