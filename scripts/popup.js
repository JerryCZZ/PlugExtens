<form name="menuform">
<select name="menu1">
<option value="http://jerryczz.github.io/PlugExtens/ttest.html" selected>Seznam smajliku</option>
<option value="http://plug.wz.cz/ ">WEB roomky</option>
<option value="http://support.plug.dj/hc/en-us">plug.dj podpora</option>
</select>
<input type="button" name="Submit" value="Začni" 
onClick="top.location.href = this.form.menu1.options[this.form.menu1.selectedIndex].value;
return false;">
</form>

