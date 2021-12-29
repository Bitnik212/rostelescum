from django.contrib import admin

from .backend.models import Models

for model in Models:
    admin.site.register(model.value, model.value.Article)

