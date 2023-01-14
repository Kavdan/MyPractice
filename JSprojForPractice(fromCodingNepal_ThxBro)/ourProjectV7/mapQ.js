let myPlacemarks = [];
let coordinate;
let toggleMar = false;
let ch = true;
let mp;
let menuContent =
  '<div id="menu">\
<ul id="menu_list">\
    <li>Фото: <br /> <input type="file" class="file" /> </li>\
    <li>Название: <br /> <input type="text" name="icon_text" class="df" /></li>\
    <li>Описание: <br /> <input type="text" name="hint_text" class="pf"/></li>\
</ul>\
<div align="center"><input type="submit" value="Сохранить" /></div>\
</div>';

ymaps.ready(init);
let place;
function init() {
  // Создаем карту.
  const myMap = new ymaps.Map(
    "map",
    {
      center: [43.3084315603529, 45.70221508789054],
      zoom: 9,
      controls: checkCh(),
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
    console.log(myMap);
  let control = myMap.controls.get("routePanelControl");

  updatePlacemarkState();
  // Зададим состояние панели для построения машрутов.
  function updatePanel(m) {
    if (ch) {
      control.routePanel.state.set({
        // Тип маршрутизации.
        type: "masstransit",
        // Выключим возможность задавать пункт отправления в поле ввода.
        // Включим возможность задавать пункт назначения в поле ввода.
        fromEnabled: toggleMar,
        toEnabled: false,
        to: coordinate,
        // Адрес или координаты пункта назначения.
        //to: 'Петербург'
      });
    } else {
      delete myMap.controls;
    }
  }
  updatePanel();

  function createPlacemark(coords) {
    return new ymaps.Placemark(
      coords,
      {
        name: "",
        discribe: "",
        likes: 1,
      },
      {
        markActive: true,
        preset: "islands#redStretchyIcon",
      }
    );
  }

  // Создаем метку.
  //   var myPlacemark = createPlacemark([43.3084315603529, 45.70221508789054]);
  myMap.events.add("click", function (e) {
    if (ch) {
      var coords = e.get("coords");
      let myPlacemark = createPlacemark(coords);
      myPlacemarks.push({
        id: myPlacemarks.length - 1,
        mark: myPlacemark,
        coordinates: coords,
        solved: false,
      });
      bindBallon(myPlacemark);
      bindMark(myPlacemark);
      myMap.geoObjects.add(myPlacemark);
    }
  });

  function bindMark(myPlacemark) {
    myPlacemark.events.add("click", function (e) { 
      backLikes(myPlacemark);
      toggleMar = true;
      var coords = e.get("coords");
      coordinate = coords;
      changeMarkDiscribe(myPlacemark);
      updatePanel(myPlacemark);
    });
  }

  function changeForm(myPlacemark) {
    $('#menu input[name="icon_text"]').val(
      myPlacemark.properties.get("name")
    );
    $('#menu input[name="hint_text"]').val(
      myPlacemark.properties.get("discribe")
    );
  }

  function changeMarkDiscribe (myPlacemark) {
    if (myPlacemark){
      document.querySelector('.headLine').innerHTML = myPlacemark.properties.get("name") ? myPlacemark.properties.get("name") : "HeadLine";
      document.querySelector('.dMark').innerHTML = myPlacemark.properties.get("discribe") ? myPlacemark.properties.get("discribe") : "Discribe";
      document.querySelector('.count').innerHTML = myPlacemark.properties.get("likes");
    }
  }

  function bindBallon(myPlacemark) {
    myPlacemark.events.add("contextmenu", function (e) {
      // Если меню метки уже отображено, то убираем его.
      if ($("#menu").css("display") == "block") {
        $("#menu").remove();
      } else {
        // Размещаем контекстное меню на странице
        $("body").append(menuContent);

        // Задаем позицию меню.
        $("#menu").css({
          left: e.get("pagePixels")[0],
          top: e.get("pagePixels")[1],
        });

        // Заполняем поля контекстного меню текущими значениями свойств метки.
        
        changeForm(myPlacemark);

        // При нажатии на кнопку "Сохранить" изменяем свойства метки
        // значениями, введенными в форме контекстного меню.
        $('#menu input[type="submit"]').click(function () {
          myPlacemark.properties.set({
            name: $('input[name="icon_text"]').val(),
            discribe: $('input[name="hint_text"]').val(),
          });
          // Удаляем контекстное меню.
          $("#menu").remove();
        });
        if (!myPlacemark.options._options.markActive) $("#menu").remove();
      }
    });
  }

  // Контекстное меню, позволяющее изменить параметры метки.
  // Вызывается при нажатии правой кнопкой мыши на метке.
}

function changeM() {
  if (ch) {
    document.querySelector("#map").remove();
    let map = document.createElement("div");
    map.id = "map";
    map.style = "width: 80%; height: 85vh;";
    document.querySelector(".wrapper").appendChild(map);
    document.querySelector(".count").classList.add("countDisabled");
    ch = false;
    init();
  }
}

function checkCh() {
  if (ch) {
    return ["routePanelControl"];
  } else {
    return null;
  }
}

function changeRate (q) {
  let r = mp.properties._data.likes;
  if (!document.querySelector('.raiting .count').classList.contains('countDisabled')){
    r++;
    document.querySelector('.redgrad').style = "width:" + (r / document.querySelector('.grad').clientWidth * 1000) + '% ;';
    document.querySelector('.raiting .count').innerHTML = r;
  }
}

function backLikes (myPlacemark){
  mp = myPlacemark;
}
function likeCount () {
  if (mp && mp.options._options.markActive) mp.properties._data.likes++;
  document.querySelector('.count').innerHTML = mp.properties.get("likes");
  changeRate(mp);
}

function changeActivity() {
   if (mp){
    mp.options._options.markActive = false;
    updatePlacemarkState();
   }
}

function updatePlacemarkState() {
    myPlacemarks.forEach((placemark) => {
      myMap.geoObjects.add(placemark.mark);
    });
}
// function from(id) {
//   if (ch) {
//     toggleMar = true;
//     for (let i = 0; i < placemarkers.length; i++) {
//       if (id == placemarkers[i].id) {
//         coordinate = placemarkers[i].coordinates;
//         break;
//       }
//     }
//     document.querySelector("#map").remove();
//     let map = document.createElement("div");
//     map.id = "map";
//     map.style = "width: 80%; height: 85vh;";
//     document.querySelector(".wrapper").prepend(map);
//     init();
//   } else {toggleMar = false;}
// }
