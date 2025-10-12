<a name="Start-point"></a>
[![Main Kittygram workflow](https://github.com/FuntikPiggy/kittygram_final/actions/workflows/main.yml/badge.svg?branch=main&event=push)](https://github.com/FuntikPiggy/kittygram_final/actions/workflows/main.yml)
# Кот-в-сети<img align="right" width="48" height="48" alt="KittyGram__icon" src="https://github.com/user-attachments/assets/abe9f7da-efa9-41ac-94cf-2bd6e73316f1" />


* [О проекте.](#anchor-about)<br/>
* [Как запустить проект.](#How-to-run)<br/>

<a name="anchor-about"></a>
## О проекте

### Описание проекта
Kittygram — социальная сеть для обмена фотографиями любимых питомцев.
Это полностью рабочий проект, который состоит из бэкенд-приложения на
Django и фронтенд-приложения на React.

<img width="400" height="300" alt="KittyGram__02" src="https://github.com/user-attachments/assets/06c0d9cd-9df0-4fb1-a041-79d8f374b1fc" />
<img width="400" height="300" alt="KittyGram__01" src="https://github.com/user-attachments/assets/f73b4bea-d06a-4715-8efa-a4146fd6c8a4" />



Авторы проекта:

Гурин Валерий - ([GitHub](https://github.com/FuntikPiggy), [Telegram](https://t.me/CallSign_Yakuza))


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

<p align="right"><a href="#Start-point">Вернуться к началу</a></p>
