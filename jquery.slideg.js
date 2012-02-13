;(function($){
    $.fn.slideg = function(options) {
        var defaults = {
            dir: 'x',
            x: 0,
            y: 0,
            addx: 0,
            addx: 0,
            delay: 1000,
            parent: '',
            from: ''
        };
        
        var functions = {
            slideg: function(opts, layer){
                var _parent = $(layer).parents(opts.parent);
                var _from = $(opts.from);
                var _displacement = 0;
                var _children = $(_parent).children();
                for(i=0; i < _children.length; i++){
                    value = 0;
                    layer = $(_children[i]);
                    if(layer.get(0) === _from.get(0)){
                        break;
                    }
                    value = (opts.dir == 'x')?layer.height():layer.width();
                    _displacement -= value;
                }
                css = {};
                if(opts.dir == 'x'){
                    css.top = _displacement;
                }else{
                    css.left = _displacement;
                }
                $(_parent).children().animate(css, opts.delay);
            }
        };
        
        settings = {};
        settings = $.extend({},
            defaults,
            ($.metadata? $(this).metadata():($.meta?$(this).data():null)) || {},
            options || {}
        );
        
        return this.each(function(){
            functions.slideg(settings, this);
        });
        return this;
    };
})(jQuery);