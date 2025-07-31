[![Main Kittygram workflow](https://github.com/FuntikPiggy/kittygram_final/actions/workflows/main.yml/badge.svg?branch=main&event=push)](https://github.com/FuntikPiggy/kittygram_final/actions/workflows/main.yml)

# KittyGram

[О проекте.](#anchor-about)<br/>
[Как запустить проект.](#How-to-run)<br/>
<br/>

<a name="anchor-about"></a>
## О проекте

### Описание проекта
Kittygram — социальная сеть для обмена фотографиями любимых питомцев.
Это полностью рабочий проект, который состоит из бэкенд-приложения на
Django и фронтенд-приложения на React.

Авторы проекта:

Гурин Валерий - (GitHub - [FuntikPiggy](https://github.com/FuntikPiggy))
А так же неизвестные авторы, но тоже молодцы...


### Технические подробности
Бэкэнд проекта написан на базе фреймворка [Django](https://docs.djangoproject.com/en/5.2/)
и библиотеки [djangoRESTframework](https://www.django-rest-framework.org/)
на языке программирования [Python](https://www.python.org/).
Фронтенд проекта написан на языке программирования [JavaScript](https://nodejs.org/en)
с помощью библиотеки [React](https://react.dev/).
WSGI-сервер - [Gunicorn](https://gunicorn.org/).
Веб-сервер - [Nginx](https://nginx.org/ru/).
Пример заполнения переменных среды - см. файл **.env.example** (в репозитории).


<a name="How-to-run"></a>
## Как запустить проект:

Клонировать репозиторий и перейти в него в командной строке:

```
git clone https://github.com/FuntikPiggy/kittygram_final.git

cd kittygram_final
```

Cоздать и активировать виртуальное окружение:

```
python3 -m venv .venv
```

* Если у вас Linux/macOS

```
source .venv/bin/activate
```

* Если у вас windows

```
source .venv/scripts/activate
```

```
python3 -m pip install --upgrade pip
```

Установить зависимости из файла requirements.txt:

```
pip install -r requirements.txt
```

Выполнить миграции:

```
python3 manage.py migrate
```

Запустить проект:

```
python3 manage.py runserver
```

<a name="Examples"></a>
