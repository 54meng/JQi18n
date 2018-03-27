/**
 * Created by wuweiyuan on 2018/01/16.
 * JS自定义代码以及第三方组件国际化
 * 使用$.i18n.prop('key'),
 * 
 */
$(function () {
	//是否存在语言项
    if (!localStorage.currentLang) {
        //本地存储当前选中语言
        localStorage.currentLang = $('#lang option:selected').val();
    } else {
        //定义当前语言
        var currLang = localStorage.currentLang;
        $("#lang option[value=" + currLang + "]").attr("selected", true);
        $("#lang").on('change', function () {
            //存储当前选中的语言
            localStorage.currentLang = $(this).children('option:selected').val();
            //刷新  单页面可以注释
            location.reload();
            loadProperties(localStorage.currentLang);
        });
    }
    loadProperties(localStorage.currentLang)
});

function loadProperties(currentLang) {
    switch (currentLang) {
        case 'en':
            langi18n = 'en';
            break;
        case 'zh':
            langi18n = 'zh';
            break;
        default:
            langi18n = 'zh';
    }
    jQuery.i18n.properties({ //加载资浏览器语言对应的资源文件
        name: 'strings', //属性文件名     命名格式： 文件名_国家代号.properties
        path: './i18n/', //注意这里路径是你属性文件的所在文件夹
        mode: 'map', //用Map的方式使用资源文件中的值
        language: langi18n, //国家代号 name+language刚好组成属性文件名：strings+zh -> strings_zh.properties
        //删除则自动选择浏览器语言
        callback: function () {
        	//HTML普通标签
            $('[data-i18n]').each(function () {
                $(this).html($.i18n.prop($(this).data("i18n")));
            });
            //特殊标签 placeholder
            $('[data-i18n-placeholder]').each(function () {
                $(this).attr('placeholder', $.i18n.prop($(this).data('i18n-placeholder')));
            });
            //特殊标签 title
            $('[data-i18n-title]').each(function () {
                $(this).attr('title', $.i18n.prop($(this).data('i18n-title')));
            });
        }

        
    });
}
