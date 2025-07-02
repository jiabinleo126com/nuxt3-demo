var changeFlag = true;
(function ($) {
  var S = "", T = "";
  function getStr(_this, flag) {
    if (S && T) {
      return _this.each(function () {
        tranElement(this, flag);
      });
    } else {
      $.ajax({
        url: "/indexPhp/index.php?m=content&c=ajax&a=wenzi",
        type: "POST",
        data: {
          type: 's2hk',
          html: $("html").html(),
          do: "wzqh"
        },
        dataType: "json",
        success: function (res) {
          if (res && res.list1 && res.list2) {
            S = new String(res.list1);
            T = new String(res.list2);
          } else {
            S = new String("");
            T = new String("");
          }
          return _this.each(function () {
            tranElement(this, flag);
          });
        }
      });
    }
  }
  function tranStr(str, toT) {
    var i;
    var letter;
    var code;
    var isChinese;
    var index;
    var src, des;
    var result = '';

    if (toT) {
      src = S;
      des = T;
    } else {
      src = T;
      des = S;
    }

    if (typeof str !== "string") {
      return str;
    }

    for (i = 0; i < str.length; i++) {
      letter = str.charAt(i);
      code = str.charCodeAt(i);
      isChinese = (code > 0x3400 && code < 0x9FC3) || (code > 0xF900 && code < 0xFA6A);

      if (!isChinese) {
        result += letter;
        continue;
      }

      index = src.indexOf(letter);

      if (index !== -1) {
        result += des.charAt(index);
      } else {
        result += letter;
      }
    }

    return result;
  }
  function tranAttr(element, attr, toT) {
    var i, attrValue;

    if (attr instanceof Array) {
      for (i = 0; i < attr.length; i++) {
        tranAttr(element, attr[i], toT);
      }
    } else {
      attrValue = element.getAttribute(attr);

      if (attrValue !== "" && attrValue !== null) {
        element.setAttribute(attr, tranStr(attrValue, toT));
      }
    }
  }
  function tranElement(element, toT) {
    var i;
    var childNodes;

    if (element.nodeType !== 1) {
      return;
    }

    childNodes = element.childNodes;

    for (i = 0; i < childNodes.length; i++) {
      var childNode = childNodes.item(i);
      if (childNode.nodeType === 1) {
        if ("|BR|HR|SCRIPT|EMBED|".indexOf("|" + childNode.tagName + "|") !== -1) {
          continue;
        }

        tranAttr(childNode, ['title', 'data-original-title', 'alt', 'placeholder'], toT);
        if (childNode.tagName === "INPUT"
          && childNode.value !== ""
          && childNode.type !== "text"
          && childNode.type !== "hidden") {
          childNode.value = tranStr(childNode.value, toT);
        }
        tranElement(childNode, toT);
      } else if (childNode.nodeType === 3) {
        childNode.data = tranStr(childNode.data, toT);
      }
    }
    $(".s2hk").text(toT ? "简体" : "繁體");
    setTimeout(() => {
      changeFlag = true;
    }, 300);
  }
  $.extend({
    s2t: function (str) {
      return tranStr(str, true);
    },
    t2s: function (str) {
      return tranStr(str, false);
    }
  });
  $.fn.extend({
    s2t1: function () {
      return getStr(this, true)
    },
    t2s1: function () {
      return getStr(this, false)
    }
  });
})(jQuery);
$(function () {

  var localStorageSet = function (name, data, expireTime) {
    if (expireTime === void 0) { expireTime = new Date().getTime() + 2 * 24 * 60 * 60 * 1000; }
    var obj = {
      data: data,
      expireTime: expireTime
    };
    localStorage.setItem(name, JSON.stringify(obj));
  };
  var localStorageGet = function (name) {
    var storage = localStorage.getItem(name);
    var time = new Date().getTime();
    var result = {};
    if (storage) {
      var obj = JSON.parse(storage);
      if (time < obj.expireTime) {
        result = obj.data;
      }
      else {
        localStorage.removeItem(name);
      }
    }
    return result;
  };
  var jian = 1;
  if (+localStorageGet("jtf")) {
    jian = +localStorageGet("jtf");
    jtf();
  }
  $(document).on("click", ".s2hk", function () {
    if (changeFlag) {
      changeFlag = false;
      if (jian == 1) {
        jian = 2;
      }
      else if (jian == 2) {
        jian = 1;
      }
      jtf();
    }
    return false;
  });
  function jtf() {
    if (jian == 1) {
      $('html').t2s1();
    }
    else if (jian == 2) {
      $('html').s2t1();
    }
    localStorageSet('jtf', jian);
  }
})