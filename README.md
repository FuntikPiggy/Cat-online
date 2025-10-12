<a name="Start-point"></a>
[![Main Kittygram workflow](https://github.com/FuntikPiggy/kittygram_final/actions/workflows/main.yml/badge.svg?branch=main&event=push)](https://github.com/FuntikPiggy/kittygram_final/actions/workflows/main.yml)
# Кот-в-сети<img align="right" width="56" height="56" alt="Cat_online__icon" src="https://github.com/user-attachments/assets/2d6ddaa9-d3e6-49d5-87b2-fc469ea2d891" />


* [О проекте.](#anchor-about)<br/>
* [Как запустить проект.](#How-to-run)<br/>

<a name="anchor-about"></a>
## О проекте

### Описание проекта
"Кот в сети" — это сервис, который сделает из ваших питомцев настоящих звёзд всемирной сети!
Это полностью рабочий проект, который состоит из бэкенд-приложения на
Django и фронтенд-приложения на React.

***
<img height="350" alt="Cat_online__02" src="https://github.com/user-attachments/assets/2aa67093-38e8-431f-8b9f-67df233d2a89" />
<img height="350" alt="Cat_online__01" src="https://github.com/user-attachments/assets/0bdb9273-1841-4e13-9cc4-e919fbcbed2f" />

***


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
