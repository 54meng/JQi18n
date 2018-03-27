基于JQ开发的前端国际化
===========================
### JQuery.i18n.properties是一款轻量级的jQuery国际化插件，能实现Web前端的国际化。 
### 国际化英文单词为：Internationalization
### 又称i18n，“i”为单词的第一个字母，“18”为“i”和“n”之间单词的个数，而“n”代表这个单词的最后一个字母。
### jQuery.i18n.properties采用.properties文件对JavaScript进行国际化。
### jQuery.i18n.properties插件首先加载默认的资源文件（strings.properties）
### 然后加载针对特定语言环境的资源文件（strings_zh.properties）
### 这就保证了在未提供某种语言的翻译时，默认值始终有效。
### 实现切换语言
	<select id="lang" class=" form-control">
		<option value="zh">中文</option>
		<option value="en">English</option>
	</select>
### 采用localStorage存储语言
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
        });
    }
    langString(localStorage.currentLang)
});


### 使用
    <label data-i18n="username">用户名</label><input type="text">
### JS数据翻译使用
    $.i18n.prop('key')
