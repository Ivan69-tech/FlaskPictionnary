
FROM python:3.10-slim


COPY requirements.txt .
RUN python -m pip install -r requirements.txt

WORKDIR /app
COPY . /app

EXPOSE 5000

CMD ["python", "main.py"]
