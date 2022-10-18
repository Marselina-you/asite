import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify"; //Сообщения (подсказки)
import browsersync from "browser-sync"; // Локальный сервер
import ifPlugin from 'gulp-if' // Условное ветление

// Экспортируем объект
export const plugins = {
    replace: replace,
    plumber: plumber, 
    notify: notify,
    browsersync: browsersync,
    if: ifPlugin
  
}