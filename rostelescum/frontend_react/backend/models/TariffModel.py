import inspect

from django.contrib import admin
from django.db import models


class TariffModel(models.Model):

    class Article(admin.ModelAdmin):
        list_display = ['title', 'price', 'published']
        ordering = ['title']

    class Meta:
        verbose_name_plural = "Тарифы"
        verbose_name = "Тарифы"

    def __str__(self):
        members = inspect.getmembers(self)
        columns: dict = dict(members)["__dict__"]
        columns_copy = columns.copy()
        for column in columns:
            if str(column).startswith("_"):
                columns_copy.pop(column)
        return self.__class__.__name__ + "(" + ", ".join(
            [column + "=" + str(columns_copy.get(column)) for column in columns_copy]) + ")"

    title = models.TextField(verbose_name="Название тарифа")
    price = models.IntegerField(verbose_name="Стоимость тарифа")
    published = models.BooleanField(default=False)
