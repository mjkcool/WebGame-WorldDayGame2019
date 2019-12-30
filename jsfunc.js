
    function traverseChildren(elem) {
      var children = [];
      var q = [];
      q.push(elem);
      while (q.length > 0) {
        var elem = q.pop();
        children.push(elem);
        pushAll(elem.children);
      }

      function pushAll(elemArray) {
        for (var i = 0; i < elemArray.length; i++) {
          q.push(elemArray[i]);
        }
      }
      return children;
    }

    //마우스 아웃 핸들러
    function makeMouseOutFn(elem) {
      var list = traverseChildren(elem);
      //이벤트 버블링을 막아주는 부분 - 이벤트 캡쳐링  부분
      return function onMouseOut(event) {
        var e = event.toElement || event.relatedTarget;
        if (!!~list.indexOf(e)) {
          return;
        }
        // handle mouse event here!
        over()
      };
    }


    function myinit() {
      //using closure to cache all child elements
      var parent = document.getElementById("gamediv");
      parent.addEventListener('mouseout', makeMouseOutFn(parent), true); //true는 이벤트캡쳐링(버블링을 막는다)
    }


    function myFunction1() {
      var element = document.getElementById("actDiv1");
      element.classList.toggle("mystyle");
      point++;
    }

    function myFunction2() {
      var element = document.getElementById("actDiv2");
      element.classList.toggle("mystyle");
      point++;
    }

    function myFunction3() {
      var element = document.getElementById("actDiv3");
      element.classList.toggle("mystyle");
      point++;
    }

    function myFunction4() {
      var element = document.getElementById("actDiv4");
      element.classList.toggle("mystyle");
      point++;
    }

    function myFunction5() {
      var element = document.getElementById("actDiv5");
      element.classList.toggle("mystyle");
      point++;
    }

    function myFunction6() {
      var element = document.getElementById("actDiv6");
      element.classList.toggle("mystyle");
      point++;
    }

    function myFunction7() {
      var element = document.getElementById("actDiv7");
      element.classList.toggle("mystyle");
      point++;
    }

    function myFunction8() {
      var element = document.getElementById("actDiv8");
      element.classList.toggle("mystyle");
      point++;
    }

    function goindex() {
      top.location.href = 'index.html'
    }
