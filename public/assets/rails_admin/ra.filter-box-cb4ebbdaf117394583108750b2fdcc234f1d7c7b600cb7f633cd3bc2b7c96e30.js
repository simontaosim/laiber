!function(t){var e;t.filters=e={options:{regional:{datePicker:{dateFormat:"mm/dd/yy"}}},append:function(e,i,n,o,s,r,a){var l="f["+i+"]["+a+"][v]",c="f["+i+"]["+a+"][o]";switch(n){case"boolean":var u='<select class="input-small" name="'+l+'"><option value="_discard">...</option><option value="true"'+("true"==o?'selected="selected"':"")+">"+RailsAdmin.I18n.t("true")+'</option><option value="false"'+("false"==o?'selected="selected"':"")+">"+RailsAdmin.I18n.t("false")+'</option><option disabled="disabled">---------</option><option '+("_present"==o?'selected="selected"':"")+' value="_present">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_blank"==o?'selected="selected"':"")+' value="_blank"  >'+RailsAdmin.I18n.t("is_blank")+"</option></select>";break;case"date":case"datetime":case"timestamp":var u='<select class="switch-additionnal-fieldsets input-small" name="'+c+'"><option '+("default"==s?'selected="selected"':"")+' data-additional-fieldset="default" value="default">'+RailsAdmin.I18n.t("date")+"</option><option "+("between"==s?'selected="selected"':"")+' data-additional-fieldset="between" value="between">'+RailsAdmin.I18n.t("between_and_")+"</option><option "+("today"==s?'selected="selected"':"")+' value="today">'+RailsAdmin.I18n.t("today")+"</option><option "+("yesterday"==s?'selected="selected"':"")+' value="yesterday">'+RailsAdmin.I18n.t("yesterday")+"</option><option "+("this_week"==s?'selected="selected"':"")+' value="this_week">'+RailsAdmin.I18n.t("this_week")+"</option><option "+("last_week"==s?'selected="selected"':"")+' value="last_week">'+RailsAdmin.I18n.t("last_week")+'</option><option disabled="disabled">---------</option><option '+("_not_null"==s?'selected="selected"':"")+' value="_not_null">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_null"==s?'selected="selected"':"")+' value="_null" >'+RailsAdmin.I18n.t("is_blank")+"</option></select>",d='<input class="date additional-fieldset default input-small" style="display:'+(s&&"default"!=s?"none":"inline-block")+';" type="text" name="'+l+'[]" value="'+(o[0]||"")+'" /> <input placeholder="-\u221e" class="date additional-fieldset between input-small" style="display:'+("between"==s?"inline-block":"none")+';" type="text" name="'+l+'[]" value="'+(o[1]||"")+'" /> <input placeholder="\u221e" class="date additional-fieldset between input-small" style="display:'+("between"==s?"inline-block":"none")+';" type="text" name="'+l+'[]" value="'+(o[2]||"")+'" />';break;case"enum":var h=o instanceof Array?!0:!1,u='<select style="display:'+(h?"none":"inline-block")+'" '+(h?"":'name="'+l+'"')+' data-name="'+l+'" class="select-single input-small"><option value="_discard">...</option><option '+("_present"==o?'selected="selected"':"")+' value="_present">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_blank"==o?'selected="selected"':"")+' value="_blank">'+RailsAdmin.I18n.t("is_blank")+'</option><option disabled="disabled">---------</option>'+r+'</select><select multiple="multiple" style="display:'+(h?"inline-block":"none")+'" '+(h?'name="'+l+'[]"':"")+' data-name="'+l+'[]" class="select-multiple input-small">'+r+'</select> <a href="#" class="switch-select"><i class="icon-'+(h?"minus":"plus")+'"></i></a>';break;case"string":case"text":case"belongs_to_association":var u='<select class="switch-additionnal-fieldsets input-small" value="'+s+'" name="'+c+'"><option data-additional-fieldset="additional-fieldset"'+("like"==s?'selected="selected"':"")+' value="like">'+RailsAdmin.I18n.t("contains")+'</option><option data-additional-fieldset="additional-fieldset"'+("is"==s?'selected="selected"':"")+' value="is">'+RailsAdmin.I18n.t("is_exactly")+'</option><option data-additional-fieldset="additional-fieldset"'+("starts_with"==s?'selected="selected"':"")+' value="starts_with">'+RailsAdmin.I18n.t("starts_with")+'</option><option data-additional-fieldset="additional-fieldset"'+("ends_with"==s?'selected="selected"':"")+' value="ends_with">'+RailsAdmin.I18n.t("ends_with")+'</option><option disabled="disabled">---------</option><option '+("_not_null"==s?'selected="selected"':"")+' value="_not_null">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_null"==s?'selected="selected"':"")+' value="_null">'+RailsAdmin.I18n.t("is_blank")+"</option></select>",d='<input class="additional-fieldset input-small" style="display:'+("_blank"==s||"_present"==s?"none":"inline-block")+';" type="text" name="'+l+'" value="'+o+'" /> ';break;case"integer":case"decimal":case"float":var u='<select class="switch-additionnal-fieldsets input-small" name="'+c+'"><option '+("default"==s?'selected="selected"':"")+' data-additional-fieldset="default" value="default">'+RailsAdmin.I18n.t("number")+"</option><option "+("between"==s?'selected="selected"':"")+' data-additional-fieldset="between" value="between">'+RailsAdmin.I18n.t("between_and_")+'</option><option disabled="disabled">---------</option><option '+("_not_null"==s?'selected="selected"':"")+' value="_not_null">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_null"==s?'selected="selected"':"")+' value="_null" >'+RailsAdmin.I18n.t("is_blank")+"</option></select>",d='<input class="additional-fieldset default input-small" style="display:'+(s&&"default"!=s?"none":"inline-block")+';" type="'+n+'" name="'+l+'[]" value="'+(o[0]||"")+'" /> <input placeholder="-\u221e" class="additional-fieldset between input-small" style="display:'+("between"==s?"inline-block":"none")+';" type="'+n+'" name="'+l+'[]" value="'+(o[1]||"")+'" /> <input placeholder="\u221e" class="additional-fieldset between input-small" style="display:'+("between"==s?"inline-block":"none")+';" type="'+n+'" name="'+l+'[]" value="'+(o[2]||"")+'" />';break;default:var u='<input type="text" class="input-small" name="'+l+'" value="'+o+'"/> '}var p='<p class="filter form-search"><span class="label label-info form-label"><a href="#" class="delete"><i class="icon-trash icon-white"></i></a> '+e+"</span> "+u+" "+(d||"")+"</p> ";t("#filters_box").append(p),t("#filters_box .date").datepicker(this.options.regional.datePicker),t("hr.filters_box:hidden").show("slow")}},t(document).on("click","#filters a",function(e){e.preventDefault(),t.filters.append(t(this).data("field-label"),t(this).data("field-name"),t(this).data("field-type"),t(this).data("field-value"),t(this).data("field-operator"),t(this).data("field-options"),t.now().toString().slice(6,11))}),t(document).on("click","#filters_box .delete",function(e){e.preventDefault(),form=t(this).parents("form"),t(this).parents(".filter").remove(),!t("#filters_box").children().length&&t("hr.filters_box:visible").hide("slow")}),t(document).on("click","#filters_box .switch-select",function(e){e.preventDefault();var i=t(this).siblings("select:visible"),n=t(this).siblings("select:hidden");n.attr("name",n.data("name")).show("slow"),i.attr("name",null).hide("slow"),t(this).find("i").toggleClass("icon-plus icon-minus")}),t(document).on("change","#filters_box .switch-additionnal-fieldsets",function(){var e=t(this).find("option:selected");(klass=t(e).data("additional-fieldset"))?(t(this).siblings(".additional-fieldset:not(."+klass+")").hide("slow"),t(this).siblings("."+klass).show("slow")):t(this).siblings(".additional-fieldset").hide("slow")})}(jQuery);