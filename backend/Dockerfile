FROM python:3.11
                                       
WORKDIR /app                                               

RUN pip install gunicorn==23.0.0 
                      
COPY requirements.txt .
                             
RUN pip install -r requirements.txt --no-cache-dir
                                             
COPY . .

CMD ["gunicorn", "--bind", "0.0.0.0:9000", "kittygram_backend.wsgi"]