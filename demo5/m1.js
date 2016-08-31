(function (root) {
    var m1 = {
        init: function () {
            var me = this;
            document.querySelector('.m1 input').addEventListener('input', function () {
                me.m1input = this.value;
                m2.update(me);
            });
        },
        update: function (obj) {
            document.querySelector('.m1 span').innerHTML = obj.m2input;
        }
    };

    root.m1 = m1;
}(window));
